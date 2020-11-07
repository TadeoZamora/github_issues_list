import React, { useEffect } from "react";
import IssueItem from "../components/IssueItem";
import PaginationComponent from "../components/Pagination";
import IssuesHook from "../hooks/IssuesHook";

const Issues = () => {
  //import states and functions from custom hook of issues
  const { issues, getIssues, pages, currentPage } = IssuesHook();

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div className="card">
      <div className="card-header">{pages} Open</div>
      <ul className="list-group mb-2">
        {issues.map((item) => (
          <IssueItem key={item.id} issue={item} />
        ))}
      </ul>
      <PaginationComponent pageNumber={pages} change={currentPage} />
    </div>
  );
};

export default Issues;
