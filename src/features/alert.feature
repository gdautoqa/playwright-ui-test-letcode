Feature: Alert Interactions

  Scenario: Interact with various alerts and assert behaviors
    Given I navigate to the Alert page
    Then the URL should be "https://letcode.in/alert" and the heading should be " Alert"

    When I click on "Simple Alert" and dismiss it
    When I click on "Confirm Alert" and dismiss it
    When I click on "Prompt Alert", enter "John Doe", and dismiss it
    Then I should see the text "Your name is: John Doe"

    When I click on "Modern Alert" and read the message
    Then I should see "Modern Alert - Some people"
    When I close the modern alert
    Then the alert should be closed