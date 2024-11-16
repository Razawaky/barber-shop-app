import './LandingPage.css';
import Banner from "../assets/image/Untitled229.png";
// import Barber from "../assets/image/sobre.png";
import HeaderBanner from '../components/LandingPageComponents/HeaderBanner';
import Services from '../components/LandingPageComponents/Services';
import Time from '../components/LandingPageComponents/Time';
import Portifolio from '../components/LandingPageComponents/Portifolio';
import Footer from '../components/LandingPageComponents/Footer';
import AboutComponent from '../components/LandingPageComponents/About'

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
            <AboutComponent />
        {/* About */}

        {/* Portifolio*/}
            <Portifolio />
        {/* Portifolio*/}

        {/* Rodapé */}
            <Footer />
        {/* footer */}
    </>                               
    );
}
  
  export default LandingPage;