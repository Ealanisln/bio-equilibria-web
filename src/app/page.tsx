"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, Star, Menu, X, ArrowRight, Check } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center group" href="#">
            <Leaf className="h-7 w-7 text-green-600 transform group-hover:rotate-12 transition-transform" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Vida y Salud
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex gap-8">
            {["Servicios", "Testimonios", "Contacto"].map((item) => (
              <Link
                key={item}
                className="text-sm font-medium text-gray-600 hover:text-green-600 hover:underline decoration-green-600 underline-offset-8 transition-colors"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
              Agendar Consulta
            </Button>
          </nav>
        </div>

        {/* Mobile navigation */}
        <nav className={`lg:hidden absolute w-full bg-white border-b transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {["Servicios", "Testimonios", "Contacto"].map((item) => (
              <Link
                key={item}
                className="text-sm font-medium text-gray-600 hover:text-green-600 py-2"
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-green-600 to-green-700 w-full">
              Agendar Consulta
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-transparent" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Descubre el poder de la
                  <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    medicina natural
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl">
                  Encuentra el equilibrio perfecto entre cuerpo y mente con nuestros tratamientos homeopáticos personalizados.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-8">
                  Empezar ahora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-lg px-8">
                  Conoce más
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-600 max-w-[600px]">
                Ofrecemos una gama completa de tratamientos homeopáticos adaptados a tus necesidades específicas.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Consulta Homeopática",
                  description: "Evaluación integral y tratamiento personalizado basado en tus necesidades únicas.",
                  features: ["Evaluación completa", "Plan personalizado", "Seguimiento continuo"]
                },
                {
                  title: "Terapias Naturales",
                  description: "Combinamos la homeopatía con otras terapias naturales para potenciar tu bienestar.",
                  features: ["Fitoterapia", "Aromaterapia", "Medicina tradicional"]
                },
                {
                  title: "Seguimiento Personalizado",
                  description: "Acompañamiento continuo en tu proceso de sanación y recuperación.",
                  features: ["Consultas regulares", "Ajustes de tratamiento", "Soporte constante"]
                },
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="flex flex-col p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100"
                >
                  <div className="mb-4 p-3 bg-green-100 rounded-xl w-fit">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="w-full py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Historias de Éxito
              </h2>
              <p className="text-gray-600 max-w-[600px]">
                Descubre cómo hemos ayudado a otros a recuperar su bienestar natural.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "María G.",
                  role: "Paciente de 2 años",
                  text: "La homeopatía cambió mi vida. Después de años de problemas digestivos, finalmente encontré alivio duradero.",
                },
                {
                  name: "Carlos R.",
                  role: "Paciente de 1 año",
                  text: "Increíble cómo un tratamiento tan suave puede ser tan efectivo. Mi ansiedad ha disminuido considerablemente.",
                },
                {
                  name: "Laura M.",
                  role: "Paciente de 3 años",
                  text: "Gracias a HomeoVida, mi hijo superó sus alergias sin efectos secundarios. ¡Totalmente recomendado!",
                },
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">`{testimonial.text}`</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                  ¿Listo para comenzar tu viaje hacia el bienestar?
                </h2>
                <p className="text-gray-600 mb-6">
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar un estado óptimo de salud de manera natural.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-gray-600">León, Guanajuato, México</p>
                    </div>
                  </div>
                  {/* Add more contact info items here */}
                </div>
              </div>
              <div className="flex-1">
                <form className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
                  <Input 
                    placeholder="Nombre completo" 
                    className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <Input 
                    type="tel" 
                    placeholder="Teléfono" 
                    className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <Textarea 
                    placeholder="Mensaje" 
                    className="min-h-[120px] border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-white border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Leaf className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Vida y Salud
              </span>
            </div>
            <p className="text-sm text-gray-600">
              © 2024 HomeoVida. Todos los derechos reservados.
            </p>
            <nav className="flex gap-6">
              <Link className="text-sm text-gray-600 hover:text-green-600" href="#">
                Términos
              </Link>
              <Link className="text-sm text-gray-600 hover:text-green-600" href="#">
                Privacidad
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}