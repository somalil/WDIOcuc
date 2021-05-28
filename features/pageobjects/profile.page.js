import Page from './page';

class ProfilePage extends Page {

    get iconUser () { return $('.ant-avatar-square'); }

    async isOpen(){
        await expect(browser).toHaveUrlContaining('/profile/');
        await expect(this.iconUser).toBeDisplayed();
    }
}

export default new ProfilePage();
