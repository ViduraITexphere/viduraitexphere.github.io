import { postCommentService } from 'services/GameSevices/comment.service';

export const sendCommentAction = (userId, gameId, comment, picture, name) => {
    postCommentService(userId, gameId, comment, picture, name)
        .then((responce) => {
            console.log('responce', responce);
            if (responce.status === 201) {
                window.location.reload();
            }
        })
        .catch((error) => {
            console.log('error post comment', error);
        });
};
