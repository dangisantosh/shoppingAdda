import React from "react";
import Layout from "../components/Layout/Layout.js";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For queries and information about our products, please reach us
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.shoppingadda.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "E-Commerce app - shop now",
  description: "Mern Stack Project",
  keywords: "mern,react,node,mongodb",
  author: "Ravi Shankar Yadav",
};

export default Contact;
