import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jokes")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((jsonResponse) => {
        setJokes(jsonResponse);
      })
      .catch((err) => {
        console.log("Something went wrong : ", err);
      });
  }, []);

  return (
    <>
      {jokes.length !== 0 ? (
        <div>
          <h1> Total Jokes : {jokes.length}</h1>
          <ul>
            {jokes.map((joke) => (
              <li
                style={{
                  listStyle: "none",
                  margin:"30px 0px"
                }}
                key={joke.id}
              >
                <div>{joke.data}</div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <span>Geting jokes...</span>
          <span>Please wait</span>
        </div>
      )}
    </>
  );
};

export default App;
