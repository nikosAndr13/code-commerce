import React from "react";
import Signin from "./SignupLogin/Signin";
import Signup from "./SignupLogin/Signup";
import X from "../src/assets/x-solid.svg";
import styles from "../src/RenderSignUpIn.module.css";
class RenderSignUpIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedUp: false,
    };
  }

  switchForm = () => {
    this.state.signedUp
      ? this.setState({ signedUp: false })
      : this.setState({ signedUp: true });
    this.props.resetForms();
  };

  revealPassword = (e) => {
    const inputType = e.target.previousSibling.type;
    inputType === "password"
      ? (e.target.previousSibling.type = "text")
      : (e.target.previousSibling.type = "password");
  };


  render() {
    const radioData = [
      { label: "SIGN IN", type: "radio", name: "signIn", key: "sign In" },
      { label: "CREATE ACCOUNT", type: "radio", name: "signIn", key: "create" },
    ];
    const { handleSignIn, error, handleValidations, accountData, trackState, checkForExistingAccount ,handleSubmit } = this.props; 
    return (
      <>
        <div>
          <div>
            {radioData.map((item) => (
              <label key={item.key}>
                <input
                  className={styles.radio}
                  type={item.type}
                  name={item.name}
                  onClick={this.switchForm}
                  defaultChecked
                />
                {item.label}
              </label>
            ))}
          </div>
          <img className={styles.imgWidth} src={X} alt="X" />
        </div>
        <br />
        {this.state.signedUp ? (
          <Signin
            revealPassword={this.revealPassword}
            trackState={trackState}
            handleSignIn={handleSignIn}
            accountData={accountData}
            error={error}
          />
          ) : (
          <Signup
            revealPassword={this.revealPassword}
            trackState={trackState}
            checkForExistingAccount={checkForExistingAccount()}
            handleSubmit={handleSubmit}
            accountData={accountData}
            error={error}
          />
        )}
      </>
    );
  }
}

export default RenderSignUpIn;
