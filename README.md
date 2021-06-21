# Raveny :pizza:

A website where people can find recipes, and also search them based on different criterias. :smiling_face_with_three_hearts:

## Process and Goal 💪

My primary goal with this project was to work with React and apply various things I've learned from the course [Epic React](https://epicreact.dev).

I also worked with TypeScript and wrote tests, E2E with Cypress and Integration with RTL, I also used MSW to mock the requests in my integration tests.

After finishing this project, I consistently came back and made it more inclusive, considering I had a 3-month deep dive into Accessibility after the first finished version of this project. That is why the hook `useHeadingFocus` exists and other solutions that have made this web app more inclusive.

## Installation :page_with_curl:

After cloning the project, you need to run `npm install`.

This project uses three environment variables, one for URL, one for the API id and key :sparkling_heart:.
<br>
Create a `.env.development.local` and a `.env.test.local` file in the root folder.
It should have two environment variables:
<br>
`REACT_APP_API_URL=https://api.edamam.com/search`
<br>
`REACT_APP_API_KEY=YourApiKeyFromEdamam`
<br>
`REACT_APP_API_ID=YourApiIdFromEdamam`
<br>
The key and id come from https://developer.edamam.com/edamam-docs-recipe-api, there you need to create an account in order to get your API key and id :stuck_out_tongue_closed_eyes:.

## Tools :hammer:

- Building: React, TypeScript & Styled-Components :sunglasses:
- Integration Tests: Jest and React Testing Library :blue_heart:
- E2E Tests: Cypress :metal:
- Developing components in isolation: StoryBook :fire:
- Mocking Requests in Tests: Mock Service worker (MSW) :smile:

## License :nerd_face:

Built by Tiger Abrodi under MIT license :two_hearts:.

## Demo

https://user-images.githubusercontent.com/49603590/122789663-d5a2da80-d2b7-11eb-8ccf-620c51aaf25d.mp4
