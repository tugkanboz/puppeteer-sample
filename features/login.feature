Feature: Login 
    This feature file is created to test login page

    Scenario: Successful Login 
        Given I open login page
        When I fill login form
        When I click on submit button
        Then I expect to see application content