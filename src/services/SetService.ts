import { Card } from "../models/Card";
import { ISet } from "../models/ISet";

export const GetSet = async (id: string | string[]): Promise<Array<Card>> => {
    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`).then(response => response.json());
    return response;
}

export const GetSets = async (): Promise<Array<ISet>> => {
    const response = await fetch(`https://api.pokemontcg.io/v2/sets`).then(response => response.json());
    return response.data;
}