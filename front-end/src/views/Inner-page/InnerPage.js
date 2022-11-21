//InnerPage = game.screen page

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LeaderBoard from 'ui-component/LeaderBoard/LeaderBoard';
import './InnerPage.scss';
import { Typography, Button, Stack, Divider, Rating } from '@mui/material';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { useEffect } from 'react';
import { getGameDataAction, getGamesByCategory } from 'store/actions/Game Actions/game.action';
import { useLocation, useNavigate } from 'react-router-dom';
import Comment from 'ui-component/comments/Comment';
import Carousel from 'react-elastic-carousel';

import GameBoxes from 'views/home/gameBoxes';
import PrimaryCard from 'ui-component/cards/Primary Card/PrimaryCard';
import SecondaryCard from 'ui-component/cards/SecondaryCard';
import GameBox from 'ui-component/GameBoxes/gameBox';

export default function InnerPage() {
    const handle = useFullScreenHandle();
    const location = useLocation();

    const [gameData, setGameData] = React.useState('');
    const [CategoryData, setCategoryData] = React.useState('');
    const [relatedGames, setRelatedGames] = React.useState([]);
    console.log('game data', relatedGames);

    // console.log('game data', gameData);

    useEffect(() => {
        const URL_path = window.location.pathname;
        const gameId = URL_path.substring(URL_path.length - 24);
        // console.log('gameId', gameId);

        getGameDataAction(gameId).then((data) => {
            setGameData(data.gameDetails);
            setCategoryData(data.gameDetails.categories);
            // get related data from categories
        });
    }, []);

    useEffect(() => {
        getGamesByCategory(CategoryData).then((data) => {
            setRelatedGames(data);
        });
    }, [CategoryData]);

    const breakPoints = [
        { width: 100, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 650, itemsToShow: 2.3 },
        { width: 768, itemsToShow: 4.3 },
        { width: 1200, itemsToShow: 5.3 },
        { width: 1500, itemsToShow: 5.3 }
    ];

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sm={9} xs={12} md={9}>
                        <Box className="game-view">
                            <FullScreen handle={handle}>
                                <iframe
                                    src="https://www.crazygames.com/embed/smash-karts"
                                    title="Smash Karts"
                                    style={{
                                        height: handle.active ? '100vh' : '65vh',
                                        width: '100%',
                                        objectFit: 'fill'
                                    }}
                                ></iframe>
                                {handle.active && (
                                    <Button
                                        variant="contained"
                                        onClick={handle.exit}
                                        //  style={{
                                        //     position: 'absolute'
                                        // }}
                                    >
                                        Exit Full Screen
                                    </Button>
                                )}
                            </FullScreen>
                            <AiOutlineFullscreen className="fullscreen-icon" onClick={handle.enter} />
                        </Box>

                        <Typography sx={{ fontSize: '20px', fontWeight: '800', marginTop: '20px' }} variant="h5">
                            {gameData?.name}
                        </Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '400', marginTop: '5px' }} variant="h5">
                            {gameData?.description}
                        </Typography>

                        <Comment />
                        <Divider sx={{ marginTop: '20px', mb: '30px' }} />
                        <Typography sx={{ fontSize: '18px', fontWeight: '800', margin: '20px 0 20px 70px' }} variant="h5">
                            Related Games
                        </Typography>
                        <Carousel itemPadding={[10, 10]} breakPoints={breakPoints} className="carousel-dots">
                            {relatedGames.map((game, key) => {
                                return <GameBox gameDetails={game} />;
                            })}
                        </Carousel>
                    </Grid>
                    <Grid item sm={3} xs={12} md={3}>
                        <Box className="leader-board">
                            <LeaderBoard />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
