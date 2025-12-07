import React from "react";
import "../ShippedOrders/ShippedOrders.css";
import { Link } from "react-router-dom";
import burgersale from "../../assets/burger-sale.jpg";

export default function ShippedOrders() {
  const orders = [
    {
      id: 1,
      title: "عرض البرجر",
      desc: "وجبة برجر شهية بسعر مميز",
      price: "89.97",
      qty: 3,
      img: burgersale,
    },
  ];

  return (
    <div className="orders-page container">

      {/* ===== Tabs ===== */}
      <div className="tabs-row">
        <Link to="/confirmedorders" className="tab">
          (1) المؤكدة
        </Link>

        <button className="tab active">
          (1) المشحونة
        </button>

        <Link to="/mydeliveredorders" className="tab">
          (1) تم التسليم
        </Link>
      </div>

      {/* ======= Order Card ======= */}
      <div className="cards-wrapper">
        {orders.map((order, index) => (
          <div key={index} className="order-mobile-card">

            <img src={order.img} alt="" className="order-mobile-img" />

            <div className="order-mobile-content">

              <h3 className="order-mobile-title">{order.title}</h3>

              <p className="order-mobile-desc">{order.desc}</p>

              <div className="order-bottom-row">
                 <span className="order-badge">x{order.qty}</span>
                <span className="order-type">طعام</span>
                <span className="order-price">{order.price} ر.س</span>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
