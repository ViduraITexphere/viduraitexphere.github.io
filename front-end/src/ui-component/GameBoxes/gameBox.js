import { Button, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { display, styled } from '@mui/system';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import '../cards/scss/PrimaryCard.scss';

import { HiStar } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { getAllGames } from 'store/actions/Game Actions/game.action';
import CategoryIcon from 'ui-component/cards/Primary Card/Primary Card Component/CategoryIcon';
import Modal from 'ui-component/Modal/Modal';

//game Actions

function GameBox({ gameDetails }) {
    const [games, setGameData] = useState([]);
    // console.log('games 👎 ', games);

    const [dbRating, setDbRating] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [game, setGameDetails] = useState('');

    const handleClick = () => {
        setOpen(true);
        // console.log('clicked');
        // console.log('game Id', gameDetails);
        // setGameDetails(gameDetails);
        const game = gameDetails;
        // console.log('game 👎 ', game);
        setGameDetails(game);
    };

    useEffect(() => {
        if (Array.isArray(gameDetails?.rating) && gameDetails?.rating.length > 0) {
            const avgRating =
                gameDetails?.rating.map((gameDetail) => gameDetail.ratedValue).reduce((partialSum, a) => partialSum + a, 0) /
                gameDetails?.rating.length;
            // console.log(avgRating);
            if (Number.isInteger(avgRating)) {
                setDbRating(avgRating);
            } else {
                const onePlacedFloat = parseFloat(avgRating).toFixed(1);
                setDbRating(onePlacedFloat);
            }
        }
    }, []);

    const CardContent = styled(Typography)({
        fontFamily: 'poppins',
        fontSize: '32px',
        fontWeight: '600',
        justifyContent: 'space-between'
    });

    // console.log('gameDetails  👍 ', gameDetails);

    return (
        <>
            {/* <a href={`/innerPage/${gameDetails?._id}`} target="_blank"> */}
            {open && <Modal gameDetails={game} setOpen={setOpen} open={open} />}
            <Button onClick={handleClick}>
                <Card className="primarycard">
                    <CategoryIcon className="categoryicon" />
                    <CardMedia className="media" component="img" image={gameDetails?.imgUrl} alt="green iguana" />
                    <CardContent className="content">
                        <Typography
                            className="gameName"
                            gutterBottom
                            variant="h5"
                            component={'span'}
                            sx={{ fontSize: '12px', fontWeight: '600', fontFamily: 'poppins' }}
                        >
                            {gameDetails?.name}
                        </Typography>

                        <Typography component={'span'}>
                            {dbRating}
                            <HiStar className="rating" size={'20px'} />
                        </Typography>
                    </CardContent>
                </Card>
            </Button>

            {/* </a> */}
        </>
    );
}

export default GameBox;
