import React from "react";
import Signin from "./SignupLogin/Signin";
import Signup from "./SignupLogin/Signup";
import X from "../src/assets/x-solid.svg";
import styles from "../src/RenderSignUpIn.module.css";
class RenderSignUpIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedUp: '',
    };
  }

  handleChange = ({target: {name, value}}) => {
    const {trackState} = this.props;
    trackState('accountData', name, value)
  }

  renderSignUp = () => {
    this.setState({signedUp: 'SignUp'})
    this.props.resetForms();
  }

  renderSignIn = () => {
    this.setState({signedUp: 'SignIn'})
    this.props.resetForms();
  }

  revealPassword = (e) => {
    const inputType = e.target.previousSibling.type;
    inputType === "password"
      ? (e.target.previousSibling.type = "text")
      : (e.target.previousSibling.type = "password");
  };


  render() {
    const radioData = [
      { label: "SIGN IN", type: "radio", name: "signIn", key: "sign In", onClick: this.renderSignIn },
      { label: "CREATE ACCOUNT", type: "radio", name: "signIn", key: "create", onClick: this.renderSignUp },
    ];
    const { handleSignIn, error, accountData, trackState,handleSubmit } = this.props; 
    return (
      <div className={styles.form}>
        <div>
          <div className={`${styles.radioWrapper}`}>
            {radioData.map((item) => (
              <label key={item.key}>
                <input
                  className={styles.radio}
                  type={item.type}
                  name={item.name}
                  onClick={item.onClick}
                  defaultChecked
                />
                {item.label}
              </label>
            ))}
          </div>
          <img className={styles.imgWidth} src={X} alt="X" />
        </div>
        <br />
        {(this.state.signedUp === 'SignIn') ? (
          <Signin
            revealPassword={this.revealPassword}
            trackState={this.handleChange}
            handleSignIn={handleSignIn}
            accountData={accountData}
            error={error}
          />
          ) : (
          <Signup
            revealPassword={this.revealPassword}
            trackState={this.handleChange}
            handleSubmit={handleSubmit}
            accountData={accountData}
            error={error}
          />
        )}
      </div>
    );
  }
}

export default RenderSignUpIn;
