import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          navigation: {
            expertise: "Expertise",
            history: "History",
            projects: "Projects",
            tech: "Tech Stack",
            contact: "Contact"
          },
          main: {
            describe: "Full-Stack JS Developer",
            years: "5 years of experience",
          },
          expertise: {
            dev: "Full Stack Web Development",
            description: "I have built a diverse array of web applications from scratch using modern technologies such as React and Node. I have a strong proficiency in frontend + backend development.",
            tech: "Tech Stack",
            db: "Database",
            devops: "Once the application is built, I can help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.",
            data: "I have experience in designing, optimizing, and managing databases to ensure efficient data storage and retrieval. My expertise includes working with both SQL and NoSQL databases, which enables me to choose the best approach based on the project's needs."
          },
          contact: {
            title: "Contact Me",
            desc: "Got a project waiting to be realized? Let's collaborate and make it happen!",
            name: "What's your name?",
            email: "What's your Email / Phone?",
            msg: "Send me any inquiries or questions",
            send: "SEND"
          },
          footer: {
            foot: "A portfolio designed & built by",
            with: 'with'
          },
          career: {
            title: "Career History",
            full: "FULL-STACK JS DEVELOPER",
            front: "FRONT-END JS DEVELOPER",
            sogeclair: "The project ICAP is an intranet that manages data  and aircraft spare parts. It is intuitiveand customizable, helping users manage aircraft parts efficiently and to take informed decisions.",
            enerfox: "ENERFOX is a monorepo bringing together several projects based on React and Node.js, integrating Data Science and Artificial Intelligence to improve the deployment of renewable energies, providing cutting-edge solutions for energy management, both in terms of hardware and software.",
            sidexia: "VISION is an HR web application that stores and manages employee data and customers. It is intuitive and customizable, helping businesses effectively manage their HR and make informed decisions.",
            vistaprint: "A company specializing in creation of e-commerce websites and printing of personalized commerce products.",
            autobiz: "Autobiz Trade is a platform that allows its users to sell and buy used vehicles in a few clicks on AutobizTrade."
          },
          project: {
            crypto: {
              title: "Crypto Pro: Real-time cryptocurrency conversion and tracking platform",
              desc: "A project that allows users to trade cryptocurrencies using a simple and intuitive interface. It was built using React, Redux, and Node.js.",
            },
            hulu: {
              title: "Hulu Clone: movie finder app with semantic search",
              desc: "Developed movie finder app with semantic search using Next, tailwindCss, Rest API, Responsive.",
            },
            enerfox: {
              title: "Enerfox: Energy equipment and automation solutions",
              desc: "ENERFOX is a monorepo bringing together several projects based on React and Node.js, integrating Data Science and Artificial Intelligence to improve the deployment of renewable energies, thus providing cutting-edge solutions for energy management, both in terms of hardware and software.",
            },
            autobiz: {
              title: "Autobiz: Used car dealer",
              desc: "Autobiz Trade is a platform that allows its users to sell and buy used vehicles in a few clicks on AutobizTrade Using React, Typescript, Redux, Node, Nest JS, Serverless Framework, PostgreSQL, MariaDB, Docker, AWS."
            },
            technocasa: {
              title: "Technocasa: Franchise real estate agency network",
              desc: "Technocasa is an application designed for a franchise real estate agency network, allowing users to easily browse, buy, sell, and rent properties through a clean and responsive interface using Vue JS, Redux, Axios, Vuetify, Google Analytics."
            },
            fithub: {
              title: "FITHUB: Mobile App for fitness and health care",
              desc: "Mobile App for fitness and health where you can find the nearest Gyms and healthy food restaurants, you can also book for a private coach , Join some events and follow the progress of your health using React Native, Typescript, expo, TailwindCss, NestJs, PostgreSQL, Heroku."
            }
          }
        }
      },
      fr: {
        translation: {
          navigation: {
            expertise: "Expertise",
            history: "Histoire",
            projects: "Projets",
            tech: "Technologies",
            contact: "Contact"
          },
          main: {
            describe: "Développeur Full-Stack JS",
            years: "5 ans d'expérience",
          },
          expertise: {
            dev: "Développement web Full Stack",
            description: "J'ai créé une gamme diversifiée d'applications Web à partir de zéro en utilisant des technologies modernes telles que React et Node. J'ai une forte maîtrise du développement frontend + backend.",
            tech: "Technologies",
            db: "Base de données",
            devops: "Une fois l'application construite, je peux aider les clients à configurer des pipelines de tests DevOps, CI/CD, et d'automatisation de déploiement pour assurer le succès du Go-Live.",
            data: "J'ai de l'expérience en conception, en optimisation et en gestion de bases de données pour assurer un stockage efficace et une récupération de données. Mes compétences incluent travailler avec les bases de données SQL et NoSQL, ce qui permet de choisir la meilleure approche en fonction des besoins du projet."
          },
          contact: {
            title: "Contact",
            desc: "Vous avez un projet en attente de réalisation? N'hésitez pas à collaborer et faire progresser votre projet!",
            name: "Quel est votre nom?",
            email: "Quel est votre Email / Téléphone?",
            msg: "Envoyez-moi toutes les questions ou les inquiries",
            send: "ENVOYER"
          },
          footer: {
            foot: "Un portfolio conçu & créé par",
            with: 'avec'
          },
          career: {
            title: "Carrière",
            full: "DÉVELOPPEUR FULL-STACK JS",
            front: "DÉVELOPPEUR FRONT-END JS",
            sogeclair: "Le projet ICAP est un intranet qui gère les données et les pièces détachées d'avions. Il est intuitif et personnalisable, aidant les utilisateurs à gérer efficacement les pièces d'avions et à prendre des décisions éclairées.",
            enerfox: "ENERFOX est un répertoire monorepo qui combine plusieurs projets basés sur React et Node.js, intégrant les sciences de données et l'intelligence artificielle pour améliorer la déploiement des energies renouvelables, fournissant des solutions innovantes pour la gestion des energies, soit en termes de matériel et de logiciel.",
            sidexia: "VISION est une application web RH qui stocke et gère les données des employés et clients. C'est intuitif et personnalisable, aider les entreprises à gérer efficacement leurs RH et prendre des décisions éclairées.",
            autobiz: "Autobiz Trade est une plateforme qui permet aux utilisateurs de vendre et acheter des véhicules utilisés en un seul clic sur Autobiz Trade.",
            vistaprint: "Une entreprise spécialisée dans la création de sites Web e-commerce et l'impression personnalisée de produits commerce."
          },
          project: {
            crypto: {
              title: "Crypto Pro: Plateforme de conversion et de suivi de crypto-monnaie en temps réel",
              desc: "Un projet qui permet aux utilisateurs d'échanger des crypto-monnaies à l'aide d'une interface simple et intuitive. Il a été construit avec React, Redux et Node.js."
            },
            hulu: {
              title: "Hulu Clone: plateforme de recherche de films avec recherche semantique",
              desc: "Développement d'une plateforme de recherche de films avec recherche semantique utilisant Next, tailwind CSS, Rest API, et Responsive."
            },
            enerfox: {
              title: "Enerfox: Solutions d'énergie et d'automatisation des appareils",
              desc: "ENERFOX est un répertoire monorepo qui combine plusieurs projets basés sur React et Node.js, intégrant les sciences de données et l'intelligence artificielle pour améliorer la déploiement des energies renouvelables, fournissant des solutions innovantes pour la gestion des energies, soit pour la matériel et le logiciel."
            },
            autobiz: {
              title: "Autobiz: Locations de véhicules utilisés",
              desc: "Autobiz Trade est une plateforme qui permet aux utilisateurs de vendre et acheter des véhicules utilisés en un seul clic sur Autobiz Trade en utilisant React, Typescript, Redux, Node, Nest JS, Serverless Framework, PostgreSQL, MariaDB, Docker, et AWS."
            },
            technocasa: {
              title: "Technocasa: Réseau de franchises immobilières",
              desc: "Technocasa est une application conçue pour un réseau de franchises immobilières, permettant aux utilisateurs de facilement naviguer, acheter et vendre des propriétés, et louer des appartements grâce à une interface clean et responsive en utilisant Vue JS, Redux, Axios, Vuetify, et Google Analytics."
            },
            fithub: {
              title: "FITHUB: Application mobile pour la fitness et la santé",
              desc: "Application mobile pour la fitness et la santé où vous pouvez trouver les plus proches gymmes et restaurants de nourriture sain, vous pouvez également réserver pour un coach privé, Vous pouvez suivre les progrès de votre santé en utilisant React Native, Typescript, expo, Tailwind CSS, NestJs, PostgreSQL, Heroku."
            }
          }
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
