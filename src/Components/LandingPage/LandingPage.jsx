import About from "./About/About";
import Contact from "./Contact/Contact";
import Faq from "./Faqs/Faq";
import Home from "./Home/Home";
import Partners from "./Partners/Partners";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const LandingPage = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Faq></Faq>
            <Contact></Contact>
            <Partners></Partners>
            <Testimonial></Testimonial>
        </div>
    );
};

export default LandingPage;