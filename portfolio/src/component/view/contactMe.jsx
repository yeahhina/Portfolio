import "./contactMe.scss";
import linkedin from "./../../assets/linkedin.png";
import github from "./../../assets/github.png";
function ContactMe() {
  return (
    <div className="contactMe">
      <h1 id="title">Contact Me</h1>
      <div className="itemsContainer">
        <div className="left">
          <h2 className="subtitle"> Get In Touch</h2>
          <hr class="line" />
          <p>
            Feel free to reach out for any questions, project inquiries, or just
            to say hello!
          </p>
          <div className="socialText">
            <h3>Email</h3>
            <p>y.mumtahina19@gmail.com</p>
          </div>
          <div className="socialLinks">
            <img src={linkedin} />
            <img src={github} />
          </div>
        </div>
        <form className="right">
          <div className="nameAndEmail">
            <div className="entry">
              <label>Your Name</label>
              <input placeholder="Enter your name" />
            </div>
            <div className="entry">
              <label>Your Email</label>
              <input placeholder="Enter your email" />
            </div>
          </div>
          <div className="entry subject">
            <label>Subject</label>
            <input placeholder="Enter subject" />
          </div>
          <div className="entry message">
            <label>Message</label>
            <textarea className="messageBox" placeholder="Enter your message" />
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default ContactMe;
