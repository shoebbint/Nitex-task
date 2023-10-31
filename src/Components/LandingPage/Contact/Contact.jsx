import './Contact.css';
const Contact = () => {
    return (
        <div className='bg-vector '>
            <div className="header-text w-9/12 my-28">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 my-28 md:mb-0">
                            <img className="object-cover object-center rounded " alt="hero" src="                https://img.freepik.com/free-photo/close-up-shot-caucasian-contractor-holding-real-estate-project-while-his-african-colleague-pointing-finger-scale-model-building-explaining-design-during-presentation-meeting-office_273609-5611.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph
" />
                        </div>
                    </div>
                    <div className=''>
                        <section className="text-gray-600 body-font relative">
                            <div className="container px-5  mx-auto ">
                                <div className="flex flex-col  w-full">
                                    <p className="my-5 text-orange">Contact with us</p>
                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Creating spaces where life happens

                                    </h1>
                                </div>
                                <div className=" mx-auto ">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2 w-1/2">
                                            <div className="relative bg-white">
                                                <label label="name" className="leading-7 text-sm text-gray-600">FirstName</label>
                                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <div className="relative bg-white">
                                                <label label="email" className="leading-7 text-sm text-gray-600">LastName</label>
                                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <div className="relative bg-white">
                                                <label label="name" className="leading-7 text-sm text-gray-600">Phone</label>
                                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <div className="relative bg-white">
                                                <label label="email" className="leading-7 text-sm text-gray-600">Email</label>
                                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="relative bg-white">
                                                <label label="message" className="leading-7 text-sm text-gray-600">Message</label>
                                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                        <button className="btn bg-primary">Send Message</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;