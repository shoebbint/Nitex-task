import img from "../../../assets/Ellipse 1401.png"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="bg-black text-white bg-footer ">
      <footer className="header-text w-9/12 text-white body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap  flex-col">
          <div className="md:w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex text-lg font-bold items-center md:justify-start justify-center text-white-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M26.5787 3.02852C24.8937 3.02781 23.2335 3.42902 21.7398 4.19794C20.246 4.96687 18.963 6.08069 18 7.44444L18.5591 7.81996V12.2834L21.9327 10.0778L28.3378 14.3559V18.8289L31.7114 16.6233L35.2682 19C36.3095 17.4452 36.9043 15.6412 36.9894 13.7797C37.0745 11.9181 36.6468 10.0686 35.7516 8.42767C34.8564 6.7867 33.5273 5.41554 31.9054 4.45987C30.2835 3.5042 28.4294 2.99971 26.5401 3L26.5787 3.02852Z" fill="#FF6647" />
                <path d="M2.09703e-06 19.9957C-0.00138256 23.0189 0.682963 26.0031 2.00156 28.7237C3.32017 31.4444 5.23869 33.8307 7.61282 35.7032C9.98695 37.5757 12.7549 38.8855 15.7084 39.5342C18.6619 40.183 21.7241 40.1537 24.6647 39.4485C27.6052 38.7434 30.3476 37.3808 32.6855 35.4633C35.0233 33.5457 36.8958 31.1231 38.1621 28.3777C39.4283 25.6323 40.0554 22.6356 39.9962 19.613C39.9369 16.5903 39.1928 13.6204 37.8199 10.9268C39.046 13.5871 39.597 16.5086 39.4242 19.4326C39.2514 22.3567 38.3602 25.193 36.8294 27.6905V21.4171L31.9384 18.1004L28.5166 20.3463V34.7978C28.0758 34.9826 27.6303 35.1437 27.1754 35.2953V14.8879L22.2844 11.5712L18.8815 13.8171V35.9918C18.4076 35.9207 17.981 35.8307 17.5403 35.7265V8.35392L12.6493 5.03719L9.24644 7.27836V31.2204C6.20326 28.3025 4.29298 24.4006 3.85485 20.2079C3.41673 16.0151 4.47912 11.8028 6.85335 8.31902C9.22759 4.83523 12.76 2.30545 16.8232 1.17893C20.8865 0.0524203 25.2176 0.402085 29.0474 2.16585C25.9986 0.618301 22.6039 -0.121775 19.1875 0.0163219C15.7711 0.154419 12.4472 1.16608 9.53333 2.95464C6.6195 4.74321 4.2131 7.24891 2.54406 10.2324C0.875024 13.2158 -0.000892731 16.5773 2.09703e-06 19.9957ZM12.6682 33.798C11.7601 33.2701 10.9005 32.6628 10.0995 31.9833V7.71901L12.6682 6.02747V33.798ZM31.9384 19.1096V32.9025C31.1266 33.4825 30.2673 33.9928 29.3697 34.4282V20.7964L31.9384 19.1096ZM19.7346 36.1055V14.2577L22.3033 12.5614V36.1719C22.0758 36.1719 21.8294 36.1719 21.6161 36.1719C20.9882 36.1833 20.3601 36.1612 19.7346 36.1055Z" fill="white" />
              </svg>
              <span className="ml-3 text-xl">RealNest</span>
            </a>
            <p className="my-5 text-sm text-white-500">There are many variations passages of Lorem Ipsum availbut the majority have suffered alteration</p>

            <div className="flex  items-center">
              <div className="pe-5">
                <img src={img} alt="" />
              </div>
              <div>
                <p>Need Help?</p>
                <p>(239) 555-0108</p>
              </div>
            </div>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
            <div className="lg:w-1/3 md:w-1/2 w-full px-20">
              <h2 className="text-lg font-bold text-white-900 tracking-widest text-sm mb-3 border-b-4 border-orange  pb-2">Company</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-20">
              <h2 className="text-lg font-bold text-white-900 tracking-widest text-sm mb-3 border-b-4 border-orange  pb-2">Information</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-20">
              <h2 className="text-lg font-bold text-white-900 tracking-widest text-sm mb-3 border-b-4 border-orange  pb-2">Essentials</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">About us</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Services</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Projects</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Page</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Contact</a>
                </li>
              </nav>
            </div>

          </div>
        </div>
        <div className="">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@knyttneve</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;