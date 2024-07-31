Feature: Edit Inputs

  Scenario: Interact with various input fields and assert behaviors
    Given I navigate to the Edit page
    Then the URL should be "https://letcode.in/edit" and the title should be "Interact with Input fields"
    
    When I enter "John Doe" in the name field
    Then "John Doe" should be entered in the name field

    When I join text "I am great" in the join field
    Then the join field should contain "I am great"

    When I fill the text field with "Text"
    Then the text field should contain "Text"

    When I clear the text in the clear field
    Then the clear field should be empty

    When I click the read-only field
    Then the field should not be editable