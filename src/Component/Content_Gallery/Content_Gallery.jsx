import {React,useState} from 'react'
import "../Content_Gallery/Content_Gallery.css"
// galerry porfolio
import Menu from "./content_filter";
function Gallery() {
  // gallery porfolio for children adult
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };
  // end gallery porfolio for children adult
  return (
    <div>
             <nav className="navbar navbar-light bg-light shadow-sm">
        <span className="navbar-brand mb-0 m-auto h3 text-center">
          <div className="row">
            <div className="col-12 col-md-12" data-aos="zoom-in">
              Origami Product from <br />
              Kids and Adult
            </div>
          </div>
        </span>
      </nav>
      <br />
      <div className="container" data-aos="zoom-in-up">
        <ul className="nav nav-pills justify-content-center">
        
          <li className="nav-item">
            <a
              className={active ? "nav-link " : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("kids")}
            >
              For Kids
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link " : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("adult")}
            >
              For Adult
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link " : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              All
            </a>
          </li>
        </ul>
      </div>

      <div className="container mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, image, description, price } = elem;

            return (
              <div className="col-sm-4" id={elem.id}>
                <div class="card mb-3" data-aos="fade-up">
                  <div class="row no-gutters">
                    <div class="col-md-5">
                      <img
                        class="g-img-fluid"
                        src={elem.image}
                        alt={elem.name}
                       
                      />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h5 class="card-title mb-0">{elem.name}</h5>
                        <p class="card-text">{elem.description}</p>
                        <div class="d-flex justify-content-between">
                          <div class="p-1">Price: {elem.price}</div>
                          {/* <button type="button" className="btn btn-success p-1">
                            Oreder Now
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Gallery