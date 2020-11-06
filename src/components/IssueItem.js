import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

const IssueItem = ({ ...props }) => {
  const { issue } = props;
  const { title, number, user, created_at, comments } = issue;
  const history = useHistory();

  const goToDetails = (number) => {
    console.log("here");
    history.push(`/details/${number}`);
  };
  return (
    <li
      className="list-group-item align-items-center"
      onClick={() => goToDetails(number)}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        {comments > 0 && <small>Comments {comments}</small>}
      </div>
      <p className="mb-1">
        # {number} opened {moment(created_at).fromNow()} by {user.login}
      </p>
    </li>
  );
};

export default IssueItem;
