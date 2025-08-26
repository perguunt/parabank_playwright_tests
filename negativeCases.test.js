import { expect, test } from "@playwright/test";
import SignUp from "./pageObject/signUpPage";
import ValueGenerator from "./utils/valueGenerator";

test('create user with the same username', async ({page}) => {
    const signUpPage = new SignUp(page);
    const userData = new ValueGenerator();
    const user = userData.userDataGenerator();

    await signUpPage.openRegistrationPage();
    await signUpPage.fillRegistrationForm({
        ...user
    });
    await signUpPage.clickRegistrationButton();
    await signUpPage.expectWelcomeMessage(user.username);

    await signUpPage.openRegistrationPage();
    await signUpPage.fillRegistrationForm({
        ...user
    });
    await signUpPage.clickRegistrationButton();

    await signUpPage.checkDuplicatingUserErrorMessages();
});

test('send empty registration form', async ({page}) => {
    const signUpPage = new SignUp(page);

    await signUpPage.openRegistrationPage();
    await signUpPage.clickRegistrationButton();
    await signUpPage.checkEmptyFormErrorMessages();
});

test('password confirmation doesnt match password', async ({page}) => {
    const signUpPage = new SignUp(page);
    const userData = new ValueGenerator();
    const user = userData.userDataGenerator();

    await signUpPage.openRegistrationPage();
    await signUpPage.fillRegistrationForm({
        ...user,
        repeatedPassword: "@@@"
    });
    await signUpPage.clickRegistrationButton();
    await signUpPage.checkPasswordConfirmationErrorMessages();
})

test('internal server error', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const signUpPage = new SignUp(page);
    await signUpPage.openRegistrationPage();

    const cookies = await context.cookies();
    const session = cookies.find(c => c.name === 'JSESSIONID');
    await context.addCookies([{
        ...session,
        value: 'updated_value'
    }]);
    await signUpPage.clickRegistrationButton();
    await signUpPage.checkServerErrorMessage();
})