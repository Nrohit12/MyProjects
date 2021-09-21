import React, { Component } from "react";
import fire from "../../firebase-config/fire";
import firebase from "firebase";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
    };
    this.login = this.login.bind(this);
  }
  login() {
    this.setState({ loading: true });
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        this.setState({ loading: false, error: null });
      })
      .catch((err) => {
        this.setState({ loading: false, error: err });
      });
  }
  loginWithGoogle = () => {
    this.setState({ loading: true });
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    fire
      .auth()
      .signInWithPopup(provider)
      .then((u) => {
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false, error: err });
      });
  };
  

  render() {
    return this.state.loading ? (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spinner
          as="span"
          animation="border"
          size="lg"
          role="status"
          aria-hidden="true"
          style={{ width: "5rem", height: "5rem" }}
        />
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                  />
                </td>
              </tr>

              <tr>
                <td>Password</td>
                <td>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <Button variant="warning" onClick={this.login}>
                    Login
                  </Button>
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <Button
                    onClick={this.loginWithGoogle}
                    variant="outline-light"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="Google Login"
                      width="50px"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {this.state.error !== null ? (
          <Container>
            <Row>
              <Col>
                <p style={{ color: "red" }}>{this.state.error.message}</p>
              </Col>
            </Row>
          </Container>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Login;
