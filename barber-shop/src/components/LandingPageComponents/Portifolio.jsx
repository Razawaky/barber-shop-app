import Exemplo from "../../assets/image/foto2-1.jpg";

export default function Portifolio() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-40 mb-40">
      <h1 className="text-4xl mb-4">Portifólio</h1>
        <div className="grid grid-cols-4 gap-3">
          <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
          <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
          <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
          <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-2">
          <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
          <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
          <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
          <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
        </div>
    </div>

    
  )
}
