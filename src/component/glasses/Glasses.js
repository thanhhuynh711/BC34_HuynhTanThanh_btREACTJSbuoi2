import React, { Component } from "react";
import "./glasses.css";
import dataGlasses from "./dataGlasses.json";

export class Glasses extends Component {
  state = {
    glassesDetail: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  render() {
    let { glassesDetail } = this.state;

    return (
      <div className="glassesGrawp">
        <div className="container vglasses py-3">
          <div className="row justify-content-center">
            <div className="col-6 vglasses__right p-0">
              <div className="vglasses__card">
                <div className="vglasses__model" id="avatar">
                  <div className="vglasses__model-wrap">
                    <img src={glassesDetail.url} />
                  </div>
                </div>
                <div id="glassesInfo" className="vglasses__info">
                  <div>
                    <h4>{glassesDetail.name}</h4>
                    <div
                      style={{
                        backgroundColor: "red",
                        padding: "6px 10px",
                        borderRadius: 4,
                        display: "inline-block",
                      }}
                    >
                      ${glassesDetail.price}
                    </div>
                    <span style={{ color: "#009688" }}> Stocking</span>
                    <p style={{ marginTop: 10 }}>{glassesDetail.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 vglasses__left">
              <div className="row">
                <div className="col-12">
                  <h1 className="mb-2">Virtual Glasses</h1>
                </div>
              </div>
              <div className="row" id="vglassesList">
                {dataGlasses.map((glasses, index) => {
                  return (
                    <button
                      key={index}
                      className="btn-kinh col-md-2 mt-4"
                      onClick={() => {
                        this.setState({
                          glassesDetail: glasses,
                        });
                        document.getElementById("glassesInfo").style.display =
                          "block";
                        document.querySelector(
                          ".vglasses__model-wrap"
                        ).style.display = "block";
                      }}
                    >
                      <img className="" src={glasses.url} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Glasses;
