Feature: Auth

  Background:
    When I open login page

  Scenario Outline: Successful login

    When I login with <username> and <password>
    Then Profile page is open

    Examples:
      | username                | password             |
      | mevibe8861@leonvero.com | 690844               |

  Scenario: Submit button is disabled if login and password are absent

    Then Submit button is disabled

  Scenario Outline: Fails if invalid data provided

    When I login with <username> and <password>
    Then Error toast appears

    Examples:
      | username                | password             |
      | mevibe8861@leonvero.com | 696969               |

  Scenario Outline: Login input is required

    When I enter login with <username>
    And I clear login field
    Then Login validation error appears

    Examples:
      | username                |
      | mevibe8861@leonvero.com |