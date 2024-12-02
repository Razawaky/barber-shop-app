import './LandingPage.css';
import Banner from "../assets/image/Untitled229.png";
// import Barber from "../assets/image/sobre.png";
import HeaderBanner from '../components/LandingPageComponents/HeaderBanner';
import Services from '../components/LandingPageComponents/Services';
import Time from '../components/LandingPageComponents/Time';
import Portifolio from '../components/LandingPageComponents/Portifolio';
import Footer from '../components/LandingPageComponents/Footer';
import AboutComponent from '../components/LandingPageComponents/About'
import NavBar from '../components/LandingPageComponents/NavBar';

function LandingPage() {
    return (
    <>
        {/* NavBar */}
                <NavBar />
        {/* NavBar */}

        {/* banner */}
        <div className="relative banner-container bg-cover bg-center min-h-screen bg-no-repeat relative overflow-hidden">
            <img src={Banner} alt="Main_Banner" className="object-cover object-center w-full h-screen rounded-b-lg bg-fixed" />
        </div>

        <HeaderBanner title={'Um novo Conceito de Barbearia | A experiência que você merece'}

        description='Descubra um ambiente onde a tradição e inovação se encontram. Nossa barbearia oferece serviços exclusivos, 
                    técnicas modernas e um atendimento personalizado para transformar sua rotina de cuidados. Venha conhecer o espaço 
                    onde cada detalhe é pensado para proporcionar a melhor experiência para você.' />
        {/* banner */}

        {/* SERVICES */}
            <div id="servicos">
                <Services />
            </div>
        {/* SERVICES */}
        
        {/* Time */}
            <div id='time' className='h-screen'>
                <Time />
            </div>
            
        {/* Time */}

        {/* About */}
             <div id='sobre'>
                <AboutComponent />
             </div>
            
        {/* About */}

        {/* Portifolio*/}
         <div id='folio'>
            <Portifolio />
         </div>
        {/* Portifolio*/}

        {/* Rodapé */}
            <Footer />
        {/* footer */}
    </>                               
    );
}
  
  export default LandingPage;