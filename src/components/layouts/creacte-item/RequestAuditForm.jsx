import React, { useState } from "react";
import img from "../../../assets/images/background/img-create-item.jpg";
import { enqueueSnackbar } from "notistack";
import http from "./../../../Services/httpService";
const Create = () => {
  const [audit, setAudit] = useState({
    name: null,
    email: null,
    presaleLink: null,
    auditReportLink: null,
  });
  const handleAdd = () => {
    const { name, email, presaleLink, auditReportLink } = audit;
    if (
      name === null ||
      email === null ||
      presaleLink === null ||
      auditReportLink == null
    ) {
      enqueueSnackbar("All fields are required", { variant: "info" });
      return;
    }
    http.post("audit", audit).then((res) => {
      console.log(res.data);
      enqueueSnackbar("Successfully added", { variant: "success" });
      setAudit({});
    });
  };
  const handleChange = (e) => {
    setAudit({
      ...audit,
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
                  <h3>Audit Request</h3>
                  <p className="desc">Request AUDIT badge for your presale</p>
                </div>
                <form id="create-item-1" action="#" acceptCharset="utf-8">
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
                      value={audit.name}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      id="comment-message"
                      name="email"
                      type="email"
                      value={audit.email}
                      onChange={(e) => handleChange(e)}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      name="presaleLink"
                      value={audit.presaleLink}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      placeholder="Presale Link"
                      required
                    />
                    {/* <input name="number" type="text" placeholder="Rate (1 BNB = ??? tokens)"
                                        required /> */}
                  </div>
                  <div className="input-group">
                    <p className="desc">
                      Wallet Address: 0xc2e495454979561494651949654
                    </p>
                    {/* <input name="name" type="text" placeholder="Wallet Address" required /> */}
                    {/* <input name="number" type="text" placeholder="Hardcap" required /> */}
                  </div>
                  <div className="input-group">
                    <input
                      name="auditReportLink"
                      type="text"
                      value={audit.auditReportLink}
                      onChange={(e) => handleChange(e)}
                      placeholder="Audit Report Link"
                      required
                    />
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
                    onClick={handleAdd}
                    className="sc-button style letter style-2"
                  >
                    <span>Submit Audit Request</span>{" "}
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
