import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 400, 
});
const Projects = () => {
    return (
        <div id='projects' className="header-text w-9/12 my-28">
            <p className="my-5 text-orange">Our portfolio</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Latest Projects

            </h1>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container  py-5 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap md:-m-2 -m-1">
                            <div className="flex flex-wrap w-1/2">
                                <div data-aos="flip-left" className="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://img.freepik.com/free-photo/building-new-concrete-houses_1398-3932.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=ais" />
                                </div>
                                <div data-aos="flip-left" className="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=ais" />
                                </div>
                                <div data-aos="zoom-in-left" className="md:p-2 p-1 w-full">
                                    <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://img.freepik.com/free-photo/pointing-sketch_1098-14323.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=ais" />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div data-aos="zoom-in-right" className="md:p-2 p-1 w-full">
                                    <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150751.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=ais" />
                                </div>
                                <div data-aos="flip-right" className="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://img.freepik.com/free-photo/way-white-house_1162-117.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph" />
                                </div>
                                <div data-aos="flip-right" className="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2050.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;