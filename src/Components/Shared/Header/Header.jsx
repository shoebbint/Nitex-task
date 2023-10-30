import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./NavBar/NavBar";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <div className="bg-orange header relative">
            <div className="flex items-center text-white header-text w-9/12">
                <p className="me-4">
                    <FontAwesomeIcon className="me-2" icon={faEnvelope} />
                    info@example.com
                    </p>
                <p className="me-4">
                <FontAwesomeIcon className="me-2" icon={faLocationDot} />
                    6391 Elgin St. Celina, 10299
                    </p>
                <p className="me-4">
                <FontAwesomeIcon className="me-2" icon={faPhone} />
                    (629) 555-0129
                    </p>

            </div>
<div className="pt-8">
<NavBar className=" "></NavBar>
</div>
        </div>
    );
};

export default Header;