import React from 'react';
import mockData from '../../data/mockData';
import Modals from './Modals';
import "../../../src/Cards.css"; // Import your CSS file for styling

const Cards = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {mockData.map((product) => (
            <div key={product.id} className="col mb-5">
              <div className="card h-100 card-zoom">
                {/* Product image */}
                <img className="card-img-top" src={product.img} alt="..." />
                {/* Product details */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name */}
                    <h5 className="fw-bolder">{product.name}</h5>
                    {/* Product reviews */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </div>
                    {/* Product price */}
                    ${product.price.toFixed(2)}
                  </div>
                </div>
                {/* Product actions */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center align-items-center">
                  <Modals product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
