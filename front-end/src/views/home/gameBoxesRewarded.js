import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';
import GameBox from 'ui-component/GameBoxes/gameBox';

import { gridSpacing } from 'store/constant';
import { FaMedal } from 'react-icons/fa';
import SecondaryCard from 'ui-component/cards/SecondaryCard';
import { FitScreen } from '@mui/icons-material';

const GameBoxesReward = ({ dataArray }) => {
    return (
        <Box>
            <Divider sx={{ mb: '20px' }} />
            <Grid sx={{ display: 'flex', flexDirection: 'row', color: '#383838', mb: '40px' }}>
                <FaMedal size="22px" />
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
            <Grid container spacing={gridSpacing}>
                {dataArray.map((game, key) => {
                    // console.log('reward',game)
                    if (game.isRewardGame === 'true')
                        return (
                            <Grid key={game?._id} item xs={12} sm={6} md={4} lg={2.4}>
                                <SecondaryCard name={game.name} image={game.imgUrl} key={game._id} />
                            </Grid>
                        );
                })}
            </Grid>
        </Box>
    );
};

export default GameBoxesReward;
