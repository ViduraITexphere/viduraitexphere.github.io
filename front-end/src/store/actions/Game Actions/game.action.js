import {
    getCategoryServices,
    getGamesBySearchService,
    getGameServices,
    getGamesByCategoryService,
    getGameDataService
} from 'services/GameSevices/game.service';

export const getAllGames = () => {
    return getGameServices()
        .then((responce) => {
            console.log('getAllGames response ', responce);

            if (responce.status === 200) {
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getGameAction', error);
        });
};

export const getAllcategories = () => {
    return getCategoryServices()
        .then((responce) => {
            console.log('getAllCategories response ', responce);

            if (responce.status === 200) {
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getCategoryAction', error);
        });
};

export const getGamesBySearch = (searchQuery) => {
    return getGamesBySearchService(searchQuery)
        .then((responce) => {
            console.log('getGamesBySearch responce ', responce);

            if (responce.status === 200) {
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getGamesBySearch', error);
        });
};

// export const getGamesByCategory = (category) => {
//     return getGamesByCategoryService(category)
//         .then((responce) => {
//             console.log('getGamesByCategory responce', responce);

//             if (responce.status === 200) {
//                 return responce.data;
//             } else {
//                 console.log('err res', responce);
//             }
//         })
//         .catch((error) => {
//             console.log('error getGamesByCategory', error);
//         });
// };
export const getGamesByCategory = (category) => {
    console.log('getGamesByCategory 👍', category);
    return getGamesByCategoryService(category)
        .then((responce) => {
            console.log('responce getGamesByCategory', responce);

            if (responce.status === 200) {
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getGamesBySearch', error);
        });
};

export const getGameDataAction = (gameId) => {
    return getGameDataService(gameId)
        .then((responce) => {
            console.log('getGameDataAction responce 👍 ', responce);

            if (responce.status === 200) {
                return responce.data;
            } else {
                console.log('err res', responce);
            }
        })
        .catch((error) => {
            console.log('error getGameDataAction', error);
        });
};
