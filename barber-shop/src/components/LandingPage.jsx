import './LandingPage.css';

function LandingPage() {
    return (
    <>
        {/* Header */}
        <div className="bg-black">
            <div className="container mx-auto px-4 py-5 flex items-center justify-between w-screen">
                <div className="text-xl">
                    LOGO
                </div>

                <ul className="flex items-center space-x-10">
                    <li>
                        <a href="" className="text-sm text-white hover:text-gray-400 hover:underline">HOME</a>
                    </li>

                    <li>
                        <a href="" className="text-sm text-white hover:text-gray-400 hover:underline">SERVIÇOS</a>
                    </li>

                    <li>
                        <a href="" className="text-sm text-white hover:text-gray-400 hover:underline">TIME</a>
                    </li>
                        
                    <li>
                        <a href="" className="text-sm text-white hover:text-gray-400 hover:underline">SOBRE</a>
                    </li>

                    <li>
                        <a href="" className="text-sm text-white hover:text-gray-400 hover:underline">PORTIFÓLIO</a>
                    </li>
                </ul>

                <a href="" className="inline-flex font-medium px-5 py-1.5 rounded border border-inherit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth= "1.5" stroke="currentColor" className="size-6 mr-2 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    PLANOS
                </a>
            </div>
        </div>
        {/* Header */}
        <nav className="bg-black fixed w-full z-20 top-0 start-0 px-2 py-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse text-white">
                    <div className="text-xl">
                        LOGO
                    </div>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li>
                        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* banner */}
        {/* <div className="banner-container bg-cover bg-center min-h-screen bg-no-repeat">
            <div style="background-image: url('img/Untitled229.png');" className="w-full h-[100vh] bg-cover bg-center">
                <div className="container mx-auto px-4 h-full flex items-center justify-end">
                    <div className="text-right">
                        <h1 className="text-white text-3xl mb-2">Um novo Conceito de Babearia</h1>
                        <p className="text-white mb-2">A experiência que você merece</p>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error 
                            <br/> iusto voluptatem deserunt commodi sint exercitationem sunt maxime,<br/> sit ut atque tempora, neque, voluptas distinctio nobis culpa eius. Autem,<br/> 
                            numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Modi fugit sit suscipit dignissimos. Adipisci natus, tempora doloremque <br/> facilis provident assumenda magnam? Harum eaque
                        </p>
                        <div className="mt-7">
                            <form>
                                <button className="inline-flex font-medium px-5 py-1 rounded border border-inherit">
                                    CONHECER
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
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

            <div>

            </div>
        </section>          
                                    {/* Começo de outra sessão */}
        <section className="our-time">
            <div className="conainer bg-white mb-80 w-full h-[30vh] p-4">
                <div>
                    <h2>Acompanhe nossa equipe</h2>
                    <button className="mt-6 mb-2 bg-black text-white rounded-full w-48 h-10 self-start p-0">
                        Comprar
                    </button>
                </div>
            </div>
        </section>

        {/* About */}
        <div className="container-sobre">
            <div className="imagem-sobre">
                <img src="/src/img/sobre.png" alt="Barber Shop" />
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
        {/* Portifolio*/}
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-3 gap-6">
                <div className="w-[280px]"><img className="rounded-md" src="img/imagem-exemplo.png" /></div>
                <div className="w-[280px]"><img className="rounded-md" src="img/imagem-exemplo.png" /></div>
                <div className="w-[280px]"><img className="rounded-md" src="img/imagem-exemplo.png" /></div>
                <div className="w-[280px]"><img className="rounded-md" src="img/imagem-exemplo.png" /></div>
                <div className="w-[280px]"><img className="rounded-md" src="img/imagem-exemplo.png" /></div>
                <div className="w-[280px]"><img className="rounded-md" src="img/imagem-exemplo.png" /></div>
            </div>
        </div>
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
                            className="w-full px-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-slate-900">
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