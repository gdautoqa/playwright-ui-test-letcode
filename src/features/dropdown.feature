Feature: Dropdown Selection

  Scenario: Interact with various dropdowns and assert the selections
    Given I navigate to the Drop-Down page
    Then the URL should be "https://letcode.in/dropdowns" and the heading should be " Dropdown"
    
    When I select the fruit option with value "3"
    Then the fruit option with value "3" should be selected

    When I select the superhero option with value "ta"
    Then the superhero option with value "ta" should be selected

    When I select the superhero options with values "ta" and "bt"
    Then the superhero options with values "ta" and "bt" should be selected

    When I select the language option with value "py"
    Then the language option with value "py" should be selected

    When I select the country option with value "India"
    Then the country option with value "India" should be selected