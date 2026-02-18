'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón después de hacer scroll 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '51999999999';
  const whatsappMessage = 'Hola, vi su página web y me gustaría agendar una cita o hacer una consulta.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Floating Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-text-dark">¿Necesitas ayuda?</h4>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <p className="text-sm text-text-light mb-4">
                  Escríbenos por WhatsApp y te responderemos lo antes posible.
                </p>
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chatear ahora
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-green-600 transition-colors relative"
            >
              {/* Pulse animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {isOpen ? (
                <X className="w-7 h-7 relative z-10" />
              ) : (
                <MessageCircle className="w-7 h-7 relative z-10" />
              )}
            </motion.button>

            {/* Notification badge */}
            {!isOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-xs font-bold">1</span>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
