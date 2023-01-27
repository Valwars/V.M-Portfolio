const Card = ({ data }) => {
  return (
    <div className="card-project">
      <div className="img_container">
        <img src={data.img} alt="" />
      </div>
      <div className="content-card">
        <div>
          <h2>{data.title}</h2>
          <p>
            {data.content}
            <br></br>
            <br></br>
            {data.languages}
          </p>
        </div>
      </div>
      <div className="btn"></div>
    </div>
  );
};

export default Card;
