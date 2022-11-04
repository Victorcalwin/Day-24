import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

function App() {
  let [cartValue, setCartValue] = useState(0);
  let [toggle1, setToggle1] = useState(false);
  let [toggle2, setToggle2] = useState(false);
  let [toggle3, setToggle3] = useState(false);
  let [toggle4, setToggle4] = useState(false);
  let [toggle5, setToggle5] = useState(false);
  let [toggle6, setToggle6] = useState(false);
  let [toggle7, setToggle7] = useState(false);
  let [toggle8, setToggle8] = useState(false);

  
  let [number1, setNumber1] = useState(0);
  let [number2, setNumber2] = useState(0);
  let [number3, setNumber3] = useState(0);
  let [number4, setNumber4] = useState(0)

  return (
    <>
      <div>
        <Navigation data={{ cartValue: cartValue }} />
        <Header />

        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">i Phone 13 pro</h5>
                      $1,25,000
                    </div>
                  </div>

                  <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {toggle1 ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue - 1);
                            setToggle1(false);
                          }}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue + 1);
                            setToggle1(true);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    class="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">i Phone 11</h5>
                      {Array(5)
                        .fill()
                        .map((_, index) =>
                          number1 >= index + 1 ? (
                            <AiFillStar style={{ color: 'orange', cursor: 'pointer' }} onClick={() => setNumber1(index + 1)} />

                          ) : (
                            <AiOutlineStar style={{ color: 'orange', cursor: 'pointer' }} onClick={() => setNumber1(index + 1)} />
                          )
                        )} <br />
                      <s>$55,000</s> $45,000
                    </div>
                  </div>

                  <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {toggle2 ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue - 1);
                            setToggle2(false);
                          }}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue + 1);
                            setToggle2(true);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    class="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">i Phone 13 mini</h5>
                      <s>$95,000</s> $75,000
                    </div>
                  </div>

                  <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {toggle3 ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue - 1);
                            setToggle3(false);
                          }}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue + 1);
                            setToggle3(true);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Samgsung Galaxy</h5>
                      {Array(5)
                        .fill()
                        .map((_, index) =>
                          number2 >= index + 1 ? (
                            <AiFillStar style={{ color: 'orange', cursor: 'pointer' }} onClick={() => setNumber2(index + 1)} />

                          ) : (
                            <AiOutlineStar style={{ color: 'orange', cursor: 'pointer' }} onClick={() => setNumber2(index + 1)} />
                          )
                        )} <br />
                      $30,000
                    </div>
                  </div>

                  <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {toggle4 ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue - 1);
                            setToggle4(false);
                          }}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue + 1);
                            setToggle4(true);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    class="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Vivo v30</h5>
                      <s>$50,000</s> $32,000
                    </div>
                  </div>

                  <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {toggle5 ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue - 1);
                            setToggle5(false);
                          }}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue + 1);
                            setToggle5(true);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Vivo X60</h5>
                      $45,000-$55,000
                    </div>
                  </div>

                  <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {toggle6 ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue - 1);
                            setToggle6(false);
                          }}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue + 1);
                            setToggle6(true);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    class="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">One Plus Plus</h5>
                      {Array(5)
                        .fill()
                        .map((_, index) =>
                          number3 >= index + 1 ? (
                            <AiFillStar style={{ color: 'orange', cursor: 'pointer' }} onClick={() => setNumber3(index + 1)} />

                          ) : (
                            <AiOutlineStar style={{ color: 'orange', cursor: 'pointer' }} onClick={() => setNumber3(index + 1)} />
                          )
                        )} <br />
                      <s>$85,000</s> $75,000
                    </div>
                  </div>

                  <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {toggle7 ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue - 1);
                            setToggle7(false);
                          }}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue + 1);
                            setToggle7(true);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">BlackBerry</h5>
                      {Array(5)
                        .fill()
                        .map((_, index) =>
                          number4 >= index + 1 ? (
                            <AiFillStar style={{ color: 'orange', cursor: 'pointer' }} onClick={() => setNumber4(index + 1)} />

                          ) : (
                            <AiOutlineStar style={{ color: 'orange', cursor: 'pointer' }} onClick={() => setNumber4(index + 1)} />
                          )
                        )} <br />
                      $1,75,000
                    </div>
                  </div>

                  <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {toggle8 ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue - 1);
                            setToggle8(false);
                          }}
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => {
                            setCartValue(cartValue + 1);
                            setToggle8(true);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2022
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
