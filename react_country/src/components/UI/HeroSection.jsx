import { RiArrowRightCircleLine } from "react-icons/ri";

export const HeroSection = () => {
    return <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One country at a time.
                    </h1>
                    <p className="paragraph">
                        Discover the history, cultue and the beuty of every nation. Sort, search and filter through countries to find the details you want.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">Start Exploring <RiArrowRightCircleLine /></button>
                </div>
                <div className="hero-image">
                    <img src="/images/world.png" alt="World is beautifull" className="banner-image"/>
                </div>
            </div>
        </main>
}