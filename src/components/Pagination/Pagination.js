import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);
  let updateDimension = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  return (
    <>
      <style>{`
      @media (max-width:768px){
        .next, .prev{
          display:none;
        }
        .pagination{
          font-size:14px
          text-decoration:none;
        }
      }
      `}</style>
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
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangedDisplayed={width < 576 ? 1 : 2}
        onPageChange={(e) => {
          setPageNumber(e.selected + 1);
        }}
      />
    </>
  );
};

export default Pagination;
