# Table of contents
- [Table of contents](#table-of-contents)
- [node-js-swagger](#node-js-swagger)
- [Usefull for Installation](#usefull-for-installation)
- [NOTES](#notes)

# node-js-swagger
A Node.js API use to demonstrate API documentation in swagger UI

# Usefull for Installation
you need to create a .env file that contains all the environments you need to let the server start, such as your database connection's url, and the jwt secret key; to generate it randomly I suggest you to write this command your terminal:

    node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

after you set your .env file, if you want to run the server, you just need to write on you terminal this command:

    npm start

# NOTES
Implemented all the entities swagger's logic, a part of a trouble to fix as regards retrieving [single user's comment by id](/router/comment.js)
