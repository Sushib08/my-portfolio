import React from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import TitlePage from "../components/elements/TitlePage";
import ContactForm from "../components/elements/ContactForm";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="py-8 px-3">
        <TitlePage title="CONTACT" />
        <p className="text-slate-700 lg:text-lg text-[0.8rem] pt-8 text-center">
          Envie de donner vie à vos projets ?<br /> Contactez-moi dès maintenant
          via mon formulaire de contact pour démarrer !
        </p>
        <div className="">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
