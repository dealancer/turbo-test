import React, { useState } from "react";

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Question from "./Question";

function App() {
  const [item, setItem] = useState({
    question: "What is platypus?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/Platypus_%28Ornithorhynchus_anatinus%29._First_Description_1799.jpg",
    answers: ["Reptile", "Mammal", "Insect", "Bird"],
    correctAnswer: 1,
  });


  return (
    <>
      <Question title="Question 1 of 10" text={item.question} answers={item.answers} correctAnswer={item.correctAnswer} onAnswer={answer => setItem({...item, givenAnswer: answer}) }></Question>
      Your answer: {item.givenAnswer}
    </>
  );
}

export default App;
