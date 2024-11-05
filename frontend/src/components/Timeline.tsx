import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">FULL-STACK JS DEVELOPER</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://sogeclair.com' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>SOGECLAIR</a>
              - AIRBUS AEROSPACE SAS</h3>
            <h4 className="vertical-timeline-element-subtitle">Toulouse, France</h4>
            <p>
              The project ICAP is an intranet that manages data
              and aircraft spare parts. It is intuitive
              and customizable, helping users manage
              aircraft parts efficiently and to take
              informed decisions.
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">Tech stack: React, context API, AntDesign,
              NodeJS, Nest JS, PlayWright, MySQL, Docker, Git, Gitlab.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">FULL-STACK JS DEVELOPER</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://enerfox.fr' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>ENERFOX</a>
              - Energy equipment and automation solutions
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Laval, France</h4>
            <p>
              ENERFOX is a monorepo bringing together several projects based on React and Node.js,
              integrating Data Science and Artificial Intelligence to improve the deployment of renewable energies,
              thus providing cutting-edge solutions for energy management, both in terms of hardware and software.
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">Tech stack: React, Typescript, context API, AntDesign,
              NodeJS, express JS, jest, DynamoDB, InfluxDB, Docker, Git, Gitlab.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">FULL-STACK JS DEVELOPER</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://sidexia.com' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>SIDEXIA</a>
              - ESN</h3>
            <h4 className="vertical-timeline-element-subtitle">Paris, France</h4>
            <p>
              VISION is an HR web application that stores and manages employee data and
              customers. It is intuitive and customizable,
              helping businesses effectively manage their
              HR and make informed decisions.
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">Tech stack: React, Redux Toolkit, MUI Material,
              NodeJS, express JS, PostgreSQL, Docker, Git, Gitlab.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">FULL-STACK JS DEVELOPER</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://trade.autobiz.com/en/login' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>AUTOBIZ</a>
              - Used car dealer</h3>
            <h4 className="vertical-timeline-element-subtitle">Tunis, Tunisie</h4>
            <p>
              Autobiz Trade is a platform that
              allows its users to sell and buy
              used vehicles in a few clicks on
              AutobizTrade.
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">Tech stack: React, Typescript, React-admin, Redux-Toolkit,
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
            <h2 className="vertical-timeline-element-title">FULL-STACK JS DEVELOPER</h2>
            <h3 className="vertical-timeline-element-title">
              <a href='https://www.vistaprint.fr/' target="_blank" style={{ color: 'blue', fontWeight: 'bold' }}>VISTAPRINT</a>
              - E-Commerce</h3>
            <h4 className="vertical-timeline-element-subtitle">Tunis, Tunisie</h4>
            <p>
              a company specializing in
              creation of e-commerce websites and printing
              of personalized commerce products.
            </p><br />
            <h4 className="vertical-timeline-element-subtitle">Tech stack: Vanilla Javascript, React,
              Next, Angular, Vue, Scss , BootStrap, Tailwind , Mui, Figma,
              , Github, Git , Jest, Testing Library.</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;