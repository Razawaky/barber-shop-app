// Precisei instalar as dependencias do prop-types
import PropTypes from 'prop-types';

function HeaderBanner({title, description}) { //desmembrando o prop

  HeaderBanner.propTypes = {              //Validando o propType para o Componente
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <>
    <div className="absolute inset-y-0 right-0 w-[34%] bg-opacity-50 bg-black flex text-right items-center justify-start pl-8 p-4 blur-lg"> </div>

    <div className="absolute inset-y-0 right-0 w-[36%] bg-opacity-50 flex text-right items-center justify-start pl-8 p-8 backdrop-blur-[3.5px]">
      <div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <button className="bg-transparent text-white px-10 py-1 rounded-[3px] border-white border-1">Saiba Mais</button>
      </div>
    </div>
    </>
  );
};

export default HeaderBanner;