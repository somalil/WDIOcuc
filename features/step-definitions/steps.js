import { When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

When(/^I open login page$/,async () => {
    await LoginPage.open()
});
When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
Then(/^Profile page is open$/, async () => {
    await ProfilePage.isOpen()
});
Then(/^Submit button is disabled$/, async () => {
    await expect(await LoginPage.btnSubmit).toBeDisabled();
});
Then(/^Error toast appears$/, async () => {
    await expect(await LoginPage.errorToast).toBeDisplayed();
});
When(/^I enter login with (.*)$/, async (username) => {
    await (await LoginPage.inputUsername).setValue(username)
});
When(/^I clear login field$/, async () => {
    await LoginPage.clearInput(await LoginPage.inputUsername);
});
Then(/^Login validation error appears$/, async () => {
    await expect(await LoginPage.loginValidationError).toBeDisplayed();
    await expect(await LoginPage.loginValidationError).toHaveText('Required');
});