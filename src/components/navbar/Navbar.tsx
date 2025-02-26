import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-neutral-900 text-cyan-200">
            <div className="container mx-auto flex justify-between items-center py-6 px-6 md:px-12">
                <Link to="/" className="text-3xl font-bold">
                    <img
                        src="https://ik.imagekit.io/sdkyquy76/Fotos%20RH%20TwoGroup/logo.svg?updatedAt=1740529132461"
                        alt="Logo Group Two RH"
                        className="h-14"
                    />
                </Link>

                <div className="hidden md:flex gap-8 items-center text-xl">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/colaboradores" className="hover:underline">Colaboradores</Link>
                    <Link to="/sobre" className="hover:underline">Sobre</Link>
                </div>

                <button
                    className="md:hidden text-cyan-200 text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={36} /> : <Menu size={36} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col bg-neutral-800 text-cyan-200 space-y-6 py-6 px-8 text-xl">
                    <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/colaboradores" className="hover:underline" onClick={() => setIsOpen(false)}>Colaboradores</Link>
                    <Link to="/sobre" className="hover:underline" onClick={() => setIsOpen(false)}>Sobre</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
