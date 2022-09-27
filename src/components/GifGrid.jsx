import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div className="card-grid">
      <h3>{category}</h3>
      {
        isLoading && (<h2>Loading...</h2>)
      }
      {gifs.map((gif) => (
        <GifItem key={gif.id} {...gif} />
      ))}
    </div>
  );
};
