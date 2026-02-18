'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Heart,
} from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Equipo', href: '#equipo' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
];

const services = [
  'Rehabilitación Física',
  'Fisioterapia Ortopédica',
  'Fisioterapia Neurológica',
  'Rehabilitación Cardiovascular',
  'Fisioterapia Pediátrica',
  'Terapia Geriátrica',
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-text-dark text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <Image
                  src="/logo-fisioayuda.jpg"
                  alt="FisioAyuda Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">FisioAyuda</span>
                <span className="block text-xs text-gray-400">
                  Terapia Física y Rehabilitación
                </span>
              </div>
            </motion.div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Centro de fisioterapia dedicado a mejorar tu calidad de vida
              mediante tratamientos personalizados y profesionales en San Juan
              de Lurigancho.
            </p>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.tiktok.com/@fisioayuda.oficial"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="text-lg">🎵</span>
              </motion.a>
              <motion.a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <span className="text-lg">💬</span>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#servicios');
                    }}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Mz N lt 18 Saul Cantoral
                  <br />
                  San Juan de Lurigancho, Lima - Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+51999999999"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  +51 999 999 999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contacto@fisioayuda.pe"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  contacto@fisioayuda.pe
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Lun - Sáb: 9:00 AM - 7:00 PM
                  <br />
                  Dom: Cerrado
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} FisioAyuda. Todos los derechos
              reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" />{' '}
              en San Juan de Lurigancho
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
