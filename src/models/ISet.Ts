import { ICardImage } from "./ICardImage";
import { ILegality } from "./ILegality";

export interface ISet {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: ILegality;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: ICardImage;
}
