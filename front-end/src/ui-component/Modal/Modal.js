import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Typography from '@mui/material/Typography';
import { DialogContentText } from '@mui/material';
import './Modal.scss';
import ModalMobile from './Modal.mobile';
import Media from 'react-media';

function Modal({ setOpen, open, gameDetails }) {
    console.log('gameDetails', gameDetails);
    return (
        <>
            <Media query="(max-width: 800px)">
                {(matches) => {
                    return matches ? (
                        <ModalMobile setOpen={setOpen} open={open} gameDetails={gameDetails} />
                    ) : (
                        <Dialog open={open} onClose={() => setOpen(false)}>
                            <CloseIcon className="close-icon" onClick={() => setOpen(false)} />

                            <DialogContent
                                className="Content"
                                sx={{
                                    width: {
                                        md: '600px'
                                    }
                                }}
                            >
                                <div className="image-title-row">
                                    <img className="modal-image" src={gameDetails?.imgUrl} alt="game" />

                                    <DialogContent className="content-text">
                                        <DialogTitle className="Title">{gameDetails?.name}</DialogTitle>
                                        <div className="rating">
                                            <StarRoundedIcon className="star-icon" />
                                            <DialogContent className="rating-text">4.5 Rating</DialogContent>
                                        </div>
                                        <DialogContentText className="description">{gameDetails?.description}</DialogContentText>
                                    </DialogContent>
                                </div>
                                <a href={`/game/${gameDetails?._id}`} target="_blank">
                                    <Button className="play-button" variant="contained" color="primary" onClick={() => setOpen(false)}>
                                        Play
                                    </Button>
                                </a>
                            </DialogContent>
                        </Dialog>
                    );
                }}
            </Media>
        </>
    );
}

export default Modal;
