import React, { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [img, setImg] = useState(null);

  const fetchPost = async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    console.log(data);
    setPerson(data.results[0].name.first);
    setImg(data.results[0].picture.large);
    setLoading(false);
    console.log(person);
  };

  useEffect(() => {
    // fetch('https://api.randomuser.me/')
    // .then(const response => response.json())
    // .then(console.log(response))
    // // .then(pers => setPerson(pers.results.name.first))
    fetchPost();
  }, []);

  return (
    <div>
      {loading || !person ? (
        <div>loading...</div>
      ) : (
        <>
          {" "}
          <div>{person}</div> <img src={img} />
        </>
      )}
    </div>
  );
}
