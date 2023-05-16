import React, { useState, useEffect } from "react";
import img from "../../../assets/images/background/img-create-item.jpg";
import { enqueueSnackbar } from "notistack";
import http from "../../../Services/httpService";

const Create = () => {
  const [kyc, setKYC] = useState([]);
  const getList = () => {
    http.get("kyc").then(res => {
      console.log(res.data);
      setKYC(res.data || [])
    })
  }
  useEffect(() => {
    getList();
  }, []);

  const handleAction = (status, id) => {
    http.post(`kyc/${id}`, { status: status }).then(res => {
      if (res.status === 200) {

        getList();
        return enqueueSnackbar(res.data, { variant: "success" });
      }
    })
  }

  return (
    <section className="tf-section create-item pd-top-0 mg-t-40">
      <div className="container">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Presale</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {kyc.length !== 0 ? kyc.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.presaleLink}</td>
                <td>
                  <button className="btn btn-success mx-2" onClick={() => handleAction("active", item._id)}><i className="fa-solid fa-check"></i></button>
                  {/* <button className="btn btn-danger" onClick={() => handleAction("inactive", item._id)}><i className="fa-solid fa-xmark"></i></button> */}
                </td>
              </tr>
            )) : <tr className="text-center">No requests</tr>


            }

          </tbody>
        </table>
      </div>

    </section>
  );
};

export default Create;
