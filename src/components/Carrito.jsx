import React from "react";
import { removeFromCart } from "../store/slices/cart";
import { useSelector } from "react-redux";
import { addToCart } from "../store/slices/cart";
import { decreaseQuantity } from "../store/slices/cart";
import { useDispatch } from "react-redux";
const Carrito = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseCart = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      <h1 className="my-4">
        Mi carrito <span></span>
      </h1>
      <h2 className="text-end mb-4">
        <span>Productos actuales: </span>
        {cart.cartItems.length}
      </h2>
      <>
        <div className="titles mb-5">
          <div className="row">
            <div className="col">
              <h4>Producto</h4>
            </div>
            <div className="col">
              <h4>Precio</h4>
            </div>
            <div className="col">
              <h4>Cantidad</h4>
            </div>
            <div className="col">
              <h4>Total</h4>
            </div>
          </div>
        </div>
        {cart.cartItems.map((item) => (
          <div className="conten my-5">
            <div className="row">
              <div className="col">
                <img
                  src={item.image}
                  alt={item.name}
                  width="150"
                  height="100"
                />
                <h4>{item.name}</h4>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="btn btn-danger align-items-center"
                >
                  Eliminar
                </button>
              </div>
              <div className="col">
                <p>$ {item.price}</p>
              </div>
              <div className="col">
                <div div className="row align-items-center">
                  <div className="col">
                    <button onClick={() => handleIncreaseCart(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="#050505"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="col">
                    <p>{item.cartQuantity}</p>
                  </div>
                  <div className="col">
                    <button onClick={() => handleDecreaseCart(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="#050505"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <p>{item.price * item.cartQuantity}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};
export default Carrito;
