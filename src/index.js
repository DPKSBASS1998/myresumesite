import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const HardSkills = () => {
  return (
      <div className="resume-section">
          <h2 className="section-title text-light  bi-person-gear"> HardSkills</h2>
          <ul className="list-group">
              <li className="list-group-item-dark bi-code-slash"> <strong>Мови програмування:</strong> C# (розробка кросплатформених додатків, веб-додатків та мікросервісів), Java (базові знання), PHP (базові знання).</li>
              <li className="list-group-item-dark bi-gear-wide-connected"> <strong>Фреймворки та технології:</strong> ASP.NET Core, Entity Framework Core, React.js (початковий рівень), HTML5, CSS3, JavaScript, Bootstrap.</li>
              <li className="list-group-item-dark bi-database"> <strong>Бази даних:</strong> SQL (розробка складних запитів, курсори, тригери, представлення), PostgreSQL (базові знання).</li>
              <li className="list-group-item-dark bi-boxes"> <strong>Контейнеризація та мікросервіси:</strong> Docker, Minikube, RabbitMQ.</li>
          </ul>
      </div>
  );
};

const SoftSkills = () => {
  return (
      <div className="resume-section">
          <h2 className="section-title text-light  bi-person"> SoftSkills</h2>
          <ul className="list-group">
              <li className="list-group-item-dark bi-people-fill"> Досвід роботи в команді понад рік (менеджер техпідтримки).</li>
              <li className="list-group-item-dark bi-bezier2"> Комунікабельність, вміння планувати завдання та оперативно знаходити рішення.</li>
              <li className="list-group-item-dark bi-compass"> Пошук альтернативних підходів, адаптація та імпровізація в нестандартних ситуаціях.</li>
              <li className="list-group-item-dark bi-arrow-up-square"> Відкритий до нових технологій та можливостей.</li>
          </ul>
      </div>
  );
};

const Projects = () => {
  return (
      <div className="resume-section">
          <h2 className="section-title text-light bi-person-lines-fill"> MyProjects</h2>
          <ul className="list-group">
              <li className="list-group-item-dark"><strong>Веб-додаток на ASP.NET Core + React.js</strong> – На данний момент в процесі розробки, в майбутньому планується розділення на фронтенд на React та бекенд на ASP.</li>
              <li className="list-group-item-dark"><strong>Веб-додаток тільки на ASP.NET Core на мікросервісній архітектурі.</strong> – Використання Docker + Minikube, інтеграція RabbitMQ, підключення та написання власних сервісів.</li>
          </ul>
      </div>
  );
};

const Education = () => {
  return (
      <div className="resume-section">
          <h2 className="section-title text-light bi-mortarboard"> Освіта</h2>
            <ul className="list-group">
            <li className="list-group-item-dark">
              <p><strong>Дніпропетровський національний університет ім. Олеся Гончара.</strong></p>
              <p>Спеціальність: Комп'ютерна інженерія (123). Курс 3.</p>
            </li>
            </ul>
      </div>
  );
};

const About = () => {
  return (
      <div className="resume-section full-height">
          <div className="avatar"></div>
          <h4>Більницький Владислав Ігорович</h4>
          <hr/>
          <h2 className="section-title text-light text-decoration-underline">Контакти</h2>

          <ul className="list-group">
              <li className="list-group-item-dark bi-envelope-at"> <strong>Email: bvivladislav@gmail.com</strong></li>
              <li className="list-group-item-dark bi-telephone"> <strong>Телефон: +380960923617</strong></li>
              <li className="list-group-item-dark bi-telegram"> <strong>Telegram: @bvivladislav</strong></li>
              <li className="list-group-item-dark bi-github"> <strong>GitHub: DPKSBASS1998</strong></li>
          </ul>
          <hr/>
          
      </div>
  
  )}

  const AboutME = () => {
      return (
          <div className="resume-section">
              <h2 className="text-info section-title">Про мене</h2>
              <p className="" >Привіт! Мене звати Владислав, я студент 3 курсу Дніпропетровського національного університету ім. Олеся Гончара, навчаюсь на спеціальності "Комп'ютерна інженерія".</p>
              <p>Маю досвід роботи менеджером технічної підтримки в компанії з розробки програмного забезпечення. Під час роботи вдалося навчитися вирішувати технічні проблеми, працювати в команді та використовувати англійську мову в робочому середовищі.</p>
              <p>Маю бажання розвиватися в сфері розробки програмного забезпечення, вивчати нові технології та покращувати свої навички.</p>
          </div>
      )
  }

  const Resume = () => {
      return (
          <div className="container resume-container">
              <div className="row g-4">
                  {/* About Me - займатиме одну колонку на малих екранах */}
                  <div className="col-4 sticky-column">
                      <About />
                  </div>
                  {/* Education + Skills + Projects - розподіляються на великих екранах */}
                  <div className="col-8 scrollable-column">
                      <Education />
                      <HardSkills />
                      <SoftSkills />
                      <Projects />
                  </div>
              </div>
          </div>
      );
  };
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Resume />);

reportWebVitals();
