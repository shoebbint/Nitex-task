import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const About = () => {
  return (
    <div>
      <div className='w-9/12  mx-auto'>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_1387-310.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <p className="my-5 text-orange">About us</p>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Unlocking Your
                <br className="hidden lg:inline-block" />Dream Home
              </h1>
              <p className=" leading-relaxed">Service typography is an important consideration in many industries, from advertising to our Service typography is an important consideration in many industries, from advertis</p>
              <div className="grid grid-cols-2 gap-20 my-8" >
                <div>
                  <ul>
                    <li><FontAwesomeIcon className="mx-1" icon={faAngleRight} size="xl" style={{ color: "#ff6647", }} />Opening doors to future</li>
                    <li><FontAwesomeIcon className="mx-1" icon={faAngleRight} size="xl" style={{ color: "#ff6647", }} />  Your Startup</li>
                    <li><FontAwesomeIcon className="mx-1" icon={faAngleRight} size="xl" style={{ color: "#ff6647", }} />  Knew About Fonts</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li><FontAwesomeIcon className="mx-1" icon={faAngleRight} size="xl" style={{ color: "#ff6647", }} />Opening doors to future</li>
                    <li><FontAwesomeIcon className="mx-1" icon={faAngleRight} size="xl" style={{ color: "#ff6647", }} />  Your Startup</li>
                    <li><FontAwesomeIcon className="mx-1" icon={faAngleRight} size="xl" style={{ color: "#ff6647", }} />  Knew About Fonts</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="btn bg-primary">Learn more</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;