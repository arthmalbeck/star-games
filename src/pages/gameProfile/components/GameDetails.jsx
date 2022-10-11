import React from "react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import "./styles.css";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader
} from 'reactstrap';
import { PLAY_ROUTE } from "../../../constants/routes";

const GameDetails = ({ game }) => {
  return (        
    <Card className="game-details">
        <CardHeader>
            <h5>Genre: {game.genre}</h5>
        </CardHeader>
        <ListGroup variant="flush">
            <ListGroupItem>Publisher: {game.publisher}</ListGroupItem>
            <ListGroupItem>Developer: {game.developer}</ListGroupItem>
            <ListGroupItem>Release Date: {format(parseISO(game.release_date), "dd-MM-yyyy")}</ListGroupItem>
            <ListGroupItem>Platform: {game.platform}</ListGroupItem>
        </ListGroup>

        <Link to={`${PLAY_ROUTE}/${game.id}`}>
            <Button className="btn-play-game btn-primary">
                Play
            </Button>
        </Link>
    </Card>
  );
};

export default GameDetails;