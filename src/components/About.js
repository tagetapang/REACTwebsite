import React from "react";


export default function About(props) {

  return (
    <>
      <div className="accordion" id="accordionExample" style={props.mode}>
        <div className="accordion-item"  style={props.mode}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.mode}
            >
              Mudang Tage
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong> mudang tage village is located basically between hapoli and ziro. The village comprises of the following title</strong> 
              <ul>
                <li>Tage</li>
                <li>mudang</li>
                <li>buru</li>
                <li>leggang</li>
                <li>tadu</li>
              </ul>
              <p>The neighbour of this village are <strong> duta village  </strong> and <strong>bamin michi</strong> </p>
              
            </div>
          </div>
        </div>
        {/* __________________________________________________________________________ */}
        <div className="accordion-item"  style={props.mode}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.mode}
            >
              Bamin Michi
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             <strong>bamin michi is also a village located between hapoli and old ziro. This village comprises of the following titles</strong>
             <ul>
              <li>bamin</li>
              <li>michi</li>
              <li>hano</li>
              
             </ul>
             <img src={process.env.PUBLIC_URL+"flower.jpg"}class="img-fluid" alt="not found"/>
             
            </div>
          </div>
        </div>
        {/* __________________________________________________________________________ */}
        <div className="accordion-item"  style={props.mode}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.mode}
            >
              Dutta village
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             <strong>dutta village is between mudang tage and hija village. Dutta village is a small village with small people i think so</strong>

            </div>
          </div>
        </div>
   
      </div>

    </>
  );
}
