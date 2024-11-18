import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { useTranslation } from 'react-i18next';

function Timeline() {
  const { t } = useTranslation();
  return (
    <div id="history">
      <div className="items-container">
        <h1>{t('career.title')}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">{t('career.full')}</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://sogeclair.com' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>SOGECLAIR</a>
              - AIRBUS AEROSPACE SAS</h3>
            <h4 className="vertical-timeline-element-subtitle">Toulouse, France</h4>
            <p>
              {t('career.sogeclair')}
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">{t('expertise.tech')}: React, context API, AntDesign,
              NodeJS, Nest JS, PlayWright, MySQL, Docker, Git, Gitlab.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">{t('career.full')}</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://enerfox.fr' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>ENERFOX</a>
              - Energy equipment and automation solutions
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Laval, France</h4>
            <p>
              {t('career.enerfox')}
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">{t('expertise.tech')}: React, Typescript, context API, AntDesign,
              NodeJS, express JS, jest, DynamoDB, InfluxDB, Docker, Git, Gitlab.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">{t('career.full')}</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://sidexia.com' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>SIDEXIA</a>
              - ESN</h3>
            <h4 className="vertical-timeline-element-subtitle">Paris, France</h4>
            <p>
              {t('career.sidexia')}
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">{t('expertise.tech')}: React, Redux Toolkit, MUI Material,
              NodeJS, express JS, PostgreSQL, Docker, Git, Gitlab.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">{t('career.full')}</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://trade.autobiz.com/en/login' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>AUTOBIZ</a>
              - Used car dealer</h3>
            <h4 className="vertical-timeline-element-subtitle">Tunis, Tunisie</h4>
            <p>
              {t('career.autobiz')}
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">{t('expertise.tech')}: React, Typescript, React-admin, Redux-Toolkit,
              React-Query, Jest, Testing-Library, NodeJS,
              nestJS, MySQL, MariaDB, Sequelize,Git, Gitlab, Clean
              Architecture.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">{t('career.front')}</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://www.vistaprint.fr/' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>VISTAPRINT</a>
              - E-Commerce</h3>
            <h4 className="vertical-timeline-element-subtitle">Tunis, Tunisie</h4>
            <p>
              {t('career.vistaprint')}
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">{t('expertise.tech')}: Vanilla Javascript, React,
              Next, Angular, Vue, Scss , BootStrap, Tailwind , Mui, Figma,
              , Github, Git , Jest, Testing Library.</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;