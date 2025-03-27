// src/app/page.tsx

import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Droplet, Star, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        {/* Services Section */}
        <section id="servicios" className="w-full py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                <Droplet className="w-3.5 h-3.5 mr-1.5" />
                <span>Nuestros Servicios</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-blue-900">
                Tratamientos Homeopáticos Personalizados
              </h2>
              <p className="text-slate-600 max-w-[700px] text-lg">
                Ofrecemos una gama completa de tratamientos adaptados a tus
                necesidades específicas, basados en los principios de la
                medicina natural.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Consulta Homeopática",
                  description:
                    "Evaluación integral y tratamiento personalizado basado en tus necesidades únicas.",
                  icon: "health",
                  features: [
                    "Evaluación completa",
                    "Plan personalizado",
                    "Seguimiento continuo",
                  ],
                },
                {
                  title: "Terapias Naturales",
                  description:
                    "Combinamos la homeopatía con otras terapias naturales para potenciar tu bienestar.",
                  icon: "natural",
                  features: [
                    "Fitoterapia",
                    "Aromaterapia",
                    "Medicina tradicional",
                  ],
                },
                {
                  title: "Seguimiento Personalizado",
                  description:
                    "Acompañamiento continuo en tu proceso de sanación y recuperación.",
                  icon: "support",
                  features: [
                    "Consultas regulares",
                    "Ajustes de tratamiento",
                    "Soporte constante",
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group flex flex-col p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-50 hover:border-blue-100"
                >
                  <div className="mb-5 p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl w-fit group-hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Droplet className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mt-auto">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-slate-700"
                      >
                        <div className="mr-2.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-blue-700" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/servicios">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-6 px-8">
                  <span>Ver todos nuestros servicios</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonios"
          className="w-full py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                <Star className="w-3.5 h-3.5 mr-1.5" />
                <span>Testimonios</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-blue-900">
                Historias de Éxito
              </h2>
              <p className="text-slate-600 max-w-[700px] text-lg">
                Descubre cómo hemos ayudado a otros a recuperar su bienestar
                natural y alcanzar un equilibrio en su vida.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "María González",
                  role: "Paciente desde 2022",
                  text: "La homeopatía cambió mi vida. Después de años de problemas digestivos, finalmente encontré alivio duradero con Bio Equilibria.",
                  avatar: "/assets/avatars/avatar-1.png",
                },
                {
                  name: "Carlos Rodríguez",
                  role: "Paciente desde 2023",
                  text: "Increíble cómo un tratamiento tan suave puede ser tan efectivo. Mi ansiedad ha disminuido considerablemente gracias a las terapias personalizadas.",
                  avatar: "/assets/avatars/avatar-2.png",
                },
                {
                  name: "Laura Méndez",
                  role: "Paciente desde 2021",
                  text: "Gracias a Bio Equilibria, mi hijo superó sus alergias sin efectos secundarios. ¡El enfoque integral realmente marca la diferencia!",
                  avatar: "/assets/avatars/avatar-3.png",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group flex flex-col p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-50 hover:border-blue-100"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-8 text-lg">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      {/* Placeholder for avatar - replace with actual images */}
                      <div className="w-full h-full flex items-center justify-center text-blue-600 font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contacto"
          className="w-full py-24 bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full max-w-fit">
                  <span>Contáctanos</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-blue-900">
                  ¿Listo para tu viaje hacia el bienestar natural?
                </h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte a
                  alcanzar un estado óptimo de salud de manera natural y
                  personalizada.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                      <Droplet className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900 mb-1">
                        Ubicación
                      </p>
                      <p className="text-slate-600">León, Guanajuato, México</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-blue-600"
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
                      <p className="font-medium text-blue-900 mb-1">Email</p>
                      <p className="text-slate-600">
                        contacto@bioequilibria.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-blue-600"
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
                      <p className="font-medium text-blue-900 mb-1">Teléfono</p>
                      <p className="text-slate-600">+52 (477) 2020-863</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-100 text-blue-600 rounded-full font-medium hover:bg-blue-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-100 text-blue-600 rounded-full font-medium hover:bg-blue-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-100 text-blue-600 rounded-full font-medium hover:bg-blue-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    YouTube
                  </Link>
                </div>
              </div>

              <div className="lg:pl-8">
                <form className="space-y-6 bg-white p-8 rounded-3xl shadow-md border border-blue-50">
                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 mb-1 block">
                        Nombre completo
                      </span>
                      <Input
                        placeholder="Tu nombre"
                        className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 mb-1 block">
                        Email
                      </span>
                      <Input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 mb-1 block">
                        Teléfono
                      </span>
                      <Input
                        type="tel"
                        placeholder="Tu número telefónico"
                        className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 mb-1 block">
                        Mensaje
                      </span>
                      <Textarea
                        placeholder="¿Cómo podemos ayudarte?"
                        className="min-h-[150px] w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-6 rounded-xl text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
                    Enviar Mensaje
                  </Button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    Al enviar este formulario, aceptas nuestra{" "}
                    <Link
                      href="/privacidad"
                      className="text-blue-600 hover:underline"
                    >
                      política de privacidad
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Comienza tu camino hacia el equilibrio natural hoy mismo
                </h3>
                <p className="text-blue-100 text-lg">
                  El primer paso hacia una vida más saludable está a solo una
                  consulta de distancia.
                </p>
              </div>
              <div>
                <Link href="/contacto">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 rounded-full py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
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
