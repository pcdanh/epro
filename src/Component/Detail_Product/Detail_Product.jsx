import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailProduct from "../../Data/json/Detail-Product.json";
import "../Detail_Product/Detail_Product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactPlayer from "react-player";
function Detail_Product() {
  const { id } = useParams();
  let Detail = DetailProduct.filter(
    (items) => items.category_detail[0].id == id
  );
  // animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="container">
        {Detail.map((item) => (
          <div className="row">
            <div className="col-12 col-md-12" data-aos="fade-up">
              <h1 className="d-p-label">{item.name}</h1>
            </div>

            <div className="col-12 col-md-8" data-aos="fade-up">
              <div>
                <img
                  src={item.img_3}
                  alt=""
                  loading="lazy"
                  className="img-fluid-2"
                />
              </div>
            </div>
            <div className="col-12 col-md-4" data-aos="fade-up">
              <div>
                <img
                  src={item.img_2}
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src={item.img_2_1}
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-12" data-aos="fade-up">
              <span className="d-p-content">{item.content_1}</span>
            </div>
            <div className="col-12 col-md-12 " data-aos="fade-up">
              <div className={item.container_video}>
                {/* <video url={item.video}  controls></video> */}
                <ReactPlayer
                  className="react-player"
                  height="300px"
                  width="400px"
                  url={item.video}
                  controls={true}
                  light={true}
                  playing={true}
                />
              </div>
            </div>

            <div className="col-12 col-md-12" data-aos="fade-up">
              <h2 className="d-p-label">{item.step_1}</h2>
              <div className="d-p-img-step">
                <img
                  src={item.hinh_3}
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div className="d-p-content">{item.content_2}</div>
            </div>

            <div className="col-12 col-md-12" data-aos="fade-up">
              <h2 className="d-p-label">{item.step_2}</h2>
              <div className="d-p-img-step">
                <img
                  src={item.hinh_4}
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-12" data-aos="fade-up">
              <div className="d-p-content">{item.content_3}</div>
            </div>

            <div className="col-12 col-md-12" data-aos="fade-up">
              <h2 className="d-p-label">{item.step_3}</h2>
              <div className="d-p-img-step">
                <img
                  src={item.hinh_5}
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-12" data-aos="fade-up">
              <div className="d-p-content">{item.content_4}</div>
            </div>

            <div className="col-12 col-md-12" data-aos="fade-up">
              <h2 className="d-p-label">{item.step_4}</h2>
              <div className="d-p-img-step">
                <img
                  src={item.hinh_6}
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-12" data-aos="fade-up">
              <div className="d-p-content">{item.content_5}</div>
            </div>

            <div className="col-12 col-md-12" data-aos="fade-up">
              <h2 className="d-p-label">{item.step_5}</h2>
              <div className="d-p-img-step">
                <img
                  src={item.hinh_7}
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-12" data-aos="fade-up">
              <div className="d-p-content">{item.content_6}</div>
            </div>

            <div className="col-12 col-md-12" data-aos="fade-up">
              <h2 className="d-p-label">{item.step_6}</h2>
              <div className="d-p-img-step">
                <img
                  src={item.hinh_8}
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-12" data-aos="fade-up">
              <div className="d-p-content">{item.content_7}</div>
            </div>

            <div className="col-12 col-md-12" data-aos="fade-up">
              <h2 className="d-p-label">{item.step_7}</h2>
              <div className="d-p-img-step">
                <img
                  src={item.hinh_9}
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-12" data-aos="fade-up">
              <div className="d-p-content">
                <div className="d-p-content">{item.content_8} </div>
              </div>
            </div>
            <div className={item.d_see} data-aos="fade-up">
              <div className="col-12 col-md-12">
                <h2 className="d-p-label">{item.step_8}</h2>
                <div className="d-p-img-step">
                  <img
                    src={item.hinh_10}
                    alt=""
                    loading="lazy"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12">
                <div className="d-p-content">
                  <div className="d-p-content">{item.content_9} </div>
                </div>
              </div>
            </div>

            <div className={item.d_see} data-aos="fade-up">
              <div className="col-12 col-md-12">
                <h2 className="d-p-label">{item.step_9}</h2>
                <div className="d-p-img-step">
                  <img
                    src={item.hinh_11}
                    alt=""
                    loading="lazy"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12">
                <div className="d-p-content">
                  <div className="d-p-content">{item.content_10} </div>
                </div>
              </div>
            </div>

            <div className={item.d_see} data-aos="fade-up">
              <div className="col-12 col-md-12">
                <h2 className="d-p-label">{item.step_10}</h2>
                <div className="d-p-img-step">
                  <img
                    src={item.hinh_12}
                    alt=""
                    loading="lazy"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12">
                <div className="d-p-content">
                  <div className="d-p-content">{item.content_11} </div>
                </div>
              </div>
            </div>
            <div className={item.d_see} data-aos="fade-up">
              <div className="col-12 col-md-12">
                <h2 className="d-p-label">{item.step_11}</h2>
                <div className="d-p-img-step">
                  <img
                    src={item.hinh_13}
                    alt=""
                    loading="lazy"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12">
                <div className="d-p-content">
                  <div className="d-p-content">{item.content_12} </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail_Product;
