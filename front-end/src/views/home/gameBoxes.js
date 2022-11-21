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

            <Grid container>
                {dataArray.map((game, index) => (
                    <Grid key={game?._id} item xs={4} sm={3} md={3} lg={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <GameBox gameDetails={game} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default GameBoxes;
