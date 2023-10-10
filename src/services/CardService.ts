import { IBaseCard } from "../models/Global/IBaseCard";

export const GetCardByQuery = async (query: string): Promise<Array<IBaseCard>> => {
    //TODO: WRITE IF STATEMENTS BASED ON CARD TYPE AND DECIDE IF WE SHOULD MAP AND RETURN THE CARD COMPONENT HERE OR NOT
    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=${query}`).then(response => response.json());
    return response;
}
