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
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="https://sapiangroup.com"
                  >
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
          <video
            className="intro-video"
            id="intro-video"
            src="https://res.cloudinary.com/sapiangroup/video/upload/v1646588915/CRYPTOMONIAL/Particles_-_10848_czpvl4.mp4"
            autoPlay
            muted
          ></video>
          <div className="init">
            <div className="logo">
              <img
                data-aos="fade-in"
                data-aos-duration="900"
                src="https://res.cloudinary.com/sapiangroup/image/upload/v1646592671/CRYPTOMONIAL/sapian-cryptomoni_nnpy9k.svg"
                alt=""
              />
              <h5 className="slogan">A new paradigm for crypto-asset owners</h5>
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
                      src="https://res.cloudinary.com/sapiangroup/image/upload/w_1200,f_auto/v1646577694/CRYPTOMONIAL/globe_b16k3w.svg"
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
              {/* cryptostations */}
              <div className="col-sm-4">
                <div className="solution cs">
                  <h1>Cryptostations</h1>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="solution oztg"></div>
              </div>

              <div className="col-sm-4">
                <div className="solution sc"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="sections">
                {/* <h4>
                  Cryptomonial engineering-wealth creating through distruption
                </h4> */}

                <div className="section">
                  <div className="cryptostations">
                    <h2 className="text-center">THE CRYPTOSTATION BY FLASH</h2>
                    <div className="cs-slogans">
                      <h5 className="cs-slogan">
                        ENABLE EASY ACCESS, NO ENTRY BARRIERS!
                      </h5>
                      <h5 className="cs-slogan">OZTCARD COLLECTION POINT</h5>
                      <h5 className="cs-slogan">FAIR REMITTANCE SERVICE</h5>
                    </div>

                    {/* easy access */}
                    <div className="easy-access">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-4">
                            <p>
                              We have designed our solution to reach the{" "}
                              <span className="strong">2 Billion+ </span> people
                              who do not have access to the usual banking
                              system, so it appears to be paramount to ease the
                              access to our blockchain-power solution.
                            </p>

                            <p>
                              our mainstream audience has no credit or debit
                              card neither bank account. So by accepting payment
                              by mobile, cash, debit card or cryptocurrency, we
                              are enabling widely the access to our solution
                              throughout our hardware device
                              <span className="strong">
                                “FLASHCRYPTOSTATION”
                              </span>
                              .
                            </p>

                            <p>
                              Users will be able to buy any cryptocurrency
                              against designated fiat and vice-versa.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* oztcards */}

                    <div className="oztcard">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-8"></div>
                          <div className="col-sm-4">
                            <p>
                              People who don't have a fixed address can order
                              their <span className="strong">OZTCARD</span> in the nearest FLASHCRYPTOSTATION
                              location point (mall, Airport, merchants, etc...)
                              and pick it up once the card is ready or collect
                              it up from another location.
                            </p>
                            <a href="https://oztcard.com/" target="_blank">Know more about OZTCARD</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="oztg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const slogan = document.querySelector(".slogan");
    const intro = document.querySelector("#intro-video");
    setTimeout(() => {
      intro.classList.add("fade-intro");
      slogan.classList.add("fade-up");
    }, 21000);
  }
}
