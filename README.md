# URL Shortener
![Screenshot](https://res.cloudinary.com/dq132990i/image/upload/v1573955465/ljulbxjemsqyhjknalcq.png)

## Tech Stack
backend: node.js, framework: koa
frontend: vue.js

## Project setup
```
npm install
```

## Project run
Server is running on PORT: 9000
```
node index.js
```
then open browser and visit: localhost:9000

### Compiles and hot-reloads for front-end development
```
npm run serve
```

### Compiles front-end code and minifies for production (front-end code has been already compiled and includes in the folder: dist)
```
npm run build
```

### Comments and Assumptions
1. Considered that different protocol might redirect to different website, so the solution didn't handle protocol for urls. For example: if we input google.com, https://google.com and http://google.com, we will get diffrent tinyURL returned. 
2. If the url inputed didn't include protocol, server will use https protocol for redirecting. 
3. Because of the lack expierence for mock database, didn't mock database in the testing.
4. When create new shorten url record to database, I used temporary solution which it generates short code first, then check if the short code already in the database. This solution has cons if the database records is geting bigger, it will slow down on reading database. 
    There is another solution for generating uniq short code: Generate a big mount of uniq short code and save it as a shortCode table in the databse, get one from the table when create url, then delete it. This solution needs to come up with scale following up: needs to regenerate short codes once the shortCode table runs out of records.
5. Use [mLab](https://mlab.com/) mongoDB database since it's easier for implementation.
6. The product needs to include cache since it will be a heavy read application.
7. No user handling since it didn't include in the requirements.