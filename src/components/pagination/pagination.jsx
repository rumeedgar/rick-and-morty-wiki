import React from "react";
import ReactPaginate from "react-paginate";

const pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextclassName="btn btn-dark"
      previousclassName="btn btn-dark"
      pageclassName="page-item"
      pageLinkclassName="page-link"
      activeclassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default pagination;
