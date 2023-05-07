import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import LatestCollection from "../components/layouts/explore/LatestCollection";
import dataCollections from "../assets/fake-data/dataCollections";
import PopularCollection from "../components/layouts/explore/PopularCollection";
import dataPopularCollection from "../assets/fake-data/dataPopularCollection";
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from "../components/footer/FooterStyle2";
import http from "../Services/httpService";

const Explore01 = () => {
  const [list, setList] = useState([]);
  console.log(list);
  useEffect(() => {
    http.get("presale").then((res) => setList(res.data));
  }, []);
  return (
    <div className="explore">
      <Header />
      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">Presales</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Presales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <LatestCollection data={dataCollections} /> */}
      <PopularCollection data={list} />
      <Newsletters />
      <Footer />
    </div>
  );
};

export default Explore01;
