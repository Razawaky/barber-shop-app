import Modelo from '../../assets/image/modelo.jpg';

export default function Time() {
  return (
    <section className="our-time">
        <div className="conainer bg-white w-full mb-80 mx-auto px-8 py-2 h-[30vh] flex justify-between items-center">
            <div className="w-[50%]">
                <h2 className="text-xl text-black">Acompanhe nossa equipe</h2>
                <button className="mt-6 mb-2 bg-black text-white rounded-[10px] w-48 h-8 self-start flex justify-center p-1">
                    Planos
                </button>
            </div>

            <div className="w-[50%] flex justify-around items-center">  {/*Slider*/}
                <div className="aspect-square rounded-full overflow-hidden w-[20vh]">
                    <img src={Modelo} alt="" className="object-cover object-center w-full h-full rounded-full" />    
                </div> 
                <div className="aspect-square rounded-full overflow-hidden w-[20vh]">
                    <img src={Modelo} alt="" className="object-cover object-center w-full h-full rounded-full" />    
                </div>  
                <div className="aspect-square rounded-full overflow-hidden w-[20vh]">
                    <img src={Modelo} alt="" className="object-cover object-center w-full h-full rounded-full" />    
                </div>    
            </div>

        </div>
    </section>
  );
}
