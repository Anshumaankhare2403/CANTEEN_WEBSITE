import React from 'react';
import Img3 from '../assets/images/food/food home/aa.png';
import LazyLoad from 'react-lazyload';

function ExpertiseSection() {
  return (
    <div className="container mt-5">
      <h1 className='display-5 fw-bold text-center'>Our Expertise</h1>

      <div className="row border-top border-3 pt-2 pb-4">
        <div className="col-md mb-5">
          <div className="row">
            <div className="col mb-3 pt-5 mt-5">

              <div className="accordion shadow-lg rounded" id="accordionExample">
                <div className="accordion-item bg-transparent">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button bg-transparent" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapseOne" 
                      aria-expanded="true" 
                      aria-controls="collapseOne">
                      Kitchen Management:
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>Kitchen Management:</strong> Our chefs are masters of their craft, blending diverse flavors and culinary
                      techniques to create dishes that tantalize the taste buds.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-transparent">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-transparent" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapseTwo" 
                      aria-expanded="false" 
                      aria-controls="collapseTwo">
                      Serving Management:
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>Serving Management:</strong> Our serving staff is trained to provide attentive and courteous service,
                      ensuring that every customer's needs are met with efficiency and professionalism.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-transparent">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-transparent" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapseThree" 
                      aria-expanded="false" 
                      aria-controls="collapseThree">
                      Operation Management:
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>Operation Management:</strong> Behind the scenes, our operations team works tirelessly to keep
                      everything running smoothly, from inventory management to logistics coordination.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-transparent">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-transparent" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapsefour" 
                      aria-expanded="false" 
                      aria-controls="collapsefour">
                      Customer Relations:
                    </button>
                  </h2>
                  <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>Customer Relations:</strong> Our floor incharge leads the charge in building strong relationships with our
                      customers, understanding their preferences and ensuring that they leave satisfied after every visit.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          {/* Lazy load the image */}
          <LazyLoad height={200} offset={100}>
            <img src={Img3} className="img-fluid" alt="Expertise" loading="lazy" />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
}

export default ExpertiseSection;
