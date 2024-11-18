import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div>
        <a href="https://github.com/slimkhemiri" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/slim-khemiri/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>{t(`footer.foot`)} <a href="https://github.com/slimkhemiri" target="_blank" rel="noreferrer">Slim Khemiri</a> with 💜</p>
    </footer>
  );
}

export default Footer;