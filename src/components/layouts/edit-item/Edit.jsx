import React, { useState, useEffect } from 'react';
import img from '../../../assets/images/background/img-create-item.jpg';
import { enqueueSnackbar } from "notistack";
import http from "./../../../Services/httpService";
import { useParams } from 'react-router-dom';

const Create = () => {
    const { id } = useParams();
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
    useEffect(() => {
         http.get(`presale/${id}`).then(res => {
                console.log(res.data);
                setPresale(res.data);
            });
    }, [id]);

    const handleAdd = () => {
        const { contractAddress, rate, listingRate, softcap, hardcap, minimum, maximum, liquidity, liquidityDate, whitelistAddress, endTime, startTime, projectName, projectDescription, websiteLink, logo, videoLink, youtube, twitter, linkedin, telegram, discord, github, instagram, reddit } = presale;
        if (contractAddress === null || contractAddress.trim() === "" || rate === null || rate.trim() === "" || listingRate === null || listingRate.trim() === "" || liquidity === null || liquidity.trim() === "") {
            enqueueSnackbar("All fields are required", { variant: "info" });
            return;
        }
        http.post(`presale/${id}`, presale).then((res) => {
            // console.log(res.data);
  
            enqueueSnackbar("Successfully Updated", { variant: "success" });
            return;
        })
            .catch((error) => {
                console.log(error);
                enqueueSnackbar("Error updating Presale: " + error.message, {
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Edit Presale</h3>
                                    <p className="desc">Edit a custom presale for your token</p>
                                </div>
                                <div id="create-item-1"
                                // action="#" method="GET" acceptCharset="utf-8"
                                >
                                    {/* <label className="uploadFile">
                                    <span className="filename">Choose Item</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label> */}
                                    <div className="input-group">
                                        <input
                                            // id="comment-message"
                                            name="contractAddress"
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            value={presale.contractAddress}
                                            placeholder="Contract Address"
                                            required
                                        />
                                    </div>
                                    <p className="desc"> .</p>
                                    <h4 className="desc">⫸ Presale Details</h4>
                                    <p className="desc"> .</p>
                                    <p className="desc">The Presale Rate defines how many tokens contributors get per BNB, the listing Rate sets how many tokens per BNB on PancakeSwap</p>
                                    <div className="input-group">
                                        <input
                                            name="rate"
                                            type="number"
                                            onChange={(e) => handleChange(e)}
                                            value={presale.rate}
                                            placeholder="Presale Rate"
                                            required />
                                        <input
                                            name="listingRate"
                                            onChange={(e) => handleChange(e)}
                                            type="number"
                                            value={presale.listingRate}
                                            placeholder="Listing Rate" required />
                                    </div>
                                    <p className="desc">SoftCap is the minimum amount required for a successful presale, HardCap is the target limit of raised capital</p>
                                    <div className="input-group">
                                        <input
                                            name="softcap"
                                            onChange={(e) => handleChange(e)}
                                            type="number"
                                            value={presale.softcap}
                                            placeholder="Softcap"
                                            required />
                                        <input
                                            name="hardcap"
                                            onChange={(e) => handleChange(e)}
                                            value={presale.hardcap}
                                            type="number"
                                            placeholder="Hardcap" required />
                                    </div>
                                    <p className="desc">Minimum and maximum BNB each wallet can contribute</p>
                                    <div className="input-group">
                                        <input
                                            name="minimum"
                                            onChange={(e) => handleChange(e)}
                                            type="number"
                                            value={presale.minimum}
                                            placeholder="Minumum" required />
                                        <input
                                            name="maximum"
                                            type="number"
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Maximum" required />
                                    </div>

                                    <p className="desc">Liquidity % going to PancakeSwap and its unlock date</p>
                                    <div className="input-group">
                                        <input
                                            name="liquidity"
                                            type="number" placeholder="Liquidity % for PancakeSwap"
                                            onChange={(e) => handleChange(e)}
                                            value={presale.liquidity}
                                            required />
                                        <input
                                            name="liquidityDate"
                                            onChange={(e) => handleChange(e)}
                                            value={new Date(presale.liquidityDate).toLocaleString('sv', { timeZone: 'UTC' }).replace(' ', 'T')}

                                            type="datetime-local"
                                            placeholder="Unlock Date" required />
                                    </div>
                                    <div className="input-group style-2 ">
                                        {/* <div className="btn-check">
                                            <input
                                                type="radio"
                                                onChange={(e) => handleChange(e)}

                                                id="hasPresale"
                                                name="hasPresale:" />
                                            <label htmlFor="sale">Whitelist Presale</label>
                                        </div> */}
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
                                    <textarea
                                        id="whitelistAddress"
                                        name="whitelistAddress"
                                        onChange={(e) => handleChange(e)}
                                        tabIndex="4"
                                        value={presale.whitelistAddress}
                                        placeholder="Whitelisted Wallet Address list" aria-required="true"></textarea>

                                    <p className="desc"> .</p>
                                    <h4 className="desc">⫸ Presale Schedule</h4>
                                    <p className="desc"> .</p>
                                    <p className="desc">Start Time:</p>
                                    <div className="input-group">
                                        <input
                                            name="startTime"
                                            type="datetime-local"
                                            onChange={(e) => handleChange(e)}
                                            value={new Date(presale.startTime).toLocaleString('sv', { timeZone: 'UTC' }).replace(' ', 'T')}
                                            placeholder="Liquidity % for PancakeSwap" required />
                                    </div>
                                    <p className="desc">End Time:</p>
                                    <div className="input-group">
                                        <input
                                            name="endTime"
                                            onChange={(e) => handleChange(e)}
                                            type="datetime-local" placeholder="Liquidity % for PancakeSwap"
                                            value={new Date(presale.endTime).toLocaleString('sv', { timeZone: 'UTC' }).replace(' ', 'T')}
                                            required />
                                    </div>

                                    <p className="desc"> .</p>
                                    <h4 className="desc">⫸ Project Details</h4>
                                    <p className="desc"> .</p>
                                    <p className="desc">Enter your project details</p>
                                    <div className="input-group">
                                        <input
                                            id="projectName"
                                            name="projectName"
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            value={presale.projectName}
                                            placeholder="Project Name" required />
                                    </div>
                                    <div className="input-group">
                                        <textarea
                                            id="projectDescription"
                                            onChange={(e) => handleChange(e)}
                                            name="projectDescription"
                                            value={presale.projectDescription}
                                            tabIndex="4"
                                            placeholder="Project Description" aria-required="true"></textarea>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            id="websiteLink"
                                            name="websiteLink"
                                            value={presale.websiteLink}
                                            type="text"
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Website Link" required />
                                        <label className="uploadFile">
                                            <span className="filename">Upload Logo</span>
                                            <input
                                                type="file"
                                                // value={presale.logo}
                                                className="inputfile form-control"
                                                name="logo"
                                                onChange={(e) => handleChange(e)}
                                            />
                                            <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                        </label>
                                    </div>
                                    <p className="desc">Add link to your project's introduction YouTube video to be embedded on your presale page</p>
                                    <div className="input-group">
                                        <input
                                            id="videoLink"
                                            name="videoLink"
                                            value={presale.videoLink}
                                            type="text"
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Introductory Video Link"
                                            required />
                                    </div>
                                    <p className="desc">Add your social links</p>
                                    <div className="input-group">
                                        <input name="youtube"
                                            type="text"
                                            placeholder="YouTube"
                                            value={presale.youtube}
                                            onChange={(e) => handleChange(e)}
                                            required />
                                        <input
                                            name="twitter"
                                            value={presale.twitter}
                                            type="text"
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Twitter" required />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            name="telegram"
                                            type="text"
                                            value={presale.telegram}
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Telegram" required />
                                        <input
                                            name="discord"
                                            value={presale.discord}
                                            onChange={(e) => handleChange(e)}
                                            type="text" placeholder="Discord"
                                            required />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            name="github"
                                            value={presale.github}
                                            type="text"
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Github" required />
                                        <input
                                            name="instagram"
                                            value={presale.instagram}
                                            type="text"
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Instagram" required />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            name="linkedin"
                                            value={presale.linkedin}
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            placeholder="LinkedIn" required />
                                        <input
                                            name="reddit"
                                            value={presale.reddit}
                                            type="text"
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Reddit"
                                            required />
                                    </div>



                                    {/* <div className="input-group">
                                    <input name="name" type="text" placeholder="Audit Report Link" required />
                                    <label className="uploadFile">
                                    <span className="filename">Upload PDF</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label>
                                    <input name="number" type="text" placeholder="Start date" required />
                                </div> */}


                                    <button
                                        // name="submit" 
                                        // type="submit" 
                                        // id="submit"
                                        onClick={handleAdd}

                                        className="sc-button style letter style-2"><span>Edit Presale</span>{" "} </button>
                                </div>
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
