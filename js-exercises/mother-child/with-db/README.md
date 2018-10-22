# Mother-Child - Database

Instead of fetching data from static file the server takes it from MongoDb.

## To run

First run the MongoDb server:
- Mac/Linux: `mongod`
- Windows: `"c:\Program Files\MongoDb\Server\X.X\bin\mongod.exe"`

To populate the db run the migration script:
- `npm run migration`

To run the server:
- `npm install` (installs needed dependencies)
- `npm start`

Check `package.json` to see more details about these commands.