'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Paciente de rehabilitación post-operatoria',
    image: null,
    rating: 5,
    text: 'Excelente atención. Después de mi cirugía de rodilla, pensé que nunca volvería a caminar normal. Flor me ayudó a recuperarme completamente. Su paciencia y profesionalismo son increíbles.',
    date: 'Hace 2 semanas',
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Atleta amateur',
    image: null,
    rating: 5,
    text: 'Como deportista, las lesiones son comunes. FisioAyuda me ha ayudado a recuperarme de varias lesiones y a prevenir futuras. El trato es muy personalizado y los resultados se notan.',
    date: 'Hace 1 mes',
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    role: 'Paciente con dolor crónico',
    image: null,
    rating: 5,
    text: 'Llevaba años sufriendo de dolor de espalda. Después de 2 meses de tratamiento con Flor, mi calidad de vida mejoró enormemente. La recomiendo al 100%.',
    date: 'Hace 3 semanas',
  },
  {
    id: 4,
    name: 'Luis Pérez',
    role: 'Paciente geriátrico',
    image: null,
    rating: 5,
    text: 'Mi madre de 75 años ha mejorado muchísimo desde que comenzó su tratamiento. Flor tiene una paciencia especial con los adultos mayores y entiende sus necesidades.',
    date: 'Hace 1 semana',
  },
  {
    id: 5,
    name: 'Diana Castillo',
    role: 'Paciente de terapia deportiva',
    image: null,
    rating: 5,
    text: 'Me recuperé de un esguince de tobillo en tiempo récord. Las técnicas que usa Flor son muy efectivas y modernas. Además, el ambiente es muy acogedor.',
    date: 'Hace 2 meses',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonios"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
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
            Testimonios
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Lo que dicen nuestros{' '}
            <span className="text-primary">pacientes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-text-light text-lg"
          >
            La satisfacción de nuestros pacientes es nuestro mayor logro. Estas
            son algunas de sus experiencias.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-12 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-text-dark leading-relaxed mb-8 italic">
                  "{currentTestimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-text-light">
                      {currentTestimonial.role}
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-text-light">
                    {currentTestimonial.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-text-dark hover:text-primary hover:shadow-xl transition-all border border-gray-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-text-dark hover:text-primary hover:shadow-xl transition-all border border-gray-100"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                98%
              </div>
              <div className="text-sm text-text-light">
                Pacientes satisfechos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                500+
              </div>
              <div className="text-sm text-text-light">Pacientes atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                4.9
              </div>
              <div className="text-sm text-text-light">
                Calificación promedio
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
