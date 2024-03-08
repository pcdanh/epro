import {React} from 'react'
import "../Slider/Slider.css"
import slider_1 from "../../Img/slide-1.jpg"
import slider_2 from "../../Img/slide-2.jpg"
import slider_3 from "../../Img/slide-4.jpg"
import videobg from '../../Img/How to Fold a -Double Star- Napkin for Your Next Party.mp4'

function Slider() {

  return (
    <div>

{/* <!-- Carousel wrapper --> */}
<div id="carouselVideoExample" className="carousel slide carousel-fade" data-mdb-ride="carousel" >
  {/* <!-- Indicators --> */}
  <div className="carousel-indicators">
    <button type="button" data-mdb-target="#carouselVideoExample" data-mdb-slide-to="0" className="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-mdb-target="#carouselVideoExample" data-mdb-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-mdb-target="#carouselVideoExample" data-mdb-slide-to="2"
      aria-label="Slide 3"></button>
  </div>

  {/* <!-- Inner --> */}
  <div className="carousel-inner">
    {/* <!-- Single item --> */}
    <div className="carousel-item active">
      <section>
      <video className="s-img-fluid" id="slider" src={videobg} autoPlay loop muted >
 
      </video>
  
     
      {/* <!-- d-none là kích dien thoai thì đối tượng sẽ biến mất --> */}
      <div className="carousel-caption d-md-block ">
       
        <ul className="navigation ">
         
          <li >
            <img src={slider_1} alt='video_1' loading='lazy'/>
            
          </li>
         
          <li>
            <img src={slider_2} alt='video_2' loading='lazy'/>
            
          </li>
         
          <li >
            <img src={slider_3} alt='video_3' loading='lazy'/>
            </li>
        </ul>
        </div>
      </section>
      
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <video className="img-fluid" autoplay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
      </video>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <video className="img-fluid" autoplay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
      </video>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </div>
    </div>
  </div>
  {/* <!-- Inner --> */}

  {/* <!-- Controls --> */}
  {/* <button className="carousel-control-prev" type="button" data-mdb-target="#carouselVideoExample"
    data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselVideoExample"
    data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
{/* <!-- Carousel wrapper --> */}
    </div>
  )
}

export default Slider