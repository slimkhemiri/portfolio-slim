import mock01 from '../assets/images/mock01.png';
import technocasa from '../assets/images/technocasa.png';
import hulu from '../assets/images/hulu.png';
import autobiz from '../assets/images/autobiz.png';
import crypto from '../assets/images/cryptos.png';
import enerfox from '../assets/images/enerfox.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://crypto-pro.netlify.app/" target="_blank" rel="noreferrer"><img src={crypto} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://crypto-pro.netlify.app/" target="_blank" rel="noreferrer"><h2>Crypto Pro: Real-Time Cryptocurrency Conversion & Tracking Platform</h2></a>
                <p>Crypto Pro is a web platform for real-time cryptocurrency conversion and tracking, built with React, Redux, and Firebase. Using CoinAPI, it provides users with live updates on crypto prices, trends, and conversion rates. Users can track portfolios, set alerts, and view detailed crypto analytics. Firebase ensures secure authentication and data management for a seamless user experience.</p>
            </div>
            <div className="project">
                <a href="https://hulu-nextjs-kmao.vercel.app/" target="_blank" rel="noreferrer"><img src={hulu} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hulu-nextjs-kmao.vercel.app/" target="_blank" rel="noreferrer"><h2>Hulu: movie finder app with semantic search</h2></a>
                <p>Developed movie finder app with semantic search using Next, tailwindCss, Rest API, Responsive.</p>
            </div>
            <div className="project">
                <a href="https://www.enerfox.fr/" target="_blank" rel="noreferrer"><img src={enerfox} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.enerfox.fr/" target="_blank" rel="noreferrer"><h2>Enerfox: Energy equipment and automation solutions</h2></a>
                <p>ENERFOX is a monorepo bringing together several projects based on React and Node.js, integrating Data Science and Artificial Intelligence to improve the deployment of renewable energies, thus providing cutting-edge solutions for energy management, both in terms of hardware and software.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={autobiz} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Autobiz: Used car dealer</h2></a>
                <p>Autobiz Trade is a platform that allows its users to sell and buy used vehicles in a few clicks on AutobizTrade Using React, Typescript, Redux, Node, Nest JS, Serverless Framework, PostgreSQL, MariaDB, Docker, AWS.</p>
            </div>
            <div className="project">
                <a href="https://www.tecnocasa.tn/" target="_blank" rel="noreferrer"><img src={technocasa} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.tecnocasa.tn/" target="_blank" rel="noreferrer"><h2>Technocasa: Franchise real estate agency network</h2></a>
                <p>Technocasa is an application designed for a franchise real estate agency network, allowing users to easily browse, buy, sell, and rent properties through a clean and responsive interface using Vue JS, Redux, Axios, Vuetify, Google Analytics </p>
            </div>
        </div>
    </div>
    );
}

export default Project;