import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { FIND_GAME, LIST_GAMES } from '../../features/games/actionTypes';
import './styles.css';

const PlayGame = () => {
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

    return (
        <> 
            { loading ? <Loading /> :
                game && (
                    <iframe 
                        id={`iFrame-${game.id}`}
                        className='play-frame'
                        title={game.title}
                        src={game.game_url}
                    />
                )
            }
        </>
    );
};

export default PlayGame;