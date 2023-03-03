import React, {useEffect, useState,} from "react";

const API_URL = 'https://v2.jokeapi.dev/joke/Programming?amount=10';
function App() {
    const [jokes, setJokes] = useState('');

      useEffect(() => {
        fetch(API_URL)
            .then(res => res.json)
            .then(data => setJokes(data.value.jokes));
      }, []);

  return (
    <div className="container">
      <h1>Joke on you</h1>
        <p>{jokes}</p>
        <button>Get new joke😹</button>
    </div>
  );
}

export default App;
