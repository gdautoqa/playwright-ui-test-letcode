Feature: Table Interactions

  Scenario: Interact with table and assert behaviors
    Given I navigate to the Advanced Table page
    Then the URL should be "https://letcode.in/advancedtable" and the heading should be " Table"

    When I select to show "25" entries
    And I sort entries descending by S.NO