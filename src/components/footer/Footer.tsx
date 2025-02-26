import { GithubLogo} from '@phosphor-icons/react';

function Footer() {
return (
    <footer className="flex justify-center bg-neutral-900 text-cyan-200 py-6">
        <div className="container flex flex-col items-center text-center space-y-4">
            <p className="text-2xl font-bold">
                Group Two Recursos Humanos | © {new Date().getFullYear()}
            </p>
            <p className="text-lg">Conheça nossos projetos</p>
            
            <div className="flex gap-6">
                <a
                    href="https://github.com/orgs/grupo-02-turma-javascript-06/repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-100 transition"
                >
                    <GithubLogo size={48} weight="bold" />
                </a>
            </div>
        </div>
    </footer>
);
}

export default Footer;
