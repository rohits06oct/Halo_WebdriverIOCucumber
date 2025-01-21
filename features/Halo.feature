Feature: Halo Website Test

  Scenario: As a user, Contact details submit button disable
    Given I open halo page
    When I click on the contact button
    Then I saw submit button disable

  Scenario Outline: As a user, Successfully submitted contact details
    Given I open halo page
    When I click on the contact button
    And I fill with <Name>, <Email> and <Message>
    Then I should see Thank you message

    Examples:
      | Name     | Email                         | Message                        |
      | tomsmith | SuperSecretPassword@gmail.com | You logged into a secure area! |
      | foobar   | barfoo@gmail.com              | Your username is invalid!      |
