import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("service_88a3fbo", "template_4egcg0s", e.target, "sL2oOB0ZqAT2NlvtH")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ marginBottom: "50px" }}>
            <div className="section-title">
              <h2>Kontaktirajte nas</h2>
              <p>
                Molimo vas da popunite obrazac i pošaljite nam email. Odgovorićemo vam što je pre moguće.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group" style={{ marginBottom: "20px" }}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Ime"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group" style={{ marginBottom: "20px" }}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "20px" }}>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Poruka"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Pošalji
                </button>
              </form>
            </div>
            <div className="col-md-4" style={{ paddingLeft: "20px" }}>
              <div className="row">
                <div className="col-md-6">
                  <h3>Informacije</h3>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-map-marker"></i> Adresa
                    </span>
                    <p>{props.data ? props.data.address : "loading"}</p>
                  </div>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-phone"></i> Telefon komercijalni
                    </span>
                    <p>{props.data ? props.data.phone : "loading"}</p>
                  </div>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>
                    <p>
                      <a href={`mailto:${props.data?.email}`} style={{ color: "#9b0038" }}>
                        {props.data ? props.data.email : "loading"}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3>Ogranak</h3>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-location-arrow"></i> MCC Vinarija
                    </span>
                    <p>Svetog Save 150a, 22230 Erdevik</p>
                  </div>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-phone"></i> Telefon
                    </span>
                    <p>
                      +381 63698112 Branka
                      <br />
                      +381 22 752 486
                    </p>
                  </div>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>
                    <p>
                      <a href="mailto:MCCkancelarija@gmail.com" style={{ color: "#9b0038" }}>
                        Mcc@mccullochwines.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
             