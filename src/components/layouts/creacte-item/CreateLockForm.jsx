import React, { useState } from "react";
import img from "../../../assets/images/background/img-create-item.jpg";
import http from "./../../../Services/httpService";

import { enqueueSnackbar } from "notistack";
const Create = () => {
  const [lock, setLock] = useState({
    tokenAddress: null,
    tokenAmount: null,
    unlockTime: null,
  });
  const handleAdd = () => {
    const { tokenAddress, tokenAmount, unlockTime } = lock;
    if (tokenAddress === null || tokenAmount === null || unlockTime === null) {
      enqueueSnackbar("All fields are required", { variant: "info" });
      return;
    }
    http.post("lock", lock).then((res) => {
      console.log(res.data);
      enqueueSnackbar("Successfully added", { variant: "success" });
      setLock({});
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
                <form id="create-item-1" action="#" acceptCharset="utf-8">
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
                      value={lock.tokenAddress}
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
                      value={lock.tokenAmount}
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
                      value={lock.unlockTime}
                      onChange={(e) => handleChange(e)}
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
                </form>
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
