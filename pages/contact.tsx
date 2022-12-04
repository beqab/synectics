import React from "react";
import Layout from "../components/Layout";
import ContactSection from "../components/pages/home/contact";

function Contact() {
  return (
    <Layout title="contact">
      <div className="contactPage  roundBottom roundBottom-wight ">
        <ContactSection />
      </div>
    </Layout>
  );
}

export default Contact;
