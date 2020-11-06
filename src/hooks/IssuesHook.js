import { useState } from "react";
import http from "../services/https";

const IssuesHook = () => {
  const { request } = http();

  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState(null);

  const getIssues = async () => {
    const { data } = await request.get("octocat/Hello-World/issues");
    setIssues(data);
  };

  const getIssue = async (number) => {
    const { data } = await request.get(`octocat/Hello-World/issues/${number}`);
    console.log(data);
    setIssue(data);
  };

  return {
    issues,
    issue,
    setIssues,
    getIssues,
    getIssue
  };
};

export default IssuesHook;
