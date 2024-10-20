export default function Footer() {
  return (
    <footer className="!bg-white !text-black min-h-[250px] space-y-4">  
            <div className="container mx-auto px-4 py-8">
                {/* Primeira section  */}
                <div className="flex justify-between items-center border-b border-black pb-8 mb-8">
                    <div> 
                        <h1 className="text-4xl">LOGO</h1>
                        {/* <div class="flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 20.5a3.375 3.375 0 0 1-7.5 0C6.375 20.5 0 8.375 0 3.125 0 0.625 0.625 0 3.125 0h19.75c-.625 0-.875.625-.875 1.375S22.875 24 21 24zm-3.25-10a3.375 3.375 0 1 1 7.5 0" />
                            </svg>
                            Repita o SVG para mais 3 ícones 
                        </div>  */}
                    </div>

                    <div className="w-full max-w-md"> {/* input header */} 
                        <input
                            id='messageInput'
                            type="text" 
                            placeholder="Digite sua mensagem..." 
                            className="w-full px-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-slate-900 text-white">
                        </input>
                    </div>
                </div>

                {/* Segunda seção */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 border-b border-black pb-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Seção 1</h3>
                    <ul>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 1</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 2</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 3</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Seção 2</h3>
                    <ul>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 1</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 2</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 3</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Seção 3</h3>
                    <ul>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 1</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 2</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 3</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Seção 4</h3>
                    <ul>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 1</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 2</a></li>
                        <li><a href="#" className="block py-2 hover:text-blue-600">Link 3</a></li>
                    </ul>
                </div>
                </div> 
                {/* Terceira seção  */}
                <div className="text-center">
                    <p>&copy; 2023 Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
  );
}
