import { Avatar, Button, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getGameDataAction } from 'store/actions/Game Actions/game.action';
import GenericInput from 'ui-component/components/input/genericInput';
import './Comment.scss';
import { sendCommentAction } from 'store/actions/Game Actions/Comment.action';

function Comment() {
    const [comments, setComments] = React.useState([]);
    const [gameId, setGameId] = React.useState('');
    const { user } = JSON.parse(localStorage.getItem('profile'));
    const commentCount = comments.length;

    const [comment, setComment] = useState('');

    useEffect(() => {
        const URL_path = window.location.pathname;
        const gameId = URL_path.substring(URL_path.length - 24);
        setGameId(gameId);

        getGameDataAction(gameId).then((data) => {
            console.log('game data comments ', data.comments);
            setComments(data.comments);
        });
    }, []);

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const sendComment = () => {
        sendCommentAction(user._id, gameId, comment, user?.picture, user?.name);
    };

    return (
        <Grid flexGrow={1}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} className="comment-toolbar">
                    <Typography className="comment-heading">Comments</Typography>
                    <Typography>{commentCount} Comments</Typography>
                </Grid>
                <Divider sx={{ marginTop: '10px', width: '100%', mb: '60px' }} />
            </Grid>
            <Grid flexGrow={1}>
                <Box
                    mb={3}
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Avatar alt="Remy Sharp" src={user?.picture} />
                    <GenericInput
                        values={comment}
                        handleChange={handleChange}
                        label="Add a comment..."
                        type="string"
                        name="comment"
                        error={false}
                        errorMsg="error ..."
                        style={{ width: '100%', marginLeft: 2, marginRight: 2 }}
                    />
                    <Button className="comment-button" onClick={() => sendComment()}>
                        Comment
                    </Button>
                </Box>
                {comments.map((commentData, index) => (
                    <Box key={index} mb={3} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={commentData.picture} alt="Remy Sharp" />
                        <Box className="comment-text">
                            <Typography variant="subtitle1" gutterBottom component="div">
                                {commentData.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div">
                                {commentData.comment}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Grid>
    );
}

export default Comment;
