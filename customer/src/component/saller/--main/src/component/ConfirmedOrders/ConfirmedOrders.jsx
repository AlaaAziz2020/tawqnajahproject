import React from "react";
import "../ConfirmedOrders/ConfirmedOrders.css";
import { Link } from "react-router-dom";
import bfriday from "../../assets/b-friday.jpg";

export default function ConfirmedOrders() {
  const orders = [
    {
      id: 1,
      title: "تخفيضات الجمعة السوداء",
      desc: "عروض مذهلة على المنتجات المختارة.",
      price: "199.98",
      qty: 2,
      img: bfriday,
    },
  ];

  return (
    <div className="orders-page container ">

      {/* ===== Tabs ===== */}
      <div className="tabs-row mt-5">
        <button className="tab active">(1) المؤكدة</button>
        <Link to="/shippedorders" className="tab">(1) المشحونة</Link>
        <Link to="/mydeliveredorders" className="tab">(1) تم التسليم</Link>
      </div>

      {/* ======= Order Card ======= */}
      <div className="cards-wrapper">
        {orders.map((order, index) => (
          <div key={index} className="order-mobile-card">

            {/* الصورة يمين */}
            <img src={order.img} alt="" className="order-mobile-img" />

            {/* المحتوى */}
            <div className="order-mobile-content">

              <h3 className="order-mobile-title">{order.title}</h3>

              <p className="order-mobile-desc">{order.desc}</p>

              <div className="order-bottom-row">
                <span className="order-badge">x{order.qty}</span>
                                <span className="order-type">عروض</span>

                <span className="order-price">{order.price} ر.س</span>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
