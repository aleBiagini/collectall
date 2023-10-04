export const GetSet = async (id: string | string[]) => {
    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`).then(response => response.json());
    return response;
}