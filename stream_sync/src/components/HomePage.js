import React from "react";
import Navbar from "./Navbar";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <section className="hero is-link is-primary has-background-primary is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="tile is-ancestor">
              <div className="tile is-6">
                <div className="container homepage_left_hero">
                  <h1 className="title has-text-centered">
                    Watch YouTube Together with friends!
                  </h1>
                </div>
              </div>
              <div className="tile is-6">
                <video
                  className="hero_video"
                  autoplay="true"
                  loop="true"
                  src={process.env.PUBLIC_URL + "/intro_video.webm"}
                ></video>
              </div>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="homepage_explainer" href="/join">
            <img
              className="laptop_svg"
              src={process.env.PUBLIC_URL + "/laptop.svg"}
            ></img>
            <img
              className="sync_svg"
              src={process.env.PUBLIC_URL + "/sync.svg"}
            ></img>
            <img
              className="laptop_svg"
              src={process.env.PUBLIC_URL + "/laptop.svg"}
            ></img>
          </div>

          <div className="homepage_explainer " href="/host">
            <ol>
              <li>Host a party using a YouTube link</li>
              <li>Share links with friends</li>
              <li>Watch in sync! Chat with friends!</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <a className="select_column host" href="/host">
            Host
          </a>
          <a className="select_column join" href="/join">
            Join
          </a>
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Stream Sync</strong> by{" "}
              <a href="https://jgthms.com">Stream Sync Inc.</a>
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default HomePage;
