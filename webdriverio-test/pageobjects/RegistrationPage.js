import Page from './Page'

class RegistrationPage extends Page {

    get txtEmailToSignup() { return $('#email');}
    get txtPasswordToSignup() { return $('#password') }
    get txtConfirmPassword() { return $('#password2')}
    get selectRadioButton() { return $('//input[@id="CivMr" and @value="M"]')}
    get txtLastName() { return $('#nom')}
    get txtFirstName() { return $('#prenom')}
    get days() { return $('#dateJour')}
    get month() { return $('#dateMois')}
    get year() { return $('#dateAnnee')}
    get address() { return $('#adresse')}
    get addressDetail() { return $('#adresseDetail')}
    get addressDetail2() { return $('#adresseDetail2')}
    get postCode() { return $('#codePostal')}
    get state() { return $('#lieuDit')}
    get mobileNumber() { return $('#telephonePortable')}
    get homeNumber() { return $('#telephoneFixe')}
    get checkSubscribe() { return $('//label[@class="CheckboxPerso"]')}
    get submitButton() { return $('#BtnCreationSubmit')}


    open() {
        super.open('login')
    }

    setEmailToSignup(uName){
     this.txtEmailToSignup.setValue(uName)
    }
    setPasswordToSignup(pwd){
        this.txtPasswordToSignup.setValue(pwd)
    }

    setConfirmPassword(confirmPassword){
        this.txtConfirmPassword.setValue(confirmPassword)
    }
    clickRadioButton(){
        this.selectRadioButton.click()
    }

    setLastName(lName){
        this.txtLastName.setValue(lName)
    }
    setFirstName(fName){
        this.txtFirstName.setValue(fName)
    }
    setDays(bDays){
        this.days.setValue(bDays)
    }
    setMonth(bMonth){
        this.month.setValue(bMonth)
    }
    setYear(bYear){
        this.year.setValue(bYear)
    }
    setAddress(address1){
        this.address.setValue(address1)
    }
    setAddressDetail(address2){
        this.addressDetail.setValue(address2)
    }
    setAddressDetail2(address3){
        this.addressDetail2.setValue(address3)
    }
    setPostCode(pCode){
        this.postCode.setValue(pCode)
    }
    setState(rState){
        this.state.setValue(rState)
    }
    setMobileNumber(mNumber){
        this.mobileNumber.setValue(mNumber)
    }
    setHomeNumber(hNumber){
        this.homeNumber.setValue(hNumber)
    }
    clickSubscribeCheckBox(){
        this.checkSubscribe.click()
    }
    submitForm(){
        this.submitButton.click()
    }

}

export default new RegistrationPage()