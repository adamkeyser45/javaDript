const { gql } = require('apollo-server-express');

const typeDefs = gql`
  

  type Review {
    _id: ID
    review: String
    author: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    reviews: [Review]
  }
  type Auth {
    token: ID
    user: User
  }
  type AuthPayload {
    githubToken: String!
    user: User!
  }
  type Query {
    me: User
    users: [User]
    user(email: String!): User
    githubLoginUrl: String!
    authorizeWithGithub(code: String!): AuthPayload!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(lastName:String!, firstName:String!, email: String!, password: String!): Auth
    removeUser(githubId: String!): User
    authorizeWithGithub(code: String!): AuthPayload!
  }

`
module.exports = typeDefs;