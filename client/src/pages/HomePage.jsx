import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-red-200 flex flex-col justify-between items-center h-screen">
      <header className="bg-zinc-800 p-10 rounded-lg text-center mt-5">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img
            src="/Tareas.png"
            alt="Logo"
            className="h-16 w-16 rounded-full"
          />
          <h1 className="text-5xl py-2 font-bold text-white">Tareas</h1>
        </div>
        <p className="text-md text-slate-400">
          Aplicación web de gestión de tareas (CRUD) con autenticación completa.
          Los usuarios podrán registrarse, iniciar sesión y gestionar sus tareas personales.
        </p>

        <Link
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-zinc-600"
          to="/register"
        >
          Empezar
        </Link>
      </header>

      <footer className="bg-zinc-800 text-white py-4 text-center mt-5 rounded-lg"></footer>
    </section>
  );
}

export default HomePage;
