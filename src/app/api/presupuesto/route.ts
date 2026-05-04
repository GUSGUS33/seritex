import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/brevo';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.email) {
      return NextResponse.json({ error: 'Email es obligatorio' }, { status: 400 });
    }

    // Honeypot check for spam
    if (body._honey) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 1. Guardar en Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase.from('quotes').insert({
      email: body.email,
      phone: body.telefono || null,
      garment_type: body.prenda || null,
      quantity: body.cantidad ? parseInt(body.cantidad, 10) : null,
      technique: body.tecnica || null,
      own_garments: body.materialPropio || false,
      is_recurring: body.recurrente || false,
      details: body.detalles || null,
    });

    if (dbError) {
      console.error('Error guardando en Supabase:', dbError);
      // No bloqueamos el envío del email si falla la BD, pero lo registramos
    }

    // 2. Enviar email por Brevo
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!process.env.BREVO_API_KEY || !contactEmail) {
      console.warn('Brevo no configurado (falta BREVO_API_KEY o CONTACT_EMAIL) — simulando envío');
      console.log('Datos recibidos:', body);
      return NextResponse.json({ success: true, simulated: true }, { status: 200 });
    }

    // Construir el contenido del email en HTML
    const htmlContent = `
      <h2>Nueva Solicitud de Presupuesto</h2>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Teléfono:</strong> ${body.telefono || 'No proporcionado'}</p>
      <p><strong>Prenda:</strong> ${body.prenda || 'No especificada'}</p>
      <p><strong>Cantidad:</strong> ${body.cantidad || 'No especificada'}</p>
      <p><strong>Técnica:</strong> ${body.tecnica || 'No especificada'}</p>
      <p><strong>Material Propio:</strong> ${body.materialPropio ? 'Sí' : 'No'}</p>
      <p><strong>Pedido Recurrente:</strong> ${body.recurrente ? 'Sí' : 'No'}</p>
      <p><strong>Cómo nos conoció:</strong> ${body.comoNosConociste || 'No especificado'}</p>
      <br/>
      <h3>Detalles del Proyecto:</h3>
      <p>${body.detalles ? body.detalles.replace(/\n/g, '<br/>') : 'Sin detalles'}</p>
    `;

    const result = await sendEmail({
      to: [{ email: contactEmail, name: 'Equipo Serigrafía Textil' }],
      subject: `Nuevo Presupuesto Web - ${body.prenda || 'General'}`,
      htmlContent,
      replyTo: { email: body.email }
    });

    if (!result.success) {
      throw new Error('Error enviando email con Brevo');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error procesando presupuesto:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

