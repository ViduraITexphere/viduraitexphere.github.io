import React from 'react';
import Carousel from 'react-elastic-carousel';
import MainCard from 'ui-component/cards/MainCard';
import BigCard from 'ui-component/cards/BigCard';
import SubCard from 'ui-component/cards/SubCard';
import { Divider, Grid, Typography } from '@mui/material';
import SecondaryCard from 'ui-component/cards/SecondaryCard';
import { styled } from '@mui/styles';
import { useState, useEffect } from 'react';
import { getAllGames } from 'store/actions/Game Actions/game.action';
import './Carousel.scss';
import { BsFillGiftFill } from 'react-icons/bs';

function Slider() {
    const [games, setGameData] = useState([]);

    useEffect(() => {
        getAllGames().then((data) => {
            // console.log('Game data for slider 👍 ', data);
            setGameData(data);
        });
    }, []);

    const getdbRating = (gameData) => {
        if (Array.isArray(gameData?.rating) && gameData?.rating.length > 0) {
            const avgRating =
                gameData?.rating.map((gameDetail) => gameDetail.ratedValue).reduce((partialSum, a) => partialSum + a, 0) /
                gameData?.rating.length;

            // console.log(avgRating);
            if (Number.isInteger(avgRating)) {
                // setDbRating(avgRating);
                return avgRating;
            } else {
                const onePlacedFloat = parseFloat(avgRating).toFixed(1);
                // setDbRating(onePlacedFloat);
                return onePlacedFloat;
            }
        }
    };
    const breakPoints = [
        { width: 350, itemsToShow: 2 },
        { width: 650, itemsToShow: 2.3 },
        { width: 768, itemsToShow: 3.3 },
        { width: 1200, itemsToShow: 5 },
        { width: 1500, itemsToShow: 5 }
    ];

    return (
        <div className="slider">
            <Grid sx={{ display: 'flex', flexDirection: 'row', color: '#383838', mb: '40px' }}>
                <BsFillGiftFill size="22px" />

                <Typography
                    style={{
                        textAlign: 'left',
                        paddingLeft: '10px',
                        fontFamily: 'poppins',
                        fontWeight: '600',
                        fontSize: 18,
                        color: '#383838'
                    }}
                >
                    Reward Games
                </Typography>
            </Grid>
            <Carousel itemPadding={[10, 10]} breakPoints={breakPoints}>
                {games.map((game, key) => {
                    if (game.isRewardGame === 'true')
                        return <SecondaryCard name={game.name} image={game.imgUrl} rating={getdbRating(game)} key={game._id} />;
                })}
            </Carousel>
            <Divider sx={{ mb: '20px' }} />
        </div>
    );
}

export default Slider;
//  <Carousel itemPadding={[10, 10]} breakPoints={breakPoints}>
//      {games.map((game) => {
//          if (game?.categories === Simulation) return <SecondaryCard name={game.name} image={game.imgUrl} rating={getdbRating(game)} />;
//      })}
//  </Carousel>;

//  <Carousel itemPadding={[10, 10]} breakPoints={breakPoints}>
//      {games.map((game) => (
//          <SecondaryCard name={game.name} image={game.imgUrl} rating={getdbRating(game)} />
//      ))}
//  </Carousel>;
