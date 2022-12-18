import React from "react";
import Customercard from "./CustomerCard/CustomerCard";
import {defaultValues, shippingInfo, shoppingItemsObj, shippingError, removeItem, 
        calcSum, cardInfo, signedUpUsers,} from "./Data";
import RenderSignUpIn from "./RenderSignUpIn";
import ShippingScreen from "./ShippingScreen/ShippingScreen";
import Payment from '../src/Payment/Payment'
import {emailValidation, passwordValidation, firstNameValidation, surNameValidation, 
        postalCodeValidation, inputVerifyError, cards, 
        cardValidations, CvvValidation, isDisabled} from "./validations";
import Confirmation from "./ConfirmationScreen/Confirmation";
class Codecommerce extends React.Component {
  state = {
    successfulSignIn: true,
    goToShipping: true,
    proceedToPayment: true,
    accountData: defaultValues,
    error: defaultValues,
    signedUpUsers: signedUpUsers,
    shoppingCartObj: shoppingItemsObj,
    discountCode: '',
    shippingInfo: shippingInfo,
    shippingError: shippingError,
    shipFee: '',
    cardInfo: cardInfo,
    cardType: '',
    cardError: {
      cardError: '',
      cardHolderError:'',
      CVV:''
    },
    isDisabled: isDisabled,
    totalCart: 0,
    ConfirmationScreen:false,
  };
  
  trackState = (object, name, value) => {
    this.setState((prevState) => ({
      [object]: {
        ...prevState[object],
        [name]: value,
      },
    }))
  };

  trackAnyState = (name, value) => {this.setState({[name]:value})}

  trackNestedState = ({target: {name , value}}) => {
    this.setState(prevState => ({
      shoppingCartObj: {
        ...prevState.shoppingCartObj,
        [name]: {
          ...prevState.shoppingCartObj[name],
          quantity: value,
          totalPrice: ((prevState.shoppingCartObj[name].price) * value).toFixed(2),
          inCart: true
        }
      },
    }))
  }

  resetForms = () => {
    this.trackAnyState('accountData', defaultValues)
    this.trackAnyState('error', defaultValues)
  }

  checkForError = (error) => {
    for (const key in (error)) {
      if (error[key] !== '') return false
    } return true;
  };

  checkForExistingInfo = (array, value, key) => {
     const check = array.find(account => {return account[key] === value})
     if (check) {return true} else {return false}
  }

  handleValidations = () => {
    const {email, password, firstName, surname, postalCode} = this.state.accountData;
    this.trackState('error', 'email', emailValidation(email))
    this.trackState('error', 'password', passwordValidation(password))
    this.trackState('error', 'confirm', this.confirmPassword())
    this.trackState('error', 'firstName', firstNameValidation(firstName))
    this.trackState('error', 'firstName', surNameValidation(surname))
    this.trackState('error', 'postalCode', postalCodeValidation(postalCode))
  }

  confirmPassword = () => {
    const { password, confirm } = this.state.accountData;
    return (password === confirm)
      ? ""
      : "Passwords don't match";
  };
  
  handleSignIn = (e) => {
    e.preventDefault();
    const {accountData, signedUpUsers, error} = this.state;
    (this.checkForError(error) 
      && this.checkForExistingInfo(signedUpUsers, accountData.email, ['email'])
      && this.checkForExistingInfo(signedUpUsers, accountData.password, ['password'])
     ? this.trackAnyState('successfulSignIn', true)
     : this.trackAnyState('successfulSignIn', false))

    if (this.checkForExistingInfo(signedUpUsers, accountData.password, ['password']) === false) {
        this.trackState('error', 'password', 'Wrong Password')} else {
        this.trackState('error', 'password', '')}

     if (this.checkForExistingInfo(signedUpUsers, accountData.email, ['email']) === false) {
        this.trackState('error', 'email', 'Account Does not Exist')
    } else {this.trackState('error', 'email', '')}
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleValidations();
    const {accountData, signedUpUsers, error} = this.state;
    const { email, password, firstName, lastName, postalCode } = this.state.accountData;
    const newUser = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      postalCode: postalCode,
    };
    if (!this.checkForError(error) 
        && !this.checkForExistingInfo(signedUpUsers, accountData.email, ['email'])
        && Object.values(accountData).every(value => value !== '')) {
      this.setState((prevState) => {
        return {signedUpUsers: [...prevState.signedUpUsers, newUser]};
      });}
    if (this.checkForExistingInfo(signedUpUsers, accountData.email, ['email']))
       {this.trackState('error', 'email', 'Account Already exists')}   
  };

  remove = ({target : { name }}) => {
    const {shoppingCartObj} = this.state;
   const filtered = removeItem(shoppingCartObj, name)
   this.trackAnyState('shoppingCartObj', filtered)
  }

  handleShippingErrors = () => {
    const {email, address, zip, phone, phone2, Country, city, state, name} = this.state.shippingInfo;
    this.trackState('shippingError', 'email', emailValidation(email))
    this.trackState('shippingError', 'address', inputVerifyError(address))
    this.trackState('shippingError', 'zip',postalCodeValidation(zip))
    this.trackState('shippingError', 'phone',postalCodeValidation(phone))
    this.trackState('shippingError', 'phone2',postalCodeValidation(phone2))
    this.trackState('shippingError', 'Country', inputVerifyError(Country))
    this.trackState('shippingError', 'city', inputVerifyError(city))
    this.trackState('shippingError', 'state', inputVerifyError(state))
    this.trackState('shippingError', 'name', inputVerifyError(name))
  }  

  shipFee = (e) => {
    const {shoppingCartObj} = this.state;
    this.trackAnyState('shipFee', e.target.value)
    if (calcSum(shoppingCartObj) > 40 && e.target.id === 'STANDARD') {
      this.trackAnyState('shipFee', 0)
    }
  this.handleShippingErrors();
}
  
  handleShippingSubmit = (e) => {
    e.preventDefault();
    const {shippingError} = this.state;
    this.handleShippingErrors();
    if (this.checkForError(shippingError)) {
      this.trackAnyState('proceedToPayment', true)
    }
  }

  findDebitCard = (cardNumber) => {
    for (const card in cards) {
      if (cardNumber.replace(/[^\d]/g, '').match(cards[card])) return card;
    }
    return '';
  }

  handleSplitCard = (name, value) => {
    if (name === 'cardNumber' && value.length !== 0) {
      let mask = value.split(' ').join('');
      mask = mask.match(new RegExp('.{1,4}', 'g')).join(' ');
      this.trackState('cardInfo', [name], mask)
    }
  }

  handleCardValidations = (type,value) => {
    let errorText;
    switch(type) {
      case 'cardNumber': 
        errorText = cardValidations(value)
        this.trackAnyState('cardType', this.findDebitCard(value))
        this.trackState('cardError', 'cardError',errorText)
        break;
      case 'cardHolderName':
        errorText = firstNameValidation(value);
        this.trackState('cardError', 'cardHolderError', errorText)
        break;
      case 'CVV':
        errorText = CvvValidation(value);
        this.trackState('cardError', 'CVV', errorText)
        break;
      default: 
        break;
    }
  }

  render() {
    const {successfulSignIn,
           goToShipping,
           accountData,
           error,
           signedUpUsers,
           shoppingCartObj ,
           discountCode, 
           shippingInfo, 
           shippingError,
           shipFee,
           proceedToPayment,
           cardInfo,
           cardType,
           cardError,
           isDisabled,
           totalCart,
           ConfirmationScreen,
        } = this.state;
        if (ConfirmationScreen) {
          return <Confirmation
            shipPrice={shipFee}
            cardInfo={cardInfo}
            shippingInfo={shippingInfo}
            totalCart={totalCart}
            discountCode={discountCode}
            goToShipping={goToShipping}
            proceedToPayment={proceedToPayment}
            ConfirmationScreen={ConfirmationScreen}
            shoppingCartObj={shoppingCartObj}
            trackAnyState={this.trackAnyState}
          />
        }
        if (proceedToPayment) {
          return <Payment
            shoppingCartObj={shoppingCartObj}
            discountCode={discountCode}
            shippingInfo={shippingInfo}
            shipPrice={shipFee}
            cardInfo={cardInfo}
            cardError={cardError}
            cardType={cardType}
            isDisabled={isDisabled}
            totalCart={totalCart}
            goToShipping={goToShipping}
            proceedToPayment={proceedToPayment}
            ConfirmationScreen={ConfirmationScreen}
            trackState={this.trackState}
            trackAnyState={this.trackAnyState}
            handleSplitCard={this.handleSplitCard}
            handleCardValidations={this.handleCardValidations}
          />
        }
        if (successfulSignIn && !goToShipping) {
           return <Customercard
             totalCart={totalCart}
             discountCode={discountCode}
             shoppingCartObj={shoppingCartObj}  
             remove={this.remove}
             trackNestedState={this.trackNestedState}
             trackAnyState={this.trackAnyState}
             />
        } 
        if (goToShipping && successfulSignIn) {
          return <ShippingScreen
            shipPrice={shipFee}
            totalCart={totalCart}
            errors={shippingError}
            shippingInfo={shippingInfo}
            discountCode={discountCode}
            shoppingCartObj={shoppingCartObj}
            shipFee={this.shipFee}
            trackState={this.trackState}
            trackAnyState={this.trackAnyState}
            handleSubmit={this.handleShippingSubmit}
            handleShippingErrors={this.handleShippingErrors}
            goToShipping={goToShipping}
            proceedToPayment={proceedToPayment}
            ConfirmationScreen={ConfirmationScreen}
          />
        }
        else {
          return <RenderSignUpIn
            signedUpUsers={signedUpUsers}
            accountData={accountData}
            error={error}
            checkForError={this.checkForError}
            trackState={this.trackState}
            handleSignIn={this.handleSignIn}
            handleSubmit={this.handleSubmit}
            resetForms={this.resetForms}
            confirmPassword={this.confirmPassword}
            />
      }
    }
}

export default Codecommerce;
