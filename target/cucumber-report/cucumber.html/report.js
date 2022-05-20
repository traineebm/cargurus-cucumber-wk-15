$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Hyundai",
        "Getz",
        "NSW - Hunter",
        "$10,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Nissan",
        "Altima",
        "NSW - Central Coast",
        "$15,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Volkswagen",
        "Golf",
        "NSW - Newcastle",
        "$20,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Kia",
        "Cerato",
        "NSW - New England",
        "$35,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Jaguar",
        "F-Pace",
        "NSW-All",
        "$60,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Polestar",
        "2",
        "NSW-Sydney",
        "$75,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14716680600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1568843800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Getz\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$10,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Hyundai\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 428110200,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 576500300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 587896900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Getz",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1673296700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 381196100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 404820700,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2414267800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 126994500,
  "error_message": "org.junit.ComparisonFailure: Error message expected:\u003c[Hyundai]\u003e but was:\u003c[3 Hyundai Getzs for Sale under $10,000 in Hunter, NSW]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(BuyAndSellCarsSearchSteps.java:55)\r\n\tat ✽.Then I should see the make \"Hyundai\" in results(buy.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3536753200,
  "status": "passed"
});
formatter.before({
  "duration": 9022028200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1233874900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Altima\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 621853200,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 719236700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 393889100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Altima",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 748211000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 587817000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 295137700,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2167822000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40149945000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h1[@class\u003d\u0027listing-search-title\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027BINDI\u0027, ip: \u0027192.168.1.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [66284fc2-5e01-49c8-a44a-82d561d92f90, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220428192727, moz:debuggerAddress: localhost:55261, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 12432, moz:profile: C:\\Users\\bindi\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:55261/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 66284fc2-5e01-49c8-a44a-82d561d92f90\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.iShouldSeeTheMakeInResults(NewAndUsedCarSearchPage.java:81)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(BuyAndSellCarsSearchSteps.java:55)\r\n\tat ✽.Then I should see the make \"Nissan\" in results(buy.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3452263700,
  "status": "passed"
});
formatter.before({
  "duration": 8911102400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1297770600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Golf\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 508709500,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 644431300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 350410000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golf",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 797794200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 631944800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 347378000,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2176169200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 141284000,
  "error_message": "org.junit.ComparisonFailure: Error message expected:\u003c[Volkswagen]\u003e but was:\u003c[7 Volkswagen Golfs for Sale under $20,000 in Newcastle, NSW]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(BuyAndSellCarsSearchSteps.java:55)\r\n\tat ✽.Then I should see the make \"Volkswagen\" in results(buy.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3479547600,
  "status": "passed"
});
formatter.before({
  "duration": 9696273200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1270906100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Cerato\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 649198600,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 776176000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 362374900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cerato",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 729285000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 605976400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 367828700,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2150940000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 155997200,
  "error_message": "org.junit.ComparisonFailure: Error message expected:\u003c[Kia]\u003e but was:\u003c[35 Kia Ceratos for Sale under $35,000 in New England, NSW]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(BuyAndSellCarsSearchSteps.java:55)\r\n\tat ✽.Then I should see the make \"Kia\" in results(buy.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3152801300,
  "status": "passed"
});
formatter.before({
  "duration": 9468955000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1255492800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"F-Pace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW-All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Jaguar\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 576510700,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 999170600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 701218700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "F-Pace",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1669237600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW-All",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 20155211800,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: NSW-All\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027BINDI\u0027, ip: \u0027192.168.1.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat au.com.carsguide.utility.Utility.selectByValueFromDropDown(Utility.java:157)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.selectLocationFromDropDown(NewAndUsedCarSearchPage.java:60)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iSelectLocation(BuyAndSellCarsSearchSteps.java:40)\r\n\tat ✽.And I select location \"NSW-All\"(buy.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3554040900,
  "status": "passed"
});
formatter.before({
  "duration": 9286332500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1323418300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Polestar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW-Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$75,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Polestar\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 549266100,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 748174300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Polestar",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 398335600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 745603600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW-Sydney",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 20220720700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: NSW-Sydney\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027BINDI\u0027, ip: \u0027192.168.1.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat au.com.carsguide.utility.Utility.selectByValueFromDropDown(Utility.java:157)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.selectLocationFromDropDown(NewAndUsedCarSearchPage.java:60)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iSelectLocation(BuyAndSellCarsSearchSteps.java:40)\r\n\tat ✽.And I select location \"NSW-Sydney\"(buy.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$75,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Polestar",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2673288600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used link\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Hyundai",
        "I20",
        "ACT - All",
        "$10,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Nissan",
        "180",
        "NSW - All",
        "$20,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Volkswagen",
        "Up!",
        "NT - All",
        "$15,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Kia",
        "EV6",
        "NSW - Central Coast",
        "$70,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "MG",
        "1100",
        "NSW - Far West",
        "$15,000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Genesis",
        "GV80",
        "WA - Perth",
        "$100,000"
      ],
      "line": 44,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9812655200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1319150100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used link\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"I20\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$10,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Hyundai\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 591530200,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1289370300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 386934200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I20",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1567432200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 478568900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 301781200,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4155719700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 168438800,
  "error_message": "org.junit.ComparisonFailure: Error message expected:\u003c[Hyundai]\u003e but was:\u003c[3 Used Hyundai I20s for Sale under $10,000 in ACT]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(BuyAndSellCarsSearchSteps.java:55)\r\n\tat ✽.Then I should see the make \"Hyundai\" in results(buy.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2970237400,
  "status": "passed"
});
formatter.before({
  "duration": 10067006300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1167735800,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used link\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"180\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 455710400,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 791136500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 374195800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 673106100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 534323700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 295716900,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3081024500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40148084600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h1[@class\u003d\u0027listing-search-title\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027BINDI\u0027, ip: \u0027192.168.1.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [5096fe61-ae43-4f2d-a505-f33c87ec587d, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220428192727, moz:debuggerAddress: localhost:52317, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 15604, moz:profile: C:\\Users\\bindi\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:52317/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5096fe61-ae43-4f2d-a505-f33c87ec587d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.iShouldSeeTheMakeInResults(NewAndUsedCarSearchPage.java:81)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(BuyAndSellCarsSearchSteps.java:55)\r\n\tat ✽.Then I should see the make \"Nissan\" in results(buy.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3546321000,
  "status": "passed"
});
formatter.before({
  "duration": 9817078200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1321870600,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used link\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"Up!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 386780000,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1118690300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 339430700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Up!",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 292035600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 262983500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 700745200,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6668202600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40067082000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h1[@class\u003d\u0027listing-search-title\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027BINDI\u0027, ip: \u0027192.168.1.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [5c592d21-d55f-4ab4-8cd8-da8f17809e0f, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220428192727, moz:debuggerAddress: localhost:52763, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 13240, moz:profile: C:\\Users\\bindi\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:52763/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5c592d21-d55f-4ab4-8cd8-da8f17809e0f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.iShouldSeeTheMakeInResults(NewAndUsedCarSearchPage.java:81)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(BuyAndSellCarsSearchSteps.java:55)\r\n\tat ✽.Then I should see the make \"Volkswagen\" in results(buy.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3781516000,
  "status": "passed"
});
formatter.before({
  "duration": 10517534000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1236010300,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used link\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"EV6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 564223200,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1437690000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 447431400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EV6",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1937681600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 587570900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 301998600,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3271094700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40177743700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h1[@class\u003d\u0027listing-search-title\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027BINDI\u0027, ip: \u0027192.168.1.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [5c847001-fb96-4b65-9f5e-8e1c17a7fc06, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220428192727, moz:debuggerAddress: localhost:53035, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 1748, moz:profile: C:\\Users\\bindi\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:53035/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5c847001-fb96-4b65-9f5e-8e1c17a7fc06\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.iShouldSeeTheMakeInResults(NewAndUsedCarSearchPage.java:81)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(BuyAndSellCarsSearchSteps.java:55)\r\n\tat ✽.Then I should see the make \"Kia\" in results(buy.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3520382100,
  "status": "passed"
});
formatter.before({
  "duration": 8930918200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1200681300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used link\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"MG\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"1100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"NSW - Far West\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"MG\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1151412300,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1479580800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MG",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 334852700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1100",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 396942200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Far West",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 288530500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 347214800,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3324898300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MG",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40063903200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h1[@class\u003d\u0027listing-search-title\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027BINDI\u0027, ip: \u0027192.168.1.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [456c4c4f-abc4-49ed-9d69-2e7e9023097a, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220428192727, moz:debuggerAddress: localhost:53041, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 7632, moz:profile: C:\\Users\\bindi\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:53041/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 456c4c4f-abc4-49ed-9d69-2e7e9023097a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.iShouldSeeTheMakeInResults(NewAndUsedCarSearchPage.java:81)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(BuyAndSellCarsSearchSteps.java:55)\r\n\tat ✽.Then I should see the make \"MG\" in results(buy.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3225334200,
  "status": "passed"
});
formatter.before({
  "duration": 9352832500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 4335411200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click \u0027Used link\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select make \"Genesis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select model \"GV80\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select location \"WA - Perth\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the make \"Genesis\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2472127500,
  "status": "passed"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 2223834700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Genesis",
      "offset": 15
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 682034100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GV80",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1400885500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - Perth",
      "offset": 19
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 641209300,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027BINDI\u0027, ip: \u0027192.168.1.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [21505636-f5d4-4239-a746-3ea6a066bb18, findElement {using\u003did, value\u003dlocations}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220428192727, moz:debuggerAddress: localhost:60660, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 10212, moz:profile: C:\\Users\\bindi\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:60660/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 21505636-f5d4-4239-a746-3ea6a066bb18\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:46)\r\n\tat au.com.carsguide.utility.Utility.selectByValueFromDropDown(Utility.java:157)\r\n\tat au.com.carsguide.pages.NewAndUsedCarSearchPage.selectLocationFromDropDown(NewAndUsedCarSearchPage.java:60)\r\n\tat au.com.carsguide.steps.BuyAndSellCarsSearchSteps.iSelectLocation(BuyAndSellCarsSearchSteps.java:40)\r\n\tat ✽.And I select location \"WA - Perth\"(buy.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyAndSellCarsSearchSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Genesis",
      "offset": 23
    }
  ],
  "location": "BuyAndSellCarsSearchSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2390100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027BINDI\u0027, ip: \u0027192.168.1.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [21505636-f5d4-4239-a746-3ea6a066bb18, screenshot {}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220428192727, moz:debuggerAddress: localhost:60660, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 10212, moz:profile: C:\\Users\\bindi\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:60660/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 21505636-f5d4-4239-a746-3ea6a066bb18\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat au.com.carsguide.utility.Utility.getScreenshot(Utility.java:333)\r\n\tat au.com.carsguide.Hooks.tearDown(Hooks.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});