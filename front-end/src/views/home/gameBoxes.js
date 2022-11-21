import React from 'react';
import { Box } from '@mui/system';
import { Button, Dialog, Divider, Grid, Modal, Typography } from '@mui/material';
import GameBox from 'ui-component/GameBoxes/gameBox';

import { gridSpacing } from 'store/constant';
import { FaMedal } from 'react-icons/fa';

const GameBoxes = ({ dataArray }) => {
    return (
        <Box>
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
                    Recommended Games
                </Typography>
            </Grid>

            <Grid container spacing={gridSpacing}>
                {dataArray.map((game, index) => (
                    <Grid key={game?._id} item xs={12} sm={6} md={4} lg={2.4}>
                        <GameBox gameDetails={game} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default GameBoxes;
