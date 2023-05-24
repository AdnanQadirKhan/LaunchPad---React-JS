import React, { useState } from "react";
import img from "../../../assets/images/background/img-create-item.jpg";
import http from "./../../../Services/httpService";
import { ethers } from 'ethers';
import moment from 'moment';
import Abi from "../../../contracts/LockContract.json"


import { enqueueSnackbar } from "notistack";
const Create = () => {
  const [lock, setLock] = useState({
    tokenAddress: null,
    tokenAmount: null,
    unlockTime: null,
  });
  const [Status, setStatus] = useState("");

  function UnlockTimefunc(e){
    const dateTimeValue = e.target.value;
    console.log("Selected date and time:", dateTimeValue);
    // parse the selected date and time string into a moment object using format 'YYYY-MM-DDTHH:mm'
    const selectedDateTime = moment(dateTimeValue, "YYYY-MM-DDTHH:mm");
    console.log("Selected date and time as moment object:", selectedDateTime);
    // convert the moment object to a unix timestamp in seconds
    const timestamp = selectedDateTime.unix();
    console.log("Unix timestamp:", timestamp);
    setLock({
      ...lock,
      [e.target.name]: timestamp,
  });
}
  async function GetLockformData() {
    // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    // setAddress(accounts[0]);
    if (typeof window.ethereum !== 'undefined') {
      setStatus("Wait...")

      try {
        const data = "0x021E52E65944A53F8b436c7239493968F3565906";
        const providers = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.enable();
        const signer = providers.getSigner();
        const contract = new ethers.Contract(data, Abi, signer);

        const sendTX = await contract.lockTokens(
          lock.unlockTime,
          lock.tokenAmount,
          lock.tokenAddress
        )
        // await sendTX.wait()
        console.log(sendTX)
        const check = sendTX.toString()
        console.log(check)
        setStatus("successfully sent transaction")
        return true;
      }
      catch (error) {

        console.log(error)
        setStatus("Error")
        return false;
      }
    }
  }


 
  const handleAdd = async () => {
    const { tokenAddress, tokenAmount, unlockTime } = lock;
    if (tokenAddress === null || tokenAmount === null || unlockTime === null) {
      enqueueSnackbar("All fields are required", { variant: "info" });
      return;
    }
    const success = await GetLockformData();
        if (!success) {
            enqueueSnackbar("Failed to add data in blockchain", { variant: "info" });
            return;
        }
    http.post("lock", lock).then((res) => {
      console.log(res.data);
      enqueueSnackbar("Successfully added", { variant: "success" });
      setLock({
        tokenAddress: null,
        tokenAmount: null,
        unlockTime: null,
      });
    });
    return false;
  };
  const handleChange = (e) => {
    setLock({
      ...lock,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="tf-section create-item pd-top-0 mg-t-40">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-create-item-content">
              <div className="form-create-item">
                <div className="sc-heading">
                  <h3>Liquidity Lockup</h3>
                  <p className="desc">Lock your token's liquidity!</p>
                </div>
                <div id="create-item-1" action="#" acceptCharset="utf-8">
                  {/* <label className="uploadFile">
                                    <span className="filename">Choose Item</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label> */}
                  {/* <div className="input-group">
                                    <input id="comment-message" name="message" type="text" placeholder="Project Name" required />
                                    
                                </div> */}
                  <div className="input-group">
                    <input
                      name="tokenAddress"
                      type="text"
                      value={lock.tokenAddress || ""}
                      onChange={(e) => handleChange(e)}
                      placeholder="Token Address"
                      required
                    />
                    {/* <input name="number" type="text" placeholder="Rate (1 BNB = ??? tokens)"
                                        required /> */}
                  </div>
                  <div className="input-group">
                    <input
                      name="tokenAmount"
                      type="number"
                      value={lock.tokenAmount || ""}
                      onChange={(e) => handleChange(e)}
                      placeholder="Token Amount"
                      required
                    />
                    {/* <input name="number" type="text" placeholder="Hardcap" required /> */}
                  </div>
                  <h6 className="desc">Unlock Time:</h6>
                  <div className="input-group">
                    <input
                      name="unlockTime"
                      type="datetime-local"
                      value={lock.unlockTime || ""}
                      onChange={(e) => UnlockTimefunc(e)}
                      placeholder="Lock Until (time)"
                      required
                    />
                  </div>
                  {/* <div className="input-group">
                                    <input name="name" type="text" placeholder="Liquidity %" required />
                                    <input name="number" type="text" placeholder="Start date"
                                        required />
                                </div> */}
                  {/* <textarea id="comment-message" name="message" tabIndex="4"
                                    placeholder="Wallet Address List" aria-required="true"></textarea> */}
                  {/* <div className="input-group style-2 "> */}
                  {/* <div className="btn-check">
                                        <input type="radio" id="sale" name="fav_language" />
                                        <label htmlFor="sale">Whitelist</label>
                                    </div> */}
                  {/* <div className="btn-check">
                                        <input type="radio" id="price" name="fav_language" />
                                        <label htmlFor="price">
                                            Instant Sale Price
                                        </label>
                                    </div>
                                    <div className="btn-check">
                                        <input type="radio" id="purchase" name="fav_language" />
                                        <label htmlFor="purchase">
                                            Unlock Purchased
                                        </label>
                                    </div> */}
                  {/* </div> */}
                  <button
                    name="submit"
                    onClick={handleAdd}
                    id="submit"
                    className="sc-button style letter style-2"
                  >
                    <span>Lock Liquidity</span>{" "}
                  </button>
                </div>
              </div>
              {/* <div className="form-background">
                            <img src={img} alt="Bidzen" />
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
