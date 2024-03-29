import React, { useState, useEffect } from "react";
import img from "../../../assets/images/background/img-create-item.jpg";
import { enqueueSnackbar } from "notistack";
import http from "./../../../Services/httpService";
import AddressContext from '../../../AddressContext';
import { useContext } from 'react';

const Create = () => {
  const {  address , setAddress} = useContext(AddressContext);
  const [kyc, setKyc] = useState({
    name: null,
    email: null,
    presaleLink: null,
  });
  const [presaleList, setPresaleList] = useState([]);
  useEffect(() => {
    http.get(`presale/my/${address[0]}`).then(res => {
      console.log(res.data);
      setPresaleList(res.data || [])
    })
  }, []);
  const handleAdd = () => {
    const { name, email, presaleLink } = kyc;
    if (
      name === null ||
      name.trim() === "" ||
      email === null ||
      email.trim() === "" ||
      presaleLink === null ||
      presaleLink.trim() === ""
    ) {
      enqueueSnackbar("All fields are required", { variant: "info" });
      return;
    }
    http.post("kyc", { walletAddress: address[0] , ...kyc }).then((res) => {
      console.log(res);
      setKyc({
        name: "",
        email: "",
        presaleLink: "",
      });
      enqueueSnackbar("Successfully Added", { variant: "success" });
      return;
    })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar(error.response.data, {
          variant: "info",
        });
        return;
      });
    return false;
  };
  const handleChange = (e) => {
    setKyc({
      ...kyc,
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
                  <h3>KYC Request</h3>
                  <p className="desc">Request KYC badge for your presale</p>
                </div>
                <div
                  id="create-item-1"
                // action="#"
                // method="GET"
                // acceptCharset="utf-8"
                >
                  {/* <label className="uploadFile">
                                    <span className="filename">Upload PDF</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label> */}
                  <div className="input-group">
                    {/* <input id="comment-message" name="message" type="text" placeholder="Project Name" required /> */}
                    <input
                      id="comment-message"
                      name="name"
                      type="text"
                      value={kyc.name}
                      onChange={(e) => handleChange(e)}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      id="comment-message"
                      name="email"
                      type="email"
                      value={kyc.email}
                      onChange={(e) => handleChange(e)}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="input-group pr-4">
                    <select
                      onChange={(e) => handleChange(e)}
                      name="presaleLink"
                      id="presaleLink"
                      required>
                      {presaleList.length !== 0 && presaleList.map((item, index) => (
                        <option key={index} value={item._id}>{item.projectName}</option>
                      ))}

                    </select>
                    {/* <input name="number" type="text" placeholder="Rate (1 BNB = ??? tokens)"
                                        required /> */}
                  </div>
                  <div className="input-group">
                    <p className="desc">
                      Wallet Address: {address[0]}
                    </p>
                    {/* <input name="name" type="text" placeholder="Wallet Address" required /> */}
                    {/* <input name="number" type="text" placeholder="Hardcap" required /> */}
                  </div>
                  <div className="input-group">
                    {/* <input name="name" type="text" placeholder="Audit Report Link" required /> */}
                    {/* <label className="uploadFile">
                                    <span className="filename">Upload PDF</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label> */}
                    {/* <input name="number" type="text" placeholder="Start date" required /> */}
                  </div>
                  {/* <textarea id="comment-message" name="message" tabIndex="4"
                                    placeholder="Wallet Address List" aria-required="true"></textarea> */}
                  <div className="input-group style-2 ">
                    <div className="btn-check">
                      <input type="radio" id="sale" name="fav_language" />
                      <label htmlFor="sale">
                        I agree to the Terms & Conditions
                      </label>
                    </div>
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
                  </div>
                  <button
                    // name="submit"
                    // type="submit"
                    // id="submit"
                    onClick={handleAdd}
                    className="sc-button style letter style-2"
                  >
                    <span>Submit KYC Request</span>{" "}
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
