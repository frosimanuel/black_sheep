# Black Sheep 🤘

### AI Generated NFT collection

An example app for the black sheep minting process developed with help of [Juno](https://juno.build) using [React](https://react.dev).

It's made as a mock-up app for a demo presentation.

## ✨ Features 

- Internet Identity login
- NFID for login abstraction and accessibility
- Transformation of user input into atributes via a model using HTTPS
- Merge those atributes with another model for image generation serverside. 
- Upload generated image to the storage canister and mint.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Run Locally          | Action                                                      |
| :--------------- | :---------------------------------------------------------- |
| `npm install`    | Installs dependencies                                       |
| `npm run dev`    | Starts frontend dev server at `localhost:5173`              |
| `juno dev start` | Quickstart the local development emulator (requires Docker) |
| `npm run build`  | Build your production site to `./dist/`                     |
| `juno deploy`    | Deploy your project to a Satellite                          |

## 🚀 Launch

If you don't know how juno works, check this [guide](https://juno.build/docs/add-juno-to-an-app/create-a-satellite)