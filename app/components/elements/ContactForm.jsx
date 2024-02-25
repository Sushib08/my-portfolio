"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../elements/Button";
import { fredoka } from "../../fonts/fonts";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Votre message a été envoyé avec succès!");
          console.log("SUCCESS!");
          // Réinitialiser les valeurs des champs du formulaire
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="my-12 bg-white lg:w-[50%] ml-auto mr-auto h-auto border rounded-lg shadow-md border-gray-300 p-6">
      <form className="space-y-6" ref={form} onSubmit={sendEmail}>
        <div>
          <label
            htmlFor="name"
            className="block lg:text-lg font-bold leading-6 text-slate-700"
          >
            Nom
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="from_name"
              type="text"
              autoComplete="name"
              placeholder="Votre Nom / Entreprise"
              value={formData.from_name}
              onChange={handleChange}
              required
              className={`${fredoka.className} lg:text-[1.1rem] block pl-3 w-full bg-[#eae7e7] rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6`}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block lg:text-lg font-bold leading-6 text-slate-700"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="from_email"
              type="email"
              autoComplete="email"
              placeholder="Votre Email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className={`${fredoka.className} lg:text-[1.1rem] block pl-3 w-full bg-[#eae7e7] rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6`}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block lg:text-lg font-bold leading-6 text-slate-700"
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              autoComplete="message"
              placeholder="Votre Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`${fredoka.className} lg:text-[1.1rem] block pl-3 w-full min-h-[25vh] bg-[#eae7e7] rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none`}
            ></textarea>
          </div>
        </div>
        <div className="mt-6">
          <Button text={"Envoyer"} type={"submit"} value={"Send"} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
