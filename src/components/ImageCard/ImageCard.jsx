import styles from "react";

export default function ImageCard({ description, likes, small }) {
  return (
    <div>
      <img src={small} alt={description} title={`Likes: ${likes}`} />
    </div>
  );
}
