import { Scales, HandHeart, Star, Atom } from "@phosphor-icons/react"

function Sobre() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#eeeeee] p-10">


            <div className="container flex justify-center ">
                <div className="hidden lg:block container w-[20%]">

                </div>

                <div className="md:w-[70%] container rounded-2xl shadow-xl p-5 min-h-130 bg-[#171515] flex flex-col items-center content-center justify-center relative">
                    <div className="hidden lg:block w-128 rounded-full overflow-hidden outline-[#eeeeee] outline-17 absolute left-[-25%]">
                        <img
                            src="https://ik.imagekit.io/madsik/REACT/documento-1.svg?updatedAt=1740520723377"
                            className=""
                        />
                    </div>
                    <div className="p-2 lg:pl-87 text-center">
                        <h2 className="text-3xl font-bold text-[#00FCE7]">Group Two</h2>
                        <p className="mt-4 text-gray-300">
                            Bem-vindo à Goup Two, sua parceira estratégica em Recursos Humanos. Com uma abordagem inovadora e focada em pessoas, ajudamos empresas a encontrar, desenvolver e reter talentos que impulsionam o crescimento dos negócios.
                        </p>
                    </div>

                </div>
            </div>


            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Valores</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="min-h-80 max-w-70 bg-[#D9D9D9] p-6 shadow-[6px_6px_15px_0px_rgba(0,_0,_0,_0.4)] rounded-tr-[2rem] rounded-bl-[2rem] flex flex-col justify-center">
                        <div className="flex justify-center pb-3 text-[#008177]">
                            <Scales size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Ética e Transparência</h3>
                        <p className="text-gray-600 mt-2">Compromisso com a honestidade e a clareza em todas as interações.</p>
                    </div>


                    <div className="min-h-80 max-w-70 bg-[#D9D9D9] p-6 shadow-[6px_6px_15px_0px_rgba(0,_0,_0,_0.4)] rounded-tr-[2rem] rounded-bl-[2rem] flex flex-col justify-center">
                        <div className="flex justify-center pb-3 text-[#008177]">
                            <HandHeart size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Respeito e Diversidade</h3>
                        <p className="text-gray-600 mt-2">Valorização das diferenças e inclusão de todos os perfis.</p>
                    </div>


                    <div className="min-h-80 max-w-70 bg-[#D9D9D9] p-6 shadow-[6px_6px_15px_0px_rgba(0,_0,_0,_0.4)] rounded-tr-[2rem] rounded-bl-[2rem] flex flex-col justify-center">
                        <div className="flex justify-center pb-3 text-[#008177]">
                            <Star size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Compromisso com o Cliente</h3>
                        <p className="text-gray-600 mt-2">Foco em oferecer as melhores soluções para empresas e candidatos.</p>
                    </div>


                    <div className="min-h-80 max-w-70 bg-[#D9D9D9] p-6 shadow-[6px_6px_15px_0px_rgba(0,_0,_0,_0.4)] rounded-tr-[2rem] rounded-bl-[2rem] flex flex-col justify-center">
                        <div className="flex justify-center pb-3 text-[#008177]">
                            <Atom size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Inovação e Tecnologia</h3>
                        <p className="text-gray-600 mt-2">Utilização de novas ferramentas e metodologias para otimizar processos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;