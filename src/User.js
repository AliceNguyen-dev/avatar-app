import React,{useState, useEffect} from "react";

export default function User() {

  const [data , setData]=useState(null)

  useEffect(() => {
    fetch("/avatar.json")
    .then((res) => res.json())
    .then((jsonData) => {
      setData(jsonData);
    })
    .catch((err) => {
      console.log(err, "error");
    })
  })

  return (
    <div className="User">

      {
       data? data.map((person) => (
        <>
          <img src={person.picture.medium} alt="avatar" />
          <div className="infos">
            <h2>{person.name.first} {person.name.last}</h2>
            <p className="local">{person.location.street}</p>
          </div>
          

        </>
       )):""
      }

    </div>
  );
}
