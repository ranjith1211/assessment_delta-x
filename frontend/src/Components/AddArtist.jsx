import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

export const AddArtist = () => {
  //name dob rating
  let datastore = JSON.parse(localStorage.getItem("logindetail"));
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [rating, setRating] = useState("");

  async function registerArtist(event) {
    event.preventDefault();
    const res = await fetch("http://localhost:5000/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        dob,
        rating,
      }),
    });
    const data = await res.json();

    if (data.status === false) {
      alert("Artist already exists");
      setName("");
      setDob("");
      setRating("");
      return;
    }
    if (name != "" && dob != "" && rating != "") {
      alert("Artist Added");
      setName("");
      setDob("");
      setRating("");
      navigate("/artists");
    } else {
      alert("Please Fill all the details");
    }
  }
  return (
    <>
      <Navbar></Navbar>
      {datastore ? (
        <div>
          <div className="login">
            <h1>Add Artist</h1>
            <form onSubmit={registerArtist}>
              <div>
                <input
                  className="inputdiv"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="inputdiv"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  placeholder="dob"
                />
              </div>

              <div>
                <input
                  className="inputdiv"
                  onChange={(e) => setRating(e.target.value)}
                  type="rating"
                  value={rating}
                  placeholder="rating"
                />
              </div>
              <input className="inputdivbtn" type="submit" value="Add" />
            </form>
          </div>
        </div>
      ) : (
        <h2
          style={{
            margin: "auto",
            width: 300,
            textAlign: "center",
            marginTop: 100,
          }}
        >
          Login OR Register
        </h2>
      )}
    </>
  );
};
