import { useContext, useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { LanguageContext } from "../LanguageContext";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const { language = 'sr' } = useContext(LanguageContext);
  const [{ name, email, message }, setState] = useState(initialState);

  const contactText = {
    sr: {
      title: 'Kontaktirajte nas',
      description:
        'Molimo vas da popunite obrazac i pošaljite nam email. Odgovorićemo vam što je pre moguće.',
      namePlaceholder: 'Ime',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Poruka',
      submitButton: 'Pošalji',
      information: 'Informacije',
      address: 'Adresa',
      commercialPhone: 'Telefon komercijalni',
      phone: 'Telefon',
      branch: 'Ogranak',
      emailLabel: 'Email',
    },
    en: {
      title: 'Contact us',
      description:
        'Please fill in the form and send us an email. We will reply as soon as possible.',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Message',
      submitButton: 'Send',
      information: 'Information',
      address: 'Address',
      commercialPhone: 'Commercial phone',
      phone: 'Phone',
      branch: 'Branch',
      emailLabel: 'Email',
    },
  };

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
              <h2>{contactText[language].title}</h2>
              <p>{contactText[language].description}</p>
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
                        placeholder={contactText[language].namePlaceholder}
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
                        placeholder={contactText[language].emailPlaceholder}
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
                    placeholder={contactText[language].messagePlaceholder}
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  {contactText[language].submitButton}
                </button>
              </form>
            </div>
            <div className="col-md-4" style={{ paddingLeft: "20px" }}>
              <div className="row">
                <div className="col-md-6">
                  <h3>{contactText[language].information}</h3>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-map-marker"></i> {contactText[language].address}
                    </span>
                    <p>{props.data ? props.data.address : "loading"}</p>
                  </div>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-phone"></i> {contactText[language].commercialPhone}
                    </span>
                    <p>{props.data ? props.data.phone : "loading"}</p>
                  </div>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-envelope-o"></i> {contactText[language].emailLabel}
                    </span>
                    <p>
                      <a href={`mailto:${props.data?.email}`} style={{ color: "#9b0038" }}>
                        {props.data ? props.data.email : "loading"}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3>{contactText[language].branch}</h3>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-location-arrow"></i> MCC Vinarija
                    </span>
                    <p>Svetog Save 150a, 22230 Erdevik</p>
                  </div>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-phone"></i> {contactText[language].phone}
                    </span>
                    <p>
                      +381 63698112 Branka
                      <br />
                      +381 22 752 486
                    </p>
                  </div>
                  <div className="contact-item">
                    <span>
                      <i className="fa fa-envelope-o"></i> {contactText[language].emailLabel}
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
             