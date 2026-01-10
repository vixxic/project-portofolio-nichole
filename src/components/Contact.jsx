import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="image-contact">
          <img src="/imgOrangContact.png"></img>
        </div>

        <div className="contact-info-container">
          <h1 className="contact-tittle">Get In Touch</h1>
          <form className="contact-form">
            <div className="grid-input">
              <input
                placeholder="First Name"
                className="inp1 inp"
                type="text"
                name="firstname"
              ></input>
              <input
                placeholder="Last Name"
                className="inp2 inp"
                type="text"
                name="lastname"
              ></input>
              <input
                placeholder="Email Address"
                className="inp3 inp"
                type="email"
                name="email"
              ></input>
              <input
                placeholder="Phone No."
                className="inp4 inp"
                type="number"
                name="phone.no"
              ></input>
              <input
                placeholder="Message"
                className="inp5 inp"
                type="text"
                name="mesaage"
                style={{
                  height: "10em",
                  width: "100%",
                }}
              ></input>
              <br />
              <div className="div">
                <span>Watsapp: 0813-1777-5938</span> <br /> Email:
                janikanilobak@gmail.com
              </div>
              <br />
              <button
                type="submit"
                className="send-btn"
                onClick={() => {
                  alert("Thankyou for your message");
                }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
