# Raveny

A website where people can search for recipes.

## Background and Goal

I love food and I like cooking. My goal with this side-project is to maximize my learning when it comes to the field of frontend.

The goal is to not create an awesome website where people can search for recipes, but also implement things I have learned and am learning from EpicReact, TestingJavaScript, Frontend Masters (Workshops in CSS/JS/TS) and Effective TypeScript.

This project will also include tests. My goal is not to write tests for every single function, rather writing the tests resembling the user, in order to get the most confidence that my software does what it is suppose to be doing, when the user interacts with it.

## Installation

After cloning the project, you need to run `npm install`.

This project uses two environment variables, one for URL and one for the API key that I am using to retrieve the recipes information.
<br>
Create a `.env.development.local` file in the root folder.
It should have two environment variables:
<br>
`REACT_APP_API_URL=https://api.edamam.com/search`
<br>
`REACT_APP_API_KEY=YourApiKeyFromEdamam`
<br>
`REACT_APP_API_ID=YourApiIdFromEdamam`
<br>
The second key is the API key from https://developer.edamam.com/edamam-docs-recipe-api, there you need to create an account in order to get your API key.

## Tools

- Building: React, TypeScript & Styled-Components
- Integration Tests: Jest and React Testing Library
- E2E Tests: Cypress
- Developing component in isolation: StoryBook
- Mocking requests in StoryBook and Tests: Mock Service worker (MSW)

## License

Built by Tiger Abrodi under MIT license.
