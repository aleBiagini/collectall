import { IPrice } from "./IPrice";

export interface ITCGPlayer {
    url: string;
    updatedAt: string;
    prices: IPrice;
}
