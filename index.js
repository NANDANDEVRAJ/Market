import React from "react";
import "./index.css"
import logo from "../assets/logo/slack.png"

export default function Index() {
  return (
    <div>
      <section id="sidebar">
        <section className="title-container">
          <img src={logo} width="40px" alt="logo" />
          <h1>Market Place</h1>
        </section>
        <section className="links-container">
          <div className="links">
            <div className="icon">
            <i className="bi bi-house-fill"></i>
            </div>
            <span>Home</span>
          </div>
          <div className="links">
            <div className="icon">
                <i className="bi bi-globe2"></i>
            </div>
            <span>Explore</span>
          </div>
          <div className="links">
            <div className="icon">
                <i className="bi bi-wallet-fill"></i>
            </div>
            <span>Wallet</span>
          </div>
          <div className="links">
            <div className="icon">
                <i className="bi bi-arrow-repeat"></i>
            </div>
            <span>Exchange</span>
          </div>
          <div className="links">
            <div className="icon">
                <i className="bi bi-gear-fill"></i>  
            </div>
            <span>Settings</span>
          </div>
        </section>
      </section>

      <section id="sidebar-right">
        
      </section>
      <section id="main-dashboard-content">
          
      <span id="sub-title">Explore the</span>
        <h1 id="welcome-title">MARKET</h1>
        <section id="top-section">
          <div className="input-box">
            <input placeholder="Search..." />
            <div>
              <i className="fas fa-search"></i>
            </div>
          </div>
        </section>
        <section id="grid-container">
          <div className="grid-item one">Discover, Collect & Sell your <div
           className="sub-grid">Extraordinary NFT's!</div>
           <button id="btn-up">Upload <i class="bi bi-cloud-arrow-up-fill"></i></button>
           <button id="btn-explore">Explore <i class="bi bi-binoculars-fill"></i></button>
           </div>
          <div className="grid-item two">
              <div className="grid-two">Popular Collections
              <span className="grid-two-span"> Explore all<i className="bi bi-arrow-right"></i>
              <div>
                 <span className="span-icon">All</span> 
                 <span className="span-icon">Art</span> 
                 <span className="span-icon">Sport</span> 
                 <span className="span-icon">Music</span> 
                 <span className="span-icon">Film</span> 
             </div> 
             </span>
             <div>
                 <div className="profile"><div id="circle"></div>Name1
                 <span className="pro-explore">Explore</span>
                 </div>
                 <div className="profile"><div id="circle"></div>Name2
                 <span className="pro-explore">Explore</span>
                 </div>
                 <div className="profile"><div id="circle"></div>Name3
                 <span className="pro-explore">Explore</span>
                 </div>
                 <div className="profile"><div id="circle"></div>Name4
                 <span className="pro-explore">Explore</span>
                 </div>
             </div>
              </div>
          </div>
        </section>
      </section>
    </div>
  );
}
