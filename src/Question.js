import React, { useState } from "react";

import { Card, Button, ListGroup } from 'react-bootstrap';

const Question = ({ title, text, answers, correctAnswer, onAnswer }) => {
  const [givenAnswer, setGivenAnswer] = useState(null);

  const giveAnswer = answer => {setGivenAnswer(answer); onAnswer(answer) }

  return (
    <div style={{margin: '0 auto', maxWidth: '800px'}}>
      <Card>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Platypus_%28Ornithorhynchus_anatinus%29._First_Description_1799.jpg" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
      <br/>
      <ListGroup defaultActiveKey={"#answer" + givenAnswer}>
        {
          answers.length && answers.map((answer, index) => {
            var variant = "";
            var verdict = "";
            var disabled = "";
            if (index == givenAnswer) {
              variant = "danger";
              verdict = <> - <strong>Wrong!</strong></>;
              if (givenAnswer == correctAnswer) {
                variant = "primary";
                verdict = <> - <strong>Correct!</strong></>;
              }
            }
            if (givenAnswer != null) {
              disabled = "disabled";
            }
            return <ListGroup.Item disabled={disabled} variant={variant} href={"#answer" + index} action onClick={() => giveAnswer(index)}>
              {answer}{verdict}
            </ListGroup.Item>
          })
        }
      </ListGroup>
    </div>

  );
}

export default Question;
