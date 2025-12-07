import React, { useEffect, useState } from "react";
import lock from "../../assets/lock-icon.png";
import shopbtn from "../../assets/shop-arrow.png";
import avatar from "../../assets/rateproduct.png";
import "./Home.css";
import offerbanner from '../../assets/offers-banner.jpg'
import Categories from "../Categories/Categories";
import ProductsSection from "../ProductsSection/ProductsSection";
import ProductsElectronics from "../ProductsElectronics/ProductsElectronics";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [current, setCurrent] = useState(0);

  // ================= SLIDES DATA ==================
  const slides = [
    {
      title: "موقع واحد يشمل جميع احتياجاتك",
      desc: "نساعد التجار على عرض منتجاتهم بفعالية ونمنح العملاء تجربة تسوق سريعة ومريحة.",
      imgClass: "slide1",
    },
    {
      title: "أفضل العروض بأفضل الأسعار",
      desc: "اكتشف منتجات عالية الجودة بخصومات مذهلة وتجربة تسوق ممتعة.",
      imgClass: "slide2",
    },
    {
      title: "منصتك الأولى للتسوق الإلكتروني",
      desc: "آلاف المنتجات في مكان واحد — تسوق بسهولة وأمان.",
      imgClass: "slide3",
    },
  ];

  // ================= AUTO ANIMATION ==================
  useEffect(() => {
    setAnimate(true);
  }, []);

  // ================= NAVIGATION ==================
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="hero-wrapper mt-5 pt-5">
      <div className={`hero-container ${animate ? "animate" : ""}`}>

        {/* LEFT IMAGE SLIDE */}
        <div className={`hero-left ${slides[current].imgClass}`}></div>

        {/* RIGHT CONTENT */}
        <div className="hero-right mt-5">
          <span className="hero-tag d-flex justify-content-start">
            <img className="lock" src={lock} />
            <p className="web-text">الموقع الأفضل للتسوق الإلكتروني</p>
          </span>

          <h1 className="hero-heading">{slides[current].title}</h1>

          <p className="web-order">{slides[current].desc}</p>

          <div className="products-info d-flex justify-content-center">
            <button className="shop-btn">
              <img src={shopbtn} />
              <p className="btn-text">تسوق الآن</p>
            </button>

            <span className="products-link mt-2 px-4">
              <a>شاهد جميع المنتجات</a>
            </span>
          </div>

          {/* Rating */}
          <div className="home-rating">
            <div className="icons-stack">
              <i className="plusicon">+</i>
              <img src={avatar} alt="" className="img-1" />
              <img src={avatar} alt="" className="img-2" />
              <img src={avatar} alt="" className="img-3" />
            </div>

            <div className="rate-box-text text-end">
              <span className="ratemaintext">+ 4.9 تقييم</span>
              <p className="rate-sub">ثقة أكثر من 2000 عميل</p>
            </div>
          </div>
        </div>

        {/* SLIDER ARROWS */}
        <button className="slide-arrow right" onClick={nextSlide}>›</button>
        <button className="slide-arrow left" onClick={prevSlide}>‹</button>
      </div>

      <Categories />
      <div className="offers-banner">
        <img src={offerbanner}/>
      </div>
      {/* <CategoriesSlider/> */}
      <ProductsSection />
      {/* <ProductsElectronics/> */}
      
    </div>
  );
}
