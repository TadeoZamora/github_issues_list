import { useState } from "react";
import http from "../services/https";

const IssuesHook = () => {
  const { request } = http();

  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState(null);
  const [comments, setComments] = useState([]);

  const getIssues = async () => {
    const { data } = await request.get("octocat/Hello-World/issues");
    setIssues(data);
  };

  const getIssue = async (number) => {
    const { data } = await request.get(`octocat/Hello-World/issues/${number}`);
    setIssue(data);
    getComment(data.number);
  };

  const getComment = async (number) => {
    const { data } = await request.get(
      `octocat/Hello-World/issues/${number}/comments`
    );
    setComments(data);
  };

  return {
    issues,
    issue,
    setIssues,
    getIssues,
    getIssue,
    getComment,
    comments
  };
};

export default IssuesHook;
