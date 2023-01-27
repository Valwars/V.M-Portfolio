import SocialBar from "./components/social_icons/socialBar";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="wrapper">
        <div>
          <h1>Valentin.M</h1>
          <SocialBar></SocialBar>
        </div>
        <div>
          <h3 onClick={() => scrollTop()}>
            Back to top of page <i className="fa fa-chevron-up"></i>
          </h3>
        </div>

        <div>
          <p>Created by Valentin Merault</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
