
import teacher from "../../../assets/ins1.jpg"
import teacher2 from "../../../assets/ins2.jpg"
import teacher3 from "../../../assets/ins3.jpg"
// Import Swiper React components
import {
    Swiper, SwiperSlide
} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import  './Testimonial.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Testimonial = () => {
    return (
        <div id="review" className="my-20 header-text w-9/12">
                 <div className=" py-12">
                 <p className="my-5 text-orange">Clients Review</p>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What do people say about us?

                </h1>

            <section className="grid grid-cols-1 lg:grid-cols-2 my-auto  items-center">

                <div>
                    <img src="https://img.freepik.com/free-photo/customer-experience-creative-collage_23-2149371200.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph" alt="" />
                </div>

                <div className="container-2">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper px-10"
                    >
                        <SwiperSlide className=" p-10 bg-transparent">
                            <div className="my-auto    ">
                                <div className="h-full text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-orange ring-offset-base-100 ring-offset-2">
                                            <img src={teacher2} />
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </SwiperSlide
                        >
                        <SwiperSlide className=" p-10 bg-transparent"
                        >
                            <div className="my-auto    ">
                                <div className="h-full text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-orange ring-offset-base-100 ring-offset-2">
                                            <img src={teacher} />
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </SwiperSlide
                        >
                        <SwiperSlide className=" p-10 bg-transparent"
                        >
                            <div className="my-auto    ">
                                <div className="h-full text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-orange ring-offset-base-100 ring-offset-2">
                                            <img src={teacher3} />
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </SwiperSlide
                        >
                        <SwiperSlide className=" p-10 bg-transparent"
                        >
                            <div className="my-auto    ">
                                <div className="h-full text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-orange ring-offset-base-100 ring-offset-2">
                                            <img src={teacher2}/>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </SwiperSlide  >

                    </Swiper>

                </div>
            </section>
        </div>
        </div>
    );
};

export default Testimonial;