import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  //console.log(info.pages);
  console.log(pageNumber);
  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-3"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      previousLinkClassName="btn btn-primary fs-5 prev"
      nextLinkClassName="btn btn-primary fs-5 next"
      activeClassName="active"
      pageCount={info?.pages}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(e) => {
        setPageNumber(e.selected + 1);
      }}
    />
  );
};

export default Pagination;
