import React, { useState } from 'react';
import img from '../../../assets/images/background/img-create-item.jpg';
import { enqueueSnackbar } from "notistack";
import http from "../../../Services/httpService";

const Create = (props) => {
    const data = props.data;
    console.log(data);

    
    return (
        <section className="tf-section create-item pd-top-0 mg-t-40">
            <div className="row m-0 p-4">

                    <div className="col col-lg-8 p-4 my-2" style={{ backgroundColor: 'var(--color-3)' }}>
                        <div className="d-flex p-4">

                            <h3>{data.projectName}</h3>
                            <span className="badge badge-primary my-auto ml-4 mr-2">Audit</span>
                            <span className="badge badge-danger my-auto mx-2">KYC</span>
                            <span className="badge badge-success my-auto mx-2">Upcoming</span>
                            <span className="my-auto ml-auto "><i class="fa-solid fa-bell"></i></span>
                        </div>
                        <p className="p-4">{data.projectDescription}</p>


                        <div className="table table-primary p-4">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Presale Address</td>
                                        <td>
                                            <a href="#" target="_blank" rel="noreferrer nofollow">
                                                <span className="">0x21e767C8FE3665894673583A46158627ee5063b6<div role="button" tabIndex="0" aria-label="Copy" style={{ border: '0px', background: 'transparent', padding: '0px', lineHeight: 'inherit', display: 'inline-block' }}>
                                                    <span role="img" aria-label="copy">
                                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Token Name</td>
                                        <td>Oprah CEO</td></tr>
                                    <tr>
                                        <td>Token Symbol</td>
                                        <td>OPRAH</td>
                                    </tr>
                                    <tr>
                                        <td>Token Decimals</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>Token Address</td>
                                        <td><a className="mr-1" href="#" target="_blank" rel="noreferrer nofollow">
                                            <span className="">0xA3a122766d611a96c929C99D60A2b7e622705b6B
                                                <div role="button" tabIndex="0" aria-label="Copy" style={{ border: '0px', background: 'transparent', padding: '0px', lineHeight: 'inherit', display: 'inlineBlock' }}>
                                                    <span role="img" aria-label="copy">
                                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </span>
                                        </a>
                                            <br />
                                            <p className="">(Do not send BNB to the token address!)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Total Supply</td>
                                        <td>420,000,000,000,000,000 OPRAH</td>
                                    </tr>
                                    <tr>
                                        <td>Tokens For Presale</td>
                                        <td>127,315,594,476,254,640 OPRAH</td>
                                    </tr>
                                    <tr>
                                        <td>Tokens For Liquidity</td>
                                        <td>61,684,405,523,745,380 OPRAH</td>
                                    </tr>
                                    <tr>
                                        <td>Initial Market Cap (estimate)</td>
                                        <td>$2,329</td>
                                    </tr>
                                    <tr>
                                        <td>Soft Cap</td>
                                        <td>{data.softcap} BNB</td>
                                    </tr>
                                    <tr>
                                        <td>Presale Start Time</td>
                                        <td>{data.startTime} (UTC)</td>
                                    </tr>
                                    <tr>
                                        <td>Presale End Time</td>
                                        <td>{data.endTime} (UTC)</td>
                                    </tr>
                                    <tr>
                                        <td>Listing On</td>
                                        <td><a className="mr-1" href="#" target="_blank" rel="noreferrer nofollow">Pancakeswap</a></td>
                                    </tr>
                                    <tr>
                                        <td>Liquidity Percent</td>
                                        <td>{data.liquidity} %</td>
                                    </tr>
                                    <tr>
                                        <td>Liquidity Lockup Time</td>
                                        <td>{data.liquidityDate}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                        </div>


                    </div>

                <div className="col col-lg-4">
                    <div className="container p-4 my-2" style={{ backgroundColor: 'var(--color-3)' }}>
                        <div className="text-center my-2">
                            <h6 className="my-4">Presale Starts In </h6>
                            <strong className="mt-4">
                                <span className="p-2 mx-2" style={{ borderRadius: '4px', backgroundColor: '#c73bf9' }}>03</span>
                                <span className="p-2 mx-2" style={{ borderRadius: '4px', backgroundColor: '#c73bf9' }}>01</span>
                                <span className="p-2 mx-2" style={{ borderRadius: '4px', backgroundColor: '#c73bf9' }}>41</span>
                                <span className="p-2 mx-2" style={{ borderRadius: '4px', backgroundColor: '#c73bf9' }}>36</span>
                            </strong>

                            <div style={{ width: '0%', height: '15px', backgroundColor: 'rgb(72, 199, 116)' }}>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-info text-start">{data.minimum} BNB</span>
                            <span className="text-info text-end">{data.maximum} BNB</span>
                        </div>
                        <label className="p-4">Amount</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder='0.0'
                        />
                        <button className="btn btn-light my-4">Connect Wallet</button>

                    </div>
                    <div className="container p-4 my-4" style={{ backgroundColor: 'var(--color-3)' }}>
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-start">Status</span>
                            <span className="text-success text-end">Incoming</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-start">Current Rate</span>
                            <span className="text-end">{data.rate}</span>
                        </div>
                        <hr />



                    </div>
                </div>

            </div>

        </section>
    );
};

export default Create;
