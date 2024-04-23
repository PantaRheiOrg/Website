import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import '../css/reviews.css'; // Import your custom CSS file for review styles

function Reviews() {
  // Mock data for reviews (replace with actual data)
  const reviews = [
    { id: 1, name: 'John Doe', comment: 'Great app! Very easy to use.', rating: 5 },
    { id: 2, name: 'Jane Smith', comment: 'I love it! Best app ever!', rating: 4 },
    { id: 3, name: 'Alice Johnson', comment: 'Amazing features. Highly recommended.', rating: 5 },
    { id: 4, name: 'Bob Williams', comment: 'So convenient. Can\'t live without it now.', rating: 5 },
    { id: 5, name: 'Emma Brown', comment: 'Excellent app! Superb functionality.', rating: 4 },
    { id: 6, name: 'Michael Jones', comment: 'Very user-friendly. Great design!', rating: 5 },
  ];

  return (
    <Carousel interval={null} pause={false} controls={false} className="reviews-carousel pptt ppbb">
      {reviews.map(review => (
        <Carousel.Item key={review.id}>
          <div className="reviews-container">
            <Card className="text-center mx-auto review-card">
              <Card.Body>
                <Card.Text>{review.comment}</Card.Text>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>Rating: {review.rating}/5</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item> 
      ))}
    </Carousel>
  );
}

export default Reviews;
