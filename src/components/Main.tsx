import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { useTranslation } from 'react-i18next';
function Main() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/slim.png" alt="Avatar" style={{ width: '300px' }} />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/slimkhemiri" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/slim-khemiri/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>SLIM KHEMIRI</h1>
          <p className='typewriter'>{t(`main.describe`)}</p>
          <span style={{ color: 'gray' }}>{t(`main.years`)}</span>
          <div className="mobile_social_icons">
            <a href="https://github.com/slimkhemiri" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/slim-khemiri/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;