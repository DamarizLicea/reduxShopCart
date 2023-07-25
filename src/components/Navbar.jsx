import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-secondary bg-gradient">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link className="nav-link text-white" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-white" to="/content">
              Comprar
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/carrito">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#fff5f5"
                viewBox="0 0 256 256"
              >
                <path d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM239.86,98.11,226,202.12A16,16,0,0,1,210.13,216H45.87A16,16,0,0,1,30,202.12l-13.87-104A16,16,0,0,1,32,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H224a16,16,0,0,1,15.85,18.11ZM89.63,80h76.74L128,36.15ZM224,96H32L45.87,200H210.13Zm-51.16,23.2-5.6,56A8,8,0,0,0,174.4,184a7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.16-8.76Z"></path>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
