import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/logo.png";
import Facebook from "../../assets/facebook (2).png";
import WhatsApp from "../../assets/whatsapp (2).png";
import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import location from '../../assets/location.png';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png';

export default function Footer() {
  return (
<div className="footer">
  <div className="container">
    <div className="footer-content">

      {/* Logo + Description */}
      <div className="footer-col">
        <img src={logo} className="footer-logo" />
        <p className="footer-desc">
          نساعد التجار على عرض منتجاتهم بفعالية، ونمنح العملاء تجربة تسوق سريعة ومريحة.
        </p>
      </div>

      {/* Company */}
      <div className="footer-col">
        <h3>الشركة</h3>
        <ul className="company-list">
          <li>من نحن</li>
          <li>الخدمات</li>
          <li>تواصل معنا</li>
          <li>فروع المؤسسة</li>
        </ul>
      </div>

      {/* Services */}
      <div className="footer-col">
        <h3>خدماتنا</h3>
        <ul className="service-list">
          <li>تاجر</li>
          <li>مستخدم</li>
          <li>مسوق</li>
          <li>مساعدتك في الشراء والبيع</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="footer-col">
        <h3>التواصل</h3>
        <ul className="comm-list">
          <li><img src={location} className="icon" /> الرياض / السعودية</li>
          <li><img src={phone} className="icon" /> +966 142 514 514</li>
          <li><img src={mail} className="icon" /> Toknaga@Gmail.Com</li>
        </ul>

        <div className="social-icons">
          <img src={Linkedin} />
          <img src={Instagram} />
          <img src={Facebook} />
          <img src={WhatsApp} />
        </div>
      </div>

    </div>
  </div>

  <div className="footer-bottom">
    جميع الحقوق محفوظة © 2000 لشركة طوق نجاة للتسوق الالكتروني
  </div>
</div>

  );
}
