import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="https://sapiangroup.com">
                    Solutions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://sapiangroup.com">
                    Sapian Capital
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://sapiangroup.com">
                    Ozeety
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://sapiangroup.com"
                    tabindex="-1"
                  >
                    Cryptostations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="intro">
          <div className="init">
            <div className="logo">
              <img
                data-aos="fade-in"
                data-aos-duration="900"
                src="https://res.cloudinary.com/sapiangroup/image/upload/v1641815257/sapian/Sapian_Cryptomonial_bsbhax.png"
                alt=""
              />
              <h5
                className="slogan"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                A new paradigm for crypto-asset owners
              </h5>
            </div>
          </div>
        </div>

        <div className="definition">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-5 my-auto">
                <h2>What is Cryptomonial Engineering?</h2>
                <div className="ce-desc">
                  <p>
                    Cryptomonial Engineering is new approach to catalyze the
                    uncontrollable additional wealth created by crypto-asset
                    owners with a 360’ crypto-finance solution through our OTC
                    desk.
                  </p>
                  <div>
                    <a href="https://sapiangroup.com" className="read-more">
                      read more
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="ce-desc-image">
                  <div className="text-center">
                    <img
                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1646570883/CRYPTOMONIAL/buildings_iejiqg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="solutions">
          <div className="container">
            <h4 className="mb-5">Our Solutions</h4>
            {/* (or some itroduction that suites for the heading) */}
            <div className="row">
              <div className="col-sm-4">
                <div className="solution sc">
                  
                </div>
              </div>
              <div className="col-sm-4">
                <div className="solution oztg">
                </div>
              </div>
              <div className="col-sm-4">
                <div className="solution cs">
                  <h1>Cryptostations</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sections">
                <h4>
                  Cryptomonial engineering-wealth creating through distruption
                </h4>
                <div className="section">
                  <div className="sapian-capital"></div>
                </div>
                <div className="section">
                  <div className="oztg"></div>
                </div>
                <div className="section">
                  <div className="cryptostations"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
