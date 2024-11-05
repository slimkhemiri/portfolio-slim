import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const labelsFirst = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Next",
    "Angular",
    "SQL",
    "PostgreSQL",
    "DynamoDB",
    "Docker",
    "Git",
    "Gitlab"
];

const labelsSecond = [
    "Git",
    "Gitlab",
    "Github Actions",
    "Docker",
    "OVH",
    "AWS",
    "GCP",
    "Google Analytics"
];

const labelsThird = [
    "MySQL",
    "PostgreSQL",
    "DynamoDB",
    "MariaDB",
    "MongoDB",
    "Sequelize",
    "Mongoose",
    "InfluxDB",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Node. I have a strong proficiency in frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I can help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Base</h3>
                    <p>I have experience in designing, optimizing, and managing databases to ensure efficient data storage 
                        and retrieval. My expertise includes working with both SQL and NoSQL databases,
                         which enables me to choose the best approach based on the project's needs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;