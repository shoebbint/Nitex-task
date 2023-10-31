import img from "../../../assets/a.svg"
import img1 from "../../../assets/b.svg"
import img2 from "../../../assets/c.svg"
import img3 from "../../../assets/d.svg"
const Partners = () => {
    return (
        <div id="partner" className=" ">
            <div className="header-text w-9/12 mt-10 -mb-56 z-50 mx-auto">
                <p className="my-5 text-orange">Our team members</p>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Connecting You to Your Perfect Home

                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    <div className="col">
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src="https://img.freepik.com/free-photo/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually_273609-16228.jpg?size=626&ext=jpg&ga=GA1.1.936937697.1698744675&semt=ais" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.1.936937697.1698744675&semt=ais" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.1.936937697.1698744675&semt=ais" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white bg-footer dark-bg py-60">


            </div>
            <div className=" bg-white header-text w-9/12 mb-20 -mt-24 z-50 shadow-2xl mx-auto">
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-10 mx-auto">
                            <div className="flex flex-wrap -m-4 text-center">
                                <div className="p-4 sm:w-1/4 w-1/2 ">
                                    <img className="mx-auto transition ease-in-out delay-150    hover:-translate-y-1 hover:scale-150   duration-300" src={img} alt="" />
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                                <div className="p-4 sm:w-1/4 w-1/2">
                                    <img className="mx-auto transition ease-in-out delay-150    hover:-translate-y-1 hover:scale-150   duration-300" src={img1} alt="" />
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                                    <p className="leading-relaxed">Subscribes</p>
                                </div>
                                <div className="p-4 sm:w-1/4 w-1/2">
                                    <img className="mx-auto  transition ease-in-out delay-150    hover:-translate-y-1 hover:scale-150   duration-300" src={img2} alt="" />
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                                <div className="p-4 sm:w-1/4 w-1/2 ">
                                    <img className="mx-auto transition ease-in-out delay-150    hover:-translate-y-1 hover:scale-150   duration-300" src={img3} alt="" />
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                                    <p className="leading-relaxed">Products</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        </div>
    );
};

export default Partners;