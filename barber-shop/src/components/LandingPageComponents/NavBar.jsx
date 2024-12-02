import { Link } from "react-router-dom"

function NavBar() {
  return (
    <>
        {/* NavBar */}
        <nav className="bg-black fixed w-full z-20 top-0 px-4 py-3 rounded-b-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 text-white">
            <div className="hover:scale-105 text-xl font-bold">LOGO</div>
            </a>

            {/* Botão de menu (aparece em telas pequenas) */}
            <button
            type="button"
            className="text-white inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg hover:bg-gray-700 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => document.getElementById('navbar-sticky').classList.toggle('hidden')}
            >
            <span className="sr-only">Abrir menu</span>
            <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
            </button>

            {/* Links do menu */}
            <div
            className="hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
            >
            <ul className="flex flex-col items-center md:flex-row p-4 md:p-0 mt-4 md:mt-0 bg-black md:bg-transparent rounded-lg md:space-x-8 font-medium border md:border-0">
                <li>
                <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
                >
                    Home
                </a>
                </li>
                <li>
                <a
                    href="#servicos"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
                >
                    Serviços
                </a>
                </li>
                
                <li>
                    <a
                        href="#time"
                        className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
                    >
                        Time
                    </a>
                </li>
                <li>
                <a
                    href="#sobre"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
                >
                    Sobre
                </a>
                </li>
                <li>
                <a
                    href="#folio"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
                >
                    Portifólio
                </a>
                </li>
            </ul>
            </div>

            {/* Botão extra (e.g., CONHECER) */}
            <div className="flex md:order-2">
            <button
                type="button"
                className="text-white font-medium px-5 py-2 rounded border border-gray-600 hover:bg-gray-700 hover:text-gray-300"
            >
                <Link className="" to="/login">Conhecer</Link>
            </button>
            </div>
        </div>
        </nav>
        {/* NavBar */}
    </>
  )
}

export default NavBar