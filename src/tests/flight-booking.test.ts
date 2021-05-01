import {LandingPage} from "../pages/landingPage";

Feature('Check24 flight booking');

Scenario('check24 flight booking page test', ({I}) => {
    const landingPage = new LandingPage();
    landingPage.goto();
});
