// src/app/servicios/page.tsx

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Droplet,
  Check,
  ArrowRight,
  Trophy,
  Clock,
  Sparkles,
  Users,
  Gem,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
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
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                <Droplet className="w-3.5 h-3.5 mr-1.5" />
                <span>Nuestros Servicios</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-blue-900 mb-4 md:mb-6">
                Tratamientos Homeopáticos
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {" "}
                  Personalizados
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
                Descubre nuestra gama completa de servicios diseñados para
                ayudarte a restaurar el equilibrio natural de tu cuerpo y
                alcanzar un estado óptimo de bienestar.
              </p>
            </div>

            {/* Services summary cards - Ajustados para móvil */}
            <div className="grid gap-4 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Consulta Homeopática",
                  description:
                    "Evaluación integral y tratamiento personalizado para abordar la causa raíz de tus problemas de salud.",
                  icon: <Droplet className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                  color: "from-blue-600 to-blue-700",
                  link: "#consulta-homeopatica",
                },
                {
                  title: "Terapias Naturales",
                  description:
                    "Combinamos la homeopatía con otras terapias naturales para potenciar tu bienestar integral.",
                  icon: <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                  color: "from-amber-500 to-amber-600",
                  link: "#terapias-naturales",
                },
                {
                  title: "Programas de Bienestar",
                  description:
                    "Seguimiento continuo y programas personalizados para mantener y mejorar tu salud a largo plazo.",
                  icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-white" />,
                  color: "from-blue-500 to-blue-600",
                  link: "#programas-bienestar",
                },
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="group flex flex-col h-full p-4 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-50 hover:border-blue-100"
                >
                  <div className="mb-4 md:mb-5">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-r ${service.color} rounded-xl md:rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">{service.description}</p>
                  <div className="mt-auto inline-flex items-center text-blue-600 text-sm md:text-base font-medium group-hover:text-blue-800 transition-colors">
                    <span>Saber más</span>
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach - Ajustes para móvil */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                <Trophy className="w-3.5 h-3.5 mr-1.5" />
                <span>Nuestro Enfoque</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-blue-900">
                Cómo Trabajamos
              </h2>
              <p className="text-base md:text-lg text-slate-600">
                En Bio Equilibria seguimos un proceso meticuloso para asegurar
                que cada paciente reciba el tratamiento más adecuado para sus
                necesidades específicas.
              </p>
            </div>

            <div className="grid gap-6 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Evaluación Completa",
                  description:
                    "Realizamos una evaluación integral que abarca aspectos físicos, emocionales y ambientales para comprender las causas fundamentales de tus problemas de salud.",
                  icon: <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />,
                },
                {
                  number: "02",
                  title: "Plan Personalizado",
                  description:
                    "Desarrollamos un plan de tratamiento a medida que aborda tus necesidades específicas, combinando diferentes enfoques terapéuticos para maximizar los resultados.",
                  icon: <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />,
                },
                {
                  number: "03",
                  title: "Seguimiento Continuo",
                  description:
                    "Monitoreamos constantemente tu progreso y ajustamos el tratamiento según sea necesario para asegurar resultados óptimos y duraderos.",
                  icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />,
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector line between steps (only on desktop) */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-24 -right-6 w-12 border-t-2 border-dashed border-blue-200 z-0" />
                  )}

                  <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-blue-50 h-full z-10 relative">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center text-lg md:text-xl font-bold text-blue-700 mr-3 md:mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-blue-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-slate-600">{step.description}</p>
                    <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 p-2 md:p-3 bg-blue-100 rounded-lg md:rounded-xl">
                      {step.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services - Ajustes para móvil */}
        <section id="consulta-homeopatica" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="consulta" className="max-w-5xl mx-auto">
              <div className="mb-8 md:mb-12 text-center">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                  <Gem className="w-3.5 h-3.5 mr-1.5" />
                  <span>Servicios Detallados</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8 text-blue-900">
                  Nuestros Servicios Especializados
                </h2>

                <TabsList className="w-full max-w-md mx-auto flex bg-blue-50 p-1 rounded-full mb-6 md:mb-8 overflow-x-auto">
                  <TabsTrigger
                    value="consulta"
                    className="flex-1 whitespace-nowrap rounded-full text-xs sm:text-sm py-2 px-2 sm:px-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                  >
                    Consulta Homeopática
                  </TabsTrigger>
                  <TabsTrigger
                    value="terapias"
                    className="flex-1 whitespace-nowrap rounded-full text-xs sm:text-sm py-2 px-2 sm:px-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                  >
                    Terapias Naturales
                  </TabsTrigger>
                  <TabsTrigger
                    value="programas"
                    className="flex-1 whitespace-nowrap rounded-full text-xs sm:text-sm py-2 px-2 sm:px-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                  >
                    Programas de Bienestar
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="consulta" className="mt-0">
                <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
                  <div>
                    <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden mb-4 md:mb-6">
                      <Image
                        src="/assets/images/services/consulta-homeopatica.jpg"
                        alt="Consulta Homeopática"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    </div>

                    <div className="bg-blue-50 rounded-2xl md:rounded-3xl p-4 md:p-6">
                      <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-blue-900">
                        ¿Para quién es?
                      </h4>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Personas con condiciones crónicas",
                          "Quienes buscan alternativas a medicamentos convencionales",
                          "Individuos interesados en un enfoque holístico",
                          "Pacientes que no han respondido bien a tratamientos tradicionales",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-2 md:mr-3 mt-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <Check className="h-2.5 w-2.5 md:h-3 md:w-3 text-blue-700" />
                            </div>
                            <span className="text-sm md:text-base text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-blue-900">
                      Consulta Homeopática Integral
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">
                      Nuestra consulta homeopática es una evaluación exhaustiva
                      que examina todos los aspectos de tu salud física,
                      emocional y mental para identificar las causas
                      fundamentales de tus problemas de salud y desarrollar un
                      tratamiento personalizado.
                    </p>

                    <div className="grid gap-4 md:gap-6 sm:grid-cols-2 mb-6 md:mb-8">
                      {[
                        {
                          title: "Primera Consulta",
                          description:
                            "Evaluación completa de 90 minutos para entender tu historial, síntomas y necesidades específicas.",
                        },
                        {
                          title: "Seguimiento",
                          description:
                            "Consultas de 45 minutos para evaluar progreso y ajustar el tratamiento según sea necesario.",
                        },
                        {
                          title: "Consulta Urgente",
                          description:
                            "Atención prioritaria para condiciones agudas que requieren intervención inmediata.",
                        },
                        {
                          title: "Consulta Online",
                          description:
                            "Opción de videoconsulta para pacientes que no pueden asistir presencialmente.",
                        },
                      ].map((item, i) => (
                        <Card key={i} className="border-blue-100">
                          <CardContent className="p-4 md:p-6">
                            <h4 className="text-sm md:text-base font-semibold mb-1 md:mb-2 text-blue-900">
                              {item.title}
                            </h4>
                            <p className="text-xs md:text-sm text-slate-600">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 md:p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl md:rounded-3xl text-white">
                        <div className="mb-4 sm:mb-0">
                          <p className="text-blue-100 text-sm">Desde</p>
                          <p className="text-xl md:text-2xl font-bold">$800 MXN</p>
                        </div>
                        <Link href="/agendar-cita" className="w-full sm:w-auto">
                          <Button className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50">
                            Agendar Cita
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Las otras pestañas de TabsContent (terapias y programas) también deben ajustarse siguiendo
              el mismo patrón que aplicamos a la pestaña 'consulta' */}

            </Tabs>
          </div>
        </section>

        {/* FAQ Section - Ajustes para móvil */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                <Droplet className="w-3.5 h-3.5 mr-1.5" />
                <span>Preguntas Frecuentes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-blue-900">
                Resolvemos Tus Dudas
              </h2>
              <p className="text-base md:text-lg text-slate-600">
                Encuentra respuestas a las preguntas más comunes sobre nuestros
                servicios y la medicina homeopática en general.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
                {[
                  {
                    question: "¿Qué es la homeopatía y cómo funciona?",
                    answer:
                      "La homeopatía es un sistema médico holístico que utiliza sustancias naturales altamente diluidas para estimular el propio mecanismo de curación del cuerpo. Funciona según el principio de 'lo similar cura lo similar', donde una sustancia que causa síntomas en una persona sana puede, en dosis mínimas, tratar síntomas similares en una persona enferma.",
                  },
                  {
                    question: "¿La homeopatía tiene efectos secundarios?",
                    answer:
                      "La homeopatía utiliza sustancias naturales en dosis extremadamente diluidas, por lo que rara vez causa efectos secundarios. Es generalmente segura para personas de todas las edades, incluyendo bebés, mujeres embarazadas y adultos mayores. En algunos casos, puede haber una agravación temporal de los síntomas al inicio del tratamiento, lo que suele ser señal de que el cuerpo está respondiendo positivamente.",
                  },
                  {
                    question:
                      "¿Cuánto tiempo tarda en hacer efecto un tratamiento homeopático?",
                    answer:
                      "El tiempo de respuesta varía según cada persona y condición. Algunas afecciones agudas pueden mostrar mejoras en horas o días, mientras que condiciones crónicas pueden requerir semanas o meses. La homeopatía trabaja estimulando el proceso natural de curación del cuerpo, lo que puede tomar tiempo, especialmente en condiciones de larga duración.",
                  },
                  {
                    question:
                      "¿Puedo combinar la homeopatía con medicamentos convencionales?",
                    answer:
                      "Sí, la homeopatía puede utilizarse junto con medicamentos convencionales. Sin embargo, es importante informar a todos tus profesionales de salud sobre los tratamientos que estás siguiendo. Nunca debes suspender medicamentos recetados sin consultar primero con el médico que te los prescribió.",
                  },
                  {
                    question: "¿Cómo debo tomar los remedios homeopáticos?",
                    answer:
                      "Los remedios homeopáticos generalmente se toman por vía sublingual (debajo de la lengua) y deben evitarse alimentos, bebidas y productos con mentol (como pasta de dientes o mentas) 15-30 minutos antes y después de tomarlos. Se recomiendan almacenarlos en un lugar fresco y seco, lejos de campos electromagnéticos fuertes y aromas intensos.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border border-blue-100 rounded-xl md:rounded-2xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 hover:no-underline hover:bg-blue-50/50 text-left text-sm md:text-base font-medium text-blue-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="text-center mt-8 md:mt-12">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center text-sm md:text-base text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  <span>¿Tienes más preguntas? Contáctanos</span>
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Link>
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
                  ¿Listo para comenzar tu viaje hacia el bienestar natural?
                </h3>
                <p className="text-blue-100 text-sm md:text-lg">
                  Agenda tu primera consulta hoy y da el primer paso hacia una
                  vida más saludable y equilibrada.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <Button className="w-full md:w-auto bg-white text-blue-700 hover:bg-blue-50 rounded-full py-4 md:py-6 px-6 md:px-8 shadow-lg hover:shadow-xl transition-all duration-300">
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