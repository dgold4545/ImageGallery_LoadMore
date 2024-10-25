import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map(({ id, description, likes, urls: { small, regular } }) => (
        <li key={id}>
          <ImageCard
            description={description}
            likes={likes}
            small={small}
            regular={regular}
          />
        </li>
      ))}
    </ul>
  );
}
