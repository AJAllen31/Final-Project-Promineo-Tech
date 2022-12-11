import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.png'
import StoryImage from '../../images/about1.jpeg'
import VisionImage from '../../images/about2.jpeg'
import MissionImage from '../../images/about3.png'
import './about.css'



const About = () => {
    return (
        <>
        <Header title="Silver and Gold" image={HeaderImage}>
        Pokèmon Silver & Gold releases in 2000 and developed by Game Freak.
        The previous title to this was Pokèmon Red & Blue. 
        </Header>

        <section className="about__story">
            <div className="container about__story-container">
                <div className="about__section-image">
                    <img src={StoryImage} alt="Gold & Silver Starters" />
                </div>
                <div className="about__section-content">
                    <h1>Starters</h1>
                    <p>
                        The starters in Pokèmon Gold & Silver were the water-type Totodile, 
                        the fire-type Cyndaquil, and the grass-type Chikarita.
                    </p>
                    <p>
                        Each starter had three evolutions and following the sequence of a fire-type, 
                        water-type, and grass-type trio from its previous entry. 
                    </p>
                    <p>
                        Compared to other starters of the series, the Gold and Silver starters ranked third
                        out of ten on the charts. 
                    </p>
                </div>
            </div>
        </section>

        <section className="about__vision">
            <div className="container about__vision-container">                
                <div className="about__section-content">
                    <h1>Johto/Kanto Region</h1>
                    <p>
                        The starters in Pokèmon Gold & Silver were the water-type Totodile, 
                        the fire-type Cyndaquil, and the grass-type Chikarita.
                    </p>
                    <p>
                        Each starter had three evolutions and following the sequence of a fire-type, 
                        water-type, and grass-type trio from its previous entry. 
                    </p>
                    <p>
                        This series introduced a new region to explore and capture pokèmon in the 
                        Kanto and Johto region.
                    </p>
                </div>
                <div className="about__section-image">
                    <img src={VisionImage} alt="Kanto/Johto Region" />
                </div>
            </div>
        </section>

        <section className="about__mission">
            <div className="container about__mission-container">
                <div className="about__section-content">
                    <h1>Starter Types</h1>
                    <p>
                        Chikarite the Grass-Type Pokèmon.
                    </p>
                    <p>
                        Totodile the Water-Type Pokèmon.
                    </p>
                    <p>
                        Cyndaquil the Fire-Type Pokèmon.
                    </p>
                </div>
                <div className="about__section-image">
                    <img src={MissionImage} alt="Gold & Silver Starters" />
                </div>
            </div>
        </section>
        </>
    )
}

export default About