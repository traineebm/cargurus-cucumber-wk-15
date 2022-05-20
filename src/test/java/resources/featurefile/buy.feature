Feature: Search functionality

  Background: I am on homepage
    When      I mouse hover on 'buy + sell' tab

  @Regression
  Scenario Outline: Search the buy car with model
    When I click 'Search Cars' link
    Then I navigate to 'new and used car search' page
    And  I select make "<make>"
    And  I select model "<model>"
    And  I select location "<location>"
    And  I select price "<price>"
    And  I click on Find My Next Car tab
    Then I should see the make "<make>" in results
  Examples:
    | make       | model  | location            | price   |
    | Hyundai    | Getz   | NSW - Hunter        | $10,000 |
    | Nissan     | Altima | NSW - Central Coast | $15,000 |
    | Volkswagen | Golf   | NSW - Newcastle     | $20,000 |
    | Kia        | Cerato | NSW - New England   | $35,000 |
    | Jaguar     | F-Pace | NSW-All             | $60,000 |
    | Polestar   | 2      | NSW-Sydney          | $75,000 |



  @Regression
  Scenario Outline: Search the used car with model
    When I click 'Used link'
    Then I navigate to 'Used Cars For Sale' page
    And  I select make "<make>"
    And  I select model "<model>"
    And  I select location "<location>"
    And  I select price "<price>"
    And  I click on Find My Next Car tab
    Then I should see the make "<make>" in results
  Examples:
    | make       | model | location            | price    |
    | Hyundai    | I20   | ACT - All           | $10,000  |
    | Nissan     | 180   | NSW - All           | $20,000  |
    | Volkswagen | Up!   | NT - All            | $15,000  |
    | Kia        | EV6   | NSW - Central Coast | $70,000  |
    | MG         | 1100  | NSW - Far West      | $15,000  |
    | Genesis    | GV80  | WA - Perth          | $100,000 |


