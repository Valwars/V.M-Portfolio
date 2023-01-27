import Card from "./cardproject";

const Project = () => {
  const projects = [
    {
      title: "Dev Academy",
      content:
        "Dev academy is the website linked to my instagram account, I offerfree tutorials, and I am currently working on premium courses.",
      img: "p1.png",
      languages: "Node JS, React JS, Mongo DB.",
    },
    {
      title: "TopCoin",
      content:
        "TopCoin is one of my first 'big projects'. It is dedicated to the world of crypto-currencies and it contains several features such as: a quiz with ranking, articles, crypto-currency conversion, crypto-currency ranking and finally a wallet tracker.",
      img: "p2.png",
      languages: "Node JS, React JS, Mongo DB.",
    },
    {
      title: "Lego Builder",

      content:
        "Lego Builder is a 3D lego building software developed in java for an end of year project. We received a grade of 20/20 for this project.",
      img: "p3.png",
      languages: "Java, JavaFX.",
    },
    {
      title: "DC Website",

      content:
        "DC Website is a website made during an internship to a researcher in physics. You can find his resume, his projects, his prose and much more.",
      img: "p4.png",
      languages: "HTML, CSS, PHP, JavaScript.",
    },
  ];
  return (
    <div className="content pro" id="project">
      <h1>Some of my projects</h1>

      <div className="card-con">
        <div className="card_left">
          <Card data={projects[0]}></Card>
          <Card data={projects[2]}></Card>
        </div>
        <div className="card_right">
          <Card data={projects[1]}></Card>
          <Card data={projects[3]}></Card>
        </div>
      </div>
    </div>
  );
};

export default Project;
