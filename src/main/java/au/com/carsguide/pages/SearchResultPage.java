package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(SearchResultPage.class.getName());

    public SearchResultPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement pageHeaderText;

    public String verifyResult(){
        log.info("Getting a Result for Verification : " + pageHeaderText.toString());
        return getTextFromElement(pageHeaderText);
    }

}
