import ImagemMan from '../../assets/image/ImageManCard.jpg';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom'


export default function WorkmanCard() {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate()

  const showSwal = () => {
    MySwal.fire({
      icon: 'success', // Ícone de sucesso
      title: 'Sucesso!',
      text: 'Você chamou Michael Forst com sucesso!', // Mensagem personalizada
      confirmButtonText: 'Ok', // Texto do botão
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/'); // Redireciona para a nova página
      }
    })
  }
    
   return (
      <>
        <div className="h-screen flex items-center justify-center mb-28">
          <div className="max-w-auto border rounded-lg shadow bg-gray-800 border-gray-700">
              <div className="flex flex-col items-center p-14">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={ImagemMan} alt="Image"/>
                  <h5 className="mb-1 text-xl font-medium text-white">Michael Forst</h5>
                  <span className="text-sm text-gray-400">Barbeiro</span>
                  <div className="flex mt-4 md:mt-6">
                    <a href="#" onClick={showSwal} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Chamar
                    </a>
                  </div>
              </div>
          </div>

          <div className="max-w-auto border rounded-lg shadow bg-gray-800 border-gray-700 ml-6 mr-6">
              <div className="flex flex-col items-center p-14">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={ImagemMan} alt="Image"/>
                  <h5 className="mb-1 text-xl font-medium text-white">Michael Forst</h5>
                  <span className="text-sm text-gray-400">Barbeiro</span>
                  <div className="flex mt-4 md:mt-6">
                    <a href="#" onClick={showSwal} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Chamar
                    </a>
                  </div>
              </div>
          </div>

          <div className="max-w-auto border rounded-lg shadow bg-gray-800 border-gray-700">
              <div className="flex flex-col items-center p-14">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={ImagemMan} alt="Image"/>
                  <h5 className="mb-1 text-xl font-medium text-white">Michael Forst</h5>
                  <span className="text-sm text-gray-400">Barbeiro</span>
                  <div className="flex mt-4 md:mt-6">
                    <a href="#" onClick={showSwal} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Chamar
                    </a>
                  </div>
              </div>
          </div>
        </div>

        
      </>
  )
}
