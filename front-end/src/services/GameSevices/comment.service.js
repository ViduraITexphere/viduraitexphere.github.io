import { pickersDayClasses } from '@mui/lab';
import { client, METHODS } from 'services/api/restClient';
import { POST_COMMENT } from 'services/url';

export const postCommentService = async (userId, gameId, comment, picture, name) => {
    let headerConfig = {
        'content-Type': 'application/json'
    };
    let body = {
        userId: userId,
        gameId: gameId,
        comment: comment,
        picture: picture,
        name: name
    };
    return await client.API(METHODS.POST, POST_COMMENT + gameId, body, headerConfig);
};
