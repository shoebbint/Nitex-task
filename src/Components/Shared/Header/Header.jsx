import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./NavBar/NavBar";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./Header.css"
const Header = () => {
    return (
        <div className="bg-orange header relative">
            <div className="md:flex sm:hidden items-center text-white header-text w-9/12">
                <p className="me-4">
                    <FontAwesomeIcon className="me-2" icon={faEnvelope} />
                    shoebbint@gmail.com
                </p>
                <p className="me-4">
                    <FontAwesomeIcon className="me-2" icon={faLocationDot} />
                    Cda 23/2,agrabad,chittagong
                </p>
                <p className="me-4">
                    <FontAwesomeIcon className="me-2" icon={faPhone} />
                    01638215986
                </p>

            </div>
            <div className="pt-8">
                <NavBar className=" "></NavBar>
            </div>
        </div>
    );
};

export default Header;