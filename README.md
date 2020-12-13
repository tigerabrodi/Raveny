# Raveny :pizza:

A website where people can find recipes, search based on different criterias, and create an account to manage their recipes. :smiling_face_with_three_hearts:

## Background and Goal

I love food and I like cooking :yum:. My goal with this side-project is to learn very much :smiley:. After releasing the initial version, I plan on collecting feedback for a week or two, then maintain/update this project for about 1-2 months, I will probably even add new features, aside from fixing bugs and improving the UX/UI :tada:

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
