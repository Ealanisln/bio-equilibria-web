// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full py-12 bg-white border-t border-blue-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Logo y Descripción */}
          <div className="space-y-4">
            {/* ====> ESTA ES LA PARTE CON EL LOGO <==== */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative w-10 h-10 mr-2 flex items-center justify-center">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Bio Equilibria Logo"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Bio Equilibria
              </span>
            </Link>
            {/* ====> FIN DE LA PARTE CON EL LOGO <==== */}
            <p className="text-slate-600">
              Medicina homeopática personalizada para restaurar tu equilibrio
              natural y bienestar.
            </p>
            {/* Iconos Redes Sociales */}
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                {/* Facebook Icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                {/* Instagram Icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                {/* YouTube Icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-900">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-900">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/consulta-homeopatica"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Consulta Homeopática
                </Link>
              </li>
              <li>
                <Link
                  href="/terapias-naturales"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Terapias Naturales
                </Link>
              </li>
              <li>
                <Link
                  href="/seguimiento"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Seguimiento Personalizado
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horario */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-900">
              Horario de Atención
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-600">Lunes - Viernes: 9:00 - 18:00</li>
              <li className="text-slate-600">Sábados: 9:00 - 14:00</li>
              <li className="text-slate-600">Domingos: Cerrado</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/agendar"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Agendar una cita →
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright y Enlaces Legales */}
        <div className="pt-8 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Bio Equilibria. Todos los derechos
            reservados.
            {/* Usamos new Date().getFullYear() para que el año se actualice automáticamente */}
          </p>
          <nav className="flex gap-6">
            <Link
              className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              href="/terminos"
            >
              Términos y Condiciones
            </Link>
            <Link
              className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              href="/privacidad"
            >
              Política de Privacidad
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Puedes usar export default o export const según tu preferencia
