<p align="center">
    <img src="https://i.imgur.com/TTTSoah.png" style="width: 300px;" />
</p>

# Schooly Online learning platform

this mono repository contains the following packages:

1.  schooly backend Node.js server source code
2.  schooly React.js web source code
3.  schooly React Native mobile source code
4.  common package for shared code between the three previous packages
5.  controller package for shared code between the React.js and React Native packages

## 1. The Server

the schooly server uses the following tech stack:

1.  typeScript
2.  Node.js Appllo server
3.  PostgresSQL with TypeORM
4.  GraphQL api with Type-graphql

## 2. Frontend

the schooly frontend is the React.js for the web and React Native for mobile. Each of them has his own package and there is a controller package for the shared code between them.

1.  the controller package contains the logic to be shared between packages
2.  the React.js and React Native packages has the connector that connects between the shared controller logic and the Views for each package.

## 3. React.js Web

the schooly web uses the following tech stack:

1.  create-react-ap with typeScript
2.  antdesign components

## 4. React Native Mobile
