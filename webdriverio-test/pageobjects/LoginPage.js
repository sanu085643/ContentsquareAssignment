import Page from './Page'

class LoginPage extends Page {

    get username() { 
        return $('#email');
    }
    get password() { return $('#passwd') }
    get linkSignIn() { return $('//a[@class="login"]') }
    get creatAccount() { return $('#SubmitCreate') }

    open() {
        super.open('login')
    }

    clickSignInLink() {
        this.linkSignIn.click()
    }

    clickCreatAccount() {
        this.creatAccount.click()
    }
    setUsername(uName){
     this.username.setValue(uName)
    }
    setPassword(pwd){
        this.password.setValue(pwd)
    }


}

export default new LoginPage()