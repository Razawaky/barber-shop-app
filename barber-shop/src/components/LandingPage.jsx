import './LandingPage.css';
import Banner from "../assets/image/Untitled229.png";
import Barber from "../assets/image/sobre.png";
import Exemplo from "../assets/image/portifólio1.jpg";

function LandingPage() {
    return (
    <>
        {/* NavBar */}
        <nav className="navbar bg-black fixed navbar-expand-lg w-full z-20 top-0 start-0 px-2 py-2 rounded-b-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse text-white">
                    <div className="text-xl">
                        LOGO
                    </div>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="inline-flex font-medium px-5 py-1 rounded border border-inherit">
                        CONHECER
                    </button>      
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded md:p-0">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* NavBar */}

        {/* banner */}
        <div className="relative banner-container bg-cover bg-center min-h-screen bg-no-repeat relative overflow-hidden">
            <img src={Banner} alt="Main_Banner" className="object-cover object-center w-full h-screen rounded-b-lg bg-fixed" />
        </div>
        {/* banner */}
                                            {/* SERVICES */}
        <section className="cards-services">
            <div className="h-screen flex items-center justify-center mb-28">
                <div className="w-full max-w-4xl px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-28">
                        <div className="card_container w-full sm:w-64 md:w-80 p-4 bg-black text-white border rounded-lg">
                            <div className="flex flex-col h-[560px]">
                                <div className="flex-grow">
                                        <h1 className="mt-5">Plano 2</h1>
                                    <div className="">
                                        <p className="mt-4">Serviço completo e pensado para você</p>
                                        <h1 className="text-3xl mt-8">R$ X/MÊS</h1>
                                        <ul className="mt-8">
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="mt-6 mb-2 bg-white text-black rounded-full w-full h-10 self-start">
                                    Comprar
                                </button>
                            </div>
                        </div>

                        <div className="card_container w-full sm:w-64 md:w-80 p-4 bg-black text-white border rounded-lg">
                            <div className="flex flex-col h-full">
                                <div className="flex-grow">
                                    <div className="header flex justify-between items-center">
                                        <h1 className="mt-5">Plano 1</h1>
                                        <button className="mt-4 bg-black text-white text-sm rounded-full w-28 h-8 flex items-center justify-center border hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                                            Popular
                                        </button>
                                    </div>
                                    <div className="">
                                        <p className="mt-4">Serviço completo e pensado para você</p>
                                        <h1 className="text-3xl mt-8">R$ X/MÊS</h1>
                                        <ul className="mt-8">
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="mt-6 mb-2 bg-white text-black rounded-full w-full h-10 self-start">
                                    Comprar
                                </button>
                            </div>
                        </div>

                        <div className="card_container w-full sm:w-64 md:w-80 p-4 bg-black text-white border rounded-lg">
                            <div className="flex flex-col h-full">
                                <div className="flex-grow">
                                        <h1 className="mt-5">Plano 3</h1>
                                    <div className="">
                                        <p className="mt-4">Serviço completo e pensado para você</p>
                                        <h1 className="text-3xl mt-8">R$ X/MÊS</h1>
                                        <ul className="mt-8">
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                            <li className="py-1">Lorem ipsum dolor sit amet.</li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="mt-6 mb-2 bg-white text-black rounded-full w-full h-10 self-start">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* SERVICES */}
        
        {/* Time */}
        <section className="our-time">
            <div className="conainer bg-white w-full mb-80 mx-auto px-8 py-2 h-[30vh] flex justify-between items-center">
                <div className="w-1/2">
                    <h2 className="text-xl text-black">Acompanhe nossa equipe</h2>
                    <button className="mt-6 mb-2 bg-black text-white rounded-full w-48 h-10 self-start p-0">
                        Planos
                    </button>
                </div>

                <div className="w-1/2">
                    <h2 className="text-xl text-black">Acompanhe nossa equipe</h2>
                    <button className="mt-6 mb-2 bg-black text-white rounded-full w-48 h-10 self-start p-0">
                        Planos
                    </button>
                </div>
            </div>
        </section>
        {/* Time */}

        {/* About */}
                    <div className="container-sobre">
                        <div className="imagem-sobre">
                            <img src={Barber} alt="Barber Shop" />
                        </div>
                        <div className="texto1-sobre">
                            <h1>UM NOVO CONCEITO DE CUIDADO E ESTILO PESSOAL</h1>
                            <p>
                                Nulla egestas sapien integer mi fermentum tellus tristique consequat. Pulvinar sagittis adipiscing sapien
                                purus at mi tempus semper id vel. Pretium magna in egestas sit egestas justo.
                            </p>
                            <div className="texto2-sobre">
                                <div>
                                    <h2>1000+</h2>
                                    <p>CLIENTES SATISFEITOS</p>
                                </div>
                                <div>
                                    <h2>X</h2>
                                    <p>ANOS DE EXPERIÊNCIA</p>
                                </div>
                            </div>
                        </div>
                    </div>
        {/* About */}

        {/* Portifolio*/}
        <div className="flex justify-center items-center min-h-screen mt-40 mb-40">
            <div className="grid grid-cols-3 gap-6">
                <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
                <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
                <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
                <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
                <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
                <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
            </div>
        </div>
        {/* Portifolio*/}
                                    {/* Rodapé */}
        <footer className="!bg-white !text-black min-h-[250px] space-y-4">  {/* RODAPÉ */}
            <div className="container mx-auto px-4 py-8">
                {/* Primeira section  */}
                <div className="flex justify-between items-center border-b border-black pb-8 mb-8">
                    <div> 
                        <h1 className="text-4xl">LOGO</h1>
                        {/* <div class="flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 20.5a3.375 3.375 0 0 1-7.5 0C6.375 20.5 0 8.375 0 3.125 0 0.625 0.625 0 3.125 0h19.75c-.625 0-.875.625-.875 1.375S22.875 24 21 24zm-3.25-10a3.375 3.375 0 1 1 7.5 0" />
                            </svg>
                            Repita o SVG para mais 3 ícones 
                        </div>  */}
                    </div>

                    <div className="w-full max-w-md"> {/* input header */} 
                        <input
                            id='messageInput'
                            type="text" 
                            placeholder="Digite sua mensagem..." 
                            className="w-full px-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-slate-900 text-white">
                        </input>
                    </div>
                </div>

                {/* Segunda seção */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 border-b border-black pb-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Seção 1</h3>
                    <ul>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 1</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 2</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 3</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Seção 2</h3>
                    <ul>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 1</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 2</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 3</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Seção 3</h3>
                    <ul>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 1</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 2</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 3</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Seção 4</h3>
                    <ul>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 1</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 2</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 3</a></li>
                    </ul>
                </div>
                </div> 
                {/* Terceira seção  */}
                <div className="text-center">
                    <p>&copy; 2023 Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    </>                               
    );
}
  
  export default LandingPage;