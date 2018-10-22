# NodeJS Moment Exercise

Showcase client-server end-to-end flow and working with NPM packages.

Server supports these requests:
- `/api/moment?format=XXXX` Queries to MomentJS API
- Requests to static files (e.g. `index.html`, `main.js`, etc.)

## To run
- `npm install`
- `node with-moment.js`
- Navigate to `http://localhost:8000`

## Additional Versions
- Simple vanilla version that returns current time `node vanilla.js`
- A Promises-based version (`with-promises.js` both server and client)
- An ExpressJS-based version `node with-express.js`