import { useState } from "react";
import http from "../services/https";
//this custom hook its a helper to separate the logic and the api requests of the pure component
const IssuesHook = () => {
  //imported function to access to a custom service for http requests
  const { request } = http();

  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState(null);
  const [comments, setComments] = useState([]);
  const [pages, setPages] = useState(0);

  const getIssues = async (page = 1) => {
    try {
      const { data } = await request.get(
        `octocat/Hello-World/issues?per_page=10&page=${page}`
      );
      setIssues(data);
      getNumberIssues();
    } catch (error) {
      console.log(error);
    }
  };

  const getIssue = async (number) => {
    try {
      const { data } = await request.get(
        `octocat/Hello-World/issues/${number}`
      );
      setIssue(data);
      getComment(data.number);
    } catch (error) {
      //TODO import alert component later
      console.log(error);
    }
  };

  const getNumberIssues = async () => {
    try {
      const { data } = await request.get(`octocat/Hello-World`);
      setPages(data.open_issues_count);
    } catch (error) {
      console.log(error);
    }
  };

  const getComment = async (number) => {
    try {
      const { data } = await request.get(
        `octocat/Hello-World/issues/${number}/comments`
      );
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };
  const currentPage = async (page) => {
    await getIssues(page);
  };
  return {
    issues,
    issue,
    setIssues,
    getIssues,
    getIssue,
    getComment,
    comments,
    pages,
    currentPage
  };
};

export default IssuesHook;
