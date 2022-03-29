import React from "react";

export default class SapianCapital extends React.Component {
  render() {
    return (
      <div className="sapian-capital">
       
        {/* cookie concent */}
        <div className="cookies-parent">
          <div className="cookies">
            <div>
              By using our site you agree to our use of cookies to deliver a
              better site experience.
            </div>
            <div className="mt-2">
              <button id="accept">Got it</button>
            </div>
          </div>
        </div>

        <div className="capital-intro">
          <video
            playsInline
            src="https://res.cloudinary.com/sapiangroup/video/upload/f_auto/v1646694111/CRYPTOMONIAL/cryotomonial_d1z46v.mp4"
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
                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646826005/CRYPTOMONIAL/Sapian_group_logo_so1hkw.svg"
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
                      src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646837784/CRYPTOMONIAL/1_zsztxq.svg"
                      alt=""
                    />
                  </div>
                  <div className="capital-what">
                    <img
                      src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646837783/CRYPTOMONIAL/2_iwehft.svg"
                      alt=""
                    />
                  </div>
                  <div className="capital-what">
                    <img
                      src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646837783/CRYPTOMONIAL/3_qstbcb.svg"
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
                        href="https://res.cloudinary.com/sapiangroup/image/upload/v1648494434/sapian/SAPIAN_CAPITAL_OTC_DESK_-_V3_hvadlq.pdf"
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
          <div className="container four-parts-container">
            <div className="row">
              <div className="col text-center">
                <h2>SERENITY CAN BE SUMMED UP IN 4 POINTS</h2>
              </div>
            </div>
            <div className="row justify-content-center mt-0 mt-md-5">
              <div className="col-md-3">
                <div className="capital-part-nav d-none d-md-block">
                  <div className="cap-nav">
                    <span>Support 24/7</span>
                  </div>
                  <div className="cap-nav">
                    <span>Cryptomonial Engineering</span>
                  </div>
                  <div className="cap-nav">
                    <span>Fair fees</span>
                  </div>
                  <div className="cap-nav">
                    <span>OZT CARD</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="four-parts">
                  <div className="part">
                    <h2 className="d-block d-md-none">Support 24/7</h2>
                    <p>
                      For any request for contact and interview, an email is at
                      your disposal in addition to a phone number for urgent
                      requests.
                    </p>
                    <p>We ensure appointments from Monday to Friday.</p>
                  </div>
                  <div className="part">
                    <h2 className="d-block d-md-none">
                      Cryptomonial Engineering
                    </h2>
                    <p>
                      Every situation being different, customization is the key
                      to your success.
                    </p>
                    <p>
                      Therefore, we have developed, in addition to the
                      traditional OTC, a service of follow-up, asset engineering
                      and tax optimization.
                    </p>
                    <p>It is called Cryptomonial Engineering.</p>
                    <div>
                      <a href="/">LEARN MORE</a>
                    </div>
                  </div>
                  <div className="part">
                    <h2 className="d-block d-md-none">Fair fees</h2>
                    <p>
                      Depending on your situation, we will work out the best
                      market price for you in a clear and transparent manner.
                    </p>
                    <p>
                      In order to be 100% in tune with your situation, it
                      depends on the whole of it taking into account for
                      example:
                    </p>

                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <ul>
                            <li>
                              <span>Your country</span>
                            </li>
                            <li>
                              <span>The period</span>
                            </li>
                          </ul>
                        </div>

                        <div className="col-6">
                          <ul>
                            <li>
                              <span>The amount</span>
                            </li>
                            {/* <li>
                              <span>
                                Liquidity and volatility of the desired asset
                                base
                              </span>
                            </li> */}
                            <li>
                              <span>Orientation of the fiat</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="part">
                    <h2 className="d-block d-md-none">OZT CARD</h2>
                    <p>
                      Benefiting from the highest level of security by being
                      unlocked via a fingerprint sensor.
                    </p>
                    <p>
                      the OZT CARD GOLD allow serenity during the transactions.
                    </p>
                    <div>
                      <a
                        href="https://oztcard.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        OZTCARD.COM
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="capital-how-does-it-work">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="capital-map">
                  <h2>HOW SCO WORKS?</h2>
                  <div>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1648551741/CRYPTOMONIAL/Asset_2_4x_tt8yyo.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="capital-escrow">
          <h2>WHAT IS AN ESCROW?</h2>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-3">
                <div
                  className="escrow-point"
                  
                >
                  Escrow involves placing the funds from the transaction in an
                  escrow account.
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="escrow-point"
                  
                >
                  The latter will then act as guarantor of the proper execution
                  of the contract by delivering the funds only if the terms of
                  the contract have been respected.
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="escrow-point"
                 
                >
                  TAs a true justice of the peace, the escrow account ensures
                  that all of the terms and conditions of each of the parties
                  are honored.
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <h4 className="text-center">ESCROW PROCESS</h4>
              <div className="col-sm-6 text-center">
                <div>
                  <p>
                    <small>Note:</small> The escrow process takes place during
                    the transaction and therefore requires that all of the above
                    steps (cross-referenced to "process") be completed.
                  </p>

                  <p>
                    If you wish to purchase 1,000,000 OZTGs, we would be in the
                    first situation.
                  </p>

                  <p>
                    As shown in the diagram, the process involving escrow takes
                    place in three steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center text-center mt-5">
              <div className="col-sm-4">
                <h5
                  className="escrow-step"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  01. Fiduciary Deposit Of Assets
                </h5>
              </div>
              <div className="col-sm-4">
                <h5
                  className="escrow-step"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  02. Transfer of assets
                </h5>
              </div>
              <div className="col-sm-4">
                <h5
                  className="escrow-step"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="900"
                >
                  03. Release of payment assets to SCO
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="capital-coins">
          <h2>SUPPORTED COINS</h2>
          <div>
            <h4>
              Our OTC desk include trading of these following coins and fiat.
            </h4>
          </div>
          <div className="container">
            <div className="coins">
              <div
                className="coin"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img
                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646865512/CRYPTOMONIAL/oztg_q7buj2.svg"
                  alt=""
                />
              </div>
              <div
                className="coin"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img
                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646865512/CRYPTOMONIAL/BTC_uujllp.svg"
                  alt=""
                />
              </div>
              <div
                className="coin"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <img
                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646865512/CRYPTOMONIAL/eth_fpvjkw.svg"
                  alt=""
                />
              </div>
              <div
                className="coin"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="800"
              >
                <img
                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646865513/CRYPTOMONIAL/xmr_th3r0p.svg"
                  alt=""
                />
              </div>
              <div
                className="coin"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="1000"
              >
                <img
                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646865512/CRYPTOMONIAL/eur_vm2ho8.svg"
                  alt=""
                />
              </div>
              <div
                className="coin"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="1200"
              >
                <img
                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646865512/CRYPTOMONIAL/usd_a0vpk4.svg"
                  alt=""
                />
              </div>
              <div
                className="coin"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="1400"
              >
                <img
                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646865512/CRYPTOMONIAL/gbp_tihika.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="row mt-5 justify-content-center">
              <div className="col-sm-6">
                <p>
                  We respond to your requests by analysing each situation on a
                  case-by-case basis and according to each person's objectives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="capital-eligibility">
          <h2>ELIGIBILITY</h2>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4">
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646857769/CRYPTOMONIAL/eligibility_dex3xq.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-5 d-flex">
                <div className="my-auto">
                  <p>The order is greater than or equal to $50K.</p>
                  <p>
                    STO does not hold assets on behalf of trading
                    counterparties.
                  </p>
                  <p>
                    STO is subject to anti-money laundering (AML), KYC and other
                    such requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- footer --> */}
          <section class="footer d-flex justify-content-center">
            <div class="container">
              <div class="row p-5">
                <div class="col-sm-12 col-md-4 text-center text-md-left">
                  <div class="logo">
                    <img
                      src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646592671/CRYPTOMONIAL/sapian-cryptomoni_nnpy9k.svg"
                      style={{ width: "40%" }}
                      alt="sapian group logo"
                    ></img>
                  </div>
                </div>
                <div class="col-md-4 mt-5 mt-md-0 text-center text-md-left">
                  <div>
                    <ul>
                      <li class="mt-2">
                        <a
                          class="a-btn"
                          target="_blank"
                          href="https://sapiangroup.com/termsconditions.html"
                          rel="noreferrer"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li class="mt-2">
                        <a
                          class="a-btn"
                          target="_blank"
                          href="https://sapiangroup.com/privacy.html"
                          rel="noreferrer"
                        >
                          Privacy policy
                        </a>
                      </li>
                      <li class="mt-2">
                        <a
                          class="a-btn"
                          target="_blank"
                          href="https://sapiangroup.com/cookies.html"
                          rel="noreferrer"
                        >
                          Use of Cookies
                        </a>
                      </li>
                      <li class="mt-2">
                        <a
                          class="a-btn"
                          href="mailto:support@sapiangroup.com"
                          rel="noreferrer"
                        >
                          Send Email: support@sapiangroup.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 mt-5 mt-md-0 text-center text-md-right p-0">
                  <div>
                    <span>
                      {" "}
                      Offices in: Dubaï (UAE) ,Singapour, London/Liverpool
                      (United Kingdom) , Tallin (Estonia) and Luxembourg.
                    </span>
                    <br></br>
                  </div>
                  <div class="mt-4 socials">
                    <a
                      class="mx-1"
                      target="_blank"
                      rel="noreferrer"
                      href="https://blog.flashmoni.io/"
                    >
                      <img
                        src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/f_auto,q_auto,w_100/v1603275601/sapian-group/medium_sapian-group.svg"
                        alt="medium"
                      ></img>
                    </a>
                    <a
                      class="mx-1"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/flashmoni.official"
                    >
                      <img
                        src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/f_auto,q_auto,w_100/v1603275729/sapian-group/fb_sapian-group.svg"
                        alt="facebook"
                      ></img>
                    </a>
                    <a
                      class="mx-1"
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/Flashmoniltd"
                    >
                      <img
                        src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/f_auto,q_auto,w_100/v1603275877/sapian-group/twitter_sapian-group.svg"
                        alt="twitter"
                      ></img>
                    </a>
                    <a
                      class="mx-1"
                      target="_blank"
                      rel="noreferrer"
                      href="https://instagram.com/sapian_group?utm_medium=copy_link"
                    >
                      <img
                        src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/f_auto,q_auto,w_100/v1603275889/sapian-group/insta_sapian-group.svg"
                        alt="instagram"
                      ></img>
                    </a>
                    <a
                      class="mx-1"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/sapian-group/"
                    >
                      <img
                        src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/f_auto,q_auto,w_100/v1603275900/sapian-group/in_sapian-group.svg"
                        alt="linkedin"
                      ></img>
                    </a>
                    {/* <a class="mx-1" target="_blank" href="http://flashmoni.dribbble.com/"><img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/f_auto,q_auto,w_100/v1603275906/sapian-group/dribbble_sapian-group.svg"
                                    alt="dribbble"></img></a> */}
                  </div>
                </div>
              </div>

              <div class="row text-center pb-5">
                <div class="col-sm-12">
                  <small>Copyright © 2022 Sapian Group</small>
                </div>
              </div>
            </div>
          </section>
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

    const popup = document.querySelector(".cookies-parent");

    const key = "SapianCryptomonial";
    let cookie = {};

    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });

    if (cookie[key]) {
      popup.style.display = "none";
    }

    const accept = document.querySelector("#accept");
    accept.onclick = (e) => {
      const cookie = `${key}=cookie accepted;max-age=${60 * 60 * 24 * 365}`;
      document.cookie = cookie;
      popup.style.display = "none";
    };

    const partHeaders = Array.from(document.querySelectorAll(".cap-nav"));
    const parts = Array.from(document.querySelectorAll(".part"));

    const part = parts.shift();
    part.classList.toggle("expand");
    parts.push(part);

    const partHeader = partHeaders.shift();
    partHeader.classList.toggle("fill");
    partHeaders.push(partHeader);

    setInterval(() => {
      const part = parts.shift();
      part.classList.toggle("expand");
      parts.forEach((element) => {
        element.classList.remove("expand");
      });
      parts.push(part);

      const partHeader = partHeaders.shift();
      partHeader.classList.toggle("fill");
      partHeaders.forEach((element) => {
        element.classList.remove("fill");
      });
      partHeaders.push(partHeader);
    }, 5000);
  }
}
