import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./StandardImageList.css"

export default function StandardImageList({ selectedValue }) {

  if (!selectedValue || !selectedValue.data) {
    return null; 
  }

  return (
    <ImageList cols={4} gap={20}>
      {selectedValue.data.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.images.large}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.images.large}?w=164&h=164&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}