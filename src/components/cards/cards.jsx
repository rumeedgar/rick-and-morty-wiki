const cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {});
  } else {
    display = "no characters found :/";
  }

  return <>{display}</>;
};

export default cards;
