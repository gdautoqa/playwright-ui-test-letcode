Feature: Radio & Checkbox Interactions

  Scenario: Interact with various radio buttons and checkboxes
    Given I navigate to the Radio page
    Then the URL should be "https://letcode.in/radio" and the heading should be " Radio & Checkbox"

    When I select the "Yes" radio button under "Select any one"
    And I select the "No" radio button under "Confirm you can select only one radio button"
    And I select the "Yes" radio button under "Find the bug"
    And I select the "Foo" radio button under "Find which one is selected"
    And I select the "Not going" radio button under "Confirm last field is disabled"

    When I uncheck the "Remember me" checkbox under "Find if the checkbox is selected?"
    And I check the "I agree to the FAKE terms and" checkbox under "Accept the T&C"