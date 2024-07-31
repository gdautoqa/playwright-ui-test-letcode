Feature: Tabs Interactions

  Scenario: Interact with tabs and assert behaviors
    Given I navigate to the Windows page
    Then the URL should be "https://letcode.in/windows" and the heading should be " Windows"

    When I click on the "open home page" button
    And I go to the newly opened tab
    Then I print the title of the page
    And I close the parent window
    And I close the child window

    When I click on the "Muiltiple windows" button
    Then I print all the window titles
    And I close all the windows