import Exemplo from "../../assets/image/portifólio1.jpg";

export default function Portifolio() {
  return (
    <div className="flex justify-center items-center min-h-screen mt-40 mb-40">
        <div className="grid grid-cols-3 gap-6">
            <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
            <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
            <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
            <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
            <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
            <div className="w-[240px]"><img className="rounded-md" src={Exemplo} /></div>
        </div>
    </div>
  )
}
