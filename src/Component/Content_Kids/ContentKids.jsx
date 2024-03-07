import { React, useEffect } from "react";

import { useParams } from "react-router-dom";
import "../Content_Kids/Content_Kids.css";
import Productname from "../../Data/json/Product.json";
// animate css
import AOS from "aos";
import "aos/dist/aos.css";
function ContentKids() {
  // animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // end animation
  // id trên trình duyệt
  const { idbrowser } = useParams(); //lấy id trên trình duyệt

  let sp = Productname.filter((item) => item.category[0].id == idbrowser);
  // sp = sp[0]; //chỉ lấy 1 phần tử
  return (
    <div style={{ justifyContent: "center" }}>
      <div className="container">
        <div className="row" data-aos="fade-down-left">
        
          <div className="col-12 col-md-12">
            <h1>Guide Make Origami </h1>
          </div>
       
        </div>
        <div className="row">
          {sp.map((items) => (
            <div className="col-12 col-md-4 " data-aos="fade-up">
              <div className="card ck-card">
                <img
                  src={items.img}
                  className="card-img-top"
                  alt={items.name}
                />
                <div className="card-body ck-card-body">
                  <h5 className="card-title">{items.name}</h5>
                  {/* <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --> */}
                  <a
                    href={`/detail-product/${items.id}`}
                    className="btn btn-primary"
                  >
                    More read
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentKids;
