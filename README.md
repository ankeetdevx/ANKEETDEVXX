# Ankit Portfolio (Node.js + React.js)

## Stack
- React.js with Vite
- Node.js + Express
- GitHub-ready deployment setup

## Project Structure
- `client/` React frontend
- `server.js` Express production server
- `render.yaml` Render deployment config
- `client/public/media/` profile image and resume PDF

## Run Locally
1. Install Node.js LTS from [nodejs.org](https://nodejs.org/)
2. Open terminal in this folder
3. Install packages with `npm install`
4. Start the app in development with `npm run dev`

## Production Build
1. Run `npm run build`
2. Start the Node server with `npm start`

The server uses `PORT` from the hosting platform, or falls back to `3000`.

## Host Online With Node.js
This repo is prepared to run as a Node.js web service.

### Render setup
Based on Render's current Node/Express docs, a web service can use standard Node build and start commands such as `npm install` and `npm start`, and Render auto-deploys from GitHub after the repo is linked.

Sources:
- [Deploy a Node Express App](https://render.com/docs/deploy-node-express-app)
- [Web Services](https://render.com/docs/web-services)

1. Open [Render Dashboard](https://dashboard.render.com/)
2. Click `New` -> `Web Service`
3. Connect your GitHub account and select this repo
4. Confirm these values:
   - Runtime: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
5. Deploy the service

After the first deploy, every push to GitHub can redeploy automatically.
