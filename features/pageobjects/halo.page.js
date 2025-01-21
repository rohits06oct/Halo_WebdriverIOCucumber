import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HaloPage {
    /**
     * define selectors using getter methods
     */
    get inputName () {
        return $("//input[@class='contact__input'][@name='name']");
    }

    get inputEmail () {
        return $("//input[@class='contact__input'][@name='email']");
    }

    get inputMessage () {
        return $("//textarea[@class='contact__text-area'][@name='message']");
    }

    get submitButton () {
        return $("//button[@type='submit']");
    }

    /**
     * fill contact information
     */
    async contact (name, email, message) {
        await this.inputName.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputMessage.setValue(message);
        await this.submitButton.click();
    }

    /**
     * Disable contact submit button
     */
    async disableSubmit () {
        await (this.submitButton).waitForDisplayed();
        const isDisabled = !(await (this.submitButton).isEnabled());
        return isDisabled;
    }

    /**
     * open URL
     */
    open () {
        return browser.url(`https://www.halopowered.com/`)
    }
}

export default new HaloPage();
