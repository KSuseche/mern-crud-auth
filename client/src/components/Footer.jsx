function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-white py-4 text-center mt-5 rounded-lg">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-sm">
          © {currentYear} Administrador de Tareas. Todos los derechos reservados.
        </p>
        <p className="text-sm">
          <a
            href="/privacy"
            className="text-blue-400 hover:underline"
          >
            Términos de Privacidad
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
