import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items-->", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="my-5 border-b-2 border-gray-200 py-5 text-left flex gap-2 items-center justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute right-0 bottom-0">
              <button className="p-2 rounded-lg bg-black text-white shadow-lg m-auto">
                Add +
              </button>
            </div>
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt="item image"
                className="w-full object-cover h-32"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
