import Button from './Button'
import Section from './Section'
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import Generating from "./Generating";

const Hero = () => {
    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero">

            <div className="container relative">
                <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]'>
                    <h1 className='h1 mb-6'>ArticleHub: Your Gateway to Inspire, Inform, and Innovate</h1>

                    <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>Welcome to ArticleHub – A Platform to Discover Inspiring Ideas, Create Engaging Content, and Share Your Voice with a Vibrant Community, All in a Seamless and Interactive Reading Experience.</p>

                    <Button href="#view-articles" white>
                        Get Started
                    </Button>

                </div>

                <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
                    <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
                        <div className='relative bg-n-8 rounded-[1rem]'>
                            <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />

                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img
                                    src='./src/assets/illustration.jpg'
                                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"

                                    width={1024}
                                    height={490}
                                    alt="AI"
                                />

                                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src='./src/assets/books.png'
                            className='w-full opacity-45'
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>

                </div>

            </div>
        </Section>
    )
}

export default Hero