import Slider from "./Slider"
import js from "../assets/images/js.png";
import ts from "../assets/images/ts.png";
import css from "../assets/images/c.jpg";
import scss from "../assets/images/scss.png";
import react from "../assets/images/react.png";
import next from "../assets/images/next.jpg";
import ang from "../assets/images/ang.png";
import node from "../assets/images/node.jpg";
import nest from "../assets/images/nest.png";
import sql from "../assets/images/sql.png";
import nosql from "../assets/images/nosql.jpeg";
import aws from "../assets/images/aws.jpeg";
import docker from "../assets/images/docker.jpeg";
import git from "../assets/images/git.png";
import { useTranslation } from "react-i18next";
const Logos = () => {
    const { t } = useTranslation();
    return (
        <div className="items-container" id="techstack">
            <h1>{t(`expertise.tech`)}</h1>
            <div style={{margin: "20px 0 20px 0"}}>
            <Slider
                width="180px"
                duration={20}
                pauseOnHover={true}
                blurBorders={false}
                blurBorderColor={'#fff'}
            >
                <Slider.Slide>
                    <img src={js} alt="js" style={{ width: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={ts} alt="ts" style={{ width: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={css} alt="css" style={{ width: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={scss} alt="scss" style={{ width: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={react} alt="react" style={{ width: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={next} alt="next" style={{ width: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={ang} alt="ang" style={{ width: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={node} alt="node" style={{ width: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={nest} alt="nest" style={{ width: '90px', height: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={sql} alt="sql" style={{ width: '90px', height: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={nosql} alt="nosql" style={{ width: '90px', height: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={aws} alt="aws" style={{ width: '90px', height: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={docker} alt="docker" style={{ width: '90px', height: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={git} alt="git" style={{ width: '90px', height: '90px', borderRadius: '10px' }} />
                </Slider.Slide>
            </Slider>
            </div>
        </div>
    )
}

export default Logos