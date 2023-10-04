import { IAbility } from "./IAbility";
import { IAncientTrait } from "./IAncientTrait";
import { IAttack } from "./IAttack";
import { ICardImage } from "./ICardImage";
import { ICardmarket } from "./ICardmarket";
import { ILegality } from "./ILegality";
import { IResistance } from "./IResistance";
import { ITCGPlayer } from "./ITCGPlayer";
import { IWeakness } from "./IWeakness";
import { ISet } from "./ISet";

export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: IAncientTrait;
  abilities?: IAbility[];
  attacks?: IAttack[];
  weaknesses?: IWeakness[];
  resistances?: IResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: ISet;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  images: ICardImage;
  tcgplayer?: ITCGPlayer;
  cardmarket?: ICardmarket;
}
