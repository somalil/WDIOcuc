import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email') }
    get inputPassword () { return $('#normal_login_password') }
    get btnSubmit () { return $('.login-form-button') }
    get errorToast () { return $('.ant-notification-notice-message'); }
    get loginValidationError () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]') }

    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    open () {
        return super.open('user/login');
    }
}

export default new LoginPage();
