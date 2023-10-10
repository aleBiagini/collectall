import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./StandardImageList.css"
import { IStandardImageList } from '../../models/IStandardImageList';
import { PokemonCard } from '../../models/PokemonCard';

export default function StandardImageList({ selectedValue }: IStandardImageList) {

  if (!selectedValue) {
    return null; 
  }

  const [cardArray, setCardArray] = React.useState<PokemonCard[]>([]);


  console.log(selectedValue)

  return (
    <ImageList cols={4} gap={20}>
      {selectedValue.map((card) => (
        <ImageListItem key={card.id}>
          <img
            srcSet={`${card.images.large}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${card.images.large}?w=164&h=164&fit=crop&auto=format`}
            alt={card.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}