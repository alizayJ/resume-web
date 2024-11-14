import Image from "next/image";


export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <h1 className="logo">MY PORTFOLIO</h1>
          <ul className="nav-links">
            <li>
              <a href="#">Skills section</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            </ul>
        </nav>
      </header>
      <section className="section-1">
        <Image
          className="hero-image"
          src="/photo1.jpg"
          layout="fill"
          objectFit="cover"
          alt="hero background"
        />
        <div className="hero-content">
          <h1>WELCOME TO MY PORTFOLIO WEBSITE</h1>
          <h2>EXPLORE MY WORK AND EXPERIENCES</h2>
        </div>
      </section>

      <section className="skills-section-root">
      <h1 style={{fontSize:'3rem'}}>SKILLS SECTION</h1>
        <div className="skills-section">
          
          <div className="skills-section-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="black"
            >
              <path d="M200-120q-17 0-28.5-11.5T160-160v-40h-40v-160q0-17 11.5-28.5T160-400h40v-280q0-66 47-113t113-47q66 0 113 47t47 113v400q0 33 23.5 56.5T600-200q33 0 56.5-23.5T680-280v-280h-40q-17 0-28.5-11.5T600-600v-160h40v-40q0-17 11.5-28.5T680-840h80q17 0 28.5 11.5T800-800v40h40v160q0 17-11.5 28.5T800-560h-40v280q0 66-47 113t-113 47q-66 0-113-47t-47-113v-400q0-33-23.5-56.5T360-760q-33 0-56.5 23.5T280-680v280h40q17 0 28.5 11.5T360-360v160h-40v40q0 17-11.5 28.5T280-120h-80Z" />
            </svg>
            <h1>IOT and Circuit designing</h1>
          </div>
          <div className="skills-section-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="black"
            >
              <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" />
            </svg>
            <h1>Matlab and C++</h1>
          </div>
          <div className="skills-section-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="black"
            >
              <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
            </svg>
            <h1>WEB Development</h1>
          </div>
        </div>
      </section>

      
      <section className="personal-info">
       <h1>Education:</h1>
       <h1>Pre-Engineering</h1>
       <h1>Contact:</h1>
       <h1>aliza.kashif51@gmail.com</h1>
      </section>
      <footer>
        <h1>@Aliza. All rights reserved.</h1>
      </footer>
    </div>
  );
}
