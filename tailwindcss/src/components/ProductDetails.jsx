import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../constants/index';
import Button from './button';
import { arrowRight } from '../assets/icons';
import Nav from '../components/Nav';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  console.log(productId, 'productId');

  console.log(
    products.map((product) => product.id),
    'product.id',
  );
  const productIdNumber = parseInt(productId);
  const product = products.find((product) => product.id === productIdNumber);
  const handleGoHome = () => {
    console.log('Go home');
    navigate('/');
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="relative max-w-screen-lg mx-auto p-4">
      <Nav />
      <div className="flex justify-center items-center flex-col padding-y">
        <img
          src={product.imgURL}
          alt={product.name}
          className="max-w-3xl mb-4 w-[480px] has-[480px]"
        />

        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-lg">{product.description}</p>
        <p className="text-xl font-semibold mt-4">{product.price}</p>
        <p className="text-gray-600">{product.additionalInfo}</p>
        <Button label="Home page" onClick={handleGoHome} iconURL={arrowRight} />
      </div>
    </div>
  );
};

export default ProductDetails;
