// import LoginPage from './LoginPage';
import Calendar from './CalendarComponents/CalendarComponent';
import './LandingPage.css';
import Banner from "../assets/image/Untitled229.png";
import Barber from "../assets/image/sobre.png";
import HeaderBanner from './LandingPageComponents/HeaderBanner'; 
import Services from './LandingPageComponents/Services';
import Time from './LandingPageComponents/Time';
import Portifolio from './LandingPageComponents/Portifolio';
import Footer from './LandingPageComponents/Footer';

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

        <HeaderBanner title={'Meu titulo'} 
        description='Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem loremLorem lorem lorem lorem' />
        {/* banner */}

        {/* SERVICES */}
            <Services />
        {/* SERVICES */}
        
        {/* Time */}
        <Time />
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
            <Portifolio />
        {/* Portifolio*/}

        {/* Rodapé */}
            <Footer />
        {/* footer */}

        {/* Login page review */}
        <div className="bg-black min-h-screen flex items-center justify-center mt-30">
            <div className="bg-black p-8 rounded-lg shadow-md max-w-sm w-full border">
                <h1 className="text-2xl font-bold mb-4">Welcome to Our Barber Shop</h1>
                <p className="text-xl mb-6">Book your appointment today!</p>
                    <Calendar />
            </div>
        </div>
        {/* <LoginPage /> */}
    </>                               
    );
}
  
  export default LandingPage;