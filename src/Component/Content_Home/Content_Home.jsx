import { React, useEffect, useState } from "react";
import "../Content_Home/Content_Home.css";
import content_history from "../../Img/content-history.png";
import content_psychology from "../../Img/hatgiay.jpg";
import origami_book from "../../Img/kawaii-origami-book-paper-kawaii-08-440x440-1.jpg";
import contribution from "../../Img/stock-vector-origami-tutorial-for-kids-origami-cute-squirrel-2328538499.jpg";
import logo_1 from "../../Img/img-unit/businessschool.png";
import logo_2 from "../../Img/img-unit/agribank.png";
import logo_3 from "../../Img/img-unit/charitylife.jpg";
import logo_4 from "../../Img/img-unit/odergami.png";
import logo_5 from "../../Img/img-unit/paper crane.jpg";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

// end galerry porfolio
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// animate css
import AOS from "aos";
import "aos/dist/aos.css";

function Content_Home() {
  // animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // end animation
  //Buy now book
  const [quantity, setQuantity] = useState(1);
  var Plus = (event) => {
    event.preventDefault();
    setQuantity(quantity + 1);
  };
  var Minus = (event) => {
    event.preventDefault();
    var isvalid = true;
    if (quantity <= 1) {
      isvalid = false;
    } else {
      setQuantity(quantity - 1);
    }
    return isvalid;
  };

  var [databuy, setDatabuy] = useState({
    fullname: "",
    phone: "",
    address: "",
    phuong:"",
    huyen:"",
    quantity:"",
  });
  var [error_buy,setError_buy]=useState({
    fullname: "",
    phone: "",
    address: "",
    phuong:"",
    huyen:"",
    quantity:"",
  })
  var handleChangebuy = (event) => {
    var { name, value } = event.target;
    setDatabuy({ ...databuy, [name]: value });
  };
  var deleteall = (event) => {
    event.preventDefault();
    setQuantity(1);
    databuy.fullname="";
    document.getElementById("fullname").value = "";
    databuy.phone="";
    document.getElementById("phone").value = "";
    databuy.address="";
    document.getElementById("address").value = "";
    document.getElementById("phuong").value = "";
    document.getElementById("huyen").value = "";
  };
  var handleSubmitbuy = (event) => {
    event.preventDefault();
    var isvalid=true;
    var errors_buy={...error_buy};
    if (databuy.fullname===""){
      errors_buy.fullname="Fullname is required";
      isvalid=false;
    }
    else{
      errors_buy.fullname="";
    }
    if (databuy.phone===""){
      errors_buy.phone="Phone is required";
      isvalid=false;
    }
    else{
      errors_buy.phone="";
    }
    if (databuy.address===""){
      errors_buy.address="Adress is required";
      isvalid=false;
    }
  else{
    errors_buy.address="";
  }
  if (document.getElementById("phuong").value ===""){
    errors_buy.phuong="Award is required";
    isvalid=false;
  }
else{
  errors_buy.phuong="";
}
if (document.getElementById("huyen").value ===""){
  errors_buy.huyen="District is required";
  isvalid=false;
}
else{
errors_buy.huyen="";
}
if (document.getElementById("quantity").value ===""){
  errors_buy.quantity="Quantity is required";
  isvalid=false;
}
else{
errors_buy.quantity="";
}
    if (databuy.fullname !== "") {
      if (databuy.phone !== "") {
        if (databuy.address !== "") {
          if (document.getElementById("phuong").value !== "") {
            if (document.getElementById("huyen").value !== "") {
              if (document.getElementById("quantity").value !== "") {
                alert("Success");
              }
            }
          }
        }
      }
    }
    setError_buy(errors_buy);
    return isvalid
  };
  // end buy book
  // form contribution
  var [dataSubmit, setDataSubmit] = useState({
    fullname_submit: "",
    gmail_submit: "",
    phone_submit: "",
    type_service_submit: "",
  });
  var [errorSubmit, setErrorSubmit] = useState({
    fullname_submit: "",
    gmail_submit: "",
    phone_submit: "",
    type_service_submit: "",
  });
  var handleChangeSubmit = (event) => {
    var { name, value } = event.target;
    setDataSubmit({ ...dataSubmit, [name]: value });
  };
  var handleSubmit = (event) => {
    event.preventDefault();
    var isvalid = true;
    var formErrorSubmit = { ...errorSubmit };
    if (dataSubmit.fullname_submit.trim() === "") {
      formErrorSubmit.fullname_submit = "Fullname is required";
      isvalid = false;
    } else {
      formErrorSubmit.fullname_submit = "";
    }

    if (dataSubmit.phone_submit.trim() === "") {
      formErrorSubmit.phone_submit = "Phone is required";
      isvalid = false;
    } else {
      formErrorSubmit.phone_submit = "";
    }

    if (dataSubmit.gmail_submit.trim() === "") {
      formErrorSubmit.gmail_submit = "Gmail is required";
      isvalid = false;
    } else {
      formErrorSubmit.gmail_submit = "";
    }

    if (dataSubmit.type_service_submit.trim() === "") {
      formErrorSubmit.type_service_submit = "Type of service is required";
      isvalid = false;
    } else {
      formErrorSubmit.type_service_submit = "";
    }
    setErrorSubmit(formErrorSubmit);
    if (isvalid){
      alert("Thanks you for your contribution !");
    }
    return isvalid;
  };
  return (
    <div>
      <section>
        <div className="content-history-psychology">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 ">
                <h2 data-aos="fade-up">A brief history of origami</h2>

                <div className="content-history " data-aos="fade-right">
                  <div className="img-content-history ">
                    <img
                      src={content_history}
                      alt="content-history"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p>
                      There is much debate about the true history of origami.No
                      one knows exactly where or when origami first began. Paper
                      is one of the first things to degrade and disappear. Most
                      people think that origami was first invented in China, but
                      this may not be true at all. We do know that paper was
                      first invented in China during the first century A.D.
                      Paper was then brought from China to Japan by Buddhist
                      monks during the sixth century A.D....
                      <i>
                        <Link to="/about">More read</Link>
                      </i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 ">
                <div className="container-fluid" data-aos="fade-down">
                  <div className="content-psychology">
                    <div className="border-img">
                      <img
                        src={content_psychology}
                        alt="content-psychology"
                        loading="lazy"
                      />
                    </div>
                    <h2>Effects on psychology</h2>
                  </div>
                  <span>
                    Origami is a gentle, meticulous art. It has proven in many
                    cases to have a calming effect on the nerves, cure insomnia
                    and fight stress. Many doctors and physical therapists use
                    origami as a beneficial physical and mental therapy. Dr.
                    Ronald S. Levy, at the Second International Conference on
                    origami for education and therapy, called for the use of
                    origami for hand rehabilitation and therapy......
                    <i>
                      <Link to="/about">More read</Link>
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Kawaii Origami Book --> */}
      <section>
        <div className="fpt-aptech-origami">
          <div className="container">
            <div data-aos="fade-up">
              <h1>Kawaii Origami Book</h1>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 ">
                <div className="origami-book-img " data-aos="fade-up">
                  <img src={origami_book} alt="Origami book" loading="lazy" />
                </div>
              </div>

              <div className="col-12 col-md-8 " data-aos="fade-up">
                <div className="content-origami-book ">
                  <h3>
                    Kawaii Origami – Super Cute Origami Projects for Easy
                    Folding Fun
                  </h3>
                  <span>
                    I’m pleased to present my first origami book – ‘Kawaii
                    Origami’, which includes over 25 cute origami projects
                    ranging from easy to advanced. Kawaii Origami has everything
                    you need to make your very own Kawaii origami creations.
                    From an origami ice cream cone to a cute origami cat in a
                    heart! Includes 50 sheets of origami paper and over 25
                    Kawaii-style origami projects with step-by-step
                    instructions. Creating a proper published origami book was
                    what I thought of as an ‘unattainable goal’ so I am super
                    thankful to the people at Quarto for their help and cute
                    formatting of the book! Kawaii Origami is published by Race
                    Point Publishing through Quarto. The book is in diagram
                    format with a text description for each step. Some of the
                    models included also have video tutorials that go with them.
                    Kawaii Origami was published on 2nd April 2019. An ebook
                    version is also available on Amazon.
                  </span>

                  <div className="button-book">
                    {/* <button href="#">More Info</button> */}
                    {/* <!-- <button href="#" type="button">Buy Now</button> --> */}

                    <button
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasExample"
                      aria-controls="offcanvasExample"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- button Buy Now --> */}
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Book Now Free Ship !
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={handleSubmitbuy}>
            <div className="ch-buy-now">
              <label for="">Full Name </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
              
                onChange={handleChangebuy}
                value={databuy.fullname}
              />
              <div></div>
              <div className="errors">{error_buy.fullname}</div>
              <label for="">Your Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                onChange={handleChangebuy}
                value={databuy.phone}
              />
              <div></div>
              <div className="errors">{error_buy.phone}</div>
              <label for="">Your Adrress</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="number your house"
       
                onChange={handleChangebuy}
                value={databuy.address}
              />
              <div></div>
              <div className="errors">{error_buy.address}</div>
             
            </div>
          <div className="ch-award-district">
          
            <div><label for="phuong">Award </label> </div>
            <div> <select
              name="phuong"
              id="phuong"
              style={{ border: "2px solid black" ,marginTop:"5px"}}
            >
              <option value=""></option>
              <option value="anthanh">An Thạnh</option>
              <option value="phuhoa">Phú Hòa</option>
              <option value="phuloi">Phú Lợi</option>
              <option value="thanhhoaA">Thạnh Hòa A</option>
              <option value="phuloi">Thạnh Phú</option>
              <option value="thanhhoaB">Thạnh Hòa B</option>
            </select></div>
          
            <div className="errors">{error_buy.phuong}</div>
  

           
           <div><label for="huyen">District </label> </div> 
            <div> <select
              name="huyen"
              id="huyen"
              style={{ border: "2px solid black" ,marginTop:"5px"}}
            >
              <option value=""></option>
              <option value="thuanan">Thuận An</option>
              <option value="dian">Dĩ An</option>
              <option value="tanuyen">Tân Uyên</option>
              <option value="dautieng">Dầu Tiếng</option>
              <option value="thudaumot">Thủ Dầu Một</option>
              <option value="bencat">Bến Cát</option>
            </select></div>
            <div className="errors">{error_buy.huyen}</div>
            </div>
            <div className="ch-buy-now">
              <label for="">Quantity </label>
              <div className="minus-plus">
                <button type="button" onClick={Minus}>
                  {" "}
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  type="text"
                  style={{ width: "40px", textAlign: "center" }}
                  name="quantity"
                  value={quantity}
                  id="quantity"
                />
                <button onClick={Plus}>
                  {" "}
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="ch-buy-now">
              <label for="">Price</label>
              <div className="ch-content">15$ for 1 book</div>

              <label htmlFor=""></label>
              <div>Free Ship</div>
              <label htmlFor="">Total:</label>
              <div className="ch-content">{quantity * 15} $</div>
            </div>
            <div className="ch-order-clear">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ float: "right" }}
                onClick={deleteall}
              >
                Clear
              </button>
              <button
                type="Submit"
                className="btn btn-primary"
                style={{ float: "right" }}
              >
                Order
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- end button Buy Now --> */}
      {/* // for children for adult */}

      {/* //   end for children for adult */}
      {/* <!-- Quote Start --> */}

      <div
        className="container-fluid quote-style my-5 py-5 "
        style={{ backgroundImage: `url(${contribution})` }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="bg-white rounded p-4 p-sm-5  "
                data-aos="flip-right"
                style={{ border: "3px solid red" }}
              >
                <h1
                  className="display-5 text-center mb-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  Thanks you for your contribution
                </h1>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="gname"
                        name="fullname_submit"
                        placeholder="Gurdian Name"
                        onChange={handleChangeSubmit}
                      />
                      <label for="gname">Fullname</label>
                    </div>
                    <div className="errors">{errorSubmit.fullname_submit}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        id="gmail"
                        name="gmail_submit"
                        placeholder="Gurdian Email"
                        onChange={handleChangeSubmit}
                      />
                      <label for="gmail">Your email</label>
                    </div>
                    <div className="errors">{errorSubmit.gmail_submit}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="cname"
                        name="phone_submit"
                        placeholder="Child Name"
                        onChange={handleChangeSubmit}
                      />
                      <label for="cname">Phone</label>
                    </div>
                    <div className="errors">{errorSubmit.phone_submit}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="cage"
                        name="type_service_submit"
                        placeholder="Child Age"
                        onChange={handleChangeSubmit}
                      />
                      <label for="cage">Type of service</label>
                    </div>
                    <div className="errors">
                      {errorSubmit.type_service_submit}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-light border-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label for="message">Message </label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      className="btn btn-primary py-3 px-4"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Sent now !
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 5 vòng tròn--> */}
      <section className="container-xl">
        <div className="row">
          <h1 className="feature_circle">FOLLOW WITH US</h1>
          <hr />
          <div />
          <Marquee behavior="">
            <div className="row">
              <div className=" col-12 col-md-12">
                <div className="box">
                  <div className="future_box-up">
                    <div data-aos="fade-down">
                      <img
                        src={logo_4}
                        style={{ color: " #5515bd" }}
                        loading="lazy"
                        alt="logo_4"
                      />
                    </div>

                    <div data-aos="fade-up">
                      <img
                        src={logo_3}
                        style={{ color: " #5515bd" }}
                        loading="lazy"
                        alt="logo_3"
                      />
                    </div>
                    <div data-aos="fade-down">
                      <img
                        src={logo_1}
                        style={{ color: "#bd1550" }}
                        alt="logo_1"
                      />
                    </div>

                    <div data-aos="fade-up">
                      <img
                        src={logo_2}
                        style={{ color: " #5515bd" }}
                        loading="lazy"
                        alt="logo_2"
                      />
                    </div>
                    <div data-aos="fade-down">
                      <img
                        src={logo_5}
                        style={{ color: "#bd1550;" }}
                        alt="logo_5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
}

export default Content_Home;
