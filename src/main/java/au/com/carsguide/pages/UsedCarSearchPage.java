package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UsedCarSearchPage extends Utility {

    private static final Logger log = LogManager.getLogger(UsedCarSearchPage.class.getName());

    public UsedCarSearchPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "makes")
    WebElement getCarMakes;

    @CacheLookup
    @FindBy (id = "models")
    WebElement getCarModels;

    @CacheLookup
    @FindBy (id = "locations")
    WebElement getLocations;

    @CacheLookup
    @FindBy (id = "priceTo")
    WebElement getMaxPrice;

    @CacheLookup
    @FindBy (id = "search-submit")
    WebElement findMyNextCarButton;

    @CacheLookup
    @FindBy (xpath = "//div[contains(@class,'heading main-heading item-ad-wrapper')]/h1")
    WebElement getSearchPageTitle;

    public void selectCarMakeFromDropDown(String text) {
        selectByValueFromDropDown(getCarMakes, text);
        log.info("Click on Car Make: " + getCarMakes.toString());
    }

    public void selectCarModelFromDropDown(String text) {
        selectByValueFromDropDown(getCarModels, text);
        log.info("Click on Car Model: " + getCarModels.toString());
    }

    public void selectLocationFromDropDown(String text) {
        selectByValueFromDropDown(getLocations, text);
        log.info("Click on Location: " + getLocations.toString());
    }

    public void selectCarPriceFromDropDown(String text) {
        selectByVisibleTextFromDropDown(getMaxPrice, text);
        log.info("Click on Price: " + getMaxPrice.toString());
    }

    public void clickingOnFindMyNextCarButton() {
        clickOnElement(findMyNextCarButton);
        log.info("Click on find my next Car Button: " + findMyNextCarButton.toString());
    }

    public String verifyIfNavigateToNewAndUsedCarSearchPage() {
        log.info("Getting a Page Header text for Verification: " + getSearchPageTitle.toString());
        return getTextFromElement(getSearchPageTitle);
    }



}

