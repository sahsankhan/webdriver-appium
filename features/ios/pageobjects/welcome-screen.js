
class WelcomeScreen {

    startBtn = "~Start Journey";
    nextBtn = "~Next";


    get getStartedButton() {

        return $(this.startBtn);
    }

    get getNextButtonForLanguage() {

        return $(this.nextBtn);
    }

    async clickOnGetStartedBtn() {

        await this.getStartedButton.click();
        console.log("Get Started button Is clicked");
    }

    async clickOnNextBtnOnSelectLanguage() {

        await browser.pause(3000)
        await this.getNextButtonForLanguage.click();
        console.log("Next button on select language is clicked");
    }
}
module.exports = new WelcomeScreen();