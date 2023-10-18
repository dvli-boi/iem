import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

function ContactUs() {
  emailjs.init("OAZEDqzcFmAYhzpS-"); // Replace 'YOUR_USER_ID' with your EmailJS public key

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Nom Complet est requis"),
    email: Yup.string().email("Email invalide").required("Email est requis"),
    message: Yup.string().required("Message est requis"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      setSubmitting(true); // Set isSubmitting to true during submission

      const templateParams = {
        to_email: "iem.2019@Yahoo.Com", // Replace with the recipient's email
        from_name: values.fullName,
        message: values.message,
        email_sender: values.email,
      };

      await emailjs.send(
        "service_1156k8i", // Replace with your EmailJS service ID
        "template_czwco2g", // Replace with your EmailJS template ID
        templateParams
      );

      resetForm();

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setSubmitting(false); // Set isSubmitting to false after submission
    }
  };
  return (
    <div className="contact-us">
      <h2>Nous Contactez :</h2>
      <p>
        Chez IEM, l'excellence est notre priorité Contactez-nous dès aujourd'hui
        pour découvrir comment nos solutions sur mesure peuvent renforcer votre
        succès industriel
      </p>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="contact-us-form">
              <div className="name-email-group">
                <div>
                  <label htmlFor="fullName">Nom Complet :</label>
                  <br />
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Nom complet"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email :</label>
                  <br />
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <label htmlFor="message">Message :</label>
              <Field
                as="textarea"
                name="message"
                placeholder="Message ici..."
              />
              <ErrorMessage name="message" component="div" className="error" />
              <div className="submit-button-wrapper">
                <button
                  type="submit"
                  className="submit-message"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactUs;
