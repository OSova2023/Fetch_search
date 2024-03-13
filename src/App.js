import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./comps/Navbar1";
import News from "./comps/News";
import Filter from "./comps/Filter";
import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function App(props) {
  const API = "bea58f088a294fe1a4a0f086e912d823";

  const [ask, setAsk] = useState("");
  useEffect(() => {
    setAsk();
    console.log(ask);
  }, [ask]);

  const myAsk = (e) => {
    setAsk(e.target.value);
    return ask;
  };

  const [myNews, setMyNews] = useState([]);
  const fetchData = async (value) => {
    const req = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`;
    return await fetch({ req })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMyNews(data.articles);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (value) => {
    setMyNews(value);
    fetchData(value);
    console.log(value.target.value);
  };

  // const query = (e) => {
  //   let keywords = e.target.value;
  //   console.log(keywords);
  //   let filtered = myNews.filter((item) => {
  //     return item.title.indexOf(keywords) > -1;
  //   });
  //   setMyNews(filtered.articles);
  // };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                id="input"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => handleChange(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <News myNews={myNews} fetchData={fetchData} query={handleChange} />
      {/* <Filter
        api={API}
        myNews={myNews}
        fetchData={fetchData}
        handleChange={handleChange}
        myAsk={myAsk}
      /> */}
    </div>
  );
}

export default App;
