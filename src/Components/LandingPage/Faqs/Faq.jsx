
const Faq = () => {
    return (
        <div className="header-text w-9/12 my-20">
            <p className="my-5 text-orange">Some FAQ’s</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Questions? Look Here

            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            1 - What is the process for buying a home?
                        </div>
                        <div className="collapse-content">
                            <p>The process of buying a home involves the following steps:

                                Determine your budget and get prequalified for a mortgage. This will help you know how much you can afford and what interest rate you can expect to pay. You can check your credit score and report for free once a year from each of the three major credit bureaus You can also ask your agent to recommend lenders who can preapprove you for a loan2.
                                Find a home that meets your requirements and make an offer. You can use online tools to search for homes by location, price, size, features, and more. You can also ask your agent to show you homes that match your criteria. Once you find a home you like, you can make an offer to the seller with the help of your agent. Your offer should include the purchase price, the amount of earnest money, the closing date, and any contingencies or conditions</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        2 - How can I get pre-approved for a mortgage?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        3- What is the difference between a buyer's agent?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 my-10 md:mb-0">
                    <img className="object-cover object-center rounded mask mask-hexagon" alt="hero" src="https://img.freepik.com/free-photo/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_1387-310.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph" />
                </div>
            </div>
        </div>
    );
};

export default Faq;