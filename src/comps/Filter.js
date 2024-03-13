import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./news.css";

const Filter = ({ fetchData, myNews, keyword, query }) => {
  // const API = "bea58f088a294fe1a4a0f086e912d823";

  // const [myNews, setMyNews] = useState([]);

  // const fetchData = async () => {
  //   return await fetch(
  //     `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API}`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMyNews(data.articles);
  //       // console.log(myNews);
  //     });
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mainDiv">
      {myNews.map((element) => {
        // console.log(element);

        return (
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={
                element.urlToImage == null
                  ? "https://www.newstyle-mag.com/wp-content/uploads/2017/02/232-286x300.jpg"
                  : element.urlToImage
              }
              style={{ maxHeight: "10rem", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>
                {element.source.name === ""
                  ? element.author
                  : element.source.name}
              </Card.Title>
              <Card.Text>{element.title}</Card.Text>
              <Card.Text className="date">{element.publishedAt}</Card.Text>
              <Button variant="primary" href={element.url} target="_blank">
                Go to the source
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Filter;
