import { PencilLine, Trash } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import Colaborador from "../../../mocks/Colaborador";

interface ColaboradorCardProps {
    colaborador: Colaborador;
}

function ColaboradorCard({colaborador}: ColaboradorCardProps){
    return (
        <>
            <div className="flex flex-col items-center p-6 bg-[#D9D9D9]  min-w-sm rounded-bl-[2rem] rounded-tr-[2rem] shadow-[6px_6px_15px_0px_rgba(0,_0,_0,_0.4)] max-sm:mx-6">
                <div className="flex w-full flex-col ">
                    <div className="flex justify-center flex-col gap-1">
                        <img className="rounded-full w-30 border-3 border-[#EEEEEE]" src={colaborador.image} alt="" />
                    </div>
                    <div className="flex flex-col justify-start w-full gap-2 text-left py-4 ">
                            <h2 className="font-semibold text-lg">{colaborador.nome}</h2>
                            <p>Nascimento: {colaborador.nascimento}</p>
                            <p>Admissão: {colaborador.admissao}</p>
                            <p>Cargo: {colaborador.cargo}</p>
                            <p>Salário: {colaborador.salario}</p>
                    </div>
                    
                    <div className="flex justify-end w-full text-right gap-8 text-[#008177] ">
                        <Link to={""}><PencilLine size={22} className="transition-transform duration-300 hover:scale-120"/></Link>
                        <Link to={""}><Trash size={22} className="transition-transform duration-300 hover:scale-120"/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColaboradorCard
