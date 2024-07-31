Feature: Waits Interactions

  Scenario: Interact with waits and assert behaviors
    Given I navigate to the Waits page
    Then the URL should be "https://letcode.in/waits" and the heading should be " Wait"

    When I click the "Simple Alert" button
    Then I wait for the alert to show and assert the text says "Finally I'm here, just to say Hi :)"
    And I click OK