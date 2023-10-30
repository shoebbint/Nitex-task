import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../../../assets/Rectangle 2479.png';
import img2 from '../../../assets/Rectangle 2481.png';
import img3 from '../../../assets/Rectangle 2484.png';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <div>
            <div className="header-text w-9/12 my-20">
                <p className="my-5 text-orange">Our Services</p>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Making Homeownership
                    <br className="hidden lg:inline-block" />a Reality
                </h1>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    <div className="col">
                        <div className="  bg-base-100 shadow-xl">
                            <figure><img src={img1} alt="Shoes" /></figure>
                            <div className="card-body  hover:bg-orange   hover:text-white  p-10">
                                <h2 className="card-title">Key Match</h2>
                                <p>It is a long established fact that a reader will be distracted</p>
                                <div className="card-actions justify-end">
                                    <button className="  -info"><FontAwesomeIcon icon={faCircleArrowRight} size="2xl" style={{ color: "#ff6647", }} />  </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="  bg-base-100 shadow-xl">
                            <figure><img src={img2} alt="Shoes" /></figure>
                            <div className="card-body  hover:bg-orange   hover:text-white p-10">
                                <h2 className="card-title">Strategy Development</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className=" "><FontAwesomeIcon icon={faCircleArrowRight} size="2xl" style={{ color: "#ff6647", ":hover": { color: "#FFF" } }} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="  bg-base-100 shadow-xl">
                            <figure><img src={img3} alt="Shoes" /></figure>
                            <div className="card-body  hover:bg-orange   hover:text-white p-10">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="  rounded-full"><FontAwesomeIcon icon={faCircleArrowRight} size="2xl" style={{ color: "#ff6647", }} /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;