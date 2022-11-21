import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { BsFillGiftFill } from 'react-icons/bs';
import { FaMedal } from 'react-icons/fa';
import Media from 'react-media';
// import PrimaryCard from 'ui-component/cards/Primary Card/PrimaryCard';
import Slider from 'ui-component/carousel/Carousel';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllGames, getGamesBySearch, getGamesByCategory } from 'store/actions/Game Actions/game.action';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import GameBoxes from './gameBoxes';
import GameBoxesReward from './gameBoxesRewarded';

function Home() {
    const location = useLocation();
    const [searchGames, setSearchGames] = useState();
    const [games, setGames] = useState('');
    const [gamesData, setGameData] = useState([]);
    const [categoryGames, setCategoryGames] = useState([]);

    useEffect(() => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let searchQuery = params.get('searchQuery');
        let category = params.get('category');

        if (searchQuery) {
            getGamesBySearch(searchQuery).then((data) => {
                // console.log('search games 🚀 ', data);
                setSearchGames(data);
                setGames('search');
            });
        } else if (category) {
            getGamesByCategory(category).then((data) => {
                // console.log('category games 🚀 ', data);
                setCategoryGames(data);
            });
        } else {
            getAllGames().then((data) => {
                // console.log('categorties.. 👍 ', data);
                // console.log('get all games', data);
                setGameData(data);
                setGames('all');
            });
        }
    }, [location]);
    return (
        <>
            <Media query="(max-width: 800px)">
                {(matches) => {
                    return matches ? (
                        <>{games === 'all' && <GameBoxesReward dataArray={gamesData} />}</>
                    ) : (
                        <> {games === 'all' && <Slider />}</>
                    );
                }}
            </Media>
            {games === 'all' && <GameBoxes dataArray={gamesData} />}
            {Array.isArray(searchGames) && <GameBoxes dataArray={searchGames} />}
            {Array.isArray(categoryGames) && <GameBoxes dataArray={categoryGames} />}
        </>
    );
}

export default Home;

// <Media query="(max-width: 800px)">
//     {(matches) => {
//         return matches ? (
//             <Grid item xs={12} sm={12} md={12} sx={{ padding: '20px' }}>
//                 <PrimaryCard />
//             </Grid>
//         ) : (
//             <Grid item sm={10} md={10} lg={10.5} sx={{ padding: '20px' }}>
//                 <Grid sx={{ display: 'flex', flexDirection: 'row', color: '#383838', mb: '40px' }}>
//                     <BsFillGiftFill size="22px" />
//                     <Typography
//                         style={{
//                             textAlign: 'left',
//                             paddingLeft: '10px',
//                             fontFamily: 'poppins',
//                             fontWeight: '600',
//                             fontSize: 18,
//                             color: '#383838'
//                         }}
//                     >
//                         Reward Game
//                     </Typography>
//                 </Grid>
//                 <Slider />
//                 <Divider sx={{ mb: '40px' }} />
//                 <Grid sx={{ display: 'flex', flexDirection: 'row', color: '#383838', mb: '40px' }}>
//                     <FaMedal size="22px" />
//                     <Typography
//                         style={{
//                             textAlign: 'left',
//                             paddingLeft: '10px',
//                             fontFamily: 'poppins',
//                             fontWeight: '600',
//                             fontSize: 18,
//                             color: '#383838'
//                         }}
//                     >
//                         Recommended Game
//                     </Typography>
//                 </Grid>

//                 <PrimaryCard />
//             </Grid>
//         );
//     }}
// </Media>
