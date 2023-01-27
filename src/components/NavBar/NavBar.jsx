import "./NavBar.css";

const NavBar = () => {
  const scrollTo = (id) => {
    var yOffset = -120;
    const target1 = document.getElementById(id);
    const y =
      target1.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header>
      <div className="name">
        <h1>Valentin.M</h1>
      </div>
      <ul className="nav">
        <li>Home</li>
        <li onClick={() => scrollTo("about")}>About me</li>
        <li onClick={() => scrollTo("project")}>Projects</li>

        <li id="contact" onClick={() => scrollTo("contact-form")}>
          Contact
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
