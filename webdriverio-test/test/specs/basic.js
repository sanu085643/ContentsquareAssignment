const assert = require('assert')
import LoginPage from '../../pageobjects/LoginPage'
import RegistrationPage from '../../pageobjects/RegistrationPage'


describe('marksandspicy page', () => {
    it('should have the right title on home page', () => {
        browser.url('/')
        const title = browser.getTitle()
        assert.strictEqual(title, '')
    })
})

describe('first test',() =>{
    it('Validate login Credentials',()=>{
        browser.url('/');
        LoginPage.clickSignInLink();
        LoginPage.password.waitForEnabled(5000);
        LoginPage.setUsername('test@test.com');
        LoginPage.setPassword('Thisls@T3st');
        browser.keys('Tab');
        let isErrorDisplayedForUsername = browser.$('//div[@class="form-group form-error"]/input[@id="email"]').isDisplayed();
        let isErrorDisplayedForPassword = browser.$('//div[@class="form-group form-error"]/input[@id="passwd"]').isDisplayed();
        if(isErrorDisplayedForUsername){
            console.log('Error is displayed for the value entered in username field');
        }else{
            console.log('Error is not displayed for the value entered in username field');
        }
        if(isErrorDisplayedForPassword){
            console.log('Error is displayed for the value entered in password field');
        }else{
            console.log('Error is not displayed for the value entered in password field');
        }
    })
})

describe('second test',()=>{
    it('Validate login username with "test"',()=>{
        browser.url('/');
        LoginPage.clickSignInLink();
        LoginPage.username.waitForEnabled(5000);
        LoginPage.setUsername('test');
        browser.keys('Tab');
        let isErrorDisplayedForUsername = browser.$('//div[@class="form-group form-error"]/input[@id="email"]').isDisplayed();
        if(isErrorDisplayedForUsername){
            console.log('Error tooltip is displayed for the value entered in username field');
        }else{
            console.log('Error tooltip is not displayed for the value entered in username field');
        }
    })
})

describe('third test',()=>{
    it('Validate username and password blank',()=>{
        browser.url('/');
        LoginPage.clickSignInLink();
        LoginPage.password.waitForEnabled(5000);
        LoginPage.setUsername('');
        LoginPage.setPassword('');
        browser.keys('Tab');
        let errorDisplayedForUsername = browser.$('//div[@class="form-group form-error"]/input[@id="email"]').isExisting();
        let errorDisplayedForPassword = browser.$('//div[@class="form-group form-error"]/input[@id="passwd"]').isExisting();
        console.log('Error displayed for userName: ' +  errorDisplayedForUsername)
        console.log('Error displayed for password: ' + errorDisplayedForPassword)
    })
})

describe('fourth test',()=>{
    it('Validate the registration journey is successful',()=>{
        browser.url('/');
        LoginPage.clickSignInLink();
        LoginPage.clickCreatAccount();
        RegistrationPage.setEmailToSignup('sanu88@mailinator.com');
        RegistrationPage.setPasswordToSignup('sanu12345');
        RegistrationPage.setConfirmPassword('sanu12345');
        RegistrationPage.txtLastName.click();
        RegistrationPage.setLastName('Gupta');
        RegistrationPage.setFirstName('Sanu');
        RegistrationPage.setDays('27');
        RegistrationPage.setMonth('02');
        RegistrationPage.setYear('1990');
        RegistrationPage.setAddress('1234 avenue de la République');
        RegistrationPage.setAddressDetail('Appartement 123 Escalier A');
        RegistrationPage.setAddressDetail2('Bâtiment Les Orchidées');
        RegistrationPage.setPostCode('60032');
        RegistrationPage.setState('Florida');
        RegistrationPage.setMobileNumber('0612345678');
        RegistrationPage.setHomeNumber('0123456789');
        RegistrationPage.clickSubscribeCheckBox();
        browser.pause(3000);
        RegistrationPage.submitForm();

    })
})
