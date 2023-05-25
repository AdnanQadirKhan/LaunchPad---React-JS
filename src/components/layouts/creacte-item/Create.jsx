import React, { useEffect, useState } from 'react';
import img from '../../../assets/images/background/img-create-item.jpg';
import { enqueueSnackbar } from "notistack";
import http from "./../../../Services/httpService";
import AddressContext from '../../../AddressContext';
import { useContext } from 'react';
import { ethers } from 'ethers';
import moment from "moment"
import Abi from "../../../contracts/contractAbi.json";

const Create = () => {
    
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPresale({
          ...presale,
          logo: {
            data: base64,
            contentType: file.type
          }
        });
    };
      

    const { address, setAddress } = useContext(AddressContext);
    const [presale, setPresale] = useState({
        contractAddress: "",
        rate: null,
        listingRate: null,
        softcap: null,
        hardcap: null,
        minimum: null,
        maximum: null,
        liquidity: null,
        liquidityDate: null,
        // hasPresale: "",
        whitelistAddress: null,
        endTime: null,
        startTime: null,
        projectName: "",
        projectDescription: "",
        websiteLink: "",
        // name: "",
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
    const [Status, setStatus] = useState("");
    const StartTimeFunc = (e) => {
        const dateTimeValue = e.target.value;
        console.log("Selected date and time:", dateTimeValue);
        // parse the selected date and time string into a moment object using format 'YYYY-MM-DDTHH:mm'
        const selectedDateTime = moment(dateTimeValue, "YYYY-MM-DDTHH:mm");
        console.log("Selected date and time as moment object:", selectedDateTime);
        // convert the moment object to a unix timestamp in seconds
        const timestamp = selectedDateTime.unix();
        console.log("Start Unix timestamp:", timestamp);
        setPresale({
            ...presale,
            [e.target.name]: timestamp,
        });
    }
    const EndTimeFunc = (e) => {
        const dateTimeValue = e.target.value;
        console.log("Selected date and time:", dateTimeValue);
        
        // parse the selected date and time string into a moment object using format 'YYYY-MM-DDTHH:mm'
        const selectedDateTime = moment(dateTimeValue, "YYYY-MM-DDTHH:mm");
        console.log("Selected date and time as moment object:", selectedDateTime);
        
        // convert the moment object to a unix timestamp in seconds
        const endTimestamp = selectedDateTime.unix();
        console.log("End Unix timestamp:", endTimestamp);
        
        // Update the state with the selected date and timestamp
        setPresale({
          ...presale,
          [e.target.name]: endTimestamp,
        });
        
        // Display the selected date on the frontend
        const selectedDate = selectedDateTime.format("YYYY-MM-DD");
        document.getElementById("endTime").innerText = selectedDate;
      };
      

    async function getAllData() {
        console.log('Start Time: ', presale.startTime);
        console.log('End Time: ', presale.endTime);
        // event.preventDefault();
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // setAddress(accounts[0]);
        if (typeof window.ethereum !== 'undefined') {
            setStatus("Wait...")

            try {
                const data = "0xF40c96ab4a69adDf66F4BA4454aD8E7013328301";
                const providers = new ethers.providers.Web3Provider(window.ethereum);
                await window.ethereum.enable();
                const signer = providers.getSigner();
                const contract = new ethers.Contract(data, Abi, signer);

                // console.log(
                //     '0x1BcFB54fFdC031e56b8aeCE05c8b85F14a0CF302',
                //     presale.rate,
                //     presale.listingRate,
                //     presale.softcap,
                //     presale.hardcap,
                //     presale.minimum,
                //     presale.maximum,
                //     presale.startTime,
                //     123123123,
                //     45,
                //     presale.liquidity,
                //     false,
                //     ['0x1BcFB54fFdC031e56b8aeCE05c8b85F14a0CF302'],
                //     466743434563

                // )

                const sendTX = await contract.createPresale(

                    presale.contractAddress.toString(),
                    presale.rate,
                    presale.listingRate,
                    presale.softcap,
                    presale.hardcap,
                    presale.minimum,
                    presale.maximum,
                    presale.startTime,
                    presale.endTime,
                    presale.token,
                    presale.liquidity,
                    presale.whitelistAddress == null ? false : true,
                    ['0x1BcFB54fFdC031e56b8aeCE05c8b85F14a0CF302'],
                    466743434563
                )
                // await sendTX.wait()
                console.log(sendTX)
                const check = sendTX.toString()
                console.log(check)
                setStatus("successfully sent transaction")
                return true;
            }
            catch (error) {
                if (presale.contractAddress === '') {
                    setStatus("Please fill all the fields")
                }

                else {
                    console.log(error)
                    setStatus("Something went wrong")
                }
                return false;
            }
            // return false;
        }
    }
    const handleAdd = async () => {
        const { contractAddress, rate, listingRate, softcap, hardcap, minimum, maximum, liquidity, liquidityDate, whitelistAddress, endTime, startTime, projectName, projectDescription, websiteLink, name, logo, videoLink, youtube, twitter, linkedin, telegram, discord, github, instagram, reddit } = presale;
        if (contractAddress === null || contractAddress.trim() === "" || rate === null || rate.trim() === "" || listingRate === null || listingRate.trim() === "" || liquidity === null || liquidity.trim() === "") {
            enqueueSnackbar("All fields are required", { variant: "info" });
            return;
        }
        const success = await getAllData();
        if (success) {
            enqueueSnackbar("Failed to add data in blockchain", { variant: "info" });
            return;
        }

        http.post("presale", { walletAddress: address[0], ...presale }).then((res) => {
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
                // name: "",
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
            enqueueSnackbar("Successfully Added", { variant: "success" });
            return;
        }).catch((error) => {
            console.log(error);
            enqueueSnackbar(error.response.data, {
                variant: "info",
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
                                    <h3>Create Presale</h3>
                                    <p className="desc">Create a custom presale for your token</p>
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
                                            value={presale.maximum}
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
                                            value={presale.liquidityDate}
                                            type="date"
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
                                        value={presale.whitelistAddress}
                                        onChange={(e) => handleChange(e)}
                                        tabIndex="4"
                                        placeholder="Whitelisted Wallet Address list" aria-required="true"></textarea>

                                    <p className="desc"> .</p>
                                    <h4 className="desc">⫸ Presale Schedule</h4>
                                    <p className="desc"> .</p>
                                    <p className="desc">Start Time:</p>
                                    <div className="input-group">
                                        <input
                                            id="startTime"
                                            name="startTime"
                                            type="datetime-local"
                                            value={presale.startTime}
                                            onChange={(e) => StartTimeFunc(e)}
                                            placeholder="Liquidity % for PancakeSwap" required />
                                    </div>
                                    <p className="desc">End Time:</p>
                                    <div className="input-group">
                                        <input
                                            id="endTime"
                                            name="endTime"
                                            value={presale.endTime}
                                            onChange={(e) => EndTimeFunc(e)}
                                            type="datetime-local" placeholder="Liquidity % for PancakeSwap" required />
                                    </div>

                                    <p className="desc"> .</p>
                                    <h4 className="desc">⫸ Project Details</h4>
                                    <p className="desc"> .</p>
                                    <p className="desc">Enter your project details</p>
                                    <div className="input-group">
                                        <input
                                            id="projectName"
                                            name="projectName"
                                            value={presale.projectName}
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            placeholder="Project Name" required />
                                    </div>
                                    <div className="input-group">
                                        <textarea
                                            id="projectDescription"
                                            onChange={(e) => handleChange(e)}
                                            value={presale.projectDescription}
                                            name="projectDescription"
                                            tabIndex="4"
                                            placeholder="Project Description" aria-required="true"></textarea>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            id="websiteLink"
                                            name="websiteLink"
                                            type="text"
                                            onChange={(e) => handleChange(e)}
                                            value={presale.websiteLink}
                                            placeholder="Website Link" required />
                                        <label className="uploadFile">
                                            <span className="filename">{presale.logo  ? "Uploaded" : "Upload Logo"} </span>
                                            <input
                                                type="file"
                                                className="inputfile form-control"
                                                name="logo"
                                                id='file-upload'
                                                accept='.jpeg, .png, .jpg'
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
                                            type="text"
                                            value={presale.videoLink}
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
                                            value={presale.telegram}
                                            type="text"
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

                                        className="sc-button style letter style-2"><span>Create Presale</span>{" "} </button>
                                </div>
                            </div>
                            {/* <div className="form-background">
                            <img src={img} alt="Bidzen" />
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container my-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Create Presale</h3>
                                    <p className="desc">Create a custom presale for your token</p>
                                </div>
                                <div id="create-item-1"
                                // action="#" method="GET" acceptCharset="utf-8"
                                >
                                   
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





                                    <button
                                        // name="submit" 
                                        // type="submit" 
                                        // id="submit"
                
                                        className="sc-button style letter style-2"><span>Create Presale</span>{" "} </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
        </section>

    );
};

export default Create;

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const base64Data = fileReader.result.split(',')[1]; // Extract Base64 data from the result
        resolve(base64Data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  