// src/app/sobre-nosotros/page.tsx

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Droplet,
  Star,
  Award,
  GraduationCap,
  Heart,
  BookOpen,
  Calendar,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

// Puedes adaptar estos datos según la información real del doctor
const doctorInfo = {
  name: "Dr. Gerardo Castillo",
  title: "Médico Homeópata",
  bio: "Con más de 15 años de experiencia, me dedico a proporcionar tratamientos homeopáticos personalizados que atienden tanto los síntomas como las causas subyacentes de las afecciones de mis pacientes.",
  education: [
    {
      degree: "Doctor en Medicina",
      institution: "Universidad Autónoma de México",
      year: "2005",
    },
    {
      degree: "Especialidad en Homeopatía",
      institution: "Instituto Nacional de Homeopatía",
      year: "2008",
    },
    {
      degree: "Diplomado en Terapias Naturales",
      institution: "Centro Internacional de Medicina Alternativa",
      year: "2010",
    },
  ],
  approach:
    "Mi enfoque se basa en una evaluación integral del paciente, considerando aspectos físicos, emocionales, mentales y ambientales. Creo firmemente que cada persona es única y merece un tratamiento adaptado a sus necesidades específicas.",
  expertise: [
    "Homeopatía clásica",
    "Tratamiento de afecciones crónicas",
    "Pediatría homeopática",
    "Fitoterapia y nutrición",
    "Manejo del estrés y ansiedad",
    "Alergias e intolerancias",
  ],
  values: [
    {
      title: "Atención personalizada",
      description:
        "Cada paciente recibe un plan de tratamiento único, diseñado específicamente para sus necesidades.",
    },
    {
      title: "Enfoque integral",
      description:
        "Considero todos los aspectos de la salud: física, emocional y mental en cada evaluación.",
    },
    {
      title: "Medicina segura",
      description:
        "Los tratamientos homeopáticos son naturales, seguros y sin efectos secundarios dañinos.",
    },
    {
      title: "Educación continua",
      description:
        "Me mantengo actualizado con las últimas investigaciones y avances en medicina homeopática.",
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section - Ajustes para móvil */}
        <section className="relative pt-16 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 z-0" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/30 to-blue-50/10 rounded-bl-full z-0" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl z-0" />

          <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
                <div className="w-full md:w-5/12 lg:w-1/2 order-2 md:order-1">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                    <Droplet className="w-3.5 h-3.5 mr-1.5" />
                    <span>Sobre Nosotros</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-blue-900 mb-4 md:mb-6">
                    Medicina homeopática con
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      {" "}
                      enfoque humano
                    </span>
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-6 md:mb-8">
                    En Bio Equilibria, el Dr. Gerardo Castillo combina
                    conocimiento científico con un profundo entendimiento de la
                    medicina natural para ofrecer soluciones personalizadas que
                    restauran el equilibrio en tu vida.
                  </p>

                  <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                      </div>
                      <span className="text-sm md:text-base text-slate-700 font-medium">
                        +15 años de experiencia
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                      </div>
                      <span className="text-sm md:text-base text-slate-700 font-medium">
                        +2,000 pacientes atendidos
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Award className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                      </div>
                      <span className="text-sm md:text-base text-slate-700 font-medium">
                        Certificaciones internacionales
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/contacto"
                    className="block w-full sm:w-auto sm:inline-block"
                  >
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-4 md:py-6 px-6 md:px-8 shadow-md hover:shadow-lg transition-all duration-300">
                      Agendar una consulta
                    </Button>
                  </Link>
                </div>

                <div className="w-full md:w-7/12 lg:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
                  <div className="relative">
                    {/* Marco decorativo - Ajustado para móvil */}
                    <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 right-8 md:right-12 bottom-8 md:bottom-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl md:rounded-3xl z-0" />

                    {/* Imagen principal - Ajustada para móvil */}
                    <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white aspect-[3/4] max-w-xs md:max-w-md mx-auto">
                      <Image
                        src="/assets/images/about/doctor-gerardo.jpg"
                        fill
                        alt="Dr. Gerardo Castillo"
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>

                    {/* Elementos flotantes - Ajustados para móvil */}
                    <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-md md:shadow-lg z-20">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="p-1.5 md:p-2 bg-blue-100 rounded-md md:rounded-lg">
                          <Star className="h-4 w-4 md:h-5 md:w-5 text-amber-500 fill-amber-500" />
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-blue-900 text-lg md:text-xl">
                            4.9/5
                          </p>
                          <p className="text-[10px] md:text-xs text-slate-500">
                            Evaluación de pacientes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section - Ajustes para móvil */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                  <span>Biografía</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-blue-900">
                  Conozca al Dr. Gerardo Castillo
                </h2>
              </div>

              <div className="prose prose-sm md:prose-base lg:prose-lg prose-blue mx-auto">
                <p>
                  El Dr. Gerardo Castillo ha dedicado su carrera profesional a
                  la medicina homeopática, buscando siempre ofrecer alternativas
                  de tratamiento naturales y efectivas para sus pacientes. Su
                  pasión por la homeopatía comenzó durante sus estudios de
                  medicina, cuando descubrió el poder de los tratamientos
                  naturales para promover la curación integral del cuerpo.
                </p>

                <p>
                  Tras completar su formación médica en la Universidad Autónoma
                  de México, el Dr. Castillo se especializó en homeopatía,
                  obteniendo certificaciones tanto nacionales como
                  internacionales. A lo largo de su trayectoria, ha ayudado a
                  miles de pacientes a recuperar su bienestar mediante
                  tratamientos personalizados que abordan la causa raíz de sus
                  afecciones.
                </p>

                <p>
                  El Dr. Castillo cree firmemente en la importancia de una
                  relación médico-paciente basada en la confianza y el respeto
                  mutuo. Dedica tiempo a escuchar atentamente las preocupaciones
                  de cada paciente, considerando su historia clínica completa,
                  estilo de vida, factores emocionales y ambientales antes de
                  diseñar un plan de tratamiento personalizado.
                </p>

                <p>
                  Además de su práctica clínica, el Dr. Castillo se mantiene
                  constantemente actualizado con las últimas investigaciones y
                  avances en medicina homeopática y complementaria, participando
                  regularmente en congresos, seminarios y programas de educación
                  continua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education - Ajustes para móvil */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                  <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
                  <span>Formación</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-blue-900">
                  Educación y Experiencia
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Educación - Ajustes para móvil */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-900">
                    Formación Académica
                  </h3>
                  <div className="space-y-6 md:space-y-8">
                    {doctorInfo.education.map((edu, index) => (
                      <div
                        key={index}
                        className="relative pl-6 md:pl-8 pb-6 md:pb-8 border-l-2 border-blue-200 last:border-transparent last:pb-0"
                      >
                        <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 bg-blue-600 rounded-full -translate-x-1/2 z-10" />
                        <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full -translate-x-1/2 animate-pulse" />
                        <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-blue-100">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-blue-900 text-sm md:text-base">
                              {edu.degree}
                            </h4>
                            <span className="text-xs md:text-sm text-blue-600 font-medium px-2 md:px-3 py-0.5 md:py-1 bg-blue-50 rounded-full">
                              {edu.year}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Áreas de especialización - Ajustes para móvil */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-900">
                    Áreas de Especialización
                  </h3>
                  <div className="bg-white p-5 md:p-8 rounded-xl md:rounded-3xl shadow-sm border border-blue-100">
                    <ul className="space-y-3 md:space-y-4">
                      {doctorInfo.expertise.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 md:mr-3 mt-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Check className="h-2 w-2 md:h-3 md:w-3 text-blue-700" />
                          </div>
                          <span className="text-sm md:text-base text-slate-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-blue-100">
                      <h4 className="font-semibold mb-3 md:mb-4 text-blue-900 text-sm md:text-base">
                        Certificaciones
                      </h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {[
                          "Homeopatía Clínica",
                          "Medicina Integrativa",
                          "Terapias Naturales",
                          "Fitoterapia",
                        ].map((cert, index) => (
                          <span
                            key={index}
                            className="px-2 md:px-3 py-0.5 md:py-1 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Approach - Ajustes para móvil */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                  <Heart className="w-3.5 h-3.5 mr-1.5" />
                  <span>Filosofía</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-blue-900">
                  Mi Enfoque Terapéutico
                </h2>
                <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                  {doctorInfo.approach}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {doctorInfo.values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 md:p-6 rounded-xl md:rounded-3xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                      <Heart className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-blue-900">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 md:mt-20 text-center">
                <Link
                  href="/servicios"
                  className="block w-full sm:w-auto sm:inline-block"
                >
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-4 md:py-6 px-6 md:px-8 shadow-md hover:shadow-lg transition-all duration-300">
                    Conocer nuestros servicios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Office & Hours - Ajustes para móvil */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                  <MapPin className="w-3.5 h-3.5 mr-1.5" />
                  <span>Visítanos</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-blue-900">
                  Nuestro Consultorio
                </h2>
                <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                  Contamos con instalaciones modernas y cómodas, diseñadas para
                  proporcionarte una experiencia de atención médica tranquila y
                  agradable.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <div className="relative">
                    <div className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-md md:shadow-lg aspect-[4/3]">
                      <Image
                        src="/assets/images/about/consultorio.jpg"
                        alt="Consultorio Bio Equilibria"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-md md:shadow-lg">
                      <div className="flex flex-col space-y-0.5 md:space-y-1 text-center">
                        <Calendar className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto mb-0.5 md:mb-1" />
                        <p className="font-bold text-blue-900 text-sm md:text-base">
                          Lun - Vie: 9:00 - 18:00
                        </p>
                        <p className="text-[10px] md:text-xs text-slate-500">
                          Sáb: 9:00 - 14:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-900">
                    Ubicación y Contacto
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">
                    Nuestro consultorio está ubicado en una zona céntrica y de
                    fácil acceso en León, Guanajuato, con estacionamiento
                    disponible para nuestros pacientes.
                  </p>

                  <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-blue-100 rounded-lg md:rounded-xl flex-shrink-0">
                        <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-900 mb-0.5 md:mb-1 text-sm md:text-base">
                          Dirección
                        </p>
                        <p className="text-xs md:text-sm text-slate-600">
                          Av. Principal #123, Col. Centro
                        </p>
                        <p className="text-xs md:text-sm text-slate-600">
                          León, Guanajuato, CP 37000
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-blue-100 rounded-lg md:rounded-xl flex-shrink-0">
                        <svg
                          className="h-4 w-4 md:h-5 md:w-5 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-blue-900 mb-0.5 md:mb-1 text-sm md:text-base">
                          Teléfono
                        </p>
                        <p className="text-xs md:text-sm text-slate-600">
                          +52 (477) 2020-863
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-blue-100 rounded-lg md:rounded-xl flex-shrink-0">
                        <svg
                          className="h-4 w-4 md:h-5 md:w-5 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-blue-900 mb-0.5 md:mb-1 text-sm md:text-base">
                          Email
                        </p>
                        <p className="text-xs md:text-sm text-slate-600">
                          contacto@bioequilibria.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-8">
                    <Link href="/contacto">
                      <Button className="flex items-center gap-2 text-sm md:text-base text-blue-600 font-medium hover:text-blue-800 transition-colors bg-transparent hover:bg-transparent">
                        <span>Ver en el mapa</span>
                        <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Ajustes para móvil */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
              <div className="w-full md:w-2/3">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                  ¿Listo para comenzar tu camino hacia el bienestar?
                </h3>
                <p className="text-blue-100 text-sm md:text-lg">
                  Agenda tu consulta con el Dr. Gerardo Castillo y descubre los
                  beneficios de la medicina homeopática personalizada.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <Link href="/contacto" className="block w-full md:w-auto">
                  <Button className="w-full md:w-auto bg-white text-blue-700 hover:bg-blue-50 rounded-full py-4 md:py-6 px-6 md:px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    Agendar Consulta Ahora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
