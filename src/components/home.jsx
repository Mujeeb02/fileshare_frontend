import React from 'react'
import Navigation from './navigation';
import Hero from './hero';
import HeroNext from './hero_next';
import Services from './services';
import Projects from './projects';
import Discuss from './discuss';
import Development from './development';
import Team from './team';
import Faq from './faq';
import Footer from './footer';
const Home = () => {
    return (
        <div className=''>
            <div className='h-[900px] overflow-hidden w-full bg-[#F2F4F7] flex flex-col items-center relative'>
                <Navigation />
                <Hero />
                <HeroNext />
            </div>
            <div id='services'>
                <Services />
            </div>
            <div id='media'>
                <Projects />
            </div>
            <Discuss />
            <div id='cases'>
                <Development />
            </div>
            <Team />
            <div id='faq'>
                <Faq />
            </div>
            <Footer />
        </div>
    )
}

export default Home
