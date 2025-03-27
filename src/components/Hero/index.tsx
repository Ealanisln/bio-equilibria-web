// src/components/Hero/index.tsx
import Image from "next/image";
import Link from "next/link";
import { Droplet } from "lucide-react";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    // Usando flex para mantener el contenido centrado verticalmente
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Backgrounds/Decorations (mantenidos igual) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 z-0" />
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-100/30 to-blue-50/10 rounded-bl-full z-0" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-amber-100/30 rounded-full blur-xl z-0 hidden lg:block" />
      <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-blue-200/20 rounded-full blur-xl z-0 hidden lg:block" />

      {/* Content container */}
      {/* Ajustado el padding y asegurando que esté centrado */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Left content - text side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
              <Droplet className="w-3.5 h-3.5 mr-1.5" />
              <span>Medicina Homeopática</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-900 mb-6">
              Tu camino hacia el
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {" "}
                equilibrio natural
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
              En Bio Equilibria restauramos el balance de tu cuerpo a través de
              tratamientos homeopáticos personalizados que abordan la causa raíz
              de tus problemas de salud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Link
                href="/consulta"
                className="inline-flex items-center justify-center text-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Agendar Consulta
              </Link>

              <Link
                href="#servicios"
                className="inline-flex items-center justify-center text-center px-8 py-3 bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-300 font-medium rounded-full hover:bg-blue-50 transition-all duration-300"
              >
                Nuestros Servicios
              </Link>
            </div>

            {/* Trust indicators - mantenidos pero mejorado el alineamiento */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
              {/* ... indicators ... */}
            </div>
          </div>

          {/* Right image container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-blue-100">
                <Image
                  src="/assets/images/hero/hero-logo.jpg"
                  alt="Medicina Homeopática Natural"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;