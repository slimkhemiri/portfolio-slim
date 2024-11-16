import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>{t(`expertise.dev`)}</h3>
                    <p>{t(`expertise.description`)}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t(`expertise.tech`)}:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>{t(`expertise.devops`)}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t(`expertise.tech`)}:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>{t(`expertise.db`)}</h3>
                    <p>{t(`expertise.data`)}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t(`expertise.tech`)}:</span>
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