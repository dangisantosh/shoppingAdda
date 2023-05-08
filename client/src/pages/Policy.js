import React from "react";
import Layout from "../components/Layout/Layout.js";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>@policy</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
