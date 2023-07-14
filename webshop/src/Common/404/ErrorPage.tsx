import React, { useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);
  return <div>404 NotFound</div>;
};

export default ErrorPage;
