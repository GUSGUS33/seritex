import React from 'react';

export default function FaqSection() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <div className="label-mono mb-2">Dudas frecuentes</div>
          <h2>Preguntas frecuentes</h2>
        </div>

        <div className="bg-white border border-gray-mid rounded-xl p-6 md:p-10">
          <details className="faq-details" open>
            <summary className="faq-summary">
              ¿Cuál es el pedido mínimo para serigrafía textil?
              <span className="faq-icon"></span>
            </summary>
            <div className="faq-content">
              El pedido mínimo para serigrafía tradicional es de 10 unidades. Para pedidos más pequeños o desde 1 unidad, recomendamos nuestra técnica de impresión DTF o vinilo textil, que ofrecen resultados excelentes sin mínimos de producción.
            </div>
          </details>
          
          <details className="faq-details">
            <summary className="faq-summary">
              ¿Cuánto tardáis en entregar un pedido?
              <span className="faq-icon"></span>
            </summary>
            <div className="faq-content">
              Una vez confirmado el diseño y el presupuesto, nuestro plazo de producción y entrega habitual es de 7 a 10 días laborables. También disponemos de un servicio express para urgencias en menos de 72 horas.
            </div>
          </details>

          <details className="faq-details">
            <summary className="faq-summary">
              ¿Hacéis envíos a toda España?
              <span className="faq-icon"></span>
            </summary>
            <div className="faq-content">
              Sí, realizamos envíos a toda la Península y Baleares. Trabajamos con agencias de transporte urgente para garantizar que tu pedido llegue en perfectas condiciones y en el plazo acordado.
            </div>
          </details>

          <details className="faq-details" style={{ borderBottom: 'none' }}>
            <summary className="faq-summary">
              ¿Me ayudáis si no tengo el diseño en alta calidad?
              <span className="faq-icon"></span>
            </summary>
            <div className="faq-content">
              Por supuesto. Nuestro equipo de diseño revisará tus archivos antes de imprimir. Si tu logo o diseño no tiene la calidad suficiente, te avisaremos y te ofreceremos opciones para vectorizarlo o adaptarlo para que el resultado sea perfecto.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
