import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar bg-dark navbar-dark">
        <div className="container d-flex align-items-center">
          <a href="#" className="navbar-brand text-danger">
            VERTEX
          </a>
          <div className="navbar-nav d-flex flex-row justify-content-between gap-3 ">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Feature
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 text-white bg-dark hero">
        <h1 className="display-4">
          BUILD THE FUTURE.{" "}
          <span className="text-danger fw-bold">ONE LINE AT A TIME.</span>
        </h1>
        <p className="lead">
          We create innovative digital solutions that help businesses grow,
          evolve, and stay ahead in a connected world.
        </p>
        <button className="btn btn-danger">Explore Our Solutions</button>
      </div>

      <section>
        <div className="container-fluid bg-dark text-white pb-3 features">
          <h2 className="text-danger">What we do.</h2>
          <p>
            Technology that moves your business{" "}
            <span className="text-danger fw-bold">Forward</span>.
          </p>
          <div className="row">
            <div className="col-md-4 ">
              <div className="card h-100">
                <div className="card-body p-4">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    Building modern and responsive websites designed for
                    performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body p-4">
                  <h5 className="card-title">Software Solutions</h5>
                  <p className="card-text">
                    Developing custom applications tailored to business needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body p-4">
                  <h5 className="card-title">Cloud & Infrastructure</h5>
                  <p className="card-text">
                    Providing reliable and scalable digital infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white">
        <p>all copyrights reserved.</p>
      </footer>
    </>
  );
}

export default App;
