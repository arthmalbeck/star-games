import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FIND_GAME, LIST_GAMES } from '../../features/games/actionTypes';
import GameDetails from './components/GameDetails';
import Loading from '../../components/Loading';

import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import PageHeader from '../../components/PageHeader';

const GameProfile = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const gamesReducer = useSelector((state) => state.gamesReducer);
    const { list, loading, game } = gamesReducer;

    useEffect(()=>{
        dispatch({ type: LIST_GAMES });
    }, [dispatch]);

    useEffect(()=>{
        dispatch({ type: FIND_GAME, id: id });
    }, [id, list, dispatch]);

    const renderInfo = (game) => {
        return (
            <Card>
                <img src={game.thumbnail} alt={`Thumbnail of the game ${game.title}`} width="100%"/>
                <CardBody>
                    <h3>Description:</h3>
                    <p>{game.short_description}</p>
                </CardBody>
            </Card>
        );
    }

    return (
        <> 
            { loading ? <Loading/> :
                game && (
                    <Container className='body-content'>
                        <PageHeader title={game.title} description={`Profile of the game ${game.title}`} />
                        <Row>
                            <Col md={8}>
                                {renderInfo(game)}
                            </Col>
                            <Col md={4}>
                                <GameDetails game={game} />
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </>
    );
};

export default GameProfile;