import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
//component to control the pagination
const PaginationComponent = ({ pageNumber, change, fixed }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    //every time the state chanfe
    //the value of the page is returned to the parent component
    change(page);
  }, [page]);

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={pageNumber}
      pageRangeDisplayed={5}
      onChange={setPage}
      itemClass="page-item"
      linkClass="page-link"
    />
  );
};
export default PaginationComponent;
