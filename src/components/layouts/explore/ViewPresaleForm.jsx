import React, { useEffect, useState } from "react";
import img from "../../../assets/images/background/img-create-item.jpg";
import { enqueueSnackbar } from "notistack";
import http from "../../../Services/httpService";
import { useParams } from 'react-router-dom';
import AddressContext from '../../../AddressContext';
import { useContext } from 'react';
import { ethers } from 'ethers';
import Abi from "../../../contracts/contractAbi.json";



const Create = (props) => {
  const data = props.data;

  const [contract, setContract] = useState({
    crypto: "",
    contractAddress: "",
    
});
  async function getAllData() {
    if (typeof window.ethereum !== 'undefined') {
        // setStatus("Wait...")

        try {
          const new_data = "0x2f8f660B075962bD8Cd39bD603676261aF833F96";
            const providers = new ethers.providers.Web3Provider(window.ethereum);
            await window.ethereum.enable();
            const signer = providers.getSigner();
            const contract = new ethers.Contract(new_data, Abi, signer);
            console.log("CA", data.contractAddress);
            console.log("Crypto", bnb.crypto);
            const sendTX = await contract.contribute(
              data.contractAddress,
              parseInt(bnb.crypto),
            )
            console.log(sendTX)
            const check = sendTX.toString()
            console.log(check)
        }
        catch (error) {

                console.log(error)
        }
        // return false;
    }
}
  const { address, setAddress } = useContext(AddressContext);
  const { id } = useParams();
  const [kyc, setKyc] = useState([]);
  const [audit, setAudit] = useState([]);
  console.log(kyc);
  useEffect(() => {
    http.get(`/presale/wallet/${address[0]}`)
      .then((res) => {
        setKyc(res.data.kyc)
        setAudit(res.data.audit)
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar(error.response.data, {
          variant: "info",
        });
        return;
      });
  }, [address]);


  // console.log(data);
  const handleAlertClick = (data) => {
    const obj = {
      userId: address[0],
      presaleId: data._id,
    };
    http.post(`alert/${data._id}`, obj).then((res) => {
      // console.log(res);
      return enqueueSnackbar(res.data, { variant: "success" });
    }).catch((err) => {
      console.log(err);
      enqueueSnackbar(err.response.data, {
        variant: "info",
      });
      return;
    });
    console.log('obj', obj);
    return false;
  };
  const [bnb, setBNB] = useState({
    crypto: null,
  });
  const handleAdd = async() => {
    const { crypto } = bnb;
    const cryptoValue = parseFloat(crypto);
    if (crypto === null || crypto === "") {
      enqueueSnackbar("Enter BNB First", { variant: "info" });
      return;
    } else if (crypto != "" && address[0] === "Connect MetaMask") {
      enqueueSnackbar("Connect Meta Mask", { variant: "info" });
      return;
    }
    else if (isNaN(cryptoValue)) {
      enqueueSnackbar("Enter a valid amount for BNB", { variant: "info" });
      return;
    }
    else if (cryptoValue < data.minimum) {
      enqueueSnackbar("Enter an amount greater than minimum BNB", { variant: "info" });
      return;
    }
    else if (cryptoValue > data.maximum) {
      enqueueSnackbar("Enter an amount less than maximum BNB", { variant: "info" });
      return;
    }

    const requestBody = {
      presaleId: id, // Assuming id is the presale ID
      walletAddress: props.data.walletAddress, // Pass the form data
      bnb: crypto, // Pass the BNB data
    };
    const success = await getAllData();
    if (!success) {
        enqueueSnackbar("Failed to invest in blockchain", { variant: "info" });
        return;
    }
    http
      .post(`/investment/bnb/${id}`, requestBody)
      .then((res) => {
        console.log(res.data);
        enqueueSnackbar("Successfully added", { variant: "success" });
        setBNB({
          crypto: null,
        });
      })
      .catch((error) => {
        // console.log(error);
        enqueueSnackbar(error.response.data, {
          variant: "info",
        });
        return;
      });

    return false;
  };
  const currentDate = new Date();
  const startTime = new Date(data.startTime);
  const endTime = new Date(data.endTime);

  // Check if the start date and time is not equal to or greater than the current date and time
  const isUpcoming = startTime >= currentDate;
  const isEnded = endTime < currentDate;
  let newDate;
  // if (isUpcoming) {
  const timeDifference = startTime.getTime() - currentDate.getTime();
  newDate = timeDifference;
  // Assuming newDate contains the time difference in milliseconds
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const millisecondsPerMonth = 30 * 24 * 60 * 60 * 1000; // Approximate number of milliseconds in a month
  const millisecondsPerYear = 365 * 24 * 60 * 60 * 1000; // Approximate number of milliseconds in a year
  const millisecondsPerHour = 60 * 60 * 1000; // Number of milliseconds in an hour

  // Calculate the difference in hours
  const hours = Math.floor(newDate / millisecondsPerHour);
  // Calculate the difference in days, months, and years
  const days = Math.floor(newDate / millisecondsPerDay);
  const months = Math.floor(newDate / millisecondsPerMonth);
  const years = Math.floor(newDate / millisecondsPerYear);
  // }
  console.log(startTime);

  const handleChange = (e) => {
    setBNB({
      ...bnb,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="tf-section create-item pd-top-0 mg-t-40">
      <div className="row m-0 p-4">
        <div
          className="col col-lg-8 p-4 my-2"
          style={{ backgroundColor: "var(--color-3)" }}
        >
          <div className="d-flex p-4">
            <h3>{data.projectName}</h3>
            {kyc.map((item) => (
              item.walletAddress === address[0] && item.presaleLink === data._id && item.status === "active" && (
                <span className="badge badge-danger my-auto mx-2">KYC</span>
              )

            ))}
            {audit.map((item) => (
              item.walletAddress === address[0] && item.presaleLink === data._id && item.status === "active" && (
                <span className="badge badge-primary my-auto ml-4 mr-2">Audit</span>

              )

            ))}
            {isEnded ? (
              <span className="badge badge-danger my-auto mx-2">Ended</span>
            ) : isUpcoming ? (
              <span className="badge badge-success my-auto mx-2">Upcoming</span>
            ) : (
              <span className="badge badge-primary my-auto mx-2">Live</span>
            )}
            <span className="my-auto mx-2">
              <button className="" style={{ padding: "4px" }} onClick={() => handleAlertClick(data)}>
                <i className="fa-solid fa-bell"></i>
              </button>
            </span>
          </div>
          <p className="p-4">{data.projectDescription}</p>

          <div className="table table-primary p-4">
            <table>
              <tbody>
                <tr>
                  <td>Presale Address</td>
                  <td>
                    <a href="#" target="_blank" rel="noreferrer nofollow">
                      <span className="">
                        {data.contractAddress}
                        <div
                          role="button"
                          tabIndex="0"
                          aria-label="Copy"
                          style={{
                            border: "0px",
                            background: "transparent",
                            padding: "0px",
                            lineHeight: "inherit",
                            display: "inline-block",
                          }}
                        >
                          <span role="img" aria-label="copy">
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="copy"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                    </a>
                  </td>
                </tr>
                {/* <tr>
                  <td>Token Name</td>
                  <td>Oprah CEO</td>
                </tr>
                <tr>
                  <td>Token Symbol</td>
                  <td>OPRAH</td>
                </tr>
                <tr>
                  <td>Token Decimals</td>
                  <td>9</td>
                </tr> */}
                <tr>
                  <td>Token Address</td>
                  <td>
                    <a
                      className="mr-1"
                      href="#"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      <span className="">
                        {data.contractAddress}
                        <div
                          role="button"
                          tabIndex="0"
                          aria-label="Copy"
                          style={{
                            border: "0px",
                            background: "transparent",
                            padding: "0px",
                            lineHeight: "inherit",
                            display: "inlineBlock",
                          }}
                        >
                          <span role="img" aria-label="copy">
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="copy"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                    </a>
                    <br />
                    <p className="">(Do not send BNB to the token address!)</p>
                  </td>
                </tr>
                {/* <tr>
                  <td>Total Supply</td>
                  <td>420,000,000,000,000,000 OPRAH</td>
                </tr> */}
                {/* <tr>
                  <td>Tokens For Presale</td>
                  <td>127,315,594,476,254,640 OPRAH</td>
                </tr>
                <tr>
                  <td>Tokens For Liquidity</td>
                  <td>61,684,405,523,745,380 OPRAH</td>
                </tr>
                <tr>
                  <td>Initial Market Cap (estimate)</td>
                  <td>$2,329</td>
                </tr> */}
                <tr>
                  <td>Soft Cap</td>
                  <td>{data.softcap} BNB</td>
                </tr>
                <tr>
                  <td>Hard Cap</td>
                  <td>{data.hardcap} BNB</td>
                </tr>
                <tr>
                  <td>Presale Start Time</td>
                  <td>{data.startTime} (UTC)</td>
                </tr>
                <tr>
                  <td>Presale End Time</td>
                  <td>{data.endTime} (UTC)</td>
                </tr>
                <tr>
                  <td>Listing On</td>
                  <td>
                    <a
                      className="mr-1"
                      href="#"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      Pancakeswap
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Liquidity Percent</td>
                  <td>{data.liquidity} %</td>
                </tr>
                <tr>
                  <td>Unlock Liquidity %</td>
                  <td>100% - {data.liquidity}%</td>
                </tr>
                <tr>
                  <td>Liquidity Unlock Time</td>
                  <td>{data.liquidityDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
        </div>

        <div className="col col-lg-4">
          <div
            className="container p-4 my-2"
            style={{ backgroundColor: "var(--color-3)" }}
          >
            {isUpcoming ? (
              <div className="text-center my-2">
                <h6 className="my-4">Presale Starts In </h6>
                <strong className="mt-4">
                  <label htmlFor="">Hours:</label>

                  <span
                    className="p-2 mx-2"
                    style={{ borderRadius: "4px", backgroundColor: "#c73bf9" }}
                  >
                    {hours.toString()}
                  </span>
                  <label htmlFor="">Days:</label>
                  <span
                    className="p-2 mx-2"
                    style={{ borderRadius: "4px", backgroundColor: "#c73bf9" }}
                  >
                    {days.toString()}
                  </span>
                  <label htmlFor="">Months:</label>
                  <span
                    className="p-2 mx-2"
                    style={{ borderRadius: "4px", backgroundColor: "#c73bf9" }}
                  >
                    {months.toString()}
                  </span>
                  <label htmlFor="">Year:</label>
                  <span
                    className="p-2 mx-2"
                    style={{ borderRadius: "4px", backgroundColor: "#c73bf9" }}
                  >
                    {years.toString()}
                  </span>

                </strong>

                <div
                  style={{
                    width: "0%",
                    height: "15px",
                    backgroundColor: "rgb(72, 199, 116)",
                  }}
                ></div>
              </div>
            ) : <span></span>
            }
            <div id="addBNB">
              <div className="d-flex justify-content-between p-4">
                <span className="text-info text-start">{data.minimum} BNB</span>
                <span className="text-info text-end">{data.maximum} BNB</span>
              </div>
              <label className="p-4">Amount</label>
              <input
                type="text"
                value={bnb.crypto || ""}
                onChange={(e) => handleChange(e)}
                name="crypto"
                id="crypto"
                placeholder="0.0" />
              {isUpcoming && address[0] !== "" && (
                <button className="btn btn-light my-4" disabled onClick={handleAdd}>Invest</button>
              )}
              {!isUpcoming && address[0] !== "" && (
                <button className="btn btn-light my-4" onClick={handleAdd}>Invest</button>
              )}

            </div>
          </div>
          <div
            className="container p-4 my-4"
            style={{ backgroundColor: "var(--color-3)" }}
          >
            <div className="d-flex justify-content-between p-4">
              <span className="text-start">Status</span>
              {isEnded ? (
                <span className="badge badge-danger my-auto mx-2">Ended</span>
              ) : isUpcoming ? (
                <span className="badge badge-success my-auto mx-2">Upcoming</span>
              ) : (
                <span className="badge badge-primary my-auto mx-2">Live</span>
              )}
            </div>
            <hr />
            <div className="d-flex justify-content-between p-4">
              <span className="text-start">Current Rate</span>
              <span className="text-end">{data.rate}</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
