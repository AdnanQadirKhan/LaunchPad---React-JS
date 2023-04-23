import React, { useState } from 'react';
import img from '../../../assets/images/background/img-create-item.jpg';
import { enqueueSnackbar } from "notistack";
import http from "../../../Services/httpService";

const Create = () => {

    const [presale, setPresale] = useState({
        contractAddress: "",
        rate: "",
        listingRate: "",
        softcap: "",
        hardcap: "",
        minimum: "",
        maximum: "",
        liquidity: "",
        liquidityDate: "",
        // hasPresale: "",
        whitelistAddress: "",
        endTime: "",
        startTime: "",
        projectName: "",
        projectDescription: "",
        websiteLink: "",
        logo: "",
        videoLink: "",
        youtube: "",
        twitter: "",
        linkedin: "",
        telegram: "",
        discord: "",
        github: "",
        instagram: "",
        reddit: "",
    });
    const handleAdd = () => {
        const { contractAddress, rate, listingRate, softcap, hardcap, minimum, maximum, liquidity, liquidityDate, whitelistAddress, endTime, startTime, projectName, projectDescription, websiteLink, logo, videoLink, youtube, twitter, linkedin, telegram, discord, github, instagram, reddit } = presale;
        if (contractAddress === null || contractAddress.trim() === "" || rate === null || rate.trim() === "" || listingRate === null || listingRate.trim() === "" || liquidity === null || liquidity.trim() === "") {
            enqueueSnackbar("All fields are required", { variant: "info" });
            return;
        }
        http.post("presale", presale).then((res) => {
            // console.log(res.data);
            setPresale({
                contractAddress: "",
                rate: "",
                listingRate: "",
                softcap: "",
                hardcap: "",
                minimum: "",
                maximum: "",
                liquidity: "",
                liquidityDate: "",
                // hasPresale: "",
                whitelistAddress: "",
                endTime: "",
                startTime: "",
                projectName: "",
                projectDescription: "",
                websiteLink: "",
                logo: "",
                videoLink: "",
                youtube: "",
                twitter: "",
                linkedin: "",
                telegram: "",
                discord: "",
                github: "",
                instagram: "",
                reddit: "",
            });
            enqueueSnackbar("Successfully added", { variant: "success" });
            return;
        })
            .catch((error) => {
                console.log(error);
                enqueueSnackbar("Error adding Presale: " + error.message, {
                    variant: "error",
                });
                return;
            });
        return false;
    };
    const handleChange = (e) => {
        setPresale({
            ...presale,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <section className="tf-section create-item pd-top-0 mg-t-40">
            <div className="py-6 container">
                <div className="columns mt-4">
                    <div className="column is-flex-grow-2">
                        <div className="ant-card ant-card-bordered is-relative" style={{ overflowX: 'hidden' }}>
                            <div className="ant-card-body">
                                <article className="media pool-detail" style={{ position: 'relative' }}>
                                    <div className="is-relative">
                                        <img src="/static/media/ic-bsc.419dfaf2.png" alt="BSC" style={{ position: 'absolute', bottom: '0px', right: '8px', width: '28px', zIndex: 3, border: '1px solid rgba(249, 81, 146, 0.2)', borderRadius: '50%' }} />
                                        <figure className="media-left" style={{ border: '1px solid rgba(249, 81, 146, 0.2)', borderRadius: '50%', overflow: 'hidden' }}>
                                            <div className="is-relative" style={{ padding: '2px' }}>
                                                <div>
                                                    <p className="image is-48x48">
                                                        <img className="is-relative" src="#" alt="" style={{ filter: 'grayscale(0)', zIndex: 2 }} />
                                                    </p>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div className="content">
                                            <div className="is-flex is-align-items-center">
                                                <div className="is-flex-grow-1 is-flex single-title">
                                                    <h1 className="title mr-2">Oprah CEO Fair Launch</h1>
                                                    <div className="flex status-wrapper">
                                                        <div className="flex">
                                                            <a href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Oprah_CEO_0xA3...5b6B_Audit.pdf" className="is-flex tag is-small mr-2" target="_blank" rel="noopener nofollow noreferrer" style={{ backgroundColor: 'rgb(0, 188, 212)', color: 'rgb(255, 255, 255)' }}>Audit</a>
                                                        </div>
                                                        <div className="status-space">

                                                        </div>
                                                        <div className="flex">
                                                            <div className="mr-2">
                                                                <div className="subscription-bell is-clickable small" title="Add to favorite" style={{ lineHeight: '18px' }}>
                                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="10" width="10" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" clipRule="evenodd"></path></svg>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="is-flex status-dot inprogress">
                                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="8" cy="8" r="8"></circle></svg>
                                                                    <span style={{ whiteSpace: 'nowrap' }}>Sale Live</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="is-flex mt-1 mb-2">
                                                <div className="is-flex align-middle"><a href="https://oprahceo.net" rel="nofollow noreferrer" target="_blank" className="mr-4 is-size-5">
                                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                                        </path>
                                                    </svg></a>
                                                    <a href="https://twitter.com/oprahceo" rel="nofollow noreferrer" target="_blank" className="mr-4 is-size-5">
                                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                                            </path>
                                                        </svg>
                                                    </a>
                                                    <a href="https://t.me/OprahCEO" rel="nofollow noreferrer" target="_blank" className="mr-4 is-size-5"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z">
                                                        </path>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ant-typography pool-description">Introducing Oprah CEO - the crypto meme inspired by the iconic Oprah Winfrey! 🎉💰Oprah is the new CEO in town, and she's ready to take the world by storm. 💪 With her signature enthusiasm and passion, she's offering a whopping 4% BUSD rewards to all investors who join her crypto journey. 💸💸 But that's not all - Oprah CEO promises plenty of surprises along the way! 🎁🤩From unexpected announcements to exciting developments in the world of crypto, investors can expect to be kept on their toes at all times.
                                            </div>
                                        </div>
                                        <div className="ant-typography">
                                        </div>
                                    </div>
                                </article>
                                <div className="table-container mt-0">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Presale Address</td>
                                                <td className="has-text-right"><a href="#" target="_blank" rel="noreferrer nofollow"><span className="ant-typography has-text-primary">0x21e767C8FE3665894673583A46158627ee5063b6<div role="button" tabIndex="0" className="ant-typography-copy" aria-label="Copy" style={{ border: '0px', background: 'transparent', padding: '0px', lineHeight: 'inherit', display: 'inline-block' }}><span role="img" aria-label="copy" className="anticon anticon-copy"><svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg></span></div></span></a></td></tr><tr><td>Token Name</td><td className="has-text-right">Oprah CEO</td></tr><tr><td>Token Symbol</td><td className="has-text-right">OPRAH</td></tr><tr><td>Token Decimals</td><td className="has-text-right">9</td>
                                            </tr>
                                            <tr>
                                                <td>Token Address</td>
                                                <td className="has-text-right"><a className="mr-1" href="#" target="_blank" rel="noreferrer nofollow"><span className="ant-typography has-text-primary">0xA3a122766d611a96c929C99D60A2b7e622705b6B
                                                    <div role="button" tabIndex="0" className="ant-typography-copy" aria-label="Copy" style={{ border: '0px', background: 'transparent', padding: '0px', lineHeight: 'inherit', display: 'inlineBlock' }}>
                                                        <span role="img" aria-label="copy" className="anticon anticon-copy">
                                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z">
                                                            </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </span>
                                                </a>
                                                    <br />
                                                    <p className="help is-info">(Do not send BNB to the token address!)</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Total Supply</td>
                                                <td className="has-text-right">420,000,000,000,000,000 OPRAH</td>
                                            </tr>
                                            <tr>
                                                <td>Tokens For Presale</td>
                                                <td className="has-text-right">127,315,594,476,254,640 OPRAH</td>
                                            </tr>
                                            <tr>
                                                <td>Tokens For Liquidity</td>
                                                <td className="has-text-right">61,684,405,523,745,380 OPRAH</td></tr><tr><td>Initial Market Cap (estimate)</td><td className="has-text-right">$2,329</td></tr><tr><td>Soft Cap</td><td className="has-text-right">10 BNB</td></tr><tr><td>Presale Start Time</td><td className="has-text-right">2023.04.22 15:00 (UTC)</td>
                                            </tr>
                                            <tr>
                                                <td>Presale End Time</td>
                                                <td className="has-text-right">2023.04.25 15:00 (UTC)</td>
                                            </tr>
                                            <tr>
                                                <td>Listing On</td>
                                                <td className="has-text-right"><a className="mr-1" href="#" target="_blank" rel="noreferrer nofollow">Pancakeswap</a></td></tr><tr><td>Liquidity Percent</td>
                                                <td className="has-text-right">51%</td>
                                            </tr><tr><td>Liquidity Lockup Time</td>
                                                <td className="has-text-right">365 days after pool ends</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '24px' }}>

                        </div>
                        <div className="ant-card ant-card-bordered"><div className="ant-card-head">
                            <div className="ant-card-head-wrapper">
                                <div className="ant-card-head-title">Token Metrics
                                </div>
                            </div>
                        </div>
                            <div className="ant-card-body">
                                <div className="has-text-centered">
                                    <div style={{maxWidth: '400px', margin: 'auto', height: '300px', overflowY: 'hidden' }}>
                                        <div className="TokenMetric_root__29Tdv">
                                            <canvas height="400" width="400" data-testid="canvas" role="img" style={{ display: 'block', boxSizing: 'border-box', height: '400px', width: '400px' }}></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="LockRecord_root__31Eay">
                            <div className="ant-card ant-card-bordered">
                                <div className="ant-card-head">
                                    <div className="ant-card-head-wrapper">
                                        <div className="ant-card-head-title">Lock records</div>
                                        <div className="ant-card-extra">
                                            <div className="has-text-right"><a href="/pinklock/detail/0xA3a122766d611a96c929C99D60A2b7e622705b6B?chain=BSC">View All</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-card-body"><div className="ant-spin-nested-loading"><div className="ant-spin-container"><ul className="ant-list-items"><li className="ant-list-item"><div className="LockRecord_tvl__1cBpD"><strong>Amount</strong></div><div className="LockRecord_tvl__1cBpD"><strong>Unlock time(UTC)</strong></div>
                                    <div style={{opacity: '0' }}>View
                                    </div>
                                    </li>
                                    </ul>
                                    <div className="ant-list ant-list-split">
                                        <div className="ant-spin-nested-loading">
                                            <div className="ant-spin-container">
                                                <ul className="ant-list-items">
                                                    <li className="ant-list-item">
                                                        <div className="LockRecord_tvl__1cBpD">
                                                            <div className="LockRecord_value__1gWYF">20,999,999,999,999,986.92
                                                            </div>
                                                        </div>
                                                        <div className="LockRecord_tvl__1cBpD">2023.05.25 15:00
                                                        </div>
                                                        <a href="#">View</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div style={{height: '24px'}}></div>
                        <div className="ant-card ant-card-bordered">
                            <div className="ant-card-head">
                                <div className="ant-card-head-wrapper">
                                    <div className="ant-card-head-title">Frequently Asked Question</div>
                                </div>
                            </div>
                            <div className="ant-card-body">
                                <div className="ant-collapse ant-collapse-icon-position-left ant-collapse-ghost">
                                    <div className="ant-collapse-item">
                                        <div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false">
                                            <span role="img" aria-label="right" className="anticon anticon-right ant-collapse-arrow">
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
                                            </span>What is KYC?
                                        </div>
                                    </div>
                                    <div className="ant-collapse-item"><div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false"><span role="img" aria-label="right" className="anticon anticon-right ant-collapse-arrow"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span>What is an Audit?</div>
                                    </div>
                                    <div className="ant-collapse-item">
                                        <div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false"><span role="img" aria-label="right" className="anticon anticon-right ant-collapse-arrow"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span>What is SAFU?</div></div><div className="ant-collapse-item"><div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false"><span role="img" aria-label="right" className="anticon anticon-right ant-collapse-arrow"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span>What is Doxx?</div></div><div className="ant-collapse-item">
                                        <div className="ant-collapse-header" role="button" tabIndex="0" aria-expanded="false"><span role="img" aria-label="right" className="anticon anticon-right ant-collapse-arrow"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span>What is DYOR?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-flex-grow-1">
                        <div className="is-relative">
                            <div className="ant-card ant-card-bordered is-relative">
                                <div className="ant-card-body">
                                    <div data-show="true" className="ant-alert ant-alert-warning ant-alert-no-icon" role="alert" style={{ marginBottom: '10px' }}>
                                        <div className="ant-alert-content">
                                            <div className="ant-alert-message">Make sure the website is pinksale.finance!</div>
                                            <div className="ant-alert-description">
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="has-text-centered"><p className="mb-2">Presale Ends In</p>
                                            <div className="has-text-centered"><strong><span className="p-2 has-background-danger-light mr-2" style={{borderRadius: '4px' }}>02</span><span className="p-2 has-background-danger-light mr-2" style={{ borderRadius: '4px' }}>10</span><span className="p-2 has-background-danger-light mr-2" style={{ borderRadius: '4px'}}>35</span><span className="p-2 has-background-danger-light mr-2" style={{ borderRadius: '4px' }}>13</span></strong></div></div><div className="pb-4"><div className="ant-progress ant-progress-line ant-progress-status-active ant-progress-default mt-4 mb-2">
                                                <div className="ant-progress-outer">
                                                    <div className="ant-progress-inner">
                                                        <div className="ant-progress-bg" style={{ width: '47.6238%', height: '15px', background: 'rgba(72, 199, 116, 0.5)' }}></div>
                                                        <div className="ant-progress-success-bg" style={{ width: '47.6238%', height: '15px', backgroundColor: 'rgb(72, 199, 116)' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="is-flex is-align-items-center is-size-7">
                                                <div className="is-flex-grow-1">4.762382989984559 BNB</div>
                                                <div className="is-flex-grow-1 has-text-right">10 BNB</div>
                                            </div>
                                        </div>
                                        <div className="field"><label className="label">Amount </label>
                                            <div className="control"><div style={{ position: 'relative' }}>
                                                <input className="input" type="number" placeholder="0.0" value="" /><a className="mr-2" style={{ position: 'absolute', right: '8px', top: '4px' }}><b>MAX</b></a>
                                            </div>
                                            </div>
                                        </div>
                                        <button type="button" className="ant-btn ant-btn-primary"><span>Connect Wallet</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div style={{height: '24px'}}></div><div className="ant-card ant-card-bordered"><div className="ant-card-body"><div className="table-container"><table><tbody><tr><td>Status</td><td className="has-text-right has-text-primary">inprogress</td></tr>
                            <tr>
                                <td>Current Rate</td><td className="has-text-right">1 BNB = 26,733,590,041,792,804 OPRAH</td></tr><tr><td>Total Contributors</td>
                                <td className="has-text-right">5</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                        </div>
                        </div>
                        <div style={{ height: '24px' }}></div><div className="ant-card ant-card-bordered">
                            <div className="ant-card-head">
                                <div className="ant-card-head-wrapper">
                                    <div className="ant-card-head-title">Newsletters
                                    </div>
                                    <div className="ant-card-extra">
                                        <label className="ant-checkbox-wrapper">
                                            <span className="ant-checkbox">
                            <input type="checkbox" className="ant-checkbox-input" value="" />
                            <span className="ant-checkbox-inner">

                            </span>
                            </span>
                            <span>Never show again</span>
                            </label>
                        </div>
                        </div>
                        </div>
                            <div className="ant-card-body"><p>Sign up our mailing list to receive our new presales, features, tips and reviews for next 100x projects.</p><form className="mt-4">
                                <div className="field">
                                    <div className="control">
                                        <input type="email" className="input" name="email" id="email" placeholder="Enter your email address" value="" />

                                    </div>
                                </div>
                                <div className="field"><div className="control"><button type="submit" className="ant-btn ant-btn-primary flex items-center" disabled=""><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg><span className="ml-1">Subscribe</span></button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="columns">
                    <div className="column is-flex-grow-2">
                        <div className="ant-card ant-card-bordered">
                            <div className="ant-card-body">
                                <div id="disqus_thread"><iframe id="dsq-app3518" name="dsq-app3518" allowtransparency="true" frameborder="0" scrolling="no" tabIndex="0" title="Disqus" width="100%" src="#" style={{ width: '1px !important', minWidth: '100% !important', border: 'none !important', overflow: 'hidden !important', height: '883px !important' }} horizontalscrolling="no" verticalscrolling="no"></iframe><iframe id="indicator-north" name="indicator-north" allowtransparency="true" frameborder="0" scrolling="no" tabIndex="0" title="Disqus" style={{ width: '658px !important', border: 'none !important', overflow: 'hidden !important', top: '0px !important', minWidth: '658px !important', maxWidth: '658px !important', position: 'fixed !important', zIndex: '2147483646 !important', height: '0px !important', minHeight: '0px !important', maxHeight: '0px !important', display: 'none !important'}}></iframe>
                                    <iframe id="indicator-south" name="indicator-south" allowtransparency="true" frameborder="0" scrolling="no" tabIndex="0" title="Disqus" style={{ width: '658px !important', border: 'none !important', overflow: 'hidden !important', bottom: '0px !important', minWidth: '658px !important', maxWidth: '658px !important', position: 'fixed !important', zIndex: '2147483646 !important', height: '0px !important', minHeight: '0px !important', maxHeight: '0px !important', display: 'none !important' }}>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-flex-grow-1">
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Create;
