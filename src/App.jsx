import { useState } from "react";
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import CurrentlyLearning from "./components/CurrentlyLearning";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";
import Terminal from "./components/Terminal";

function App() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            <SEO />

            {showIntro && (
                <IntroAnimation onComplete={() => setShowIntro(false)} />
            )}

            <Navbar />

            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <CurrentlyLearning />
                <Projects />
                <Certificate />
                <Contact />
            </main>

            <Footer />
            <Terminal />
        </>
    );
}

export default App;