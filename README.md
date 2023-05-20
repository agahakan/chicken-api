# Chicken API

## Description

The Chicken API is a web service that allows you to perform CRUD operations on chickens. It provides endpoints for creating, retrieving, updating, and deleting chicken records. Additionally, it includes a route to increase the step count for a chicken.


## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Docker
- Swagger

This application is fully containerized using Docker. You will need Docker installed on your system to run the containers. You can download and install Docker from the official website: https://www.docker.com/


## Running the app

To run the application, just do this:

```bash
# This will start the MongoDB container and the Node application container.
$ docker-compose up -d
```

The server should now be running on http://localhost:3000. You can access the Swagger UI at http://localhost:3000/api-docs.

Don't forget to stop the containers once you're done using the following command:
```bash
# This will start the MongoDB container and the Node application container.
$ docker-compose down
```


## API Documentation

The API is documented using Swagger. Once the server is running, you can access the Swagger UI documentation at http://localhost:3000/api-docs.

However, you can also make requests to the API without using Swagger. To do so, you can use any HTTP client, such as cURL, Postman, or Insomnia, to send HTTP requests to the endpoints in the application.

The available endpoints are:

- GET /chicken: Get all chickens.
- GET /chicken/:id: Get a specific chicken by ID.
- POST /chicken: Create a new chicken.
- PATCH /chicken/:id: Partially update a chicken by ID.
- DELETE /chicken/:id: Delete a chicken by ID.
- PUT /chicken/:id/run: Increase the steps count for a chicken by ID.