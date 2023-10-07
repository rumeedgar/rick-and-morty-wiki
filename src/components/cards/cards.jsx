const cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image } = x;
      return (
        <div key={id} className="col-4">
          <div className="">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">last location</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "no characters found :/";
  }

  return <>{display}</>;
};

export default cards;
