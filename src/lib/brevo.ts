/**
 * Utilidad para enviar emails usando la API REST de Brevo (v3)
 * No requiere instalar dependencias adicionales, usa fetch nativo.
 */

interface SendEmailParams {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
}

export async function sendEmail({ to, subject, htmlContent, replyTo }: SendEmailParams) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'info@serigrafia-textil.es';
  const senderName = process.env.BREVO_SENDER_NAME || 'Serigrafía Textil';

  if (!apiKey) {
    throw new Error('Falta la variable de entorno BREVO_API_KEY');
  }

  const payload = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to,
    subject,
    htmlContent,
    ...(replyTo && { replyTo }),
  };

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error de Brevo:', errorData);
      throw new Error(`Error al enviar email: ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, messageId: data.messageId };
  } catch (error) {
    console.error('Excepción enviando email con Brevo:', error);
    return { success: false, error };
  }
}
