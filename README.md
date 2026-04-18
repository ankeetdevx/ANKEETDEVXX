# Ankit Portfolio (Node.js + React.js)

## Stack
- React.js (Vite)
- Node.js + Express

## Project Structure
- `client/` React frontend
- `server.js` Express server for production
- `client/public/media/` profile image + resume PDF

## Run Locally
1. Install Node.js (LTS) from https://nodejs.org/
2. Open terminal in this folder
3. Install dependencies:
   - `npm install`
4. Start React dev server:
   - `npm run dev:client`
5. In second terminal, run backend server:
   - `npm run dev:server`

## Production Build
1. `npm run build`
2. `npm start`

Server runs on `http://localhost:3000` (or `PORT` env value).
