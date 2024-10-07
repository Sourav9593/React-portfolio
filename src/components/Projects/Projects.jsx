import React from 'react';
import IMG1 from '../../assets/food-app.png';
import IMG2 from '../../assets/youtube.png';
import IMG3 from '../../assets/GoogleGeminiClone.png';
import IMG4 from '../../assets/quizApp.png';
import IMG5 from '../../assets/to-do.png';
// import IMG5 from '../../assets/news.png';
// import IMG6 from '../../assets/math.png';

import './projects.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 0,
      title: 'Food App',
      img: IMG1,
      description:
        "Developed a food delivery app using React.js and Context API to handle global state efficiently. Focused on creating a responsive UI with smooth user interactions and optimized API integration.",
      link: 'https://food-app-by-sourav.netlify.app/',
      github: 'https://github.com/Sourav9593/foodApp',
    },
    {
      id: 1,
      title: 'Youtube Clone',
      img: IMG2,
      description:
        "Developed a YouTube clone using React.js and Rapid API to fetch and display video content dynamically. Implemented key features such as video search, trending videos, and video player functionality.",
      link: 'https://sourav-youtube-clone.netlify.app/',
      github: 'https://github.com/Sourav9593/Youtube-clone-ReactJs-',
    },
    {
      id: 2,
      title: 'Google-Gemini Clone',
      img: IMG3,
      description:
        'Created a Google Gemini clone using React.js and Context API to manage global state efficiently. Implemented features like conversational AI interaction, multi-modal content display, and search functionality.',
      technologies: 'Python | Django',
      link: 'https://sourav-google-gemini-clone.netlify.app/',
      github: 'https://github.com/Sourav9593/Google-Gemini-clone-ReactJs-',
    },
    {
      id: 3,
      title: 'Quiz App',
      img: IMG4,
      description: 'Developed a dynamic quiz app using React.js with scoring functionality. Integrated interactive UI components for a seamless user experience. Implemented state management for efficient navigation and performance.',
      technologies: 'Redux toolkit  | React',
      link: 'https://sourav-react-quiz-app.netlify.app/',
      github: 'https://github.com/Sourav9593/Quiz-App-ReactJa',
    },
    {
      id: 4,
      title: 'To-Do App',
      img: IMG5,
      description:
        'Built a responsive todo app using React.js, allowing users to add, and delete tasks. Focused on clean UI design and efficient state management for a smooth user experience.',
      technologies: 'React | Formik.',
      link: 'https://sourav-to-do-app.netlify.app/',
      github: 'https://github.com/Sourav9593/React-ToDo-app',
    },
    // {
    //   id: 5,
    //   title: 'World News',
    //   img: IMG5,
    //   description:
    //     'Fully responsive interactive website built based on Adobe XD design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    // },
    // {
    //   id: 6,
    //   title: 'Math Resource',
    //   img: IMG6,
    //   description:
    //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
    //   technologies: 'JavaScript | Scss | Python',
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>  
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;