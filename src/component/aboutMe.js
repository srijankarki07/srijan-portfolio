import { IoLogoHtml5 } from "react-icons/io5";
import { BsFiletypeCss } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoJavascript } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const MyInfo = [
  {
    id: 1,
    text: "Buliding the Web of Tomorrow, Today",
    text2: "About Me",
    text3:
      " Proactive and passionate Frontend Developer with strong expertise in HTML, CSS, JavaScript, React.js, and Next.js. Skilled in building responsive and user-centric web applications, integrating APIs, and enhancing user experiences. Proven ability to deliver scalable and maintainable codebases while staying updated with the latest trends in web development. Seeking opportunities to leverage my technical skills and creativity in web development.",
  },
];

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <IoLogoHtml5 />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <BsFiletypeCss />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <BiLogoJavascript />,
  },
  {
    id: 4,
    name: "React.js",
    icon: <GrReactjs />,
  },
  {
    id: 5,
    name: "Next.js",
    icon: <RiNextjsLine />,
  },
  {
    id: 6,
    name: "Postman",
    icon: <SiPostman />,
  },
  {
    id: 7,
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    id: 8,
    name: "GitHub",
    icon: <FaGithub />,
  },
];

export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <h1> {MyInfo[0].text} </h1>
      <div className="description">
        <div className="my-description">
          <p className="title">{MyInfo[0].text2}</p>
          <p>{MyInfo[0].text3}</p>

          <div className="skills">
            <p className="title">Skills </p>
            <div className="skill-icons">
              <div className="skill-icons-wrapper">
                {skills.map((skill, index) => (
                  <div key={skill.id || index} className="icon">
                    {skill.icon} {skill.name}
                  </div>
                ))}
                {skills.map((skill, index) => (
                  <div key={`duplicate-${skill.id || index}`} className="icon">
                    {skill.icon} {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="image"></div>
      </div>

      <div className="education">
        <p className="title">Education</p>
        <div className="timeline">
          <div className="timeline-item right">
            <div className="timeline-line"></div>
            <div className="timeline-content">
              <p className="timeline-title">SEE</p>
              <p className="insititute">High New Vision Academy</p>
              <p>Satungal-10, Chandragiri</p>
              <p>(2019)</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-line"></div>
            <div className="timeline-content">
              <p className="timeline-title">+2</p>
              <p className="insititute">Kathmandu BernHardt College</p>
              <p>Balkhu, Kathmandu</p>
              <p>(2017-2019)</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-line"></div>
            <div className="timeline-content">
              <p className="timeline-title">B.E. in Computer Engineering</p>
              <p className="insititute">Kantipur Engineering College</p>
              <p>Dhapakhel Lalitpur</p>
              <p>(2019-2023)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
