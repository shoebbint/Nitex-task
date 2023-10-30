import About from "./About/About";
import Contact from "./Contact/Contact";
import Faq from "./Faqs/Faq";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";

const LandingPage = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default LandingPage;