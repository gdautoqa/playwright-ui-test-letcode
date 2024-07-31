Feature: Form Interactions

  Scenario: Fill and submit the form
    Given I navigate to the Form page
    Then the URL should be "https://letcode.in/forms" and the heading should be " Form"

    When I fill in the form
    And I submit the form