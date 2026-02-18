'use client';

import { motion } from 'framer-motion';
import { MapPin, Maximize2 } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const facilities = [
  {
    id: 1,
    title: 'Sala de Terapia Principal',
    description: 'Espacio equipado con camillas profesionales y equipos modernos',
    size: 'large',
  },
  {
    id: 2,
    title: 'Área de Electroterapia',
    description: 'Equipos de última generación para tratamientos específicos',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Sala de Ejercicios',
    description: 'Espacio para ejercicios terapéuticos y rehabilitación',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Recepción',
    description: 'Ambiente acogedor para recibir a nuestros pacientes',
    size: 'small',
  },
  {
    id: 5,
    title: 'Sala de Evaluación',
    description: 'Espacio privado para consultas y evaluaciones iniciales',
    size: 'small',
  },
  {
    id: 6,
    title: 'Vestuarios',
    description: 'Instalaciones limpias y cómodas para los pacientes',
    size: 'small',
  },
];

const features = [
  'Equipos profesionales de fisioterapia',
  'Ambiente limpio y acogedor',
  'Espacios amplios y ventilados',
  'Accesibilidad para todos',
  'Estacionamiento disponible',
  'Zona residencial tranquila',
];

export default function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="instalaciones"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent" />

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
            Nuestras Instalaciones
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Un espacio diseñado para tu{' '}
            <span className="text-primary">recuperación</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-text-light text-lg"
          >
            Contamos con instalaciones modernas y equipamiento profesional para
            brindarte la mejor atención en un ambiente cómodo y seguro.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(facility.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                facility.size === 'large'
                  ? 'col-span-2 row-span-2'
                  : facility.size === 'medium'
                  ? 'col-span-1 row-span-2'
                  : 'col-span-1 row-span-1'
              }`}
              style={{
                aspectRatio:
                  facility.size === 'large'
                    ? '2/1'
                    : facility.size === 'medium'
                    ? '1/2'
                    : '1/1',
              }}
            >
              {/* Placeholder for facility image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/50 flex items-center justify-center">
                    <Maximize2 className="w-8 h-8 text-text-light" />
                  </div>
                  <p className="text-sm text-text-light">{facility.title}</p>
                </div>
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === facility.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/50 to-transparent flex flex-col justify-end p-6"
              >
                <h3 className="text-white font-bold text-lg mb-2">
                  {facility.title}
                </h3>
                <p className="text-white/80 text-sm">{facility.description}</p>
              </motion.div>

              {/* Border on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === facility.id ? 1 : 0 }}
                className="absolute inset-0 border-4 border-primary rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Location Details */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-text-dark text-lg mb-2">
                  Ubicación
                </h3>
                <p className="text-text-light">
                  Mz N lt 18 Saul Cantoral
                  <br />
                  San Juan de Lurigancho, Lima - Perú
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-text-light text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-video"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-text-dark mb-2">
                  Mapa de Ubicación
                </h4>
                <p className="text-text-light text-sm mb-4">
                  Google Maps se integrará aquí
                </p>
                <a
                  href="https://maps.google.com/?q=San+Juan+de+Lurigancho+Lima+Peru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Ver en Google Maps
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
