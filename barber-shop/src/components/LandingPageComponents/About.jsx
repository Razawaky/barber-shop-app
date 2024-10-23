import Barber from "../../assets/image/pexels-pavel-danilyuk-7518742.jpg";

export default function AboutComponent() {
  return (
    <>
        <div className="mx-auto px-6 py-6 h-screen">
            <div className="flex flex-col md:flex-row items-center justify-start">
                <div className="mb-8 md:mb-0">
                    <img src={Barber} alt="Barber Shop" className="w-[50vh] h-auto object-cover rounded-lg shadow-lg mx-10" />
                </div>
                <div className="md:w-[30%] text-left">
                    <h1 className="text-3xl font-bold mb-4 text-left">UM NOVO CONCEITO DE CUIDADO E ESTILO PESSOAL</h1>
                    <p className="text-gray-600 mb-6 text-left">
                        Nulla egestas sapien integer mi fermentum tellus tristique consequat. Pulvinar sagittis adipiscing sapien 
                        purus at mi tempus semper id vel. Pretium magna in egestas sit egestas justo.
                    </p>

                <div className="flex gap-16">     
                    <div className="md:flex-row items-start md:items-center mb-8">
                        <div className="text-5xl font-semibold mb-2">1000+</div>
                        <p>CLIENTES <br /> 
                            SATISFEITOS
                        </p>
                    </div>

                    <div className="">    
                        <div className="text-5xl font-semibold mb-2">X</div>
                            <p>ANOS DE <br />
                                EXPERIÊNCIA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
