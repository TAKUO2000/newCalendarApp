import React, { useEffect, useState } from "react";

function Test() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default Test;
