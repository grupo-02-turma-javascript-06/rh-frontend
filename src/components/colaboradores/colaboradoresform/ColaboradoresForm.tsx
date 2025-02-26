function ColaboradoresForm() { 
    return (
        <div className="h-auto min-h-screen flex items-center justify-center bg-[#EEEEEE]">
            <div className="w-full max-w-xl h-auto bg-[#D9D9D9] rounded-2xl shadow-lg p-16">
                <h2 className="text-3xl text-center text-gray-900">
                    Cadastrar Colaborador
                </h2>

                <form className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <label className="text-sm text-bg-black">Nome:</label>
                        <input 
                            type="text" 
                            placeholder="Digite um nome"
                            name="nome"
                            required
                            className="w-full bg-white border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-bg-black">Cargo:</label>
                        <input 
                            type="text" 
                            placeholder="Digite o cargo"
                            name="cargo"
                            required
                            className="w-full bg-white border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-bg-black">Foto do Colaborador:</label>
                        <input 
                            type="text"
                            placeholder="Insira o link da foto"
                            name="foto"
                            className="w-full bg-white border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm text-bg-black">Nascimento:</label>
                            <input 
                                type="text"
                                placeholder="Data de nascimento"
                                name="nascimento"
                                required
                                className="w-full bg-white border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-bg-black">Admissão:</label>
                            <input 
                                type="text"
                                placeholder="Data de admissão"
                                name="admissao"
                                required
                                className="w-full bg-white border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-bg-black">Salário:</label>
                        <input 
                            type="text" 
                            placeholder="Salário do colaborador"
                            name="salario"
                            required
                            className="w-full bg-white border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <button
                            type="button"
                            className="w-full bg-[#FFADAD] hover:bg-[#FF6467] text-red-900 font-semibold rounded-md py-2"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-[#C9FFB6] hover:bg-[#05DF72] text-green-900 font-semibold rounded-md py-2"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ColaboradoresForm;
