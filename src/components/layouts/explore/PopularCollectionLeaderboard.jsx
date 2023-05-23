import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import http from "../../../Services/httpService";

const PopularCollection = (props) => {
  const [visible, setVisible] = useState(12);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const [data, setData] = useState(props.data);
  const location = useLocation();
  const link = location.pathname.split("/").pop();
  const handleChange = (e) => {
    const selectedMonth = e.target.value;
    // Use the selected month value as needed
    console.log("Selected month:", selectedMonth);

    if (selectedMonth === "0") {
      // Set data to props.data
      setData(props.data);
    } else {
      // Fetch data based on the selected month
      http.get(`presale/leaderboard/${selectedMonth}`)
        .then((res) => setData(res.data))
        .catch((error) => {
          // Handle error if API call fails
          console.log(error);
        });
    }
  };

  useEffect(() => {
    setData(props.data);
  }, [props.data]);


  return (
    <section className="tf-section trendy-colection-page style-2">
      <div className="container">
        <div>
          <label className="form-label" htmlFor="">Sort by month:</label>
          <select className="form-control mb-4 mt-2" onChange={(e) => handleChange(e)} style={{ fontSize: '13px' }} name="months" id="months" defaultValue={0}>
            <option value="0">Select Month</option>
            <option value="1" >January</option>
            <option value="2" >February</option>
            <option value="3" >March</option>
            <option value="4" >April</option>
            <option value="5" >May</option>
            <option value="6" >June</option>
            <option value="7" >July</option>
            <option value="8" >August</option>
            <option value="9" >September</option>
            <option value="10">October</option>
            <option value="11" >November</option>
            <option value="12" >December</option>
          </select>
        </div>
        <div className="row">

          {/* <div className="col-md-12">
                    <div className="wg-drop-category seclect-box">
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>All Categories</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>NFT</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Crypto</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Token</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>New Items</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>New bestsellers</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>New releases</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Buy Now</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>Wallet</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Website</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Sort By</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>View</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Rating</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Sale</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Date</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="sc-button style letter style-2"><span>Filter</span> </button>
                    </div>
                </div> */}
          {data.slice(0, visible).map((item, index) => (
            <div key={item.id} className="fl-item col-xl-3 col-lg-4 col-md-6">
              <div className="sc-product-item style-5">
                <div className="product-img">
                  {/* <Link to="/connect-wallet"
                                        className="sc-button style letter"><span>View presale</span>
                                    </Link> */}
                  <label>{item.tags}</label>
                </div>
                <div className="product-content">
                  <div className="product-author flex">
                    <div className="avatar">
                      <img src={item.logo} alt="Launchpad" />
                    </div>
                  </div>
                  <h4 className="title mt-2">
                    <Link to="/item-details">{item.title}</Link>{" "}
                    <h5>{item.projectName}</h5>{" "}
                  </h4>
              
                  <h4 className="title">
                    <Link to="/item-details">{item.title}</Link>{" "}
                    <p>1 BNB = {item.rate}</p>{" "}
                  </h4>

                  <div>
                    <h5 style={{ fontWeight: "normal" }} className="title">
                      {" "}
                      Softcap/Hardcap{" "}
                      <p style={{ fontWeight: "normal" }}>
                        {item.softcap} / {item.hardcap}
                      </p>
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: "normal" }} className="title">
                      {" "}
                      Liquidity %{" "}
                      <p style={{ fontWeight: "normal" }}>{item.liquidity}</p>
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: "bold" }} className="title">
                      {" "}
                      Starts at{" "}
                      <p style={{ fontWeight: "Bold" }}>{item.startTime}</p>
                    </h5>
                  </div>

                  {/* <div className="product-author flex">
                                        <div className="avatar">
                                            <img src={item.avt} alt="Bidzen" />
                                        </div>
                                        <div className="infor">
                                            <div className="author-name"><Link to="/authors">{item.name}</Link></div>
                                            <span>Creator</span>
                                        </div>
                                    </div> */}
                </div>
                {link === "edit-presale" ? (
                  <div className="product-img">
                    <Link to={`/edit-presale/${item._id}`} className="sc-button style letter">
                      <span>Edit Presale</span>
                    </Link>
                  </div>
                ) : (
                  <div className="product-img">
                    {/* <img src={item.img} alt="Bidzen" /> */}
                    <Link to={`/presale/${item._id}`} className="sc-button style letter">
                      <span>View presale</span>
                    </Link>
                  </div>
                )}

              </div>
            </div>
          ))}

          {visible < data.length && (
            <div className="col-md-12">
              <button
                id="loadmore"
                className=" sc-button style letter style-2"
                onClick={showMoreItems}
              >
                <span>More presales</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCollection;
