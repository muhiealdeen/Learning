import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../constants/index';
import Button from '../components/button';
import { arrowRight } from '../assets/icons';
import Nav from '../components/Nav';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = products.find((product) => product.name === productId);
  const handleGoHome = () => {
    navigate('/');
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <Nav />
      <div>
        <img src={product.imgURL} alt={product.name} className="mb-4" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-lg">{product.description}</p>
        <p className="text-xl font-semibold mt-4">{product.price}</p>
        <p className="text-gray-600">{product.additionalInfo}</p>
      </div>

      <Button label="Home page" onClick={handleGoHome} iconURL={arrowRight} />
    </div>
  );
};

export default ProductDetails;
