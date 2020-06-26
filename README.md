# equ-3000

Frontend:

<http://equ-3000.s3-website-eu-west-1.amazonaws.com>

Backend:

<http://equ-3000-api.eba-k3g67aim.eu-west-1.elasticbeanstalk.com/api/equipment>

Swagger: <http://equ-3000-api.eba-k3g67aim.eu-west-1.elasticbeanstalk.com/documentation>

## Development

### Backend

Prerequisites: Node 12.x

```bash
npm install
npm run dev
```

### Frontend

Prerequisites: Node 12.x

```bash
npm install
npm start
```

## Architecture & API Design

Core components

- Node.js server
- React frontend
- Azure Cosmos with MongoDB

Application architecture is quite simply node backend with a React frontend and the data is persisted on CosmosDB with MongoDB connection.

### Backend

- Hapi framework
- MongodbConnection (for cosmos usage)

Very simple CRUD API with 4 endpoints. I went with Nodejs and Hapi framework because that's what I have most recently used in this kind of client-server-database combination. Yesterday I heard some sad news and it was announced that the main developer is moving on from Hapi development. I have really liked Hapi over eg. Express, but it's time to find a new favorite API framework. Recently done some Kotlin work and liked it so maybe I should browse out the frameworks available there...

Request payload validation is done with the Joi library

API documentation with swagger: <http://equ-3000-api.eba-k3g67aim.eu-west-1.elasticbeanstalk.com/documentation>

The server can be also manually tested via the Swagger documentation.

### CosmosDB

Absolute overkill in many ways, but I selected it because I wanted to test it. It was surprisingly simple to set up, and I went with MongoDB connection in Cosmos because I have used it before. Made a very simple DAO'ish layer between the controllers and CosmosDB, and was again reminded how much I like relations ;)

### Frontend

Started with the Create React App toolchain along with Typescript template. A simple and dirty application which just makes the needed requests and renders the data.

## Hosting & Deployment

### Backend

Backend is currently hosted on Elastic Beanstalk, with some basic Nodejs related configuration. Setup process automatically did the grunt work, and set up:

- EC2 instance
- Load balancer
- Load balancer security group
- Auto Scaling group
- Amazon S3 bucket
- Amazon CloudWatch alarms
- AWS CloudFormation stack
- Domain name

Deployment are done manually via the help of `EB cli` tooling.

Before EB I tried Azure App Service. At first, everything was running smoothly and the application was up and running quite quickly. I set up automatic deployments via Github actions etc. basic things. But after a few deployments, things started to turn weird; deployments were starting to fail with random 5xx errors and the docker inside the app service wasn't properly receiving deployments and not booting up. I tried to create the environment from the ground up, but nothing seemed to help. It felt like there were outages in Azure service or in the deployment pipelines, plus I needed to move forward with the assignment.

### Frontend

Frontend is simply deployed to an AWS S3 Bucket as a static site hosting configuration, which is serving production bundle of the React application. Nothing special about that. Deployments are done manually via `aws s3 sync`.

Before S3 static site hosting option, I First deployed the frontend bundle into AWS Amplify because I wanted to test Amplify. The deployment process was smooth and I was up and running with the application in minutes.

But, why I moved to S3 hosting was that Amplify automatically serves the applications via HTTPS, which is nice, but the Elastic Beanstalk app was hosted via HTTP by default. When frontend was trying to make AJAX requests towards non-secure servers it fails. Mixed content requests are blocked by the browser, and I didn't bother to set up a certificate to Elastic Beanstalk server, because that is a pretty cumbersome task (or has been in the past). Deployments to amplify were automatically triggered from the master-branch.
