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
                                  
                                    <textarea
                                        id="whitelistAddress"
                                        name="whitelistAddress"
                                        onChange={(e) => handleChange(e)}
                                        tabIndex="4"
                                        value={presale.whitelistAddress}
                                        placeholder="Whitelisted Wallet Address list" aria-required="true"></textarea>
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
