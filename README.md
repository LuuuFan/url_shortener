# URL Shortener
![Screenshot](https://res.cloudinary.com/dq132990i/image/upload/v1573955465/ljulbxjemsqyhjknalcq.png)

## Tech Stack
- Backend: [node.js](https://nodejs.org), [koa](https://koajs.com/)
- Frontend: [vue.js](https://vuejs.org/)
- Database: [mongoDB](https://www.mongodb.com/)
	- mongoDB supports primary and secondary index, which is ideal for this application since query is needed on 2 columns (original URL and short code) separately.
	- Use [mLab](https://mlab.com/) online mongoDB database for easier demonstration.

## Project setup
```
npm install
```

## Project run
Server is running on PORT: 9000
```
node index.js
```
Then open browser and visit: localhost:9000

Frontend HTML recomplied already for faster loading.

## URL Checking
1. Consider same URL with no protocol or different protocols (like HTTP vs. HTTPS) as different URLs.
2. If input URL doesn't include any protocol, will redirect to HTTPS by default.

## Unit Tests
Unit tests cover
1. Model: ORM to database schema.
2. Util: Functions to create short code.
3. Routes: Definition of frontend and backend interaction rules, which also test Controller.

Note: Didn't use database mocking this time. In production code, database mocking is important to unit test to reduce test run time, environment dependencies and infrastructure code.

## How to generarte short code

### Not using hash
Considered using hash to generate short code
- Pros
	- Can easily guarantee generated short code is unique
	- Can reuse existing lib for hash function.
- Cons
	- To guarentee unique short code, short code generated is too long for tiny URL application.
	- Hash functions generating unique output are expensive to call.

### Solution implemented
- Take all 26 English characters (case sensitive) and all 10 digits. Randomly generate short code of 6 chars. This will provide 62^6 ~=57 billion unique short codes, which should be enough for this homework. Also easy to extend to more chars if needed.
- Store original URL and short code mapping in database.
- To make sure short codes generated are unique, check database every time a short code is generated. If not unique, regenerated and check again.

Note: This solution requires at least 1 database query on the mapping table per short code generated, which can be expensive in large scale. An improvement is proposed in future considerations.

## Some Future Considerations

### Improve short code generation performance at large scale
- Create a separate table storing pre-generated unique short codes.
- When a new short code is needed, simply get the first unused record from this table to use. Also mark the record in the table as "used" in a separate column.
- Write batch job to delete "used" records periodically.
- Write batch job to add more new short codes, if table is short on unused short codes.

### Caching
This application is very read intensive. To optimize performance, should add a caching layer between application server and database. This will reduce database read when querying for orginial URLs of short codes.