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
            describe: "I'm a Full-Stack JS Developer",
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
            foot: "A portfolio designed & built by"
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
            describe: "Je suis un développeur Full-Stack JS",
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
            foot: "Un portfolio conçu & créé par"
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
