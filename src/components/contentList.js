import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchProducts } from "../store/slices/products";
import { addToCart } from "../store/slices/cart";
const ContentList = () => {
  const { list: products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);

  const history = useNavigate();

  // elemento del carrito y añadir
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history("/carrito");
  };

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 py-2 mb-4" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={product.image}
                style={{ height: "18rem" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <div className="card-footer text-center">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-success mx-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#fff5f5"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                    </svg>
                  </button>
                  <button className="btn btn-danger mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#fff5f5"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentList;
