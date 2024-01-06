import React, { useState, useEffect } from "react";
import styles from "./Properties.module.css";
// ICON IMPORTS FOR BED, BATH, CAR, PETS
import CarDefault from "../../../assets/icons/CarDefault.png";
import oneCar from "../../../assets/icons/1-Car.png";
import twoCar from "../../../assets/icons/2-Cars.png";
import threeCar from "../../../assets/icons/3-Cars.png";
import BathroomDefault from "../../../assets/icons/BathroomDefault.png";
import oneBathroom from "../../../assets/icons/1-Bathroom.png";
import twoBathroom from "../../../assets/icons/2-Bathroom.png";
import threeBathroom from "../../../assets/icons/3-Bathroom.png";
import BedroomDefault from "../../../assets/icons/BedroomDefault.png";
import oneBedroom from "../../../assets/icons/1-Bedroom.png";
import twoBedroom from "../../../assets/icons/2-Bedroom.png";
import threeBedroom from "../../../assets/icons/3-Bedroom.png";
import fourBedroom from "../../../assets/icons/4-Bedroom.png";
import PetsDefault from "../../../assets/icons/PetsDefault.png";
import PetsAllowed from "../../../assets/icons/PetsAllowed.png";

const Properties = () => {
  const [retrievedDocuments, setRetrievedDocuments] = useState([]);

  const retrieveDocumentsFromDB = async () => {
    try {
      // Fetch the documents from the server endpoins
      const response = await fetch(
        "http://localhost:4000/api/retrievedocument"
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRetrievedDocuments(data); // Set the retrieved documents in the state
      } else {
        console.error("Frontend:", response.statusText);
      }
    } catch (error) {
      console.error("Frontend Error:", error.message);
    }
  };

  useEffect(() => {
    // Call the function when the component is mounted
    retrieveDocumentsFromDB();
  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <div className={styles.propertiesContainer}>
      {retrievedDocuments &&
        retrievedDocuments.map((document, index) => (
          <div key={index} className={styles.propertyContainer}>
            <div>
              {" "}
              <img
                // src="./images/3-amano-avenue-epsom-auckland/2081897497.jpg"
                src={`http://localhost:4000${document.images[0].path}`}
                alt=""
                className={styles.propertyImage}
              />
              <h2>{document.listingTitle}</h2>
            </div>

            {/* <p className={styles.priceperWeek}>${document.pricePerWeek}/week</p> */}
            <p className={styles.priceperWeek}>
              {
                document.pricePerWeek
                  .toLocaleString("en-NZ", {
                    style: "currency",
                    currency: "NZD",
                  })
                  .split(".")[0]
              }
            </p>
            <p className={styles.address}>
              {document.streetNumber} {document.street} {document.suburb},{" "}
              {document.city}
            </p>

            <div className={styles.iconsAndViewContainer}>
              <div className={styles.iconsContainer}>
                {/* <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 6C28.2694 5.9998 29.4914 6.48247 30.4181 7.35008C31.3448 8.21769 31.9067 9.4053 31.99 10.672L32 11V16.1C33.0717 16.3192 34.042 16.8836 34.7622 17.7068C35.4825 18.5301 35.9131 19.5667 35.988 20.658L36 21V33C36.0005 33.2499 35.9073 33.4909 35.739 33.6756C35.5706 33.8602 35.3392 33.9752 35.0904 33.9977C34.8415 34.0203 34.5932 33.9489 34.3943 33.7976C34.1955 33.6462 34.0605 33.4259 34.016 33.18L34 33V28H6V33C6.00046 33.2499 5.90734 33.4909 5.73898 33.6756C5.57062 33.8602 5.33923 33.9752 5.09036 33.9977C4.84149 34.0203 4.59318 33.9489 4.39434 33.7976C4.19549 33.6462 4.06052 33.4259 4.016 33.18L4 33V21C3.99976 19.8473 4.39778 18.73 5.12669 17.8371C5.8556 16.9442 6.87064 16.3305 8 16.1V11C7.9998 9.73056 8.48247 8.50858 9.35008 7.58191C10.2177 6.65524 11.4053 6.09328 12.672 6.01L13 6H27ZM31 18H9C8.25455 18 7.53579 18.2775 6.98378 18.7785C6.43178 19.2795 6.08606 19.968 6.014 20.71L6 21V26H34V21C34 20.2545 33.7225 19.5358 33.2215 18.9838C32.7205 18.4318 32.032 18.0861 31.29 18.014L31 18ZM27 8H13C12.2542 8.00004 11.5352 8.27784 10.9832 8.77924C10.4311 9.28064 10.0856 9.96968 10.014 10.712L10 11V16H12V15C12 14.7348 12.1054 14.4804 12.2929 14.2929C12.4804 14.1054 12.7348 14 13 14H18C18.2652 14 18.5196 14.1054 18.7071 14.2929C18.8946 14.4804 19 14.7348 19 15V16H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H27C27.2652 14 27.5196 14.1054 27.7071 14.2929C27.8946 14.4804 28 14.7348 28 15V16H30V11C30 10.2545 29.7225 9.53579 29.2215 8.98378C28.7205 8.43178 28.032 8.08606 27.29 8.014L27 8Z"
                    fill="#CFCCCC"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 19.805C3 19.6767 3 19.6117 3.00333 19.5583C3.02959 19.1545 3.20185 18.7741 3.48798 18.488C3.7741 18.2019 4.15455 18.0296 4.55833 18.0033C4.61333 18 4.675 18 4.805 18H31.195C31.3233 18 31.3867 18 31.4417 18.0033C31.8455 18.0296 32.2259 18.2019 32.512 18.488C32.7981 18.7741 32.9704 19.1545 32.9967 19.5583C33 19.6117 33 19.675 33 19.805C33 20.4633 33 20.7933 32.9767 21.1633C32.6283 26.6417 27.9717 31.4783 22.51 32.03C22.1417 32.0683 21.9267 32.0767 21.4967 32.0933C20.3317 32.1393 19.1659 32.1637 18 32.1667C16.9167 32.1667 15.7267 32.1383 14.5033 32.0933C14.0733 32.0767 13.8583 32.0683 13.4917 32.0317C8.02833 31.4783 3.37167 26.6417 3.025 21.1633C3 20.7933 3 20.4633 3 19.805Z"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7.99992 31.3333L6.33325 34.6667M27.9999 31.3333L29.6666 34.6667M1.33325 18H34.6666"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.75 19.6666C1.75 19.9982 1.8817 20.3161 2.11612 20.5505C2.35054 20.785 2.66848 20.9166 3 20.9166C3.33152 20.9166 3.64946 20.785 3.88388 20.5505C4.1183 20.3161 4.25 19.9982 4.25 19.6666H1.75ZM8.57667 12.57L7.41333 13.0283C7.47487 13.1839 7.56701 13.3255 7.68428 13.4448C7.80156 13.5641 7.9416 13.6587 8.09609 13.7229C8.25058 13.787 8.41638 13.8196 8.58367 13.8185C8.75097 13.8174 8.91634 13.7828 9.07 13.7166L8.57667 12.57ZM18.51 8.29165L19.005 9.44165C19.3033 9.31316 19.5399 9.0736 19.6646 8.7737C19.7894 8.47381 19.7925 8.13713 19.6733 7.83498L18.51 8.29165ZM4.25 19.6666V5.30831H1.75V19.6666H4.25ZM6.975 2.58331C8.09 2.58331 9.09167 3.26165 9.505 4.29665L11.8267 3.36665C11.439 2.39718 10.7698 1.56776 9.9053 0.982237C9.04083 0.396714 8.02077 0.0836122 6.97667 0.083313L6.975 2.58331ZM4.25 5.30831C4.25 3.80331 5.47 2.58331 6.975 2.58331L6.97667 0.083313C5.59091 0.083313 4.26024 0.633803 3.28037 1.61368C2.30049 2.59356 1.75 3.92256 1.75 5.30831H4.25ZM9.505 4.29665L10.1383 5.87665L12.4583 4.94831L11.8267 3.36665L9.505 4.29665ZM9.73833 12.1116C9.31908 11.0431 9.32744 9.85417 9.76167 8.79165L7.445 7.84998C6.76878 9.50766 6.75851 11.3621 7.41333 13.0283L9.73833 12.1116ZM18.0167 7.14498L8.08167 11.4216L9.07 13.7166L19.0033 9.43998L18.0167 7.14498ZM15.1367 6.44665C16.1733 6.88998 16.945 7.72831 17.3483 8.74998L19.6733 7.83498C19.3554 7.01536 18.8775 6.26559 18.2674 5.63263C17.6574 4.99966 16.9274 4.49451 16.12 4.14665L15.1367 6.44665ZM9.76167 8.79165C10.1526 7.80733 10.895 7.00483 11.845 6.53665L10.7517 4.28998C9.2472 5.027 8.06916 6.2953 7.445 7.84998L9.76167 8.79165ZM11.845 6.53665C12.3547 6.28504 12.9129 6.14686 13.4811 6.13161C14.0494 6.11637 14.6142 6.22274 15.1367 6.44665L16.12 4.14665C15.2678 3.78225 14.3469 3.60793 13.4203 3.63238C12.4938 3.65683 11.5835 3.88115 10.7517 4.28998L11.845 6.53665Z"
                    fill="#AAAAAA"
                  />
                </svg>
                <svg
                  width="36"
                  height="32"
                  viewBox="0 0 36 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.4547 16.5313L32.8891 2.78126C32.8264 2.4461 32.6958 2.1273 32.5054 1.84448C32.3149 1.56166 32.0686 1.32078 31.7816 1.13667C31.4946 0.95256 31.173 0.829104 30.8365 0.773894C30.5 0.718685 30.1558 0.73289 29.825 0.815635L29.7766 0.829697L21.5704 3.25001H14.4297L6.22348 0.83751L6.17504 0.823447C5.84426 0.740702 5.50005 0.726498 5.16357 0.781707C4.8271 0.836916 4.50547 0.960372 4.21847 1.14448C3.93148 1.32859 3.68518 1.56947 3.49472 1.85229C3.30426 2.13512 3.17367 2.45391 3.11098 2.78907L0.545354 16.5313C0.435641 17.0816 0.51708 17.6529 0.776201 18.1507C1.03532 18.6485 1.4566 19.0429 1.97035 19.2688C2.29937 19.4196 2.65683 19.4985 3.01879 19.5C3.45203 19.4998 3.87726 19.3832 4.25004 19.1625V25.75C4.25004 27.4076 4.90852 28.9973 6.08062 30.1694C7.25273 31.3415 8.84244 32 10.5 32H25.5C27.1576 32 28.7474 31.3415 29.9195 30.1694C31.0916 28.9973 31.75 27.4076 31.75 25.75V19.1641C32.1224 19.3844 32.547 19.5009 32.9797 19.5016C33.3421 19.5005 33.7 19.4222 34.0297 19.2719C34.5441 19.046 34.9658 18.651 35.225 18.1526C35.4842 17.6541 35.5652 17.0821 35.4547 16.5313ZM3.00004 17L5.56723 3.25001L12.1407 5.18282L3.00004 17ZM25.5 29.5H19.25V27.5172L21.3844 25.3844C21.619 25.1498 21.7507 24.8317 21.7507 24.5C21.7507 24.1683 21.619 23.8502 21.3844 23.6156C21.1499 23.3811 20.8317 23.2493 20.5 23.2493C20.1683 23.2493 19.8502 23.3811 19.6157 23.6156L18 25.2328L16.3844 23.6156C16.1499 23.3811 15.8317 23.2493 15.5 23.2493C15.1683 23.2493 14.8502 23.3811 14.6157 23.6156C14.3811 23.8502 14.2493 24.1683 14.2493 24.5C14.2493 24.8317 14.3811 25.1498 14.6157 25.3844L16.75 27.5172V29.5H10.5C9.50548 29.5 8.55165 29.1049 7.84839 28.4017C7.14513 27.6984 6.75004 26.7446 6.75004 25.75V16.2359L14.8625 5.75001H21.136L29.25 16.2359V25.75C29.25 26.7446 28.855 27.6984 28.1517 28.4017C27.4484 29.1049 26.4946 29.5 25.5 29.5ZM33 17L23.8594 5.18282L30.4329 3.25001L33 17ZM14.25 18.875C14.25 19.2458 14.1401 19.6084 13.934 19.9167C13.728 20.225 13.4352 20.4654 13.0926 20.6073C12.75 20.7492 12.373 20.7863 12.0092 20.714C11.6455 20.6416 11.3114 20.4631 11.0492 20.2008C10.787 19.9386 10.6084 19.6045 10.5361 19.2408C10.4637 18.8771 10.5009 18.5001 10.6428 18.1575C10.7847 17.8149 11.025 17.522 11.3333 17.316C11.6417 17.11 12.0042 17 12.375 17C12.8723 17 13.3492 17.1976 13.7009 17.5492C14.0525 17.9008 14.25 18.3777 14.25 18.875ZM25.5 18.875C25.5 19.2458 25.3901 19.6084 25.184 19.9167C24.978 20.225 24.6852 20.4654 24.3426 20.6073C24 20.7492 23.623 20.7863 23.2592 20.714C22.8955 20.6416 22.5614 20.4631 22.2992 20.2008C22.037 19.9386 21.8584 19.6045 21.7861 19.2408C21.7137 18.8771 21.7509 18.5001 21.8928 18.1575C22.0347 17.8149 22.275 17.522 22.5833 17.316C22.8917 17.11 23.2542 17 23.625 17C24.1223 17 24.5992 17.1976 24.9509 17.5492C25.3025 17.9008 25.5 18.3777 25.5 18.875Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.3333 18.3333H31.6667C32.5507 18.3333 33.3986 18.6845 34.0237 19.3096C34.6488 19.9348 35 20.7826 35 21.6667V25C35 25.442 34.8244 25.8659 34.5118 26.1785C34.1993 26.4911 33.7754 26.6667 33.3333 26.6667H30.8333M28.3333 18.3333H17.5M28.3333 18.3333L24.305 11.6183C24.0088 11.1247 23.5899 10.7163 23.089 10.4327C22.5881 10.1491 22.0223 9.99999 21.4467 10H17.5M30.8333 26.6667C30.8333 27.5507 30.4821 28.3986 29.857 29.0237C29.2319 29.6488 28.3841 30 27.5 30C26.6159 30 25.7681 29.6488 25.143 29.0237C24.5179 28.3986 24.1667 27.5507 24.1667 26.6667M30.8333 26.6667C30.8333 25.7826 30.4821 24.9348 29.857 24.3096C29.2319 23.6845 28.3841 23.3333 27.5 23.3333C26.6159 23.3333 25.7681 23.6845 25.143 24.3096C24.5179 24.9348 24.1667 25.7826 24.1667 26.6667M17.5 18.3333V10M17.5 18.3333H8.33333M17.5 10H12.7333C11.9625 9.99969 11.2153 10.2666 10.6191 10.7552C10.0229 11.2439 9.61443 11.9241 9.46333 12.68L8.33333 18.3333M8.33333 18.3333C7.44928 18.3333 6.60143 18.6845 5.97631 19.3096C5.35119 19.9348 5 20.7826 5 21.6667V25C5 25.442 5.17559 25.8659 5.48816 26.1785C5.80072 26.4911 6.22464 26.6667 6.66667 26.6667H9.16667M9.16667 26.6667C9.16667 27.5507 9.51786 28.3986 10.143 29.0237C10.7681 29.6488 11.6159 30 12.5 30C13.3841 30 14.2319 29.6488 14.857 29.0237C15.4821 28.3986 15.8333 27.5507 15.8333 26.6667M9.16667 26.6667C9.16667 25.7826 9.51786 24.9348 10.143 24.3096C10.7681 23.6845 11.6159 23.3333 12.5 23.3333C13.3841 23.3333 14.2319 23.6845 14.857 24.3096C15.4821 24.9348 15.8333 25.7826 15.8333 26.6667M15.8333 26.6667H24.1667"
                    stroke="#CFCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> */}

                {/* --- CARPARKS ICON --- */}
                {document.carparks === 1 ? (
                  <img
                    src={oneCar}
                    alt="Car icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : document.carparks === 2 ? (
                  <img
                    src={twoCar}
                    alt="Car icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : document.carparks === 3 ? (
                  <img
                    src={threeCar}
                    alt="Car icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : (
                  <img
                    src={CarDefault}
                    alt="Car icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                )}
                {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                                  {/* --- BEDROOMS ICON --- */}
                                  {document.bedrooms === 1 ? (
                    <img
                      src={oneBedroom}
                      alt="Bedrooms icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  ) : document.bedrooms === 2 ? (
                    <img
                      src={twoBedroom}
                      alt="Bedrooms icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  ) : document.bedrooms === 3 ? (
                    <img
                      src={threeBedroom}
                      alt="Bedrooms icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  ) : document.bedrooms === 4 ? (
                    <img
                      src={fourBedroom}
                      alt="Bedrooms icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  ) : (
                    <img
                      src={BedroomDefault}
                      alt="Bedrooms icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  )}
                  {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                  {/* --- BATHROOMS ICON ---*/}
                  {document.bathrooms === 1 ? (
                    <img
                      src={oneBathroom}
                      alt="Bathrooms icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  ) : document.bathrooms === 2 ? (
                    <img
                      src={twoBathroom}
                      alt="Bathrooms icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  ) : document.bathrooms === 3 ? (
                    <img
                      src={threeBathroom}
                      alt="Bathrooms icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  ) : (
                    <img
                      src={BathroomDefault}
                      alt="Bathrooms icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  )}
                  {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                  {/* --- PET'S ALLOWED ICON ---*/}
                  {document.petsAllowed === true ? (
                    <img
                      src={PetsAllowed}
                      alt="Pets icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  ) : (
                    <img
                      src={PetsDefault}
                      alt="Pets icon"
                      className={styles.bedBathShowCarPetsIcons}
                    />
                  )}
                  {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              </div>
              <button className={styles.viewButton}>VIEW</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Properties;
