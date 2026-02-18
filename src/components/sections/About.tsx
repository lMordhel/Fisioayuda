'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb, Shield } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const values = [
  {
    icon: Heart,
    title: 'Compromiso',
    description:
      'Nos dedicamos al 100% a la recuperación de cada paciente, tratándolos con calidez y empatía.',
  },
  {
    icon: Target,
    title: 'Excelencia',
    description:
      'Buscamos los mejores resultados mediante técnicas actualizadas y un seguimiento personalizado.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description:
      'Utilizamos equipos modernos y métodos respaldados por evidencia científica.',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description:
      'Creemos en la transparencia y honestidad, informando a nuestros pacientes en cada paso.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Sobre Nosotros
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6 leading-tight"
            >
              Tu bienestar es nuestra{' '}
              <span className="text-primary">prioridad</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-text-light"
            >
              <p>
                FisioAyuda nació con la misión de brindar atención de calidad en
                fisioterapia y rehabilitación a los residentes de San Juan de
                Lurigancho y zonas aledañas. Entendemos que cada paciente es
                único, por eso diseñamos tratamientos personalizados que se
                adaptan a tus necesidades específicas.
              </p>
              <p>
                Nuestra profesional, Flor Rodríguez, cuenta con amplia
                experiencia en el campo de la rehabilitación física, utilizando
                técnicas modernas y un enfoque humano que ha ayudado a cientos
                de personas a recuperar su movilidad y calidad de vida.
              </p>
              <p>
                En FisioAyuda no solo tratamos lesiones, acompañamos tu proceso
                de recuperación completo, desde la evaluación inicial hasta tu
                total rehabilitación.
              </p>
            </motion.div>

            {/* Mission and Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 grid sm:grid-cols-2 gap-6"
            >
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-text-dark mb-2">Misión</h3>
                <p className="text-sm text-text-light">
                  Brindar servicios de fisioterapia de excelencia, promoviendo la
                  salud y recuperación física de nuestros pacientes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-text-dark mb-2">Visión</h3>
                <p className="text-sm text-text-light">
                  Ser el centro de rehabilitación física de referencia en SJL,
                  reconocido por nuestro profesionalismo y resultados.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-text-dark mb-2">{value.title}</h3>
                <p className="text-sm text-text-light">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
