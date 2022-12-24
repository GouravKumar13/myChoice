import React, { useState } from "react";
import "./styles.css";

const myChoice = {
  books: {
    javascript: [
      { name: "Eloquent JavaScript", rating: "4/5" },
      { name: "You Don't Know JS", rating: "3.5/5" },
    ],

    fiction: [
      {
        name: "Shiva Trilogy",
        rating: "5/5",
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        rating: "4.5/5",
      },
    ],
    business: [
      {
        name: "Never Split the Difference",
        rating: "3.5/5",
      },
      {
        name: "Loonshots",
        rating: "5/5",
      },
    ],
  },
  Songs: {
    Rap: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" },
    ],
    Romantic: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" },
    ],
    old_songs: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" },
    ],
  },
  movies: {
    Hollywood: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" },
    ],
    Bollywood: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" },
    ],
    jollywood: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" },
    ],
  },
};

export default function App() {
  const [selectedbranch , setbranch] = userState("");
  const [selectedgenre, setgenre] = useState("books");
  function onClickHandler(choice) {
    setgenre(choice);
  }

  function onSelectHandler(book) {
    setbranch(book);
  }
  return (
    <div className="App">
      <h1> 📚 myChoice </h1>
      <p>Checkout my Favorite things. Select a genre to get started with</p>
      <div>
        {Object.keys(myChoice).map((choice) => (
          <button key={choice} onClick={() => onClickHandler(choice)}>
            {choice}
            {console.log(selectedgenre)}
          </button>
        ))}
      </div>
      <hr />

      <div>
        {Object.keys(mychoice[selectedgenre]).map((book) => (
          <span key={book}>
            <button onClick={() => onSelectHandler(book)}>{book}</button>
          </span>
        ))}
      </div>
    </div>
  );
}
