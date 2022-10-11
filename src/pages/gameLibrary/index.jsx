import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Row } from 'reactstrap';

import { LIST_GAMES } from '../../features/games/actionTypes';
import GameCard from '../../components/GameCard';
import Loading from '../../components/Loading';
import PageHeader from '../../components/PageHeader';

const GameLibrary = () => {
  const dispatch = useDispatch();
  const gamesReducer = useSelector((state) => state.gamesReducer);
  const { list, loading } = gamesReducer;

  useEffect(()=>{
    dispatch({ type: LIST_GAMES });
  }, [dispatch]);

  function renderCard(item) {
    return (
      <React.Fragment key={item.id}>
        <GameCard item={item}/>
      </React.Fragment>
    )
  }

  return (
    <>
      { loading ? 
        <Loading /> :
        <>
            <Container className='body-content'>
                <PageHeader title="Available Games" description="List of all the games available to play" />
                <Row>
                    {list == null ? <></> : 
                        list.map(item => renderCard(item))
                    }
                </Row>
            </Container>
        </>
      }
    </>
  );
};

export default GameLibrary;