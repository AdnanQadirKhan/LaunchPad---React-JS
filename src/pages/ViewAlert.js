import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import LatestCollection from "../components/layouts/explore/LatestCollection";
import dataCollections from "../assets/fake-data/dataCollections";
import PopularCollection from "../components/layouts/explore/PopularCollectionAlert";
import dataPopularCollection from "../assets/fake-data/dataPopularCollection";
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from "../components/footer/FooterStyle2";
import http from "../Services/httpService";
import AddressContext from '../AddressContext';
import { useContext } from 'react';

const ViewAlert = () => {
    const { address, setAddress } = useContext(AddressContext);
    const [list, setList] = useState([]);
    console.log(list);
    useEffect(() => {
        http.get(`alert/${address[0]}`).then((res) => 
        { setList(res.data); console.log(res.data) });

    }, []);
    console.log(list);
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
                                    <h2 className="heading">Alerts</h2>
                                </div>
                                <div className="breadcrumbs">
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>Alerts</li>
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

export default ViewAlert;
