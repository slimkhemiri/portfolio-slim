import technocasa from '../assets/images/technocasa.png';
import hulu from '../assets/images/hulu.png';
import autobiz from '../assets/images/autobiz.png';
import crypto from '../assets/images/cryptos.png';
import enerfox from '../assets/images/enerfox.png';
import '../assets/styles/Project.scss';
import { useTranslation } from 'react-i18next';

function Project() {
    const { t } = useTranslation();
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://crypto-pro.netlify.app/" target="_blank" rel="noreferrer"><img src={crypto} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://crypto-pro.netlify.app/" target="_blank" rel="noreferrer"><h2>{t('project.crypto.title')}</h2></a>
                <p>{t('project.crypto.desc')}</p>
            </div>
            <div className="project">
                <a href="https://hulu-nextjs-kmao.vercel.app/" target="_blank" rel="noreferrer"><img src={hulu} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hulu-nextjs-kmao.vercel.app/" target="_blank" rel="noreferrer"><h2>{t('project.hulu.title')}</h2></a>
                <p>{t('project.hulu.desc')}</p>
            </div>
            <div className="project">
                <a href="https://www.enerfox.fr/" target="_blank" rel="noreferrer"><img src={enerfox} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.enerfox.fr/" target="_blank" rel="noreferrer"><h2>{t('project.enerfox.title')}</h2></a>
                <p>{t('project.enerfox.desc')}</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={autobiz} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>{t('project.autobiz.title')}</h2></a>
                <p>{t('project.autobiz.desc')}</p>
            </div>
            <div className="project">
                <a href="https://www.tecnocasa.tn/" target="_blank" rel="noreferrer"><img src={technocasa} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.tecnocasa.tn/" target="_blank" rel="noreferrer"><h2>{t('project.technocasa.title')}</h2></a>
                <p>{t('project.technocasa.desc')} </p>
            </div>
        </div>
    </div>
    );
}

export default Project;