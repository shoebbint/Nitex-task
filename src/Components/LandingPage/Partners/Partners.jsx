import img from "../../../assets/a.svg"
import img1 from "../../../assets/b.svg"
import img2 from "../../../assets/c.svg"
import img3 from "../../../assets/d.svg"
const Partners = () => {
    return (
        <div>
            <div className="header-text w-9/12 my-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    <div className="col">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-2xl">
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4 text-center">
                                <div className="p-4 sm:w-1/4 w-1/2 ">
                                <img className="mx-auto" src={img} alt="" />
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                                <div className="p-4 sm:w-1/4 w-1/2">
                                <img className="mx-auto" src={img1} alt="" />
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                                    <p className="leading-relaxed">Subscribes</p>
                                </div>
                                <div className="p-4 sm:w-1/4 w-1/2">
                                <img className="mx-auto" src={img2} alt="" />
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                                <div className="p-4 sm:w-1/4 w-1/2">
                                <img className="mx-auto" src={img3} alt="" />
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                                    <p className="leading-relaxed">Products</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Partners;