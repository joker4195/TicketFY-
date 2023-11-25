import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const WorkCard = ({ item }) => {
  console.log(item)
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={ } /> */}
      <Card.Body>
        <Card.Title>hi</Card.Title>
        <Card.Text>
          dkjlvns skljv dsl sdlnsdkl sklvwdc
        </Card.Text>
      </Card.Body>
    </Card>
  ) 
}

export default WorkCard



