import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header-1';
// import dataHotCollection2 from '../../assets/fake-data/dataHotCollection2';
// import TopSeller from '../../components/layouts/creacte-item/TopSeller';
import RequestAudit from '../../components/layouts/edit-item/EditAuditForm';
import { Newsletters } from '../../components/layouts/home/Newsletters';
import Footer from '../../components/footer/FooterStyle2';

const CreateItem = () => {
return <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Request Audit</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Audit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <TopSeller data={dataHotCollection2} /> */}
    <RequestAudit />
    <Newsletters />
    <Footer />
  </div>;
};

export default CreateItem;
