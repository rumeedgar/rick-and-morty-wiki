import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const filters = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-dark text-decoration-underline mb-4"
      >
        clear filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />
      </div>
    </div>
  );
};

export default filters;
