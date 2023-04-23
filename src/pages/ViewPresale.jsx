import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import dataHotCollection2 from "../assets/fake-data/dataHotCollection2";
import TopSeller from "../components/layouts/creacte-item/TopSeller";
import Create from "../components/layouts/creacte-item/Create";
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from "../components/footer/FooterStyle2";

const ViewPresale = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">View Presale #{id}</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>View Presale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <TopSeller data={dataHotCollection2} /> */}
      {/* <Create /> */}
      {/* <Newsletters /> */}
      <Footer />
    </div>
  );
};

export default ViewPresale;
