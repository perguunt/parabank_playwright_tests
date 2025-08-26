import { test } from '@playwright/test';
import SignUp from './pageObject/signUpPage';
import ValueGenerator from './utils/valueGenerator';

test('user succefully register account', async ({page}) => {
    const signUpPage = new SignUp(page);
    const userData = new ValueGenerator();
    const user = userData.userDataGenerator();

    await signUpPage.openRegistrationPage();
    await signUpPage.fillRegistrationForm({
        ...user
    });
    await signUpPage.clickRegistrationButton();
    await signUpPage.expectWelcomeMessage(user.username);
})