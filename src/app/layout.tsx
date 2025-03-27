// src/app/layout.tsx

import type { Metadata, Viewport } from "next"; // Import Viewport type
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadataBase with your actual production domain
const siteUrl = "https://bioequilibria.com"; // Use your actual domain here

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Add metadataBase here
  // Información básica del sitio
  title: {
    default: "Bio Equilibria | Medicina Homeopática Personalizada",
    template: "%s | Bio Equilibria"
  },
  description: "Bio Equilibria ofrece tratamientos homeopáticos personalizados para restaurar el equilibrio natural de tu cuerpo y mejorar tu bienestar integral en León, Guanajuato.",
  applicationName: "Bio Equilibria",
  authors: [{ name: "Bio Equilibria" }],
  generator: "Next.js",
  keywords: [
    "homeopatía",
    "medicina natural",
    "tratamientos homeopáticos",
    "terapias naturales",
    "bienestar integral",
    "salud holística",
    "consulta homeopática",
    "León",
    "Guanajuato",
    "Bio Equilibria"
  ],

  // Configuración de Open Graph
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl, // Use the variable
    siteName: "Bio Equilibria",
    title: "Bio Equilibria | Medicina Homeopática Personalizada",
    description: "Restauramos el equilibrio natural de tu cuerpo a través de tratamientos homeopáticos personalizados. Consulta en León, Guanajuato.",
    images: [
      {
        url: "/assets/images/og-image.jpg", // Relative path is okay with metadataBase
        width: 1200,
        height: 630,
        alt: "Bio Equilibria - Medicina Homeopática",
      },
    ],
  },

  // Configuración de Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Bio Equilibria | Medicina Homeopática Personalizada",
    description: "Restauramos el equilibrio natural de tu cuerpo a través de tratamientos homeopáticos personalizados. Consulta en León, Guanajuato.",
    images: ["/assets/images/twitter-image.jpg"], // Relative path is okay with metadataBase
    creator: "@bioequilibria",
    site: "@bioequilibria",
  },


  // Configuración regional y alternativas
  alternates: {
    canonical: siteUrl, // Use the variable
    languages: {
      'es-MX': siteUrl, // Use the variable
    },
  },

  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Configuración de íconos
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0080f6',
      },
    ],
  },

  // Otros metadatos importantes
  category: 'health',
};

// Define and export the viewport object separately
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [ // Moved from metadata
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark', // Moved from metadata
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}