import React from "react";
import { Link } from "react-scroll";
import Blocks from "./blocks";
import Next from "./next";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
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

        <div className="intro">
          <div className="skip">
            <button id="skip">skip intro</button>
          </div>
          <div className="intro-video">
            <video
              playsInline
              className="intro-video tunnel"
              src="https://res.cloudinary.com/sapiangroup/video/upload/v1648403448/CRYPTOMONIAL/sapian-cryptomonial-bg_xsq2eu.mp4"
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
            src="https://res.cloudinary.com/sapiangroup/video/upload/f_auto/v1646588915/CRYPTOMONIAL/Particles_-_10848_czpvl4.mp4"
            autoPlay
            muted
          ></video>
          <video
            playsInline
            className="intro-video sapina-capital-video"
            id="sapian-capital-video"
            src="https://res.cloudinary.com/sapiangroup/video/upload/f_auto/v1646694111/CRYPTOMONIAL/cryotomonial_d1z46v.mp4"
            autoPlay
            muted
            loop
          ></video>
          <video
            playsInline
            className="intro-video oztcard-video"
            id="oztcard-video"
            src="https://res.cloudinary.com/sapiangroup/video/upload/f_auto/v1646692680/CRYPTOMONIAL/oztcard_s0g6uf.mov"
            autoPlay
            muted
            loop
          ></video>

          <img
            className="intro-video cryptostation-intro-image"
            src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1648564910/CRYPTOMONIAL/cryptostations/cs_4x_evfv5d.png"
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
                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647005903/CRYPTOMONIAL/merchants/sapian_cmxiod.svg"
                    alt="sapian cryptomonial"
                  />
                </div>
                <div className="cryptomonial">
                  <img
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    data-aos-delay="600"
                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647005903/CRYPTOMONIAL/merchants/cryptomonial_zl6nyq.svg"
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
                src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646826005/CRYPTOMONIAL/Sapian_group_logo_so1hkw.svg"
                alt="sapian capital"
              />
            </div>
            <div className="logo logo-fc">
              <img
                data-aos="fade-in"
                data-aos-duration="900"
                src="https://res.cloudinary.com/sapiangroup/image/upload/v1648402970/CRYPTOMONIAL/cryptostations/FLASH-CRYPTOSTATION_jpwhg2.svg"
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
          {/* <video
            playsInline
            id="globe-video"
            src="https://res.cloudinary.com/sapiangroup/video/upload/f_auto/v1646686010/CRYPTOMONIAL/Abstract_-_26011_tltwuj.mp4"
            autoPlay
            muted
            loop
          ></video> */}
          <div className="container what-is">
            <div className="row justify-content-center">
              <div className="col col-md-6 my-auto">
                <h4 data-aos="fade-up" data-aos-duration="800">
                  WHAT IS
                </h4>
                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  CRYPTOMONIAL ENINEERING?
                </h1>
                {/* <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="600"></h1> */}
                <div
                  className="d-block d-md-none"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <img
                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/w_auto,q_auto,f_auto/v1648368930/CRYPTOMONIAL/bub_xdebbc.png"
                    alt=""
                  />
                </div>
                <p
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  className="ce-desc"
                >
                  Cryptomonial Engineering is new approach to catalyze the
                  uncontrollable additional wealth created by crypto-asset
                  owners with a 360’ crypto-finance solution.
                </p>
              </div>

              <div className="col-md-6">
                <div
                  className="d-none d-md-block"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <img
                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/w_auto,q_auto,f_auto/v1648368930/CRYPTOMONIAL/bub_xdebbc.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="solutions"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <div className="container sol-pannel">
            <h1 className="mb-5">Our Solutions</h1>
            {/* (or some itroduction that suites for the heading) */}
            <div className="row">
              {/* cryptostations */}
              <div className="col-sm-4">
                <Link to="cryptostations">
                  <div
                    className="solution cs"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  ></div>
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
                >
                  <span className="d-none">oztcard</span>
                </a>
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
                >
                  <span className="d-none">sapian capital</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* cryptostations */}
        <div className="sections-parent">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="sections">
                  {/* <h4>
                  Cryptomonial engineering-wealth creating through distruption
                </h4> */}

                  <div className="section">
                    <div className="cryptostations" id="cryptostations">
                      <h1 className="text-center">
                        THE{" "}
                        <span className="the-cryptostation">CRYPTOSTATION</span>{" "}
                        BY{" "}
                        <span>
                          <img
                            className="by-flash"
                            src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646733137/CRYPTOMONIAL/flash_lwxjmz.svg"
                            alt="FLASH"
                          />
                        </span>
                      </h1>
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
                                <div
                                  data-aos="fade-right"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647102333/CRYPTOMONIAL/cryptostations/poster3_wgv67i.jpg"
                                    alt=""
                                  />
                                </div>
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1646735824/CRYPTOMONIAL/cryptostations/cryptostation-2_nzmozw.png"
                                    alt=""
                                  />
                                </div>
                                <div
                                  data-aos="fade-left"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647102333/CRYPTOMONIAL/cryptostations/poster4_jpta4l.jpg"
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

                            <div className="col-sm-6 mt-5">
                              <h4
                                data-aos="fade-down"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                              >
                                ENABLE EASY ACCESS, NO ENTRY BARRIERS!
                              </h4>
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

                              <div className="blockchains d-block d-md-none">
                                <Blocks></Blocks>
                              </div>

                              <p
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="600"
                              >
                                Our Mainstream Audience Has No Credit Or Debit
                                Card Neither Bank Account. So By Accepting
                                Payment By Mobile, Cash, Debit Card Or
                                Cryptocurrency, We Are Enabling Widely The
                                Access To Our Solution Throughout Our Hardware
                                Device“FLASHCRYPTOSTATION”.
                              </p>
                              <p
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="900"
                              >
                                Users Will Be Able To Buy Any Cryptocurrency
                                Against Designated Fiat And Vice-Versa.
                              </p>
                            </div>

                            <div className="col-md-5">
                              <div className="blockchains d-none d-md-block">
                                {/* <img src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1648372155/CRYPTOMONIAL/block_1_2x_ydwbpe.png" alt="" />
                                <img src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1648371911/CRYPTOMONIAL/block_2x_sc45y2.png" alt="" /> */}

                                <Blocks></Blocks>
                              </div>
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
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647091111/ozt-card/new-gold-oztcard_4x_rot7zm.png"
                                    alt="gold oztcard"
                                  />
                                </div>

                                <div
                                  className="oztcard-image"
                                  data-aos="fade-left"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647091111/ozt-card/new-standard-oztcard_4x_flij9l.png"
                                    alt="standard oztcard"
                                  />
                                </div>

                                <div
                                  className="oztcard-image"
                                  data-aos="fade-left"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647091111/ozt-card/new-silver-oztcard_4x_vnca98.png"
                                    alt="premium oztcard"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-5">
                              <h4
                                data-aos="fade-down"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                              >
                                OZTCARD COLLECTION POINT
                              </h4>
                              <p data-aos="fade-left" data-aos-duration="1200">
                                People who don't have a fixed address can order
                                their <span className="strong">OZTCARD</span> in
                                the nearest FLASHCRYPTOSTATION location point
                                (mall, Airport, merchants, etc...) and pick it
                                up once the card is ready or collect it up from
                                another location.
                              </p>

                              <p
                                className="mt-3"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                              >
                                People will be able to just fill it in with
                                designated fiat currencies. Withdraw money using
                                the OZTCARD, will be possible from a regular ATM
                                device.
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
                                <h4
                                  data-aos="fade-down"
                                  data-aos-duration="1200"
                                  data-aos-delay="300"
                                >
                                  FAIR REMITTANCE SERVICE
                                </h4>

                                <div className="col-sm-12 d-block d-md-none">
                                  <div className="h-100 d-flex justify-content-center">
                                    <div className="my-auto particles-parent">
                                      <img
                                        src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1601741549/OZEETY_IMAGES/assets/img/OZTG-gold-flashgroup-cryptostations.svg"
                                        alt=""
                                      />
                                      <h4 className="asset-pegged-coin">
                                        The Asset Pegged Coin
                                      </h4>
                                    </div>
                                  </div>
                                </div>

                                <p
                                  data-aos="fade-up"
                                  data-aos-duration="1200"
                                  data-aos-delay="300"
                                >
                                  Use the{" "}
                                  <span className="strong">CRYPTOSTATION</span>{" "}
                                  to send remittances using our unify
                                  transactional utility coin “OZTG”{" "}
                                  <span>
                                    <img
                                      className="oztg-coin"
                                      src="https://res.cloudinary.com/dmeppscpx/image/upload/f_auto/v1619874803/flashxchanger/OZTG_vwr5kt.svg"
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
                                    src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1601741549/OZEETY_IMAGES/assets/img/OZTG-gold-flashgroup-cryptostations.svg"
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
                      <div className="for-merchents-h">
                        <h1 data-aos="fade-up" data-aos-duration="1200">
                          FOR THE MERCHANTS
                        </h1>
                      </div>
                      <div
                        className="for-merchents"
                        data-aos="fade-down"
                        data-aos-duration="1200"
                      >
                        <div className="slider-parent">
                          <div className="slides">
                            {/* 5 */}
                            <div className="slide">
                              <div className="merc-img">
                                <img
                                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647000338/CRYPTOMONIAL/merchants/coins_wnv7bd.png"
                                  alt=""
                                />
                              </div>
                              <div className="merc-header">
                                <h2>
                                  Enabling the acceptance of cryptocurrencies
                                </h2>
                              </div>

                              <div className="merc-p">
                                <p>
                                  The merchant will be able to accept designated
                                  cryptos as means of payment on his shop and he
                                  will also be able to exchange it using
                                  FLASHGROUP ecosystem into Fiat currency and
                                  transfer it in his bank account instantly for
                                  free!
                                </p>
                              </div>
                            </div>
                            {/* 4 */}
                            <div className="slide">
                              <div className="merc-img">
                                <img
                                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647000338/CRYPTOMONIAL/merchants/Construction_F_oh7gyf.png"
                                  alt=""
                                />
                              </div>
                              <div className="merc-header">
                                <h2>FLASHGROUP Maintenance</h2>
                              </div>

                              <div className="merc-p">
                                <p>
                                  All the maintenance will be handled by the
                                  FLASHGROUP.
                                </p>
                              </div>
                            </div>
                            {/* 3 */}
                            <div className="slide">
                              <div className="merc-img">
                                <img
                                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647000339/CRYPTOMONIAL/merchants/The_Coin_aszqlv.png"
                                  alt=""
                                />
                              </div>
                              <div className="merc-header">
                                <h2>Benefit from our loyalty program</h2>
                              </div>

                              <div className="merc-p">
                                <p>
                                  customers will be able to spend their loyalty
                                  points on your shop and you will also be able
                                  to give loyalty coin to your user if you
                                  subscribe to our services. Your users will be
                                  able to use those points to buy real live
                                  products and services because those points are
                                  tradable on the FLASHXCHANGER.
                                </p>
                              </div>
                            </div>
                            {/* 2 */}
                            <div className="slide">
                              <div className="merc-img">
                                <img
                                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647000339/CRYPTOMONIAL/merchants/vallet_vokaqc.png"
                                  alt=""
                                />
                              </div>
                              <div className="merc-header">
                                <h2>Receive a lifetime % benefit</h2>
                              </div>

                              <div className="merc-p">
                                <p>
                                  On all transactions made on the “Station”
                                  located in his business but also on every
                                  order of OZTCARD.
                                </p>
                              </div>
                            </div>
                            {/* 1 */}
                            <div className="slide">
                              <div className="merc-img">
                                <img
                                  src="https://res.cloudinary.com/sapiangroup/image/upload/f_auto/v1647000338/CRYPTOMONIAL/merchants/Location_towixr.png"
                                  alt=""
                                />
                              </div>
                              <div className="merc-header">
                                <h2>Become a cryptocurrency local hub</h2>
                              </div>

                              <div className="merc-p">
                                <p>
                                  Users will search through the FlashApp the
                                  nearest FLASHCRYPTOSTATION and bring more
                                  traffic to the merchant location.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="next">
                            <button>
                              <Next></Next>
                            </button>
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

    // for merc
    const slides = Array.from(document.querySelectorAll(".slide"));
    console.log(slides[1]);
    const next = document.querySelector(".next");
    let i = slides.length - 1;
    next.onclick = (e) => {
      slides[i--].classList.toggle("slide-left");
      if (i < 0) {
        i = slides.length - 1;
        slides.forEach((slide) => {
          slide.classList.remove("slide-left");
        });
      }
    };
  }
}
