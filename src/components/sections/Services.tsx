'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  Bone,
  Brain,
  Heart,
  Baby,
  Accessibility,
  Zap,
  Users,
} from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: Activity,
    title: 'Rehabilitación Física',
    description:
      'Tratamiento especializado para recuperación de lesiones deportivas, post-operatorias y traumatológicas.',
    features: ['Terapia manual', 'Electroterapia', 'Ejercicio terapéutico'],
    color: 'from-blue-500 to-primary',
  },
  {
    icon: Bone,
    title: 'Fisioterapia Ortopédica',
    description:
      'Atención especializada para problemas de huesos, articulaciones y músculos.',
    features: ['Artrosis', 'Fracturas', 'Luxaciones', 'Tendinitis'],
    color: 'from-primary to-accent',
  },
  {
    icon: Brain,
    title: 'Fisioterapia Neurológica',
    description:
      'Rehabilitación para pacientes con afecciones del sistema nervioso central y periférico.',
    features: ['ACV', 'Parkinson', 'Parálisis cerebral', 'Neuropatías'],
    color: 'from-purple-500 to-primary',
  },
  {
    icon: Heart,
    title: 'Rehabilitación Cardiovascular',
    description:
      'Programas de ejercicio supervisado para mejorar la salud cardiovascular.',
    features: ['Post-infarto', 'Hipertensión', 'Insuficiencia cardíaca'],
    color: 'from-red-500 to-primary',
  },
  {
    icon: Baby,
    title: 'Fisioterapia Pediátrica',
    description:
      'Atención especializada para niños con problemas de desarrollo motriz.',
    features: ['Retraso psicomotor', 'Parálisis cerebral', 'Torticolis'],
    color: 'from-yellow-500 to-primary',
  },
  {
    icon: Accessibility,
    title: 'Terapia Geriátrica',
    description:
      'Cuidado especializado para adultos mayores, mejorando su movilidad y autonomía.',
    features: ['Caídas', 'Osteoporosis', 'Artrosis', 'Balance'],
    color: 'from-green-500 to-primary',
  },
  {
    icon: Zap,
    title: 'Terapia de Dolor',
    description:
      'Manejo integral del dolor crónico y agudo mediante técnicas especializadas.',
    features: ['Dolor lumbar', 'Cervicalgias', 'Dolor neuropático'],
    color: 'from-orange-500 to-primary',
  },
  {
    icon: Users,
    title: 'Terapia Deportiva',
    description:
      'Prevención y tratamiento de lesiones deportivas para atletas de todos los niveles.',
    features: ['Esguinces', 'Desgarros', 'Tendinopatías', 'Vuelta al deporte'],
    color: 'from-pink-500 to-primary',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="servicios"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

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
            Nuestros Servicios
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Soluciones integrales para tu{' '}
            <span className="text-primary">salud física</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-text-light text-lg"
          >
            Ofrecemos una amplia gama de servicios de fisioterapia, cada uno
            diseñado para abordar tus necesidades específicas con profesionalismo
            y dedicación.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative font-bold text-text-dark text-lg mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="relative text-text-light text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="relative space-y-1">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-text-light flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-6">
            ¿No estás seguro de qué servicio necesitas?
          </p>
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Consulta gratuita
            <Activity className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
