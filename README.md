# Blue Bite Assessment

Out of respect for your time, please timebox yourself to 4 hours for this evaluation (it should not take this long). Read the directions in their entirety at first and prioritize what, in your opinion, are the most important skills to showcase.  If you run out time and are not able to complete everything, add some notes to the readme as to what next steps you would take and what your thought process would be. 


## Introduction

Imagine you are provided a new feature that needs to be tested. You are provided with a user story with design mockups and the implementation created by the developer. The goal is to validate that the implementation meets all requirements.

## User Story

---

### User Story

**As a** Brand Manager
**I want** the ability for my customers to entry a raffle
**So that** I can have continue engagement with our products

### Detailed Description

The customer will be presented with an experience where they have the chance to enter a raffle to win a pair of sneakers provided by the brand. To enter the raffle they need to fill out a form capturing:
* Name
* Age (must be 18 or older)
* Validate Email
* Reason (optional)

There is no limit to the amount of times a customer can enter the raffle. Upon successful completion, the customer will be provided messaging that the submission was successful and how many times they have entered the raffle. For the customer to enter any subsequent submission they must reload the page. The submission count will be based on the device the user submits it on, so customers can submit different emails. If the customer is not 18 or older they will be presented with messaging stating they are not old enough. In that event submissions should not be saved through our raffle provider.

The winner of the raffle will be managed independently and will be contacted via email.

### Acceptance Criteria
* As a customer, I must provide my name, age, and validate email address
* As a customer, I have the option to submit a reason for why I should win
* As a customer, I must be 18 or older for my submission to be valid and saved
* As a customer, I must be able to submit more than 1 submission
* As a customer, I should have the ability to see the number of time I have entered the raffle
* As a customer, if I do not provide the necessary information I should be informed on what required information is missing
* The experience should match the provided designs

### UI/UX Details
* [Mockups](https://www.figma.com/proto/RsvVGWdLWMOdsJLAWywR4R/QA-Assessment?page-id=0%3A1&node-id=2%3A2&viewport=241%2C48%2C1&scaling=min-zoom)
* When an input field is focused the input should turn blue
* Required fields should turn red if fails form submission

---

## Requirements

### Part 1

* Provide a defect report for the [Experience](https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca)

### Part 2

* Write test cases for the [Experience](https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca)

### Part 3
* Automate Test cases for the [Experience](https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca)
    * Utilize Cypress.
    * Provide instructions on how to run automated tests
    * Provide test results

## Submission

Upon completion of the assessment, please email your point of contact at Blue Bite a link to the repository.
