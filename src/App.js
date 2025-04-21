import './App.css';
import profileImg from './82pfp3.jpg';

function App() {
  return (
    <div>
      <header>
        <h1>Tyler Harry Bio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <img src={profileImg} alt="Tyler Harry's Image" width="200" />
        <p>Hello! My name is Tyler Harry, and I’m a Computer Science major passionate about robotics and the future of technology.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-container">
          <div className="project">
            <h3>BetterRestProgram</h3>
            <p>An iOS app to calculate a user's sleep using Swift.</p>
            <a href="https://github.com/mrleangreen/BetterRestProgram" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
          <div className="project">
            <h3>EchoesOfEternity</h3>
            <p>A 2D turn-based RPG game created in C#.</p>
            <a href="https://github.com/mrleangreen/EchoesOfEternity" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
          <div className="project">
            <h3>DroneDeliveryTracker</h3>
            <p>A Python application to track packages in transit.</p>
            <a href="https://github.com/mrleangreen/DroneDeliveryTracker" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Info</h2>
        <ul>
          <li><a href="mailto:tharry@usv.edu">Email</a></li>
          <li><a href="https://github.com/mrleangreen" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://your-portfolio-url.com" target="_blank" rel="noreferrer">Portfolio</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
