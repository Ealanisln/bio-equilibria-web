// src/app/contacto/page.tsx

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Droplet,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 z-0" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/30 to-blue-50/10 rounded-bl-full z-0" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl z-0" />

          <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                <span>Contáctanos</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-6">
                Estamos Aquí Para
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {" "}
                  Ayudarte
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600">
                Ponte en contacto con nosotros para resolver tus dudas o agendar
                una consulta. Nuestro equipo está listo para brindarte la
                atención personalizada que mereces.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Information */}
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Información de Contacto
                </h2>

                <div className="grid gap-6 mb-8">
                  <Card className="border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex items-start">
                      <div className="p-3 bg-blue-100 rounded-xl mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-900 mb-1">
                          Dirección
                        </h3>
                        <p className="text-slate-600">
                          Av. Principal #123, Colonia Centro
                        </p>
                        <p className="text-slate-600">
                          León, Guanajuato, México, CP 37000
                        </p>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-sm font-medium hover:text-blue-800 mt-2 inline-block"
                        >
                          Ver en Google Maps →
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex items-start">
                      <div className="p-3 bg-blue-100 rounded-xl mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-900 mb-1">
                          Email
                        </h3>
                        <p className="text-slate-600">info@bioequilibria.com</p>
                        <p className="text-slate-600">citas@bioequilibria.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex items-start">
                      <div className="p-3 bg-blue-100 rounded-xl mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-900 mb-1">
                          Teléfono
                        </h3>
                        <p className="text-slate-600">+52 (477) 2020-863</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex items-start">
                      <div className="p-3 bg-blue-100 rounded-xl mr-4 flex-shrink-0">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-900 mb-1">
                          Horario de Atención
                        </h3>
                        <p className="text-slate-600">
                          Lunes a Viernes: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-slate-600">
                          Sábados: 9:00 AM - 2:00 PM
                        </p>
                        <p className="text-slate-600">Domingos: Cerrado</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Map or Location Image */}
                <div className="rounded-3xl overflow-hidden shadow-md border border-blue-100 h-64 md:h-80 relative">
                  <Image
                    src="/assets/images/mapa-ubicacion.jpg"
                    alt="Ubicación de Bio Equilibria"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay with location marker */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-600 p-3 rounded-full shadow-lg animate-pulse">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <Tabs defaultValue="contacto" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger
                      value="contacto"
                      className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Consulta
                    </TabsTrigger>
                    <TabsTrigger
                      value="cita"
                      className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Cita
                    </TabsTrigger>
                    <TabsTrigger
                      value="corporativo"
                      className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Corporativo
                    </TabsTrigger>
                  </TabsList>

                  {/* General Contact Tab */}
                  <TabsContent value="contacto" className="mt-0">
                    <Card className="border-blue-100">
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                          Envíanos un Mensaje
                        </h2>
                        <p className="text-slate-600 mb-6">
                          Completa el formulario y te responderemos a la
                          brevedad.
                        </p>

                        <form className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label
                                htmlFor="nombre"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Nombre completo
                              </label>
                              <Input
                                id="nombre"
                                placeholder="Tu nombre"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>

                            <div className="space-y-2">
                              <label
                                htmlFor="email"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Email
                              </label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="asunto"
                              className="text-sm font-medium text-slate-700 block"
                            >
                              Asunto
                            </label>
                            <Input
                              id="asunto"
                              placeholder="¿Sobre qué nos quieres contactar?"
                              className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="mensaje"
                              className="text-sm font-medium text-slate-700 block"
                            >
                              Mensaje
                            </label>
                            <Textarea
                              id="mensaje"
                              placeholder="¿Cómo podemos ayudarte?"
                              className="min-h-[150px] w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-6 rounded-xl text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
                            Enviar Mensaje
                          </Button>

                          <p className="text-xs text-slate-500 text-center">
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
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Appointment Tab */}
                  <TabsContent value="cita" className="mt-0">
                    <Card className="border-blue-100">
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                          Solicitar una Cita
                        </h2>
                        <p className="text-slate-600 mb-6">
                          Completa el formulario para agendar una consulta con
                          nuestros especialistas.
                        </p>

                        <form className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label
                                htmlFor="nombre-cita"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Nombre completo
                              </label>
                              <Input
                                id="nombre-cita"
                                placeholder="Tu nombre"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>

                            <div className="space-y-2">
                              <label
                                htmlFor="email-cita"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Email
                              </label>
                              <Input
                                id="email-cita"
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label
                                htmlFor="telefono"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Teléfono
                              </label>
                              <Input
                                id="telefono"
                                type="tel"
                                placeholder="Tu número telefónico"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>

                            <div className="space-y-2">
                              <label
                                htmlFor="tipo-consulta"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Tipo de Consulta
                              </label>
                              <Select>
                                <SelectTrigger
                                  id="tipo-consulta"
                                  className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                                >
                                  <SelectValue placeholder="Selecciona una opción" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="primera">
                                    Primera Consulta
                                  </SelectItem>
                                  <SelectItem value="seguimiento">
                                    Consulta de Seguimiento
                                  </SelectItem>
                                  <SelectItem value="urgente">
                                    Consulta Urgente
                                  </SelectItem>
                                  <SelectItem value="online">
                                    Consulta Online
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label
                                htmlFor="fecha"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Fecha Preferida
                              </label>
                              <Input
                                id="fecha"
                                type="date"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>

                            <div className="space-y-2">
                              <label
                                htmlFor="hora"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Hora Preferida
                              </label>
                              <Input
                                id="hora"
                                type="time"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="motivo"
                              className="text-sm font-medium text-slate-700 block"
                            >
                              Motivo de la Consulta
                            </label>
                            <Textarea
                              id="motivo"
                              placeholder="Describe brevemente el motivo de tu consulta"
                              className="min-h-[100px] w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-6 rounded-xl text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
                            Solicitar Cita
                          </Button>

                          <p className="text-xs text-slate-500 text-center">
                            Te confirmaremos tu cita por correo electrónico o
                            teléfono en menos de 24 horas.
                          </p>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Corporate Tab */}
                  <TabsContent value="corporativo" className="mt-0">
                    <Card className="border-blue-100">
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                          Servicios Corporativos
                        </h2>
                        <p className="text-slate-600 mb-6">
                          ¿Buscas soluciones de bienestar para tu empresa?
                          Completa el formulario y te contactaremos para diseñar
                          un programa a medida.
                        </p>

                        <form className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label
                                htmlFor="nombre-empresa"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Nombre de la Empresa
                              </label>
                              <Input
                                id="nombre-empresa"
                                placeholder="Nombre de tu empresa"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>

                            <div className="space-y-2">
                              <label
                                htmlFor="contacto"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Persona de Contacto
                              </label>
                              <Input
                                id="contacto"
                                placeholder="Nombre completo"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label
                                htmlFor="email-corp"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Email Corporativo
                              </label>
                              <Input
                                id="email-corp"
                                type="email"
                                placeholder="Tu correo electrónico corporativo"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>

                            <div className="space-y-2">
                              <label
                                htmlFor="telefono-corp"
                                className="text-sm font-medium text-slate-700 block"
                              >
                                Teléfono
                              </label>
                              <Input
                                id="telefono-corp"
                                type="tel"
                                placeholder="Teléfono de contacto"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="tamano"
                              className="text-sm font-medium text-slate-700 block"
                            >
                              Tamaño de la Empresa
                            </label>
                            <Select>
                              <SelectTrigger
                                id="tamano"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              >
                                <SelectValue placeholder="Selecciona una opción" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pequena">
                                  1-10 empleados
                                </SelectItem>
                                <SelectItem value="mediana">
                                  11-50 empleados
                                </SelectItem>
                                <SelectItem value="grande">
                                  51-200 empleados
                                </SelectItem>
                                <SelectItem value="muygrande">
                                  Más de 200 empleados
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="interes"
                              className="text-sm font-medium text-slate-700 block"
                            >
                              Servicios de Interés
                            </label>
                            <Select>
                              <SelectTrigger
                                id="interes"
                                className="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                              >
                                <SelectValue placeholder="Selecciona una opción" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="talleres">
                                  Talleres y charlas
                                </SelectItem>
                                <SelectItem value="consultas">
                                  Consultas para empleados
                                </SelectItem>
                                <SelectItem value="programas">
                                  Programas de bienestar
                                </SelectItem>
                                <SelectItem value="todos">
                                  Todos los servicios
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="mensaje-corp"
                              className="text-sm font-medium text-slate-700 block"
                            >
                              Mensaje o Requerimientos Específicos
                            </label>
                            <Textarea
                              id="mensaje-corp"
                              placeholder="Cuéntanos más sobre las necesidades de tu empresa"
                              className="min-h-[150px] w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-6 rounded-xl text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
                            Solicitar Información
                          </Button>

                          <p className="text-xs text-slate-500 text-center">
                            Nos pondremos en contacto contigo en un plazo máximo
                            de 48 horas hábiles.
                          </p>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Follow Us Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Síguenos en Redes Sociales
              </h2>
              <p className="text-lg text-slate-600">
                Mantente al día con nuestros consejos de salud, eventos y
                promociones especiales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "Facebook",
                  icon: (
                    <svg
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                  color: "from-blue-500 to-blue-600",
                  url: "https://facebook.com",
                },
                {
                  name: "Instagram",
                  icon: (
                    <svg
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                  color: "from-pink-500 to-purple-500",
                  url: "https://instagram.com",
                },
                {
                  name: "YouTube",
                  icon: (
                    <svg
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  ),
                  color: "from-red-500 to-red-600",
                  url: "https://youtube.com",
                },
                {
                  name: "Twitter",
                  icon: (
                    <svg
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ),
                  color: "from-blue-400 to-blue-500",
                  url: "https://twitter.com",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-50 hover:border-blue-100"
                >
                  <div
                    className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${social.color} rounded-2xl text-white shadow-md mb-4`}
                  >
                    {social.icon}
                  </div>
                  <span className="font-medium text-blue-900">
                    {social.name}
                  </span>
                  <span className="text-sm text-slate-500 mt-1">
                    @bioequilibria
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Suscríbete a Nuestro Newsletter
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Recibe consejos de salud, promociones exclusivas y las
                    últimas novedades directamente en tu correo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      placeholder="Tu correo electrónico"
                      className="rounded-full border-transparent focus:border-white focus:ring-white bg-white/20 text-white placeholder:text-blue-100"
                    />
                    <Button className="whitespace-nowrap rounded-full bg-white text-blue-700 hover:bg-blue-50 px-6">
                      Suscribirme
                    </Button>
                  </div>
                  <p className="text-xs text-blue-100 mt-3">
                    Prometemos no enviarte spam. Puedes darte de baja en
                    cualquier momento.
                  </p>
                </div>

                <div className="flex justify-center md:justify-end">
                  <div className="relative w-48 h-48">
                    <Droplet className="w-full h-full text-white/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Droplet className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Listo para comenzar tu viaje hacia el bienestar natural?
                </h3>
                <p className="text-blue-100 text-lg">
                  Agenda tu primera consulta hoy y da el primer paso hacia una
                  vida más saludable y equilibrada.
                </p>
              </div>
              <div>
                <Button className="bg-white text-blue-700 hover:bg-blue-50 rounded-full py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  Agendar Consulta Ahora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
