import { useState } from "react";
import { send } from "emailjs-com";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [toSend, setToSend] = useState({
    email: "",
    name: "",
    message: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 6000,
    transition: Slide,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!localStorage.getItem("email")) {
      if (toSend.message.length < 10) {
        toast.error("Message too short", toastOptions);
      } else if (toSend.name.length < 2) {
        toast.error("Name too short", toastOptions);
      } else if (toSend.email.length < 8) {
        toast.error("Invalid email.", toastOptions);
      } else {
        send("service_aiw4bho", "template_38km459", toSend, "UfCZg0XpsCllsPCsU")
          .then((response) => {
            toast.success("The email has been sent!", toastOptions);
            localStorage.setItem("email", true);
          })
          .catch((err) => {
            toast.error(
              "An error occurred while sending the email.",
              toastOptions
            );
          });
        setToSend({ email: "", name: "", message: "" });
      }
    } else {
      toast.error("You have already sent an email.", toastOptions);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="content" id="contact-form">
      <div className="contact">
        <div className="contact-left">
          <h1>Want to work with me ?</h1>
          <p>
            If you wish to work with me, or to have more details on my various
            skills and activities, please fill in this form.
          </p>
        </div>

        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={toSend.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                value={toSend.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                value={toSend.message}
                onChange={handleChange}
              />
            </div>

            <div>
              <button type="submit">Let's get started</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
