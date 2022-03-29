import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://img.etimg.com/thumb/msid-82630390,width-650,imgsize-668758,,resizemode-4,quality-100/startup.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          <li>
          Contributes in the development of blockchain-related technology and D-Apps
          </li>
          <li>
          Analyse and suggest improvements in the overall development process
          </li>
          <li>
          Researched on creating proper standards and processes for web3 project development
          </li>

        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">BKSS Ideathon 2020-"think to change"</h4>
            <p className="a-award-desc">
              This was something very special happened to me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
