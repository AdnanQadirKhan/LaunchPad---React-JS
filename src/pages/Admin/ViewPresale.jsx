import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header-1";
import dataHotCollection2 from "../../assets/fake-data/dataHotCollection2";
import TopSeller from "../../components/layouts/creacte-item/TopSeller";
import { Newsletters } from "../../components/layouts/home/Newsletters";
import Footer from "../../components/footer/FooterStyle2";
import ViewPresale from "../../components/layouts/explore/ViewPresaleForm";
import http from "../../Services/httpService";

const CreateItem = () => {
  const [list, setList] = useState([]);
  console.log(list);
  const { id } = useParams();

  useEffect(() => {
    http.get(`/presale/${id}`).then((res) => setList(res.data));
  }, []);
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
                  <h2 className="heading">View Presale</h2>
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
      <ViewPresale data={list} />
      <Newsletters />
      <Footer />
    </div>
  );
};

export default CreateItem;
