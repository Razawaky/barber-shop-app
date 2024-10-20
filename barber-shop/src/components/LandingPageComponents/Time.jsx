import { useState } from 'react';
import Modelo from '../../assets/image/modelo.jpg';
import Img from '../../assets/image/portifolio2.jpeg';

export default function Time() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages] = useState(3); // Número de páginas total

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <section className="our-time">
        <div className="container bg-white max-w-full mb-80 mx-auto px-8 py-2 h-[30vh] flex justify-between items-center">
            <div className="w-[50%]">
            <h2 className="text-xl text-black">Acompanhe nossa equipe</h2>
            <button 
                onClick={handleNextImage} 
                className="mt-6 mb-2 bg-black text-white rounded-[10px] w-48 h-8 self-start flex justify-center p-1">
                Planos
            </button>
            </div>

            <div className="md:w-[45%] flex justify-around items-center md:space-x-4">
            <div className="aspect-square rounded-full overflow-hidden w-[18vh]">
                <img src={Img} alt="" className="object-cover object-center w-full h-full rounded-full" />
            </div> 
            <div className="aspect-square rounded-full overflow-hidden w-[24vh]">
                <img src={Modelo} alt="" className="object-cover object-center w-full h-full rounded-full" />
            </div>  
            <div className="aspect-square rounded-full overflow-hidden w-[18vh]">
                <img src={Img} alt="" className="object-cover object-center w-full h-full rounded-full" />
            </div>    
            </div>

            {/* Indicadores de slide */}
            <div className="flex justify-center space-x-2 mt-4">
                {[...Array(totalPages)].map((_, index) => (
                    <span 
                    key={index} 
                    className={`w-4 h-4 bg-gray-800 rounded-full cursor-pointer ${
                    currentIndex === index ? 'bg-white' : ''}`}></span>
                ))}
            </div>

            <div className="bg-black rounded w-[50px]"></div>
            
        </div>
    </section>
  );
}