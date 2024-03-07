import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const API = "bea58f088a294fe1a4a0f086e912d823";

  const [myNews, setMyNews] = useState([]);

  const fetchData = async () => {
    return await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMyNews(data.articles);
        console.log(myNews);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {myNews.map((element) => {
        console.log(element);

        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default News;
