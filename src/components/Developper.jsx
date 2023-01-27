const Dev = () => {
  return (
    <div className="content" id="about">
      <h1>Developer</h1>
      <h2>
        I have a computer science degree and many personnals projects in
        development.
      </h2>
      <div className="info_container">
        <div
          className="card"
          data-aos="slide-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1>01</h1>
          <h3>Fullstack developer</h3>
          <h4>Creation of fullstack web applications.</h4>
          <p>HTML, CSS, JS, PHP, Node, React, MySQL, MongoDB</p>
        </div>
        <div
          className="card"
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1>02</h1>
          <h3>Programming paradigms</h3>
          <h4>Mastering the three programming paradigms.</h4>
          <p>POO (Java), imperative (python), functional (Caml).</p>
        </div>
        <div
          className="card"
          data-aos="slide-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1>03</h1>
          <h3>Mobile Development Basics</h3>
          <h4>Familiar with native mobile application development.</h4>
          <p>Android studio, Xcode.</p>
        </div>
        <div
          className="card"
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1>04</h1>
          <h3>Algorithms, data structures</h3>
          <h4>Mastery of the main algorithms and data structures.</h4>
        </div>
      </div>
    </div>
  );
};

export default Dev;
