const {I} = inject();

export class LandingPage {
    pageURL = 'https://www.check24.de/';

    goto() {
        I.amOnPage(this.pageURL)
    }

    // insert your locators and methods here
}
