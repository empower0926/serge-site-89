import React from "react";
import { Link } from "react-scroll";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <div className="skip">
            <button id="skip">skip intro</button>
          </div>
          <div className="intro-video">
            <video
              playsInline
              className="intro-video"
              src="https://res.cloudinary.com/sapiangroup/video/upload/v1646695015/CRYPTOMONIAL/Tunnel_-_27438_1_w28dvt.mp4"
              autoPlay
              muted
              loop
            ></video>
            <div className="bg-filter"></div>
          </div>
          <video
            playsInline
            className="intro-video"
            id="intro-video"
            src="https://res.cloudinary.com/sapiangroup/video/upload/v1646588915/CRYPTOMONIAL/Particles_-_10848_czpvl4.mp4"
            autoPlay
            muted
          ></video>
          <video
            playsInline
            className="intro-video sapina-capital-video"
            id="sapian-capital-video"
            src="https://res.cloudinary.com/sapiangroup/video/upload/v1646694111/CRYPTOMONIAL/cryotomonial_d1z46v.mp4"
            autoPlay
            muted
            loop
          ></video>
          <video
            playsInline
            className="intro-video oztcard-video"
            id="oztcard-video"
            src="https://res.cloudinary.com/sapiangroup/video/upload/v1646692680/CRYPTOMONIAL/oztcard_s0g6uf.mov"
            autoPlay
            muted
            loop
          ></video>

          <img
            className="intro-video cryptostation-intro-image"
            src="https://res.cloudinary.com/sapiangroup/image/upload/v1646691697/CRYPTOMONIAL/cryptostations/WhatsApp_Image_2022-03-06_at_18.14.52_1_jcqmkz.png"
            id="cryptostation-intro"
            alt="flash cryptostation"
          />

          <div className="init">
            <div className="logo logo-main">
              <div>
                <div>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    src="https://res.cloudinary.com/sapiangroup/image/upload/v1647005903/CRYPTOMONIAL/merchants/sapian_cmxiod.svg"
                    alt="sapian cryptomonial"
                  />
                </div>
                <div className="cryptomonial">
                  <img
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    data-aos-delay="600"
                    src="https://res.cloudinary.com/sapiangroup/image/upload/v1647005903/CRYPTOMONIAL/merchants/cryptomonial_zl6nyq.svg"
                    alt=""
                  />
                </div>
              </div>
              <h5 className="slogan">A new paradigm for crypto-asset owners</h5>
            </div>
            <div className="logo logo-sc">
              <img
                data-aos="fade-in"
                data-aos-duration="900"
                src="https://res.cloudinary.com/sapiangroup/image/upload/v1646826005/CRYPTOMONIAL/Sapian_group_logo_so1hkw.svg"
                alt="sapian capital"
              />
            </div>
            <div className="logo logo-fc">
              <img
                data-aos="fade-in"
                data-aos-duration="900"
                src="https://res.cloudinary.com/sapiangroup/image/upload/v1646732973/CRYPTOMONIAL/cryptostation-logo_gjot1p.svg"
                alt=""
              />
            </div>
          </div>

          <div className="nav-balls">
            <a
              href="/cryptostation"
              className="nav-ball nav-ball-cryptostation"
            >
              <Link to="cryptostations">CRYPTOSTATION</Link>
            </a>
            <span className="vl"></span>
            <a
              href="https://www.oztcard.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-ball nav-ball-oztcard"
            >
              OZTCARD
            </a>
            <span className="vl"></span>
            <a href="/sapian-capital" className="nav-ball nav-ball-sapiangroup">
              SAPIAN CAPITAL
            </a>
          </div>
        </div>

        <div className="definition">
          <video
            playsInline
            id="globe-video"
            src="https://res.cloudinary.com/sapiangroup/video/upload/v1646686010/CRYPTOMONIAL/Abstract_-_26011_tltwuj.mp4"
            autoPlay
            muted
            loop
          ></video>
          <div className="container what-is">
            <div className="row justify-content-center">
              <div className="col col-md-5 my-auto">
                <h2>WHAT IS CRYPTOMONIAL ENINEERING?</h2>
                <p className="ce-desc">
                  Cryptomonial Engineering is new approach to catalyze the
                  uncontrollable additional wealth created by crypto-asset
                  owners with a 360’ crypto-finance solution through our OTC
                  desk.
                </p>
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
                <Link to="cryptostations">
                <a
                  className="solution cs"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                ></a>
                </Link>
              </div>

              <div className="col-sm-4">
                <a
                  href="https://oztcard.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="solution oztg"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                ></a>
              </div>

              <div className="col-sm-4">
                <a
                  href="/sapian-capital"
                  target="_blank"
                  rel="noreferrer"
                  className="solution sc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="900"
                ></a>
              </div>
            </div>
          </div>
        </div>

        {/* cryptostations */}
        <div className="sections-parent">
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12">
                <div className="sections">
                  {/* <h4>
                  Cryptomonial engineering-wealth creating through distruption
                </h4> */}

                  <div className="section">
                    <div className="cryptostations" id="cryptostations">
                      <h2 className="text-center">
                        THE{" "}
                        <span className="the-cryptostation">CRYPTOSTATION</span>{" "}
                        BY{" "}
                        <span>
                          <img
                            className="by-flash"
                            src="https://res.cloudinary.com/sapiangroup/image/upload/v1646733137/CRYPTOMONIAL/flash_lwxjmz.svg"
                            alt="FLASH"
                          />
                        </span>
                      </h2>
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
                          <div className="row justify-content-center">
                            <div className="col-sm-10">
                              <div className="cryptostation-images">
                                {/* <img
                                src="https://res.cloudinary.com/sapiangroup/image/upload/v1646735832/CRYPTOMONIAL/cryptostations/cryptostation-3_lfbo1l.png"
                                alt=""
                              /> */}
                                <div
                                  data-aos="fade-right"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/v1646735829/CRYPTOMONIAL/cryptostations/cryptostation-1_tch6ft.png"
                                    alt=""
                                  />
                                </div>
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/v1646735824/CRYPTOMONIAL/cryptostations/cryptostation-2_nzmozw.png"
                                    alt=""
                                  />
                                </div>
                                <div
                                  data-aos="fade-left"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/v1646735836/CRYPTOMONIAL/cryptostations/cryptostation-4_nbgogh.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col text-center">
                                <div className="for-users">
                                  <h1>FOR THE USERS</h1>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-6 mt-5 text-center">
                              <h4>ENABLE EASY ACCESS, NO ENTRY BARRIERS!</h4>
                              <p
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                              >
                                We have designed our solution to reach the{" "}
                                <span className="strong">2 Billion+ </span>{" "}
                                people who do not have access to the usual
                                banking system, so it appears to be paramount to
                                ease the access to our blockchain-power
                                solution.
                              </p>

                              <p
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="600"
                              >
                                our mainstream audience has no credit or debit
                                card neither bank account. So by accepting
                                payment by mobile, cash, debit card or
                                cryptocurrency, we are enabling widely the
                                access to our solution throughout our hardware
                                device
                                <span className="strong">
                                  “FLASHCRYPTOSTATION”
                                </span>
                                .
                              </p>

                              <p
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="900"
                              >
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
                            <div className="col-sm-6">
                              <div className="oztcard-images">
                                <div className="oztcard-image">
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/w_700/v1606812303/ozt-card/OZTCARD_Ambassador_FACE_1_jic4b9.png"
                                    alt="gold oztcard"
                                  />
                                </div>

                                <div
                                  className="oztcard-image"
                                  data-aos="fade-left"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/v1605463815/ozt-card/standard-bleu_ozt-card_ltxnjt.png"
                                    alt="standard oztcard"
                                  />
                                </div>

                                <div
                                  className="oztcard-image"
                                  data-aos="fade-left"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/v1605463815/ozt-card/premium-violette_ozt-card_mtj4do.png"
                                    alt="premium oztcard"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-5">
                              <h4>OZTCARD COLLECTION POINT</h4>
                              <p data-aos="fade-left" data-aos-duration="1200">
                                People who don't have a fixed address can order
                                their <span className="strong">OZTCARD</span> in
                                the nearest FLASHCRYPTOSTATION location point
                                (mall, Airport, merchants, etc...) and pick it
                                up once the card is ready or collect it up from
                                another location.
                              </p>

                              <p className="mt-3">
                                People will not be able to remove cash from the
                                Station, just fill it in with designated fiat
                                currencies. Withdraw money using the OZTCARD,
                                will be possible from a regular ATM device.
                              </p>

                              <div
                                className="anchor-parent"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="600"
                              >
                                <a
                                  href="https://oztcard.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Know more about OZTCARD
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="remittance">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-sm-5 mt-5">
                              <div>
                                <h4>FAIR REMITTANCE SERVICE</h4>

                                <div className="col-sm-12 d-block d-md-none">
                                  <div className="h-100 d-flex justify-content-center">
                                    <div className="my-auto particles-parent">
                                      <div className="particles"></div>
                                      <img
                                        src="https://res.cloudinary.com/sapiangroup/image/upload/v1601741549/OZEETY_IMAGES/assets/img/OZTG-gold-flashgroup-cryptostations.svg"
                                        alt=""
                                      />
                                      <h4 className="asset-pegged-coin">
                                        The Asset Pegged Coin
                                      </h4>
                                    </div>
                                  </div>
                                </div>

                                <p>
                                  Use the{" "}
                                  <span className="strong">CRYPTOSTATION</span>{" "}
                                  to send remittances using our unify
                                  transactional utility coin “OZTG”{" "}
                                  <span>
                                    <img
                                      className="oztg-coin"
                                      src="https://res.cloudinary.com/dmeppscpx/image/upload/v1619874803/flashxchanger/OZTG_vwr5kt.svg"
                                      alt=""
                                    />
                                  </span>
                                  . It will be instant with no hidden fees, in
                                  simple words “Hassle-Free”!
                                </p>
                              </div>
                              <div>
                                <div
                                  className="anchor-parent"
                                  data-aos="fade-up"
                                  data-aos-duration="1200"
                                  data-aos-delay="600"
                                >
                                  <a
                                    href="https://ozeety.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    know more about oztg
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-6 d-none d-md-block">
                              <div className="h-100 d-flex justify-content-center">
                                <div className="my-auto particles-parent">
                                  <div className="particles"></div>
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/v1601741549/OZEETY_IMAGES/assets/img/OZTG-gold-flashgroup-cryptostations.svg"
                                    alt=""
                                  />
                                  <h4 className="asset-pegged-coin">
                                    The Asset Pegged Coin
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* for the merchents */}
                      <div className="for-merchents">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-sm-12">
                              <h1 className="text-center merchant-heading">
                                FOR THE MERCHANTS
                              </h1>
                            </div>
                            <div className="col-sm-6"></div>
                          </div>

                          <div className="row mt-2 justify-content-center">
                            <div className="col-sm-11">
                              <div className="mp-parent">
                                <div className="merchant-perk">
                                  <span>
                                    <img
                                      className="location-img"
                                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1647000338/CRYPTOMONIAL/merchants/Location_towixr.png"
                                      alt=""
                                    />
                                  </span>
                                  <h4
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-delay="200"
                                    className="merchant-header"
                                  >
                                    Become a cryptocurrency local hub
                                  </h4>
                                  <div
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-delay="300"
                                  >
                                    Users will search through the FlashApp the
                                    nearest FLASHCRYPTOSTATION and bring more
                                    traffic to the merchant location.
                                  </div>
                                </div>

                                <div className="merchant-perk tr">
                                  <span>
                                    <img
                                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1647000339/CRYPTOMONIAL/merchants/vallet_vokaqc.png"
                                      alt=""
                                    />
                                  </span>
                                  <h4
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-delay="400"
                                    className="merchant-header"
                                  >
                                    Receive a lifetime % benefit
                                  </h4>
                                  <div
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-delay="600"
                                  >
                                    On all transactions made on the “Station”
                                    located in his business but also on every
                                    order of OZTCARD.
                                  </div>
                                </div>

                                <div className="merchant-perk">
                                  <span>
                                    <img
                                      className="loyalty-img"
                                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1647000339/CRYPTOMONIAL/merchants/The_Coin_aszqlv.png"
                                      alt=""
                                    />
                                  </span>
                                  <h4
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-delay="600"
                                    className="merchant-header"
                                  >
                                    Benefit from our loyalty program
                                  </h4>
                                  <div>
                                    <div
                                      data-aos="fade-up"
                                      data-aos-duration="900"
                                      data-aos-delay="900"
                                    >
                                      customers will be able to spend their
                                      loyalty points on your shop and you will
                                      also be able to give loyalty coin to your
                                      user if you subscribe to our services.
                                    </div>

                                    <div
                                      data-aos="fade-up"
                                      data-aos-duration="900"
                                      data-aos-delay="1200"
                                      className="mt-3"
                                    >
                                      Your users will be able to use those
                                      points to buy real live products and
                                      services because those points are tradable
                                      on the FLASHXCHANGER.
                                    </div>
                                  </div>
                                </div>

                                <div className="merchant-perk tr">
                                  <span>
                                    <img
                                      className="maintain-img"
                                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1647000338/CRYPTOMONIAL/merchants/Construction_F_oh7gyf.png"
                                      alt=""
                                    />
                                  </span>
                                  <h4
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-delay="800"
                                    className="merchant-header"
                                  >
                                    FLASHGROUP Maintenance
                                  </h4>
                                  <div
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-delay="1200"
                                  >
                                    All the maintenance will be handled by the
                                    FLASHGROUP.
                                  </div>
                                </div>

                                <div className="merchant-perk">
                                  <span>
                                    <img
                                      className="coins-img"
                                      src="https://res.cloudinary.com/sapiangroup/image/upload/v1647000338/CRYPTOMONIAL/merchants/coins_wnv7bd.png"
                                      alt=""
                                    />
                                  </span>
                                  <h4
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-delay="500"
                                    className="merchant-header"
                                  >
                                    Enabling the acceptance of cryptocurrencies
                                  </h4>
                                  <div
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                    data-aos-delay="400"
                                  >
                                    The merchant will be able to accept
                                    designated cryptos as means of payment on
                                    his shop and he will also be able to
                                    exchange it using FLASHGROUP ecosystem into
                                    Fiat currency and transfer it in his bank
                                    account instantly for free!
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    src="https://res.cloudinary.com/sapiangroup/image/upload/v1646592671/CRYPTOMONIAL/sapian-cryptomoni_nnpy9k.svg"
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
                    Offices in: Dubaï (UAE) ,Singapour, London/Liverpool (United
                    Kingdom) , Tallin (Estonia) and Luxembourg.
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
                      src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto,q_auto,w_100/v1603275601/sapian-group/medium_sapian-group.svg"
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
                      src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto,q_auto,w_100/v1603275729/sapian-group/fb_sapian-group.svg"
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
                      src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto,q_auto,w_100/v1603275877/sapian-group/twitter_sapian-group.svg"
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
                      src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto,q_auto,w_100/v1603275889/sapian-group/insta_sapian-group.svg"
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
                      src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto,q_auto,w_100/v1603275900/sapian-group/in_sapian-group.svg"
                      alt="linkedin"
                    ></img>
                  </a>
                  {/* <a class="mx-1" target="_blank" href="http://flashmoni.dribbble.com/"><img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto,q_auto,w_100/v1603275906/sapian-group/dribbble_sapian-group.svg"
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
    );
  }

  componentDidMount() {
    const slogan = document.querySelector(".slogan");

    const intro = document.querySelector("#intro-video");
    intro.playbackRate = 1.5;

    const navballs = document.querySelector(".nav-balls");

    const logo = document.querySelector(".logo-main");

    const skip = document.querySelector("#skip");

    setTimeout(() => {
      intro.classList.add("fade-intro");
      slogan.classList.add("fade-up");

      navballs.classList.add("lift-up");
      logo.classList.add("logo-show");
      skip.style.display = "none";
    }, 12000);

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      intro.classList.add("fade-intro");
      navballs.classList.add("lift-up");
      logo.classList.add("logo-show");
      skip.style.display = "none";

      setTimeout(() => {
        slogan.classList.add("fade-up");
      }, 2000);
    }

    const sclink = document.querySelector(".nav-ball-sapiangroup");
    const cslink = document.querySelector(".nav-ball-cryptostation");
    const oclink = document.querySelector(".nav-ball-oztcard");

    const csbg = document.querySelector("#cryptostation-intro");
    const scbg = document.querySelector("#sapian-capital-video");
    const ocbg = document.querySelector("#oztcard-video");

    const logosc = document.querySelector(".logo-sc");
    const logofc = document.querySelector(".logo-fc");

    // for sapian capital
    sclink.onmouseover = (e) => {
      scbg.style.opacity = 1;

      logo.style.opacity = 0;
      logofc.style.opacity = 0;
      logosc.style.opacity = 1;
    };
    sclink.onmouseleave = (e) => {
      scbg.style.opacity = 0;

      logo.style.opacity = 1;
      logofc.style.opacity = 0;
      logosc.style.opacity = 0;
    };

    // for cryptostation
    cslink.onmouseover = (e) => {
      csbg.style.opacity = 1;

      logo.style.opacity = 0;
      logosc.style.opacity = 0;
      logofc.style.opacity = 1;
    };
    cslink.onmouseleave = (e) => {
      csbg.style.opacity = 0;

      logo.style.opacity = 1;
      logosc.style.opacity = 0;
      logofc.style.opacity = 0;
    };

    // for oztcard
    oclink.onmouseover = (e) => {
      ocbg.style.opacity = 1;

      logo.style.opacity = 0;
      logofc.style.opacity = 0;
      logosc.style.opacity = 0;
    };
    oclink.onmouseleave = (e) => {
      ocbg.style.opacity = 0;

      logo.style.opacity = 1;
      logofc.style.opacity = 0;
      logosc.style.opacity = 0;
    };

    const slogans = Array.from(document.querySelectorAll(".cs-slogan"));

    setInterval(() => {
      const slogan = slogans.shift();
      slogan.style.opacity = 1;

      slogans.forEach((element) => {
        element.style.opacity = 0;
      });
      slogans.push(slogan);
    }, 4000);

    skip.onclick = (e) => {
      intro.classList.add("fade-intro");
      slogan.classList.add("fade-up");

      navballs.classList.add("lift-up");
      logo.classList.add("logo-show");
      skip.style.display = "none";
    };
  }
}
