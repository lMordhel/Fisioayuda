'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: 'Mz N lt 18 Saul Cantoral',
    subContent: 'San Juan de Lurigancho, Lima - Perú',
  },
  {
    icon: Phone,
    title: 'Teléfono / WhatsApp',
    content: '+51 999 999 999',
    subContent: 'Respuesta inmediata',
    href: 'https://wa.me/51999999999',
    isWhatsApp: true,
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contacto@fisioayuda.pe',
    subContent: 'Respondemos en 24 horas',
    href: 'mailto:contacto@fisioayuda.pe',
  },
  {
    icon: Clock,
    title: 'Horario de Atención',
    content: 'Lunes a Sábado: 9:00 AM - 7:00 PM',
    subContent: 'Domingo: Cerrado',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const whatsappNumber = '51999999999';
  const whatsappMessage = 'Hola FisioAyuda, vi su página web y me gustaría agendar una cita o hacer una consulta.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Contacto
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Agenda tu <span className="text-primary">cita</span> hoy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-text-light text-lg"
          >
            Estamos listos para ayudarte en tu recuperación. Contáctanos directamente
            por WhatsApp para una respuesta rápida y personalizada.
          </motion.p>
        </motion.div>

        {/* Main WhatsApp CTA - PROMINENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-green-500 via-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, type: 'spring' }}
                className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <MessageCircle className="w-10 h-10 text-green-500" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Prefieres contactarnos por WhatsApp?
              </h3>

              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Es la forma más rápida de comunicarte con nosotros.
                Flor te responderá personalmente para agendar tu cita o resolver tus dudas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Escríbenos por WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="tel:+51999999999"
                  className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-green-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/30 transition-all ${info.isWhatsApp ? 'ring-2 ring-green-500/20' : ''
                }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${info.isWhatsApp
                  ? 'bg-green-100'
                  : 'bg-gradient-to-br from-primary/10 to-accent/10'
                }`}>
                <info.icon className={`w-6 h-6 ${info.isWhatsApp ? 'text-green-600' : 'text-primary'}`} />
              </div>

              <h4 className="font-bold text-text-dark mb-2">{info.title}</h4>

              {info.href ? (
                <a
                  href={info.href}
                  className={`font-semibold block mb-1 transition-colors ${info.isWhatsApp ? 'text-green-600 hover:text-green-700' : 'text-text-dark hover:text-primary'
                    }`}
                >
                  {info.content}
                </a>
              ) : (
                <p className="font-semibold text-text-dark block mb-1">
                  {info.content}
                </p>
              )}

              <p className="text-sm text-text-light">{info.subContent}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
