'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const faqs = [
  {
    question: '¿Qué debo traer a mi primera consulta?',
    answer:
      'Para tu primera visita, te recomendamos traer: documento de identidad, estudios previos relevantes (rayos X, resonancias, informes médicos), lista de medicamentos que tomas actualmente, y ropa cómoda que permita examinar la zona a tratar. También es útil que llegues 10 minutos antes para completar tu ficha de registro.',
  },
  {
    question: '¿Cuánto dura cada sesión de fisioterapia?',
    answer:
      'La duración de las sesiones varía según el tratamiento. Generalmente, una sesión estándar dura entre 45 minutos y 1 hora. Las evaluaciones iniciales pueden tomar hasta 1 hora y 15 minutos para realizar un diagnóstico completo y planificar tu tratamiento personalizado.',
  },
  {
    question: '¿Cuántas sesiones necesitaré?',
    answer:
      'El número de sesiones depende de varios factores: tipo de lesión, severidad, tiempo de evolución, y tu respuesta al tratamiento. Después de la evaluación inicial, te daremos un estimado personalizado. Generalmente, los pacientes notan mejoría entre 4-6 sesiones, aunque casos complejos pueden requerir tratamientos más prolongados.',
  },
  {
    question: '¿La fisioterapia duele?',
    answer:
      'La fisioterapia no debe ser dolorosa. Algunas técnicas pueden causar cierta incomodidad inicial, pero siempre trabajamos dentro de tus límites de tolerancia. Nuestro objetivo es aliviar el dolor, no aumentarlo. Si sientes dolor durante el tratamiento, es importante que nos lo comuniques para ajustar las técnicas.',
  },
  {
    question: '¿Aceptan seguros médicos?',
    answer:
      'Actualmente trabajamos con varios seguros médicos. Te recomendamos consultarnos directamente sobre tu aseguradora específica. También ofrecemos planes de pago flexibles y precios accesibles para que todos puedan acceder a nuestros servicios.',
  },
  {
    question: '¿Puedo hacer fisioterapia si estoy embarazada?',
    answer:
      'Sí, la fisioterapia es segura durante el embarazo y puede ser muy beneficiosa para aliviar dolores lumbares, mejorar la postura y preparar el cuerpo para el parto. Contamos con técnicas específicas adaptadas para embarazadas. Siempre consultaremos con tu médico obstetra antes de comenzar cualquier tratamiento.',
  },
  {
    question: '¿Ofrecen servicio a domicilio?',
    answer:
      'Sí, ofrecemos atención a domicilio para pacientes que tienen dificultades de movilidad o prefieren recibir el tratamiento en casa. Este servicio está disponible en zonas cercanas a nuestro local en SJL. Consulta disponibilidad y tarifas especiales.',
  },
  {
    question: '¿Cómo agendo una cita?',
    answer:
      'Puedes agendar tu cita de varias formas: a través de WhatsApp, llamando por teléfono, completando el formulario en nuestra web, o visitándonos directamente. Te recomendamos agendar con anticipación para asegurar tu horario preferido. También ofrecemos citas de emergencia según disponibilidad.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-primary/30 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-text-dark pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6">
              <p className="text-text-light leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Preguntas Frecuentes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            ¿Tienes <span className="text-primary">dudas</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-text-light text-lg"
          >
            Aquí respondemos las preguntas más comunes de nuestros pacientes.
            Si no encuentras tu respuesta, no dudes en contactarnos.
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10"
        >
          <h3 className="font-bold text-text-dark text-lg mb-2">
            ¿Tienes otras preguntas?
          </h3>
          <p className="text-text-light mb-6">
            Estamos aquí para ayudarte. Contáctanos y con gusto resolveremos tus
            dudas.
          </p>
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contáctanos
            <HelpCircle className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
