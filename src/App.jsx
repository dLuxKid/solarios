import "./App.css";

import herosectionStyle from "./styles/herosection.module.css";
import aboutUs from "./styles/about-us.module.css";

import Navbar from "./components/navbar";

import logo from "./img/solarios-icon.svg";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import Footer from "./components/footer";

function App() {
  return (
    <main>
      <section className={herosectionStyle.herosection}>
        <Navbar />
        <div className={herosectionStyle.container}>
          <div className={herosectionStyle.wrapper}>
            <h1>Creating sustainable and energy-efficient buildings</h1>
            <p>
              Designing and building both functional and environmentally
              friendly structures
            </p>
            <div>
              <button title="contact us" type="button" className="cta-btn">
                Contact us
              </button>
              <button
                title="view projects"
                type="button"
                className={herosectionStyle["view-project-btn"]}
              >
                View Project
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M6.5625 6.50384V23.496C6.5625 24.5179 7.55859 25.1671 8.37891 24.6773L22.9043 15.9837C23.6145 15.5589 23.6145 14.4409 22.9043 14.0161L8.37891 5.32259C7.55859 4.83274 6.5625 5.48196 6.5625 6.50384Z"
                      stroke="white"
                      strokeWidth="1.875"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={herosectionStyle.information}>
          <div>
            <h3>9+</h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <h3>123</h3>
            <p>Successful projects</p>
          </div>
          <div>
            <h3>20</h3>
            <p>Projects in progress</p>
          </div>
          <div>
            <h3>500</h3>
            <p>Happy customers</p>
          </div>
        </div>
      </section>
      <section className={aboutUs["about-us-container"]} id="#about">
        <div className={aboutUs["who-are-we"]}>
          <div className={aboutUs["arrow-down"]}>
            <span>
              <svg
                width="18"
                height="91"
                viewBox="0 0 18 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector 2"
                  d="M9 91L17.6603 76H0.339746L9 91ZM7.5 0V2.84375H10.5V0H7.5ZM7.5 8.53125V14.2188H10.5V8.53125H7.5ZM7.5 19.9062V25.5938H10.5V19.9062H7.5ZM7.5 31.2812V36.9688H10.5V31.2812H7.5ZM7.5 42.6562V48.3438H10.5V42.6562H7.5ZM7.5 54.0312V59.7188H10.5V54.0312H7.5ZM7.5 65.4062V71.0938H10.5V65.4062H7.5ZM7.5 76.7812V82.4688H10.5V76.7812H7.5Z"
                  fill="#487145"
                />
              </svg>
            </span>
          </div>
          <div className={aboutUs.title}>
            <h1>Who are we</h1>
          </div>
          <div className={aboutUs.body}>
            <p>
              Solarios is an architectural and construction company that
              specializes in creating sustainable and energy-efficient
              buildings. We believe that architecture should not only be
              beautiful but also have a positive impact on the environment.
              Founded by a team of passionate architects and engineers, Solarios
              is committed to using cutting-edge technology and innovative
              design techniques to create both functional and environmentally
              friendly buildings We work closely with our clients to understand
              their needs and create customized solutions that meet their
              specific requirements. Our team has a wealth of experience in
              designing and building a wide range of projects, including
              residential, commercial, and industrial buildings. We have a
              proven track record of delivering projects on time and within
              budget, and our clients are always impressed with our high-quality
              work.
            </p>

            <div className={aboutUs["img-container"]}>
              <div className={aboutUs["bg-svg"]}>
                <img src={logo} alt="bg-logo" />
              </div>
              <div className={aboutUs["img-child-wrapper"]}>
                <div>
                  <img src={img1} />
                </div>
                <div>
                  <img src={img3} />
                </div>
              </div>
              <div className={aboutUs["first-img"]}>
                <img src={img2} />
              </div>
              <div className={aboutUs["second-img"]}>
                <img src={img4} />
              </div>
            </div>
          </div>
        </div>
        <div className={aboutUs["what-we-offer"]}>
          <div className={aboutUs["arrow-down"]}>
            <span>
              <svg
                width="18"
                height="91"
                viewBox="0 0 18 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector 2"
                  d="M9 91L17.6603 76H0.339746L9 91ZM7.5 0V2.84375H10.5V0H7.5ZM7.5 8.53125V14.2188H10.5V8.53125H7.5ZM7.5 19.9062V25.5938H10.5V19.9062H7.5ZM7.5 31.2812V36.9688H10.5V31.2812H7.5ZM7.5 42.6562V48.3438H10.5V42.6562H7.5ZM7.5 54.0312V59.7188H10.5V54.0312H7.5ZM7.5 65.4062V71.0938H10.5V65.4062H7.5ZM7.5 76.7812V82.4688H10.5V76.7812H7.5Z"
                  fill="#487145"
                />
              </svg>
            </span>
          </div>
          <div className={aboutUs.title}>
            <h1>What we Offer</h1>
          </div>
          <div className={aboutUs.body}>
            <div className={aboutUs["offer-card"]}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M29.1663 41.6668V91.6668M62.4997 24.5002L58.333 41.6668H82.6247C83.9184 41.6668 85.1943 41.968 86.3514 42.5466C87.5086 43.1252 88.5151 43.9652 89.2913 45.0002C90.0676 46.0351 90.5922 47.2366 90.8236 48.5094C91.055 49.7823 90.9869 51.0915 90.6247 52.3335L80.9163 85.6668C80.4115 87.3978 79.3588 88.9183 77.9163 90.0002C76.4739 91.082 74.7194 91.6668 72.9163 91.6668H16.6663C14.4562 91.6668 12.3366 90.7889 10.7738 89.226C9.21098 87.6632 8.33301 85.5436 8.33301 83.3335V50.0002C8.33301 47.79 9.21098 45.6704 10.7738 44.1076C12.3366 42.5448 14.4562 41.6668 16.6663 41.6668H28.1663C29.7167 41.666 31.2361 41.2327 32.5537 40.4157C33.8712 39.5986 34.9348 38.4302 35.6247 37.0418L49.9997 8.3335C51.9646 8.35783 53.8986 8.82587 55.6572 9.70265C57.4158 10.5794 58.9535 11.8423 60.1555 13.3968C61.3575 14.9514 62.1927 16.7575 62.5986 18.6802C63.0045 20.6028 62.9707 22.5924 62.4997 24.5002Z"
                    stroke="white"
                    strokeWidth="8.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>Quality service & product</h3>
            </div>
            <div className={aboutUs["offer-card"]}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M16.6663 25.4166C13.6673 25.4935 13.6674 25.4947 13.6674 25.496L13.6675 25.4993L13.6677 25.5081L13.6685 25.5346C13.6692 25.5561 13.6702 25.5854 13.6716 25.6222C13.6743 25.6958 13.6787 25.7994 13.6853 25.931C13.6985 26.194 13.7208 26.569 13.7578 27.0387C13.8316 27.9771 13.9644 29.2993 14.2014 30.8655C14.6722 33.9768 15.5687 38.1498 17.2894 42.2118C19.0017 46.2541 21.6281 50.4163 25.6924 53.2033C29.8565 56.0587 35.2151 57.2528 41.8677 55.8523L42.833 55.649V70.8333V72.2963C34.588 72.9569 26.7527 74.6221 20.5809 76.2679C16.596 77.3306 13.2733 78.3936 10.9408 79.1934C9.77392 79.5934 8.85325 79.9281 8.21962 80.1647C7.90276 80.283 7.65755 80.3768 7.48908 80.442C7.40484 80.4746 7.33978 80.5001 7.29453 80.5179L7.24159 80.5388L7.22641 80.5448L7.22167 80.5467L7.22001 80.5474C7.21938 80.5476 7.21884 80.5479 8.33301 83.3333L7.21884 80.5479L5.33301 81.3022V83.3333V91.6666V94.6666H8.33301H91.6664H94.6664V91.6666V83.3333V81.3022L92.7805 80.5479L91.6664 83.3333C92.7805 80.5479 92.78 80.5476 92.7793 80.5474L92.7777 80.5467L92.7729 80.5448L92.7578 80.5388L92.7048 80.5179C92.6596 80.5001 92.5945 80.4746 92.5103 80.442C92.3418 80.3768 92.0966 80.283 91.7797 80.1647C91.1461 79.9281 90.2254 79.5934 89.0586 79.1934C86.7261 78.3936 83.4034 77.3306 79.4185 76.2679C73.2467 74.6221 65.4113 72.9569 57.1663 72.2963V70.8333V56.6483L58.0345 56.7351C66.0811 57.5397 72.3463 55.3746 77.0893 51.5125C81.7473 47.7195 84.7303 42.4628 86.6597 37.3637C88.596 32.2465 89.5484 27.0834 90.0215 23.2374C90.2592 21.3052 90.3786 19.6833 90.4386 18.5365C90.4687 17.9627 90.4839 17.5064 90.4917 17.1882C90.4955 17.0291 90.4976 16.9044 90.4986 16.8166C90.4991 16.7727 90.4994 16.7381 90.4995 16.713L90.4997 16.6825L90.4997 16.6727L90.4997 16.6692C90.4997 16.6678 90.4997 16.6666 87.4997 16.6666M16.6663 25.4166C16.2285 22.4488 16.2295 22.4486 16.2306 22.4484L16.2334 22.448L16.2407 22.447L16.2623 22.4439L16.3328 22.434C16.3918 22.426 16.4746 22.415 16.5797 22.4018C16.7899 22.3754 17.0899 22.3403 17.4684 22.3023C18.2246 22.2263 19.2978 22.1385 20.5969 22.087C23.1828 21.9843 26.7229 22.0227 30.4642 22.609C35.7283 23.434 41.95 25.4559 46.1487 30.1951C50.3725 20.8504 59.6637 16.6452 67.8956 14.8307C73.0172 13.7018 77.9862 13.4195 81.6478 13.4127C83.4861 13.4093 85.0131 13.4754 86.0884 13.5432C86.6264 13.5771 87.0525 13.6114 87.3491 13.6379C87.4974 13.6512 87.6135 13.6624 87.6951 13.6707C87.7237 13.6736 87.748 13.6761 87.7681 13.6782L87.7915 13.6807L87.8198 13.6837L87.8289 13.6847L87.8322 13.6851C87.8335 13.6853 87.8346 13.6854 87.4997 16.6666M16.6663 25.4166L13.6673 25.4935L13.5992 22.8367L16.2285 22.4488L16.6663 25.4166ZM87.4997 16.6666L87.8346 13.6854L90.4997 13.9848V16.6666H87.4997Z"
                    stroke="white"
                    strokeWidth="6"
                  />
                </svg>
              </span>
              <h3>Environmental safety</h3>
            </div>
            <div className={aboutUs["offer-card"]}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M78.51 50.57C73.9 48.71 67.35 47.5 60 47.5V42.5C67.835 42.5 75.04 43.78 80.38 45.935C83.045 47.015 85.37 48.355 87.065 49.98C88.765 51.605 90 53.68 90 56.11C90 58.545 88.77 60.615 87.065 62.245C85.365 63.865 83.045 65.21 80.38 66.285C75.04 68.445 67.83 69.72 60 69.72C52.165 69.72 44.96 68.445 39.62 66.285C36.955 65.21 34.63 63.865 32.935 62.245C31.235 60.615 30 58.545 30 56.11H35C35 56.745 35.31 57.595 36.39 58.63C37.475 59.665 39.18 60.715 41.49 61.65C46.105 63.515 52.645 64.72 60 64.72C67.35 64.72 73.9 63.515 78.51 61.65C80.82 60.715 82.525 59.665 83.61 58.63C84.69 57.595 85 56.745 85 56.11C85 55.475 84.69 54.625 83.61 53.595C82.525 52.555 80.82 51.5 78.51 50.57Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32.5 55.835C33.163 55.835 33.7989 56.0984 34.2678 56.5672C34.7366 57.036 35 57.6719 35 58.335V73.885C35 74.525 35.31 75.375 36.39 76.405C37.475 77.445 39.18 78.495 41.49 79.43C46.105 81.29 52.645 82.5 60 82.5C67.35 82.5 73.9 81.29 78.51 79.43C80.82 78.495 82.525 77.445 83.61 76.405C84.69 75.375 85 74.525 85 73.89V58.335C85 57.6719 85.2634 57.036 85.7322 56.5672C86.2011 56.0984 86.837 55.835 87.5 55.835C88.163 55.835 88.7989 56.0984 89.2678 56.5672C89.7366 57.036 90 57.6719 90 58.335V73.885C90 76.325 88.77 78.395 87.065 80.02C85.365 81.645 83.045 82.985 80.38 84.065C75.04 86.22 67.83 87.5 60 87.5C52.165 87.5 44.96 86.22 39.62 84.065C36.955 82.99 34.63 81.645 32.935 80.02C31.235 78.395 30 76.32 30 73.89V58.335C30 57.6719 30.2634 57.036 30.7322 56.5672C31.2011 56.0984 31.837 55.835 32.5 55.835Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.5 83.63V65H48.5V83.63H43.5ZM65.5 82.5V67.5H70.5V82.5H65.5ZM11.39 23.595C10.31 24.625 10 25.475 10 26.11C10 26.745 10.31 27.595 11.39 28.63C12.475 29.665 14.18 30.715 16.49 31.65C21.105 33.515 27.645 34.72 35 34.72C42.35 34.72 48.9 33.515 53.51 31.65C55.82 30.715 57.525 29.665 58.61 28.63C59.69 27.595 60 26.745 60 26.11C60 25.475 59.69 24.625 58.61 23.595C57.525 22.555 55.82 21.505 53.51 20.57C48.895 18.71 42.35 17.5 35 17.5C27.65 17.5 21.1 18.71 16.49 20.57C14.18 21.505 12.475 22.555 11.39 23.595ZM14.62 15.935C19.96 13.78 27.17 12.5 35 12.5C42.835 12.5 50.04 13.78 55.38 15.935C58.045 17.015 60.37 18.355 62.065 19.98C63.765 21.605 65 23.68 65 26.11C65 28.545 63.77 30.615 62.065 32.245C60.365 33.865 58.045 35.21 55.38 36.285C50.04 38.445 42.83 39.72 35 39.72C27.165 39.72 19.96 38.445 14.62 36.285C11.955 35.21 9.63 33.865 7.935 32.245C6.235 30.615 5 28.545 5 26.11C5 23.68 6.23 21.61 7.935 19.98C9.635 18.355 11.955 17.015 14.62 15.935Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 25.835C8.16304 25.835 8.79893 26.0984 9.26777 26.5672C9.73661 27.036 10 27.6719 10 28.335V43.885C10 44.525 10.31 45.375 11.39 46.405C12.475 47.445 14.18 48.495 16.49 49.43C21.105 51.29 27.645 52.5 35 52.5C42.35 52.5 48.9 51.29 53.51 49.43C55.82 48.495 57.525 47.445 58.61 46.405C59.69 45.375 60 44.525 60 43.89V28.335C60 27.6719 60.2634 27.036 60.7322 26.5672C61.2011 26.0984 61.837 25.835 62.5 25.835C63.163 25.835 63.7989 26.0984 64.2678 26.5672C64.7366 27.036 65 27.6719 65 28.335V43.885C65 46.325 63.77 48.395 62.065 50.02C60.365 51.645 58.045 52.99 55.38 54.065C50.04 56.22 42.83 57.5 35 57.5C27.165 57.5 19.96 56.22 14.62 54.065C11.955 52.985 9.63 51.645 7.935 50.02C6.235 48.4 5 46.32 5 43.89V28.335C5 27.6719 5.26339 27.036 5.73223 26.5672C6.20107 26.0984 6.83696 25.835 7.5 25.835Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5 52.4999V35.5649H23.5V52.4999H18.5ZM40.5 52.4999V37.4999H45.5V52.4999H40.5Z"
                    fill="white"
                  />
                </svg>
              </span>
              <h3>Affordable packages</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
