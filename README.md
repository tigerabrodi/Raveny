# Raveny :smiling_face_with_three_hearts:

A website where people can find recipes, search based on different criterias, and create an account to manage their recipes. :pizza:

## Background and Goal

I love food and I like cooking :yum:. My goal with this side-project is to maximize my learning when it comes to the field of frontend :smiley:.

The goal is to not create an awesome website where people can search for recipes and stuffs :wink:, but also implement things I have learned and am learning from EpicReact, TestingJavaScript, Frontend Masters (Workshops in CSS/JS/TS) and Effective TypeScript :tada:.

This project will also include tests. My goal is not to write tests for every single function, rather writing the tests resembling the user, in order to get the most confidence that my software does what it is suppose to be doing, when the user interacts with it :fire:.

## Installation

After cloning the project, you need to run `npm install`.

This project uses three environment variables, one for URL, one for the API id and key :sparkling_heart:.
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
The key and id come from https://developer.edamam.com/edamam-docs-recipe-api, there you need to create an account in order to get your API key and id :stuck_out_tongue_closed_eyes:.

## Tools

- Building: React, TypeScript & Styled-Components :metal:
- Integration Tests: Jest and React Testing Library :blue_heart:
- E2E Tests: Cypress :metal:
- Developing components in isolation: StoryBook :fire:
- Mocking requests in StoryBook and Tests: Mock Service worker (MSW) :smile:
- Backend service: Firebase :cowboy_hat_face:

## License

Built by Tiger Abrodi under MIT license :two_hearts:.
