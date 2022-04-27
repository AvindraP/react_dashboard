import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import Table from "./index";

import FlipCardAnimation from "./FlipCardAnimation/FlipCardAnimation";
import data from "./data";

const Home = () => {
  const [dataa] = useState([...data]);

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div style={{ backgroundColor: "#74b9ff", minHeight: "80%" }}>
      <div style={{ opacity: "100%" }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            // background: {
            //   color: {
            //     value: "#ffffff",
            //   },
            // },
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#182C61",
              },
              links: {
                color: "#182C61",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 600,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 15,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      {/* Content Header (Page header) */}

      {/* /.content-header */}
      {/* Main content */}

      <section className="content">
        <div className="container-fluid ">
          {/* Small boxes (Stat box) */}
          {/* /.row */}
          {/* Main row */}
          <div className="row">
            {/* Left col */}
            <section
              className="col-lg-7 connectedSortable"
              style={{ minWidth: "67%" }}
            >
              <div className="row mt-2 text-center">
                <h6>dsad</h6>
              </div>
              {/* Custom tabs (Charts with tabs)*/}
              <div className="card ml-5 mt-3">
                {/* /.card-header */}
                <div className="card-body p-1">
                  <Table data={dataa} rowsPerPage={12} />
                  <div className="tab-content p-0">
                    {/* Morris chart - Sales */}
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </section>
            {/* /.Left col */}
            {/* right col (We are only adding the ID to make the widgets sortable)*/}
            <section
              className="col-5 connectedSortable"
              style={{
                minWidth: "22%",
                padding: "0px",
                display: "contents",
                flex: "0%",
              }}
            >
              {/* Map card */}

              {/* /.card-body*/}
              <div
                className="card-footer bg-transparent "
                style={{ padding: "0%" }}
              >
                <div className="row mt-2" style={{ padding: "0 0 0 5%" }}>
                  <div className="col-4 text-center">
                    {/* ./col */}

                    <FlipCardAnimation
                      frontColor={"#15ff00"}
                      backColor={"#001aff"}
                      dataf={"Rs.1200"}
                      datab={"DAILY CHEQUE DEPOSIT(DFCC & COM)"}
                    />
                  </div>
                  <div className="col-4 text-center ml-5">
                    <FlipCardAnimation
                      frontColor={"#ff0000"}
                      backColor={"#ffee00"}
                      dataf={"Rs.1500"}
                      datab={"Total"}
                    />
                  </div>
                </div>
                {/* ./col */}
                <div className="row mt-4 " style={{ padding: "0 0 0 5%" }}>
                  <div className="col-4 text-center ">
                    <FlipCardAnimation
                      frontColor={"#ff7300"}
                      backColor={"#00ffea"}
                      dataf={"Rs.1400"}
                      datab={"Total"}
                    />
                  </div>
                  <div className="col-4 text-center ml-5">
                    <FlipCardAnimation
                      frontColor={"#00ff4079"}
                      backColor={"#5900ff"}
                      dataf={"Rs.5200"}
                      datab={"Total"}
                    />
                  </div>

                  {/* ./col */}
                </div>

                <div className="row mt-4" style={{ padding: "0 0 0 5%" }}>
                  <div className="col-4 text-center ">
                    <FlipCardAnimation
                      frontColor={"#ffe600e7"}
                      backColor={"#f700ff"}
                      dataf={"Rs.5120"}
                      datab={"Total"}
                    />
                  </div>
                  <div className="col-4 text-center ml-5">
                    <FlipCardAnimation
                      frontColor={"#ff00f2"}
                      backColor={"#00eeff"}
                      dataf={"Rs.6200"}
                      datab={"Total"}
                    />
                  </div>

                  {/* ./col */}
                </div>

                <div className="row mt-4" style={{ padding: "0 0 0 5%" }}>
                  <div className="col-4 text-center ">
                    <FlipCardAnimation
                      frontColor={"#6200ff38"}
                      backColor={"#33ff00c5"}
                      dataf={"Rs.3300"}
                      datab={"Total"}
                    />
                  </div>
                  <div className="col-4 text-center ml-5">
                    <FlipCardAnimation
                      frontColor={"#ff3300be"}
                      backColor={"#9dff006c"}
                      dataf={"Rs.2500"}
                      datab={"Total"}
                    />
                  </div>

                  {/* ./col */}
                </div>

                <div className="row mt-4" style={{ padding: "0 0 0 5%" }}>
                  <div className="col-4 text-center ">
                    <FlipCardAnimation
                      frontColor={"#00ff4079"}
                      backColor={"#5900ff"}
                      dataf={"Rs.4200"}
                      datab={"Total"}
                    />
                  </div>
                  <div className="col-4 text-center ml-5">
                    <FlipCardAnimation
                      frontColor={"#00ff4079"}
                      backColor={"#5900ff"}
                      dataf={"Rs.5120"}
                      datab={"Total"}
                    />
                  </div>

                  {/* ./col */}
                </div>
                {/* /.row */}
              </div>
            </section>
            {/* right col */}
          </div>
          {/* /.row (main row) */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}

      {/* /.content-wrapper */}
    </div>
  );
};

export default Home;
