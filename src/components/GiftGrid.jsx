// @scripts
import { GiftGridItem } from "./GiftGridItem";
import useFetchGifts from "../hooks/useFetchGifts";

export const GiftGrid = ({ category }) => {
  const { gifts, loading, error } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {gifts.map(({ id, url, title }) => (
          <GiftGridItem key={id} url={url} title={title} />
        ))}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
    </>
  );
};