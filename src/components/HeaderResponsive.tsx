import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";
import {useState} from "react";
import {Menu, X} from "lucide-react";

const HeaderResponsive = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <CodingFactoryLogo/>

                    <button
                        className="text-white md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={36}/> : <Menu size={36}/>}
                    </button>

                    <nav
                    className={`
                    ${menuOpen ? "block" : "hidden"} 
                    absolute top-24 left-0 md:flex gap-4 bg-cf-dark-red text-white w-full 
                    p-4 md:p-1 md:w-auto md:static
                    `}

                    >
                        {/*<a href="/" className="text-white hover:underline hover:underline-offset-4">Home</a>*/}
                        <Link
                            to="/"
                            className="block md-inline hover:underline hover:underline-offset-4"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/examples/name-changer"
                            className="block md-inline hover:underline hover:underline-offset-4"
                            onClick={() => setMenuOpen(false)}
                        >
                            Name Changer
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default HeaderResponsive;