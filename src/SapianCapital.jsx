import React from "react";

export default class SapianCapital extends React.Component {
  render() {
    return (
      <div className="sapian-capital">
        <div className="capital-intro">
          <video
            src="https://res.cloudinary.com/sapiangroup/video/upload/v1646688539/CRYPTOMONIAL/sapian-capital-bg_zzeusz.mp4"
            autoPlay
            muted
            loop
          ></video>

          <div className="capital-intro-content">
            <div className="capital-logo">
              <div
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-delay="300"
              >
                <img
                  src="https://res.cloudinary.com/sapiangroup/image/upload/v1646826005/CRYPTOMONIAL/Sapian_group_logo_so1hkw.svg"
                  alt=""
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-delay="900"
              >
                <h5 className="capital-slogan">
                  In a Global World you need a Global Solution
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="capital-what-is-it">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <h2>WHAT IS SAPIAN CAPITAL OTC (SCO)?</h2>

                  <div>
                    <h4>
                      SAPIAN CAPITAL OTC is the first OTC desk offering{" "}
                      <a href="/">Cryptomonial Engineering.</a>
                    </h4>
                  </div>
                </div>

                <div className="capital-what-tiles">
                  <div className="capital-what">
                    <img
                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1646837784/CRYPTOMONIAL/1_zsztxq.svg"
                      alt=""
                    />
                  </div>
                  <div className="capital-what">
                    <img
                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1646837783/CRYPTOMONIAL/2_iwehft.svg"
                      alt=""
                    />
                  </div>
                  <div className="capital-what">
                    <img
                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1646837783/CRYPTOMONIAL/3_qstbcb.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="capital-perks">
                  <div className="capital-perk">
                    It allows large transactions, Options, Futures and much more
                  </div>
                  <div className="capital-perk">
                    Totally secure and extremely fast, it prevents you from
                    slipping it and the payment of risk fees
                  </div>
                  <div className="capital-perk">
                    It is a dark pool offering optimized, turnkey and
                    tailor-made exchange solutions.
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col">
                    <div>
                      <a
                      className="download"
                        href="https://drive.google.com/file/d/1e0oKUSimunmJEIsvZxmBpJZlzFQuIX31/view"
                        target="_blank"
                        rel="noreferrer"
                      >
                        DOWNLOAD THE BROCHURE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="capital-four-parts">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <h4>SERENITY CAN BE SUMMED UP IN 4 POINTS</h4>
              </div>
            </div>

            <div className="row">
              <div className="capital-parts">
                <div className="capital-part"></div>
                <div className="capital-part"></div>
              </div>
              <div className="capital-parts">
                <div className="capital-part"></div>
                <div className="capital-part"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="capital-how-does-it-work">
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.title = "Sapian Capital";

    const perks = Array.from(document.querySelectorAll(".capital-perk"));
    const icons = Array.from(document.querySelectorAll(".capital-what"));

    const time = 5000;

    setInterval(() => {
      const perk = perks.shift();
      const icon = icons.shift();

      perks.forEach((element) => {
        element.style.fontSize = ".8rem";
        element.style.opacity = ".5";
        element.style.color = "#111";
      });

      icons.forEach((element) => {
        element.style.transform = "scale(1)";
      });
      perks.push(perk);
      icons.push(icon);

      perk.style.fontSize = "1.2rem";
      perk.style.color = "#0B92E7";
      perk.style.opacity = "1";
      icon.style.transform = "scale(1.5)";
    }, time);
  }
}
