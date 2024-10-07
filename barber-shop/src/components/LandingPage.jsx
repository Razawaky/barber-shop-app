import './LandingPage.css';

function LandingPage() {
    return (
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
    );
  }
  
  export default LandingPage;