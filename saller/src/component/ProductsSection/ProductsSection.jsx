import React from "react";
import { Link, useNavigate } from "react-router-dom";      
import "./ProductsSection.css";

import item1 from "../../assets/wool.jpg";
import item2 from "../../assets/wintershirt.jpg";
import item3 from "../../assets/classic.png";

import star from "../../assets/Star 3.png";
import carticon from "../../assets/whitecarts.png";

export default function ProductsSection() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      img: item1,
      name: "بلوزة صوف",
      rate: 4.9,
      desc: "بلوزة من الصوف لونها اسود تعطي  جمال وأناقة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 3,
      img: item2,
      name: "تيشيرت شتوي",
      rate: 4.9,
      desc: "تيشيرت عملي وعصري خامته جيدة من الصوف",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 2,
      img: item3,
      name: "بنطلون كلاسيك",
      rate: 4.9,
      desc: "بنطلون كلاسيك بيج يكسر من الامام يعطي مظهر فورمال",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 4,
      img: item1,
      name: "بلوزة صوف",
      rate: 4.9,
      desc: "بلوزة من الصوف لونها اسود تعطي <br/> جمال وأنوثة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
  ];

  return (
    <>
      <div className="products-wrapper">
        
        {/* ==== SECTION HEADER ==== */}
        <div className="customer-products-header container pt-5 ">
          {/* <h2 className="customer-products-title">عـروض طوق نجاة</h2> */}
          {/* <a className="customer-view-more">رؤية المزيد</a> */}
          {/* <span
  className="customer-view-more"
  onClick={() => navigate("/offerstawq")}
>
  رؤية المزيد
</span> */}
        </div>

        {/* ==== GRID ==== */}
  {/* ==== SECTION 1 ==== */}
<div className="customer-products-grid container mb-5">
  {products.map((p) => (
    <Link
      to="/productdetails"
      state={{ product: p }}
      key={p.id}
      className="customer-product-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="customer-discount">{p.discount}%</div>
      <img src={p.img} className="customer-product-img" alt={p.name} />

      <div className="heart">
        <i className="fa fa-heart heart-icon position-absolute" />
      </div>

      <div className="d-flex justify-content-between px-3">
        <h3 className="customer-product-name">{p.name}</h3>
        <div className="customer-rate">
          <img src={star} /> {p.rate}
        </div>
      </div>

      <p
        className="customer-desc"
        dangerouslySetInnerHTML={{ __html: p.desc }}
      ></p>

      <div className="customer-price">
        <span className="new">{p.price} ر.س</span>
        <span className="old">{p.oldPrice} ر.س</span>
      </div>

      <button
        className="customer-add-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          navigate("/paymentpage");
        }}
      >
        <span className="carts">إضافة للعربة</span>
        <img src={carticon} />
      </button>
    </Link>
  ))}
</div>


{/* ==== SECTION 2 (تحتيه بمسافة) ==== */}
<div className="customer-products-grid container mt-5">
  {products.map((p) => (
    <Link
      to="/productdetails"
      state={{ product: p }}
      key={p.id}
      className="customer-product-card mb-5"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="customer-discount">{p.discount}%</div>
      <img src={p.img} className="customer-product-img" alt={p.name} />

      <div className="heart">
        <i className="fa fa-heart heart-icon position-absolute" />
      </div>

      <div className="d-flex justify-content-between px-3">
        <h3 className="customer-product-name">{p.name}</h3>
        <div className="customer-rate">
          <img src={star} /> {p.rate}
        </div>
      </div>

      <p
        className="customer-desc"
        dangerouslySetInnerHTML={{ __html: p.desc }}
      ></p>

      <div className="customer-price">
        <span className="new">{p.price} ر.س</span>
        <span className="old">{p.oldPrice} ر.س</span>
      </div>

      <button
        className="customer-add-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          navigate("/paymentpage");
        }}
      >
        <span className="carts">إضافة للعربة</span>
        <img src={carticon} />
      </button>
    </Link>
  ))}
</div>

        {/* ==== SECTION 2 ==== */}
        <div className="customer-products-header d-flex justify-content-between container pt-5 pb-3 ">

        </div>

     {/* ==== SECTION 1 ==== */}
<div className="customer-products-grid container mb-5">
  {products.map((p) => (
    <Link
      to="/productdetails"
      state={{ product: p }}
      key={p.id}
      className="customer-product-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="customer-discount">{p.discount}%</div>
      <img src={p.img} className="customer-product-img" alt={p.name} />

      <div className="heart">
        <i className="fa fa-heart heart-icon position-absolute" />
      </div>

      <div className="d-flex justify-content-between px-3">
        <h3 className="customer-product-name">{p.name}</h3>
        <div className="customer-rate">
          <img src={star} /> {p.rate}
        </div>
      </div>

      <p
        className="customer-desc"
        dangerouslySetInnerHTML={{ __html: p.desc }}
      ></p>

      <div className="customer-price">
        <span className="new">{p.price} ر.س</span>
        <span className="old">{p.oldPrice} ر.س</span>
      </div>

      <button
        className="customer-add-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          navigate("/paymentpage");
        }}
      >
        <span className="carts">إضافة للعربة</span>
        <img src={carticon} />
      </button>
    </Link>
  ))}
</div>


{/* ==== SECTION 2 (تحتيه بمسافة) ==== */}
<div className="customer-products-grid container mt-5">
  {products.map((p) => (
    <Link
      to="/productdetails"
      state={{ product: p }}
      key={p.id}
      className="customer-product-card mb-5"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="customer-discount">{p.discount}%</div>
      <img src={p.img} className="customer-product-img" alt={p.name} />

      <div className="heart">
        <i className="fa fa-heart heart-icon position-absolute" />
      </div>

      <div className="d-flex justify-content-between px-3">
        <h3 className="customer-product-name">{p.name}</h3>
        <div className="customer-rate">
          <img src={star} /> {p.rate}
        </div>
      </div>

      <p
        className="customer-desc"
        dangerouslySetInnerHTML={{ __html: p.desc }}
      ></p>

      <div className="customer-price">
        <span className="new">{p.price} ر.س</span>
        <span className="old">{p.oldPrice} ر.س</span>
      </div>

      <button
        className="customer-add-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          navigate("/paymentpage");
        }}
      >
        <span className="carts">إضافة للعربة</span>
        <img src={carticon} />
      </button>
    </Link>
  ))}
</div>


      </div>
    </>
  );
}
