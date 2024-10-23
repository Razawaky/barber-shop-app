import { useState } from 'react';
import Modelo from '../../assets/image/modelo.jpg';

export default function Time() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages] = useState(4); // Número de páginas total

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <section className="our-time sm:w-full">
        <div className="container bg-white max-w-full mb-80 mx-auto px-12 py-2 h-[34vh] flex justify-between items-center">
            <div className="w-full">  {/* Info Container */}
                <h2 className="text-4xl text-black">Acompanhe nossa equipe</h2>
                <button 
                    onClick={handleNextImage} 
                    className="mt-6 mb-2 bg-black text-white text-xl rounded-[10px] w-48 flex justify-center py-[2px]">
                    Planos
                </button>
            </div>

            <div className="container md:w-[50%] p-6">

                {/* Fotos container */}
                <div className="flex justify-center items-center md:space-x-6">
                    <div className="aspect-square rounded-full overflow-hidden w-[18vh] border-2 border-black">
                        <img src={Modelo} alt="" className="object-cover object-center w-full h-full rounded-full" />
                    </div> 
                    <div className="aspect-square rounded-full overflow-hidden w-[24vh] border-2 border-black">
                        <img src={Modelo} alt="" className="object-cover object-center w-full h-full rounded-full" />
                    </div>  
                    <div className="aspect-square rounded-full overflow-hidden w-[18vh] border-2 border-black">
                        <img src={Modelo} alt="" className="object-cover object-center w-full h-full rounded-full" />
                    </div>    
                </div>

                {/* Indicadores de slide */}
                <div className="flex justify-center space-x-2 mt-5">
                    {[...Array(totalPages)].map((_, index) => (
                        <span 
                        key={index} 
                        className={`w-4 h-4 bg-gray-800 rounded-full cursor-pointer ${
                        currentIndex === index ? 'bg-white' : ''}`}></span>
                    ))}
                </div>

                <div className="bg-black rounded w-[50px]"></div>
            </div>
            
        </div>
    </section>
  );
}