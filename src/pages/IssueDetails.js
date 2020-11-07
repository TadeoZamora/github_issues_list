import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import IssuesHook from "../hooks/IssuesHook";
import { moment_relative_time } from "../services/dates";

const IssueDetails = () => {
  const { getIssue, comments, issue } = IssuesHook();

  const { id } = useParams();

  useEffect(() => {
    getIssue(id);
  }, []);

  return (
    issue !== null && (
      <div className="container">
        <div className="row">
          <div className="col">
            <span className="h2">{issue.title}</span>{" "}
            <span className="h2 text-muted">#{issue.number}</span>
            <p>
              <strong className="text-muted">{issue.user.login}</strong> opened
              this issue {moment_relative_time(issue.created_at)} ·{" "}
              {issue.comments} comment
            </p>
          </div>
        </div>
        {comments.map((item) => (
          <div className="row mb-4" key={item.id}>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  {item.user.login} commented{" "}
                  {moment_relative_time(item.created_at)}
                </div>
                <div className="card-body">{item.body}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default IssueDetails;
