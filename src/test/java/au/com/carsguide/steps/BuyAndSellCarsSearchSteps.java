package au.com.carsguide.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.NewAndUsedCarSearchPage;
import au.com.carsguide.pages.UsedCarSearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuyAndSellCarsSearchSteps {

    @When("^I mouse hover on 'buy \\+ sell' tab$")
    public void iMouseHoverOnBuySellTab() throws InterruptedException {
        new HomePage().mouseHoverOnBuyAndSellTab();
    }

    @When("^I click 'Search Cars' link$")
    public void iClickSearchCarsLink(){
        new HomePage().clickOnSearchLink();
    }

    @Then("^I navigate to 'new and used car search' page$")
    public void iNavigateToNewAndUsedCarSearchPage(){
        Assert.assertEquals("Error message","New & Used Car Search - carsguide",new NewAndUsedCarSearchPage().verifyIfNavigateToNewAndUsedCarSearchPage());
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String text){
        new NewAndUsedCarSearchPage().selectCarMakeFromDropDown(text);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model){
        new NewAndUsedCarSearchPage().selectCarModelFromDropDown(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String loc){
        new NewAndUsedCarSearchPage().selectLocationFromDropDown(loc);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price){
      new NewAndUsedCarSearchPage().selectCarPriceFromDropDown(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarSearchPage().clickingOnFindMyNextCarButton();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String expectedMessage){
        Assert.assertEquals("Error message",expectedMessage, new NewAndUsedCarSearchPage().iShouldSeeTheMakeInResults());
    }

    @When("^I click 'Used link'$")
    public void iClickUsedLink() {
        new HomePage().clickOnUsedLink();
    }

    @Then("^I navigate to 'Used Cars For Sale' page$")
    public void iNavigateToUsedCarsForSalePage() {
        new UsedCarSearchPage().verifyIfNavigateToNewAndUsedCarSearchPage();
    }


}
