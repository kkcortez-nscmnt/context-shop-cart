import ProductCard from './ProductCard';
import { useProducts } from '../context/ProductsContext';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {loading && <p>Loading...</p>}
      {error && <div className="error">Loading...</div>}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
