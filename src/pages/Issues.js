import React, { useEffect } from "react";
import IssueItem from "../components/IssueItem";
import IssuesHook from "../hooks/IssuesHook";

const Issues = () => {
  const { issues, getIssues } = IssuesHook();

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div className="card">
      <div className="card-header">190 Open</div>
      <ul className="list-group ">
        {issues.map((item) => (
          <IssueItem key={item.id} issue={item} />
        ))}
      </ul>
    </div>
  );
};

export default Issues;
