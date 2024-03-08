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
          <div className="mainDiv">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={element.urlToImage} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.title}</Card.Text>
                <Button variant="primary" href={element.url} target="_blank">
                  Go to the source
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default News;
