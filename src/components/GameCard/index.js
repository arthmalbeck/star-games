import React from "react";
import "./styles.css";

import {
  Col,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardText
} from 'reactstrap';
import { Link } from "react-router-dom";
import { GAME_ROUTE } from "../../constants/routes";

const GameCard = ({ item }) => {
  return (
    <Col className="card-column" md={4}>
      <Link className="card-game" to={`${GAME_ROUTE}/${item.id}`}>
        <Card className="card-container">
          <img src={item.thumbnail} alt={`Thumbnail of the game ${item.title}`} className="card-img"/>
          <CardBody>
            <h1>{item.title}</h1>
            <CardText className="text-muted">
              Genre: {item.genre}
            </CardText>
          </CardBody>
          <ListGroup variant="flush">
            <ListGroupItem>Publisher: {item.publisher}</ListGroupItem>
            <ListGroupItem>Platform: {item.platform}</ListGroupItem>
          </ListGroup>
        </Card>
      </Link>
    </Col>
  );
};

export default GameCard;