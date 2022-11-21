import { client, METHODS } from 'services/api/restClient';
import { GET_GAMES, GET_CATEGORIES, GET_GAMES_BY_SEARCH, GET_GAMES_BY_CATEGORY, GET_GAMEDATA } from 'services/url';

export const getGameServices = async () => {
    return await client.API(METHODS.GET, GET_GAMES, {}, '');
};

export const getCategoryServices = async () => {
    return await client.API(METHODS.GET, GET_CATEGORIES, {}, '');
};

export const getGamesBySearchService = async (searchQuery) => {
    return await client.API(METHODS.GET, GET_GAMES_BY_SEARCH + searchQuery, {}, '');
};
export const getGamesByCategoryService = async (category) => {
    return await client.API(METHODS.GET, GET_GAMES_BY_CATEGORY + category, {}, '');
};

export const getGameDataService = async (gameId) => {
    return await client.API(METHODS.GET, GET_GAMEDATA + gameId, {}, '');
};
