// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <section>
      <img src={data.photo ? data.photo : ""} alt="" />
      <div className="detail-contact">
        <p className="name-contact">{data.name ? data.name : ""}</p>
        <p>{data.phone ? data.phone : ""}</p>
        <p>{data.email ? data.email : ""}</p>
      </div>
    </section>
  );
};

export default Contact;
