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
import Slider from 'react-slick';

function CarouselSlider() {
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
    // const breakPoints = [
    //     { width: 350, itemsToShow: 1 },
    //     { width: 650, itemsToShow: 2 },
    //     { width: 768, itemsToShow: 3 },
    //     { width: 1200, itemsToShow: 4 },
    //     { width: 1500, itemsToShow: 5 }
    // ];

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerPadding: '100px',
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4.3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            }
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ]
    };

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
            <div style={{ paddingRight: '10px' }}>
                <Slider {...settings} draggable={true}>
                    {games.map((game, key) => {
                        if (game.isRewardGame === 'true')
                            return <SecondaryCard name={game.name} image={game.imgUrl} rating={getdbRating(game)} key={game._id} />;
                    })}
                </Slider>
            </div>
            {/* <Carousel breakPoints={breakPoints} showArrows={true} emulateTouch={true} swipeable={false}></Carousel> */}
            <Divider sx={{ mb: '20px' }} />
        </div>
    );
}

export default CarouselSlider;
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
