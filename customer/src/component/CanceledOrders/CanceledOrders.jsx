import React from "react";
import "./CanceledOrders.css";
import img from "../../assets/winter-shirt.jpg";
import { useNavigate } from "react-router-dom";

export default function CanceledOrders() {
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      title: "جاكيت شتوي",
      desc: "جاكيت أبيض - تخفيض خاص",
      category: "ملابس",
      qty: 1,
      price: "149.99 ر.س",
      img: img,
    },
  ];

  const goToDetails = () => {
    navigate("/canceledordersdetails");
  };

  return (
    <div className="canceled-page container neworders-page mt-5 mb-5 pb-5">
      <div className="row">

        {/* ====== RIGHT TABS ====== */}
        <div className="col-lg-3 d-none d-lg-block mt-5 pt-5">
          <div className="orders-right-tabs">
            <button className="cright-tab">الطلبات الحالية</button>
            <button className="cright-tab">الطلبات المكتملة</button>
            <button className="cright-tab active">الطلبات الملغية</button>
          </div>
        </div>

        {/* ====== LEFT LIST ====== */}
        <div className="col-lg-9 col-12">
          <div className="corders-wrapper">
            {orders.map((order) => (
              <div
                key={order.id}
                className="canceled-card"
                onClick={() => goToDetails(order.id)}
              >
                {/* LEFT */}
                <div className="canceled-left">
                  <div className="canceled-status">الملغية</div>
                  <p className="canceled-price">{order.price}</p>
                </div>

                {/* RIGHT */}
                <div className="canceled-content">
             

                    <div className="canceled-text">
                      <h4 className="canceled-title">{order.title}</h4>
                      <p className="canceled-desc">{order.desc}</p>

                      <p className="canceled-meta">
                        <span className="qty">x{order.qty}</span>
                        <span className="type">{order.category}</span>
                      </p>
                    
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
