import React, { useState } from "react";
import "./styles.css";

const myChoice = {
  books: {
    javascript: [
      { name: "Eloquent JavaScript", rating: "4/5" },
      { name: "You Don't Know JS", rating: "3.5/5" }
    ],

    fiction: [
      {
        name: "Shiva Trilogy",
        rating: "5/5"
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        rating: "4.5/5"
      }
    ],
    business: [
      {
        name: "Never Split the Difference",
        rating: "3.5/5"
      },
      {
        name: "Loonshots",
        rating: "5/5"
      }
    ]
  },
  Songs: {
    Rap: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" }
    ],
    Romantic: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" }
    ],
    old_songs: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" }
    ]
  },
  movies: {
    Hollywood: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" }
    ],
    Bollywood: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" }
    ],
    jollywood: [
      { name: "Ram Ram by mc square", rating: "4.5/5" },
      { name: "SQl By Sidhu musewala", rating: "4/5" }
    ]
  }
};

export default function App() {
  const [selectedbranch, setbranch] = useState("javascript");
  const [selectedgenre, setgenre] = useState("books");

  function onClickHandler(genre) {
    setgenre(genre);
  }

  function onSelectHandler(book) {
    setbranch(book);
  }

  const inner = myChoice[selectedgenre];

  return (
    <div className="App">
      <h1> 📚 myChoice </h1>
      <p>Checkout my Favorite things. Select a genre to get started with</p>
      <div>
        {Object.keys(myChoice).map((genre) => (
          <button key={genre} onClick={() => onClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div>
        {Object.keys(inner).map((book) => (
          <button key={book} onClick={() => onSelectHandler(book)}>
            {book}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {inner[selectedbranch].map((xyz) => (
            <li key={xyz}>
              <div>{xyz.name}</div>
              <div>{xyz.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
