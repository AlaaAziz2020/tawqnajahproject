import React, { useState } from "react";
import '../AccountType/AccountType.css';
import registerbg from "../../assets/register-bg.png";
import storeimg from '../../assets/Vector1.png';
import logo from "../../assets/logo.png";
import shoppingcart from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";

export default function AccountType() {

  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if(!selected) return;

    localStorage.setItem("accountType", selected);
    navigate("/register");
  }

  return (
    <div className="registeration">
      <div className="container-fluid">
        <div className="row">

          <div className="image account col-12 col-md-6 p-0">
            <img src={registerbg} alt="img" className="w-100 h-100" />
          </div>

          <div className="form col-12 col-md-6 d-flex flex-column text-end">

            <div className="mb-4 text-center">
              <img src={logo} className="" alt="img" />
            </div>

            <h3 className="  mt-3 text-center">
              اختر نوع الحساب الذي يناسب احتياجاتك.
            </h3>

            <div className="d-flex  mt-4">

              <div className="shopping-image"
                onClick={()=> setSelected("buyer")}
                style={{
                //   width:"170px",
                //   height:"170px",
                  border:selected==="buyer"?"2px solid #1b3f87":"2px solid #cccccc",
                //   borderRadius:"12px",
                //   display:"flex",
                //   cursor:"pointer",
                //   flexDirection:"column",
                //   justifyContent:"center",
                //   alignItems:"center"
                }}
              >
                {/* <i className="fa fa-shopping-cart" style={{fontSize:"40px"}}></i> */}
               <img className="shoppingcart" src={shoppingcart} />
                <p className="mt-2 fw-bold text-white texting-buyer">مشتري</p>
              </div>

              <div className="sellericon"
                onClick={()=> setSelected("seller")}
                style={{
                  width:"47%",
                  height:"170px",
                  border:selected==="seller"?"2px solid #1b3f87":"2px solid #cccccc",
                  borderRadius:"12px",
                  display:"flex",
                  cursor:"pointer",
                  flexDirection:"column",
                  justifyContent:"center",
                  alignItems:"center",
                }}
              >
                {/* <i className="fa fa-store" style={{fontSize:"40px"}}></i> */}
                <img src={storeimg}   />
                <p className="mt-2 fw-bold">بائع</p>
              </div>

            </div>

            <button 
              className="btn text-white font-bold mt-3 w-100"
              onClick={handleNext}
            >
              التالي
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
