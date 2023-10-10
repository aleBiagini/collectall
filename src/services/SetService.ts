import { CardTypeEnum } from "../models/Global/CardTypeEnum";
import { SelectOption } from "../models/Global/SelectOption";

export const GetSets = async (currentCardType: CardTypeEnum): Promise<Array<SelectOption> | null> => {
    //if pokemon
    if (currentCardType == CardTypeEnum.Pokemon) {
        const response = await fetch(`https://api.pokemontcg.io/v2/sets`).then(response => response.json());
        return response.data;
    } else if (currentCardType == CardTypeEnum.Magic) {
        //logic for magic
    }
    return null;
}