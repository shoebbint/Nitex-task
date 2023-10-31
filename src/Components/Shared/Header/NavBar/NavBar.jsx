import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div className="bg-white w-9/12 content pb-20 border-2 z-50 ">

      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex  p-5 flex-col nav md:flex-row sm:justify-between items-center">
          <a className="flex title-font font-medium items-center text-orange mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M26.5787 3.02852C24.8937 3.02781 23.2335 3.42902 21.7398 4.19794C20.246 4.96687 18.963 6.08069 18 7.44444L18.5591 7.81996V12.2834L21.9327 10.0778L28.3378 14.3559V18.8289L31.7114 16.6233L35.2682 19C36.3095 17.4452 36.9043 15.6412 36.9894 13.7797C37.0745 11.9181 36.6468 10.0686 35.7516 8.42767C34.8564 6.7867 33.5273 5.41554 31.9054 4.45987C30.2835 3.5042 28.4294 2.99971 26.5401 3L26.5787 3.02852Z" fill="#FF6647" />
              <path d="M2.09703e-06 19.9957C-0.00138256 23.0189 0.682963 26.0031 2.00156 28.7237C3.32017 31.4444 5.23869 33.8307 7.61282 35.7032C9.98695 37.5757 12.7549 38.8855 15.7084 39.5342C18.6619 40.183 21.7241 40.1537 24.6647 39.4485C27.6052 38.7434 30.3476 37.3808 32.6854 35.4633C35.0233 33.5457 36.8958 31.1231 38.1621 28.3777C39.4283 25.6323 40.0554 22.6356 39.9962 19.613C39.9369 16.5903 39.1928 13.6204 37.8199 10.9268C39.046 13.5871 39.597 16.5086 39.4242 19.4326C39.2514 22.3567 38.3602 25.193 36.8294 27.6905V21.4171L31.9384 18.1004L28.5166 20.3463V34.7978C28.0758 34.9826 27.6303 35.1437 27.1754 35.2953V14.8879L22.2844 11.5712L18.8815 13.8171V35.9918C18.4076 35.9207 17.981 35.8307 17.5403 35.7265V8.35392L12.6493 5.03719L9.24644 7.27836V31.2204C6.20326 28.3025 4.29298 24.4006 3.85485 20.2079C3.41673 16.0151 4.47912 11.8028 6.85335 8.31902C9.22759 4.83523 12.76 2.30545 16.8232 1.17893C20.8865 0.0524203 25.2176 0.402085 29.0474 2.16585C25.9986 0.618301 22.6039 -0.121775 19.1875 0.0163219C15.7711 0.154419 12.4472 1.16608 9.53333 2.95464C6.6195 4.74321 4.2131 7.24891 2.54406 10.2324C0.875024 13.2158 -0.000892731 16.5773 2.09703e-06 19.9957V19.9957ZM12.6682 33.798C11.7601 33.2701 10.9005 32.6628 10.0995 31.9833V7.71901L12.6682 6.02747V33.798ZM31.9384 19.1096V32.9025C31.1266 33.4825 30.2673 33.9928 29.3697 34.4282V20.7964L31.9384 19.1096ZM19.7346 36.1055V14.2577L22.3033 12.5614V36.1719C22.0758 36.1719 21.8294 36.1719 21.6161 36.1719C20.9882 36.1833 20.3601 36.1612 19.7346 36.1055Z" fill="#1F313F" />
            </svg>
            <span className="ml-3 text-xl">RealNitex</span>
          </a>
          <nav className="hidden  lg:flex md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center">
            <a href="#home" className="mr-5 hover:text-orange">Home</a>
            <a href="#about" className="mr-5 hover:text-orange">About us</a>
            <a href="#service" className="mr-5 hover:text-orange">Services</a>
            <a href="#projects" className="mr-5 hover:text-orange">Projects</a>
            <a href="#faq" className="mr-5 hover:text-orange">Faqs</a>
            <a href="#contact" className="mr-5 hover:text-orange">Contact</a>
            <a href="#partner" className="mr-5 hover:text-orange">Partners</a>
            <a href="#review" className="mr-5 hover:text-orange">Clients review</a>

          </nav>
          <div className="flex justify-center items-center">
            <div className="hover:text-orange md:flex max-sm:hidden"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <div className="dropdown inline-flex items-start  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
              <label tabIndex={0} className="btn btn-ghost lg:invisible ">
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                  <circle cx="25.5" cy="25.5" r="25.5" fill="#FF6647" />
                  <path d="M25 21L35 21" stroke="white" strokeWidth="2" />
                  <path d="M15 28L35 28" stroke="white" strokeWidth="2" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#home">Home</a></li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li><a href="#service">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#review">Review</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#faq">Faqs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;