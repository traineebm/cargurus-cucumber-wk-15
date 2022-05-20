package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buyAndSellTab;

    @CacheLookup
    @FindBy (xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCars;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Used']")
    WebElement usedCars;


    public void mouseHoverOnBuyAndSellTab() throws InterruptedException {
        Thread.sleep(1000);
        mouseHoverToElement(buyAndSellTab);
        log.info("Mouse hover on 'Buy + Sell' Tab  " + buyAndSellTab.toString());
    }

    public void clickOnSearchLink(){
        mouseHoverToElementAndClick(searchCars);
        log.info("Clicking on Search cars link  " + searchCars.toString());
    }

    public void clickOnUsedLink(){
        mouseHoverToElementAndClick(usedCars);
        log.info("Clicking on Used link  " + usedCars.toString());
    }

}
