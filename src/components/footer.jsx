import styles from "../styles/footer.module.css";
import Icon from "./icon";

export default function Footer() {
  return (
    <footer>
      <div className={styles["top-info"]}>
        <div className={styles.about}>
          <Icon />
          <p>
            Creating sustainable and energy-efficient buildings. We believe that
            architecture should not only be beautiful but also have a positive
            impact on the environment.
          </p>
        </div>
        <div className={styles["navigation-container"]}>
          <div className={styles.link}>
            <p>Links</p>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Projects</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className={styles.link}>
            <p>Support</p>
            <ul>
              <li>How we work</li>
              <li>FAQs</li>
              <li>Pricing</li>
              <li>Features</li>
            </ul>
          </div>
          <div className={styles.link}>
            <p>Follow us</p>
            <ul>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M25.5875 2.49993H4.41251C4.17449 2.49662 3.93814 2.54024 3.71697 2.62829C3.4958 2.71633 3.29414 2.84708 3.12351 3.01307C2.95288 3.17906 2.81661 3.37704 2.7225 3.59569C2.62839 3.81435 2.57827 4.0494 2.57501 4.28743V25.7124C2.57827 25.9505 2.62839 26.1855 2.7225 26.4042C2.81661 26.6228 2.95288 26.8208 3.12351 26.9868C3.29414 27.1528 3.4958 27.2835 3.71697 27.3716C3.93814 27.4596 4.17449 27.5032 4.41251 27.4999H25.5875C25.8255 27.5032 26.0619 27.4596 26.2831 27.3716C26.5042 27.2835 26.7059 27.1528 26.8765 26.9868C27.0471 26.8208 27.1834 26.6228 27.2775 26.4042C27.3716 26.1855 27.4218 25.9505 27.425 25.7124V4.28743C27.4218 4.0494 27.3716 3.81435 27.2775 3.59569C27.1834 3.37704 27.0471 3.17906 26.8765 3.01307C26.7059 2.84708 26.5042 2.71633 26.2831 2.62829C26.0619 2.54024 25.8255 2.49662 25.5875 2.49993ZM10.1125 23.4249H6.36251V12.1749H10.1125V23.4249ZM8.23751 10.5999C7.72034 10.5999 7.22435 10.3945 6.85865 10.0288C6.49296 9.66309 6.28751 9.1671 6.28751 8.64993C6.28751 8.13276 6.49296 7.63677 6.85865 7.27107C7.22435 6.90538 7.72034 6.69993 8.23751 6.69993C8.51213 6.66879 8.79023 6.696 9.05361 6.77978C9.31698 6.86357 9.55969 7.00204 9.76583 7.18613C9.97198 7.37022 10.1369 7.59578 10.2499 7.84803C10.3628 8.10029 10.4212 8.37355 10.4212 8.64993C10.4212 8.92631 10.3628 9.19957 10.2499 9.45183C10.1369 9.70408 9.97198 9.92964 9.76583 10.1137C9.55969 10.2978 9.31698 10.4363 9.05361 10.5201C8.79023 10.6039 8.51213 10.6311 8.23751 10.5999ZM23.6375 23.4249H19.8875V17.3874C19.8875 15.8749 19.35 14.8874 17.9875 14.8874C17.5658 14.8905 17.1552 15.0228 16.8111 15.2664C16.4669 15.51 16.2056 15.8533 16.0625 16.2499C15.9647 16.5437 15.9223 16.8531 15.9375 17.1624V23.4124H12.1875V12.1624H15.9375V13.7499C16.2782 13.1588 16.7736 12.6718 17.3706 12.3414C17.9675 12.011 18.6432 11.8497 19.325 11.8749C21.825 11.8749 23.6375 13.4874 23.6375 16.9499V23.4249Z"
                      fill="#F2F3ED"
                    />
                  </svg>
                </span>
                Linkedin
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M27.5 7.25002C26.5604 7.65764 25.5668 7.9271 24.55 8.05002C25.6227 7.40917 26.4266 6.401 26.8125 5.21252C25.8044 5.8126 24.701 6.23539 23.55 6.46252C22.7807 5.62823 21.7562 5.07289 20.6373 4.88358C19.5183 4.69428 18.3682 4.88172 17.3672 5.4165C16.3663 5.95129 15.5712 6.80318 15.1066 7.83856C14.6419 8.87394 14.5341 10.0343 14.8 11.1375C12.7618 11.0344 10.7681 10.5037 8.94832 9.57984C7.12859 8.65598 5.52356 7.35963 4.2375 5.77502C3.78642 6.56273 3.5494 7.4548 3.55 8.36252C3.5484 9.2055 3.75527 10.0358 4.15219 10.7795C4.54912 11.5232 5.12377 12.1572 5.825 12.625C5.00997 12.6028 4.21236 12.3841 3.5 11.9875V12.05C3.50611 13.2311 3.91999 14.3739 4.67164 15.285C5.42329 16.1961 6.46657 16.8196 7.625 17.05C7.17907 17.1857 6.71609 17.2573 6.25 17.2625C5.92736 17.2587 5.60553 17.2295 5.2875 17.175C5.61739 18.191 6.25578 19.0789 7.11384 19.7152C7.97191 20.3515 9.00697 20.7045 10.075 20.725C8.2715 22.1441 6.04485 22.9186 3.75 22.925C3.33217 22.9264 2.91467 22.9013 2.5 22.85C4.84304 24.3628 7.57352 25.1659 10.3625 25.1625C12.2871 25.1825 14.1964 24.8188 15.9789 24.0926C17.7614 23.3664 19.3813 22.2924 20.744 20.9331C22.1067 19.5739 23.185 17.9568 23.9157 16.1762C24.6464 14.3955 25.015 12.4872 25 10.5625V9.90002C25.9809 9.16853 26.8268 8.2718 27.5 7.25002Z"
                      fill="#F2F3ED"
                    />
                  </svg>
                </span>
                Twitter
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M20 8.75C20 8.41848 20.1317 8.10054 20.3661 7.86612C20.6005 7.6317 20.9185 7.5 21.25 7.5C21.5815 7.5 21.8995 7.6317 22.1339 7.86612C22.3683 8.10054 22.5 8.41848 22.5 8.75C22.5 9.08152 22.3683 9.39946 22.1339 9.63388C21.8995 9.8683 21.5815 10 21.25 10C20.9185 10 20.6005 9.8683 20.3661 9.63388C20.1317 9.39946 20 9.08152 20 8.75Z"
                      fill="#F2F3ED"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 9.0625C13.4253 9.0625 11.9151 9.68806 10.8016 10.8016C9.68806 11.9151 9.0625 13.4253 9.0625 15C9.0625 16.5747 9.68806 18.0849 10.8016 19.1984C11.9151 20.3119 13.4253 20.9375 15 20.9375C16.5747 20.9375 18.0849 20.3119 19.1984 19.1984C20.3119 18.0849 20.9375 16.5747 20.9375 15C20.9375 13.4253 20.3119 11.9151 19.1984 10.8016C18.0849 9.68806 16.5747 9.0625 15 9.0625ZM10.9375 15C10.9375 13.9226 11.3655 12.8892 12.1274 12.1274C12.8892 11.3655 13.9226 10.9375 15 10.9375C16.0774 10.9375 17.1108 11.3655 17.8726 12.1274C18.6345 12.8892 19.0625 13.9226 19.0625 15C19.0625 16.0774 18.6345 17.1108 17.8726 17.8726C17.1108 18.6345 16.0774 19.0625 15 19.0625C13.9226 19.0625 12.8892 18.6345 12.1274 17.8726C11.3655 17.1108 10.9375 16.0774 10.9375 15Z"
                      fill="#F2F3ED"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.5722 3.54093C17.2039 3.05667 12.7955 3.05667 8.4272 3.54093C5.9122 3.82218 3.88095 5.80343 3.58595 8.33093C3.0677 12.7617 3.0677 17.2377 3.58595 21.6684C3.88095 24.1959 5.91095 26.1772 8.4272 26.4584C12.7955 26.9422 17.2039 26.9422 21.5722 26.4584C24.0872 26.1772 26.1185 24.1959 26.4135 21.6684C26.9318 17.2377 26.9318 12.7617 26.4135 8.33093C26.1185 5.80343 24.0885 3.82218 21.5722 3.54093ZM8.6347 5.40343C12.8651 4.93452 17.1343 4.93452 21.3647 5.40343C23.0272 5.59093 24.3585 6.90218 24.5522 8.54968C25.0534 12.8351 25.0534 17.1643 24.5522 21.4497C24.452 22.256 24.0829 23.005 23.5045 23.5756C22.9261 24.1463 22.1723 24.5053 21.3647 24.5947C17.1343 25.0636 12.8651 25.0636 8.6347 24.5947C7.82713 24.5053 7.07327 24.1463 6.4949 23.5756C5.91653 23.005 5.54742 22.256 5.4472 21.4497C4.94601 17.1643 4.94601 12.8351 5.4472 8.54968C5.54742 7.74337 5.91653 6.9944 6.4949 6.42374C7.07327 5.85308 7.82713 5.49281 8.6347 5.40343Z"
                      fill="#F2F3ED"
                    />
                  </svg>
                </span>
                Instagram
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z"
                      fill="#F2F3ED"
                    />
                  </svg>
                </span>
                Facebook
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles["bottom-info"]}>
        <h3>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.35449 13.0003C1.35449 6.56858 6.56858 1.35449 13.0003 1.35449C19.4321 1.35449 24.6462 6.56858 24.6462 13.0003C24.6462 19.4321 19.4321 24.6462 13.0003 24.6462C6.56858 24.6462 1.35449 19.4321 1.35449 13.0003ZM13.0003 2.97949C10.3426 2.97949 7.7938 4.03526 5.91453 5.91453C4.03526 7.7938 2.97949 10.3426 2.97949 13.0003C2.97949 15.658 4.03526 18.2069 5.91453 20.0861C7.7938 21.9654 10.3426 23.0212 13.0003 23.0212C15.658 23.0212 18.2069 21.9654 20.0861 20.0861C21.9654 18.2069 23.0212 15.658 23.0212 13.0003C23.0212 10.3426 21.9654 7.7938 20.0861 5.91453C18.2069 4.03526 15.658 2.97949 13.0003 2.97949Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3102 9.4795C11.1402 9.4795 9.47949 11.1077 9.47949 13.0003C9.47949 14.8929 11.1402 16.5212 13.3102 16.5212C13.8637 16.5212 14.3881 16.4128 14.8593 16.2211C14.9581 16.1807 15.0639 16.1603 15.1706 16.1608C15.2773 16.1614 15.3829 16.1829 15.4813 16.2243C15.5797 16.2656 15.669 16.3259 15.744 16.4018C15.8191 16.4776 15.8785 16.5675 15.9188 16.6663C15.9592 16.7651 15.9796 16.8709 15.9791 16.9776C15.9785 17.0843 15.957 17.1899 15.9156 17.2883C15.8743 17.3867 15.814 17.476 15.7381 17.551C15.6623 17.6261 15.5724 17.6855 15.4736 17.7258C14.7864 18.0046 14.0517 18.1473 13.3102 18.1462C10.3505 18.1462 7.85449 15.8939 7.85449 13.0003C7.85449 10.1067 10.3505 7.8545 13.3102 7.8545C14.0517 7.85332 14.7864 7.99607 15.4736 8.27483C15.6733 8.35614 15.8325 8.51345 15.9162 8.71214C15.9999 8.91084 16.0012 9.13465 15.9199 9.33433C15.8386 9.53402 15.6813 9.69323 15.4826 9.77693C15.2839 9.86063 15.0601 9.86198 14.8604 9.78067C14.3681 9.58075 13.8415 9.47846 13.3102 9.4795Z"
                fill="white"
              />
            </svg>
          </span>
          2023 Solarios. All rights reserve
        </h3>
        <ul>
          <li>Privacy policy</li>
          <li>Terms of service</li>
          <li>Cookies settings</li>
        </ul>
      </div>
    </footer>
  );
}
