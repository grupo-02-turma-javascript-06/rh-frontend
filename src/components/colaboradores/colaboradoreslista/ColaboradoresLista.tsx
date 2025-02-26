import { MagnifyingGlass } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import ColaboradorCard from "./ColaboradoresCard"


function ColaboradorLista(){
    return (
        <>
            <div className="flex justify-center items-center flex-col h-full sm:p-1">
                <div className="container flex justify-between items-center py-4 gap-6 max-lg:mx-8 max-sm:flex-col">
                    <div className="text-2xl font-semibold max-lg:hidden">
                        <h2>Colaboradores</h2>
                    </div>
                    <div className="flex justify-center max-w-sm w-full">
                        <form className="flex justify-center items-center max-w-sm mx-auto w-full">   
                            <label htmlFor="search" className="sr-only">Search</label>
                            <div className="relative w-[60vw]">
                                <input type="text" id="simple-search" className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-bl-lg rounded-tr-lg w-full p-2.5  " placeholder="Pesquisar colaborador" required />
                            </div>
                            <div>
                                <button type="submit" className="inline-flex items-center p-2.5 ms-2 text-sm font-medium  text-[#171515] bg-[#02DFCD] rounded-full cursor-pointer">
                                    <MagnifyingGlass size={20}/>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <Link to="/" className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-bl-lg rounded-tr-lg bg-[#02DFCD] font-semibold">Cadastrar Colaborador</Link>
                    </div>
                </div>
                <div className="flex justify-center w-full my-10 ">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ColaboradorCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColaboradorLista