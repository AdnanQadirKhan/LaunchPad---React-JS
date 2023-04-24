import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const ViewLock = (props) => {
  const data = props.data;

  const [visible, setVisible] = useState(12);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  // const [presaleStatus, setPresaleSatus] = userState('Upcoming')
  return (
    <section className="tf-section trendy-colection-page style-2">
      <div className="container">
        <div className="row">
          
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
                  {/* <div className="product-author flex">
                    <div className="avatar">
                      <img src={item.logo} alt="Bidzen" />
                    </div>
                  </div> */}
                  <h4 className="title">
                    <Link to="/item-details">{item.tokenAddress}</Link>{" "}
                    {/* <p>1 BNB = {item.rate}</p>{" "} */}
                  </h4>

                  <div>
                    <h5 style={{ fontWeight: "normal" }} className="title">
                      {" "}
                      Token Amount{" "}
                      <p style={{ fontWeight: "normal" }}>
                        {item.tokenAmount} 
                      </p>
                    </h5>
                  </div>
                  {/* <div>
                    <h5 style={{ fontWeight: "normal" }} className="title">
                      {" "}
                      Liquidity %{" "}
                      <p style={{ fontWeight: "normal" }}>{item.liquidity}</p>
                    </h5>
                  </div> */}
                  <div>
                    <h5 style={{ fontWeight: "bold" }} className="title">
                      {" "}
                      Unlock Time{" "}
                      <p style={{ fontWeight: "Bold" }}>{item.unlockTime}</p>
                    </h5>
                  </div>

                </div>
                <div className="product-img">
                  <Link
                    to={'#'}
                    className="sc-button style letter"
                  >
                    <span>View Lock</span>
                  </Link>
                 
                </div>
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

export default ViewLock;
