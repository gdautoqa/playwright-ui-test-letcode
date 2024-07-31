Feature: Slider Interactions

  Scenario: Interact with slider and assert behaviors
    Given I navigate to the Slider page
    Then the URL should be "https://letcode.in/slider" and the heading should be " Slider"

    When I fill the word limit input with "10"
    Then the word limit value should be "10"

    When I click the "Get Countries" button
    Then 10 country names should be displayed