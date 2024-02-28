import React from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import TitlePage from "../components/elements/TitlePage";
import Project from "../components/elements/Project";

const Projects = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="py-8 px-3">
        <TitlePage title="PROJETS" />
        <p className="text-slate-700 px-12 lg:text-lg text-[0.8rem] pt-8 pb-8 text-center">
          Explorez mes projets, où je présente mes réalisations personnelles
          ainsi que les travaux effectués lors de mes études, dans le but de
          renforcer mes compétences.
        </p>
        <Project
          link={"/projects/chicKing"}
          title={"ChicKing"}
          desc={
            "ChicKing est l'application de livraison de plats incontournable pour les amateurs de poulet. Avec un vaste choix de délices à base de poulet, des burgers aux salades, en passant par les plats exotiques, ChicKing offre une expérience gastronomique unique. Son système de panier intuitif permet aux utilisateurs de commander facilement leurs plats préférés ainsi que des boissons pour accompagner leur repas. Profitez du confort de la livraison à domicile avec ChicKing et savourez des saveurs irrésistibles où que vous soyez."
          }
          src="/img/projects/chicking.webp"
          alt="ChicKing"
          isReverse={false}
        />
        <Project
          link={"/projects/vieuxGrimoire"}
          title={"Vieux Grimoire"}
          desc={
            "Le site Vieux Grimoire est une plateforme dédiée au monde littéraire, offrant aux clients d'une petite chaîne de librairies une expérience unique de référencement et de notation de livres. En tant que portail de référence, il permet aux amateurs de découvrir de nouveaux ouvrages, d'explorer des genres variés et de bénéficier des avis et critiques de la communauté. Grâce à sa fonction de notation, les utilisateurs peuvent partager leurs impressions et recommandations, facilitant ainsi la recherche et l'achat de livres adaptés à leurs goûts. Vieux Grimoire devient ainsi un compagnon indispensable pour les passionnés de lecture, favorisant l'échange et la découverte au sein de cette communauté littéraire dynamique."
          }
          src="/img/projects/VieuxGrimoire.webp"
          alt="Vieux Grimoire"
          isReverse={true}
        />
        <Project
          link={"/projects/orthimmo"}
          title={"Orthimmo"}
          desc={
            "Orthimmo est une plateforme immobilière complète proposant des services de location, vente et achat de biens immobiliers. Avec des agences dispersées à travers la France, Orthimmo offre une expertise locale et personnalisée à ses clients. Grâce à son interface conviviale, les utilisateurs peuvent facilement rechercher des propriétés correspondant à leurs critères, bénéficiant ainsi d'un large choix d'options adaptées à leurs besoins. Que ce soit pour trouver le parfait appartement, maison ou investissement, Orthimmo facilite le processus immobilier en mettant à disposition une gamme complète de services et d'annonces actualisées régulièrement."
          }
          src="/img/projects/Ortimmo.webp"
          alt="Orthimmo"
          isReverse={false}
        />
        <Project
          link={"/projects/vanLife"}
          title={"Blog VanLife"}
          desc={
            "Le blog VanLife est une destination incontournable pour les passionnés de voyages en quête d'aventures authentiques. En offrant une mine d'informations sur des destinations uniques à découvrir, il inspire les voyageurs à explorer de nouveaux horizons. De précieuses astuces pour partir en randonnée en toute sécurité ainsi que des recommandations de campements et d'hôtels pittoresques permettent aux lecteurs de planifier des escapades inoubliables. Que ce soit pour des aventures en van, en camping-car ou même en sac à dos, VanLife est le compagnon idéal pour ceux qui aspirent à une vie nomade empreinte de liberté et de découverte."
          }
          src="/img/projects/VanLife.webp"
          alt="VanLife"
          isReverse={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
