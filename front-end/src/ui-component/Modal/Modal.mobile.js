import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { DialogContentText } from '@mui/material';
import './Modal.scss';

function ModalMobile({ setOpen, open, gameDetails }) {
    console.log('gameDetails', gameDetails);

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <CloseIcon className="mobile-close-icon" onClick={() => setOpen(false)} />

                <DialogContent
                    className="mobile-content"
                    sx={{
                        width: {
                            xs: '300px',
                            sm: '400px'
                        }
                    }}
                >
                    <div className="mobile-image-title-row">
                        <img className="mobile-modal-image" src={gameDetails?.imgUrl} alt="game" />

                        <DialogTitle className="mobile-Title">{gameDetails?.name}</DialogTitle>
                        <div className="mobile-rating">
                            <StarRoundedIcon className="mobile-star-icon" />
                            <DialogContent className="mobile-rating-text">5 Rating</DialogContent>
                        </div>
                        <DialogContentText className="mobile-description">{gameDetails?.description}</DialogContentText>
                    </div>
                    <a href={`/game/${gameDetails?._id}`} target="_blank">
                        <Button className="mobile-play-button" variant="contained" color="primary" onClick={() => setOpen(false)}>
                            Play
                        </Button>
                    </a>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ModalMobile;
