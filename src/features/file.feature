Feature: File Interactions

  Scenario: Upload and download files
    Given I navigate to the File page
    Then the URL should be "https://letcode.in/file" and the heading should be " Upload and Download"

    When I choose the file "sample.pdf" from "src/data/upload" folder
    And I download the file to the "src/data/download" folder
    Then the test should delete the file "sample.pdf" from "src/data/download" folder