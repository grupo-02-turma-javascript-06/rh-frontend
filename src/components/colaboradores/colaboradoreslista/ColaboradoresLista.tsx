import { Link } from "react-router-dom";
import ColaboradorCard from "./ColaboradoresCard";
import colaboradores from "../../../mocks/data.json";
import { useState } from "react";

function ColaboradorLista() {
  const [query, setQuery] = useState("");

  const filterColaboradores = colaboradores.filter((colaborador) =>
    colaborador.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center items-center flex-col h-full sm:p-1">
        <div className="container flex justify-between items-center py-4 gap-6 max-lg:mx-8 max-sm:flex-col">
          <div className="text-2xl font-semibold max-lg:hidden">
            <h2>Colaboradores</h2>
          </div>
          <div className="flex justify-center max-w-sm w-full">
            <form className="flex justify-center items-center max-w-sm mx-auto w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative w-[60vw]">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-bl-lg rounded-tr-lg w-full p-2.5"
                  placeholder="Pesquisar colaborador"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="transition-transform duration-300 hover:scale-120">
            <Link
              to="/colaboradores/store"
              className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-bl-lg rounded-tr-lg bg-[#02DFCD] font-semibold"
            >
              Cadastrar Colaborador
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-full my-10">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filterColaboradores.length > 0 ? (
                filterColaboradores.map((colaborador) => (
                  <ColaboradorCard key={colaborador.id} colaborador={colaborador} />
                ))
              ) : (
                <p className="text-center text-gray-500">Nenhum colaborador encontrado.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColaboradorLista;
