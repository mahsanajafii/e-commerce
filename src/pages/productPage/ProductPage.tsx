import Product from "../../components/generalComponents/product/Product";
import Comment from "../../components/generalComponents/product/comments/Comment";
import CommentForm from "../../components/generalComponents/product/commentForm/CommentForm";
import RelatedProducts from "../../components/generalComponents/product/relatedProducts/RelatedProducts";
import { useLocation } from "react-router-dom";
const ProductPage = () => {
  const location = useLocation();
  return (
    <Product>
      {location.pathname === "/comments" ? (
        <Comment />
      ) : location.pathname === "/createComment" ? (
        <CommentForm />
      ) : location.pathname === "/related-products" ? (
        <RelatedProducts />
      ) : location.pathname === "/product" ? (
        <CommentForm />
      ) : (
        <CommentForm />
      )}
    </Product>
  );
};

export default ProductPage;
