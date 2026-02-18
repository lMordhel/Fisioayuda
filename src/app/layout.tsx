import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FisioAyuda | Terapia Física y Rehabilitación en SJL - Lima",
  description: "Centro de fisioterapia en San Juan de Lurigancho. Tratamientos personalizados de rehabilitación física, terapia deportiva, ortopédica y más. Agenda tu cita gratuita.",
  keywords: ["fisioterapia", "rehabilitación", "terapia física", "San Juan de Lurigancho", "SJL", "Lima", "Perú", "dolor", "lesiones deportivas", "terapia manual"],
  authors: [{ name: "FisioAyuda" }],
  creator: "FisioAyuda",
  publisher: "FisioAyuda",
  metadataBase: new URL("https://fisioayuda.pe"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FisioAyuda | Terapia Física y Rehabilitación",
    description: "Recupera tu movilidad y calidad de vida con nuestros tratamientos de fisioterapia personalizados en San Juan de Lurigancho.",
    url: "https://fisioayuda.pe",
    siteName: "FisioAyuda",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/logo-fisioayuda.jpg",
        width: 1080,
        height: 1080,
        alt: "FisioAyuda Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FisioAyuda | Terapia Física y Rehabilitación",
    description: "Recupera tu movilidad y calidad de vida con nuestros tratamientos de fisioterapia personalizados.",
    images: ["/logo-fisioayuda.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Reemplazar con el código real cuando lo tengas
  },
};

// Schema markup para SEO local
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "FisioAyuda",
  "alternateName": "FisioAyuda - Terapia Física y Rehabilitación",
  "description": "Centro de fisioterapia y rehabilitación en San Juan de Lurigancho, Lima. Ofrecemos tratamientos personalizados para recuperación física, lesiones deportivas, terapia ortopédica, neurológica y más.",
  "url": "https://fisioayuda.pe",
  "telephone": "+51-999-999-999",
  "email": "contacto@fisioayuda.pe",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mz N lt 18 Saul Cantoral",
    "addressLocality": "San Juan de Lurigancho",
    "addressRegion": "Lima",
    "addressCountry": "PE",
    "postalCode": "15001"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-11.9916",
    "longitude": "-76.9956"
  },
  "openingHours": [
    "Mo-Fr 09:00-19:00",
    "Sa 09:00-14:00"
  ],
  "priceRange": "$",
  "paymentAccepted": ["Efectivo", "Transferencia", "Yape", "Plin"],
  "currenciesAccepted": "PEN",
  "areaServed": {
    "@type": "City",
    "name": "San Juan de Lurigancho"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Fisioterapia",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Rehabilitación Física"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Fisioterapia Ortopédica"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Fisioterapia Neurológica"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Terapia Deportiva"
        }
      }
    ]
  },
  "employee": {
    "@type": "Person",
    "name": "Flor Rodríguez",
    "jobTitle": "Fisioterapeuta Profesional",
    "sameAs": ["https://www.tiktok.com/@fisioayuda.oficial"]
  },
  "founder": {
    "@type": "Person",
    "name": "Flor Rodríguez"
  },
  "foundingDate": "2019",
  "image": "https://fisioayuda.pe/logo-fisioayuda.jpg",
  "logo": "https://fisioayuda.pe/logo-fisioayuda.jpg",
  "sameAs": [
    "https://www.tiktok.com/@fisioayuda.oficial"
  ]
};

// Schema de FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué debo traer a mi primera consulta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para tu primera visita, te recomendamos traer: documento de identidad, estudios previos relevantes (rayos X, resonancias, informes médicos), lista de medicamentos que tomas actualmente, y ropa cómoda que permita examinar la zona a tratar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura cada sesión de fisioterapia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La duración de las sesiones varía según el tratamiento. Generalmente, una sesión estándar dura entre 45 minutos y 1 hora. Las evaluaciones iniciales pueden tomar hasta 1 hora y 15 minutos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas sesiones necesitaré?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El número de sesiones depende de varios factores: tipo de lesión, severidad, tiempo de evolución, y tu respuesta al tratamiento. Generalmente, los pacientes notan mejoría entre 4-6 sesiones."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <link rel="icon" href="/logo-fisioayuda.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo-fisioayuda.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
