'use client';

import { motion } from 'framer-motion';
import {
  Award,
  GraduationCap,
  Star,
  Clock,
  Phone,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Formación Profesional',
    description: 'Licenciada en Fisioterapia y Rehabilitación',
  },
  {
    icon: Award,
    title: 'Especializaciones',
    description: 'Terapia manual, rehabilitación deportiva, dolor crónico',
  },
  {
    icon: Star,
    title: 'Experiencia',
    description: 'Más de 5 años atendiendo pacientes en SJL',
  },
  {
    icon: Clock,
    title: 'Disponibilidad',
    description: 'Lunes a Sábado con horarios flexibles',
  },
];

const socialLinks = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@fisioayuda.oficial',
    icon: '🎵',
    followers: 'Síguenos',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/51999999999',
    icon: '💬',
    followers: 'Escríbenos',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="equipo" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
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
            Nuestro Equipo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Conoce a <span className="text-primary">Flor Rodríguez</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-text-light text-lg"
          >
            Profesional dedicada con pasión por ayudar a sus pacientes a
            recuperar su calidad de vida.
          </motion.p>
        </motion.div>

        {/* Team Member Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decorations */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-3xl" />

              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl"
              >
                {/* Placeholder for Flor's photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-xl">
                    <GraduationCap className="w-20 h-20 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-dark mb-2">
                    Flor Rodríguez
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Fisioterapeuta Profesional
                  </p>
                  <p className="text-text-light text-sm">
                    Foto profesional de Flor
                  </p>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg px-4 py-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs text-text-light">Años de exp.</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">
                Fisioterapeuta Apasionada
              </h3>
              <p className="text-text-light leading-relaxed mb-4">
                Flor Rodríguez es una fisioterapeuta comprometida con la salud y
                bienestar de sus pacientes. Con una formación sólida y
                actualizada, combina técnicas tradicionales con métodos
                innovadores para ofrecer tratamientos efectivos y
                personalizados.
              </p>
              <p className="text-text-light leading-relaxed">
                Su enfoque humano y profesional ha convertido a FisioAyuda en un
                referente de confianza en San Juan de Lurigancho. Se
                especializa en rehabilitación deportiva, terapia del dolor y
                atención geriátrica.
              </p>
            </div>

            {/* Qualifications Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={qual.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors"
                >
                  <qual.icon className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-text-dark text-sm mb-1">
                    {qual.title}
                  </h4>
                  <p className="text-xs text-text-light">{qual.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-text-dark mb-4">
                Conecta con Flor
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <div>
                      <div className="font-semibold text-text-dark text-sm">
                        {social.name}
                      </div>
                      <div className="text-xs text-text-light">
                        {social.followers}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-light" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-semibold text-text-dark mb-4">
                Información de contacto directo
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-light">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+51 999 999 999 (WhatsApp)</span>
                </div>
                <div className="flex items-center gap-3 text-text-light">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contacto@fisioayuda.pe</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
