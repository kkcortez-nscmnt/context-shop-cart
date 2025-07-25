import { useCart } from "../context/CartContext";
const ProductCard = ({product}) => {
  const {addToCart } = useCart()
  return (
    <div className="flex flex-col rounded-lg bg-white p-4 shadow">
      <img src={product.image} alt={product.name} className="mb-4 h-40 rounded object-cover" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="mb-2 text-sm text-gray-500">{product.description}</p>
      <p className="text-lg font-bold">{product.price.toFixed(2)}</p>

      <button onClick={() => addToCart(product)} className="bg-blue-600 text-white mt-3 px-4 py-2 rounded transition hover:bg-blue-700">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
