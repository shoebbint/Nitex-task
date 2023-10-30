
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Home.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const Home = () => {
    return (
        <div>

            <div>
            <section className="text-gray-600 body-font bg-base-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <div>
                            <h1 className="text-5xl font-bold">Your dream home is our top priority</h1>
                            <p className="py-6">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</p>
                            <button className="btn bg-primary">Get Started</button>
                        </div>
    </div>
    <div className="container-1 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> <img className="w-full h-72" src="https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph"/></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/door-opening-revealing-beautiful-city_23-2149768547.jpg?size=626&ext=jpg&ga=GA1.1.1982456887.1698647917&semt=sph" alt="" /></SwiperSlide>


      </Swiper>
     
    </div>
  </div>
</section>
            </div>
        </div>
    );
};

export default Home;