import React, { Fragment } from "react";

import Kishore from "../components/images/kishore.jpeg";
import Donation1 from "../components/images/about-donation1.webp";
import Donation2 from "../components/images/about-donation2.webp";

const AboutUs = () => {
  return (
    <Fragment>
      <div class="section">
        <div class="container">
          <div class="content-section">
            <div class="content">
              <h3>Make a donation Today!</h3>
              <p>
                With a regular donation you can help us for the long term to
                plant trees and to expand our global network. We can achieve a
                lot even with small donations! Every euro counts- and every
                donation brings us closer to achieving our goals.Thank you for
                your contribution!
              </p>
            </div>
          </div>
          <div class="image-section">
            <img src={Donation2} />
          </div>
        </div>
      </div>
      {/* <!--second part--> */}
      <div class="section-2">
        <div class="container-2">
          <div class="content-section-2">
            <div class="content-2">
              <h3>Small Donation makes Great Change!</h3>
              <p>
                With a regular donation you can help us for the long term to
                plant trees and to expand our global network. We can achieve a
                lot even with small donations! Every euro counts- and every
                donation brings us closer to achieving our goals.Thank you for
                your contribution!
              </p>
            </div>
          </div>
          <div class="image-section-2">
            <img src={Donation1} />
          </div>
        </div>
      </div>

      <div class="middle-part">
        <div class="container">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-2">
              <div class="img">
                <img src={Kishore} />
              </div>
            </div>
            <div class="col-md-2">
              <div class="img">
                <img src={Kishore} />
              </div>
            </div>
            <div class="col-md-2">
              <div class="img">
                <img src={Kishore} />
              </div>
            </div>
            <div class="col-md-2">
              <div class="img">
                <img src={Kishore} />
              </div>
            </div>
            <div class="col-md-2">
              <div class="img">
                <img src={Kishore} />
              </div>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutUs;
