import React from "react";
import Layout from "../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={"About us - Shopping Adda"}>
      <div className="row contactus ">
        <div className="col-md-6">
          <img
            src="https://iili.io/Hkkr8E7.md.jpg" 
            alt="contactus"
            style={{ width: "60%", borderRadius:"10px",marginLeft:"16%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify ">
            <h1><b>Santosh Dangi</b><br></br></h1>
            <h2>Education</h2><hr/>
            <h5>Indain Institute of Information Technology Design and Manufacturing Kancheepuram</h5>
            <h6>Khilchipur, District: Rajgarh, Madhya Pradesh, 465679</h6>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
