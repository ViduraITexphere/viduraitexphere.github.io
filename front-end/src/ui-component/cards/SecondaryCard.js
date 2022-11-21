import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import './SecondaryCard.scss';
import { display, styled } from '@mui/system';
import { HiStar } from 'react-icons/hi';
// import { useState, useEffect } from 'react';

function SecondaryCard(props) {
    const CardContent = styled(Typography)({
        fontFamily: 'poppins',
        fontWeight: '600',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 10px 0 10px '
    });
    return (
        <div className="secondary-card" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Grid>
                <div className="card">
                    <img src={props.image} alt="game"></img>
                    <span></span>
                </div>
                <div>
                    <CardContent component={'div'}>
                        <Typography
                            className="gameName"
                            gutterBottom
                            variant="h5"
                            component={'div'}
                            sx={{ fontSize: '14px', fontWeight: '600', fontFamily: 'poppins' }}
                        >
                            {props.name}
                        </Typography>

                        <Typography gutterBottom variant="h5" component={'div'}>
                            {props.rating}
                            <HiStar className="rating" size={'24px'} />
                        </Typography>
                    </CardContent>
                </div>
            </Grid>
        </div>
    );
}

export default SecondaryCard;
