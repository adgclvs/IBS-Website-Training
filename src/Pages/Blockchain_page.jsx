import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Blockcain_page = () => {
  return (
    <div className="blockchain-page">
      <Navbar />
      <div className="content">
        <div className="first-part">
          <div className="title">
            <h1>BLOCKCHAIN & CRYPTOS</h1>
          </div>
          <div className="explanation">
            <h1>IBS, Indigo Blockchain School, l'école de la blockchain !</h1>
            <p>
              IBS, Indigo Blockchain School, est une école post-bac d’un genre nouveau : la première
              école européenne à proposer une formation diplômante à l’écosystème blockchain.
            </p>
            <p>IBS, Indigo Blockchain School offre 3 axes d’étude :</p>
            <ul>
              <li>
                <span></span>
                <p>
                  Maîtriser l'écosystème de la blockchain et ses langages (Solidity, Vyper, etc.), y
                  développer des smart contracts, créer une cryptomonnaie.
                </p>
              </li>
              <li>
                <span></span>
                <p>
                  Décrypter l'économie mondiale et la finance traditionnelle pour comprendre les
                  enjeux des monnaies non-fiduciaires et de la finance décentralisée (DEFI).
                </p>
              </li>
              <li>
                <span></span>
                <p>
                  Innover, créer de la valeur et entreprendre hors des sentiers battus, dans des
                  environnements disruptifs afin de créer sa propre aventure entrepreneuriale.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blockcain_page;
