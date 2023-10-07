const cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name } = x;
      return (
        <div key={id} className="col-4">
          {name}
        </div>
      );
    });
  } else {
    display = "no characters found :/";
  }

  return <>{display}</>;
};

export default cards;
