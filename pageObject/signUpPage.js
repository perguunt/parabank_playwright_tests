import { expect } from "@playwright/test";
import { ERROR_MESSAGES } from "../utils/messages";

export default class SignUp {
    constructor(page) {
        this.page = page;
        this.url = "https://parabank.parasoft.com/parabank/register.htm";

        this.inputs_locators = {
            firstName: '[id="customer.firstName"]',
            lastName: '[id="customer.lastName"]',
            street: '[id="customer.address.street"]',
            city: '[id="customer.address.city"]',
            state: '[id="customer.address.state"]',
            zipCode: '[id="customer.address.zipCode"]',
            phoneNumber: '[id="customer.phoneNumber"]',
            ssn: '[id="customer.ssn"]',
            username: '[id="customer.username"]',
            password: '[id="customer.password"]',
            repeatedPassword: '[id="repeatedPassword"]',
        };

        this.error_locators = {
            registrationForm: {
                firstName: '[id="customer.firstName.errors"]',
                lastName: '[id="customer.lastName.errors"]',
                street: '[id="customer.address.street.errors"]',
                city: '[id="customer.address.city.errors"]',
                state: '[id="customer.address.state.errors"]',
                zipCode: '[id="customer.address.zipCode.errors"]',
                phoneNumber: '[id="customer.phoneNumber.errors"]',
                ssn: '[id="customer.ssn.errors"]',
                username: '[id="customer.username.errors"]',
                password: '[id="customer.password.errors"]',
                repeatedPassword: '[id="repeatedPassword.errors"]',
            },
            serverErrorPage: 'p.error',
        };
    }

    async openRegistrationPage() {
        await this.page.goto(this.url);
        await expect(this.page).toHaveURL(this.url)
    }

    async fillField(fieldName, value) {
        const field_locator = this.inputs_locators[fieldName];
        console.log(field_locator);
        await this.page.locator(field_locator).fill(value);
    }

    async fillRegistrationForm(userData = {}) {
        for (const key in this.inputs_locators) {
            const value = key === "repeatedPassword" ? (userData.repeatedPassword ?? userData.password) : userData[key];
            if (value !== undefined) {
                await this.fillField(key, value);
            }
        }
    }

    async clickRegistrationButton() {
        await this.page.click('input[type="submit"][value="Register"]');
    }

    async expectWelcomeMessage(userName) {
        const locator = this.page.locator('.title');
        await expect(locator).toContainText(`Welcome ${userName}`);
    }

    async checkDuplicatingUserErrorMessages() {
        const errorLocator = this.page.locator('[id="customer.username.errors"]');
        const errorMessageText = ERROR_MESSAGES.duplicateUserErrorMessage;
        await expect(errorLocator).toContainText(errorMessageText);
    }

    async checkEmptyFormErrorMessages() {
        const fields = [
            'firstName',
            'lastName',
            'street',
            'city',
            'state',
            'zipCode',
            'ssn',
            'username',
            'password',
            'repeatedPassword',
        ];

        for (const field of fields) {
            const errorLocator = this.page.locator(this.error_locators.registrationForm[field]);
            const errorMessageText = ERROR_MESSAGES.emptyFormMessages[field];
            await expect(errorLocator).toContainText(errorMessageText);
        }
    }

    async checkPasswordConfirmationErrorMessages() {
        const errorLocator = this.page.locator(this.error_locators.registrationForm['repeatedPassword']);
        const errorMessageText = ERROR_MESSAGES.passwordConfirmationErrorMessage;
        await expect(errorLocator).toContainText(errorMessageText);
    }

    async checkServerErrorMessage() {
        const errorLocator = this.page.locator(this.error_locators.serverErrorPage);
        const errorMessageText = ERROR_MESSAGES.ServerErrorMessage;
        await expect(errorLocator).toContainText(errorMessageText);
    }
}