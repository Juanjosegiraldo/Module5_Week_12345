import { CARDS_DATA, type CardItem } from '../data/mockCards';

// Simulation of an API call to get the cards
export const getCards = (): CardItem[] => {
    return CARDS_DATA;
};