import { Actions } from 'flummox';
import request from 'superagent-bluebird-promise'

const API_BASENAME = "http://localhost:3000"

async function apiGetRequest(uri) {
  let response = await request
    .get(`${API_BASENAME}${uri}`)
    .withCredentials() 
    .promise()
  return response.body
}

async function apiPostRequest(uri, payload) {
  let response = await request
    .post(`${API_BASENAME}${uri}`)
    .send(payload)
    .withCredentials() 
    .promise()
  return response.body
}

async function apiDeleteRequest(uri) {
  let response = await request
    .del(`${API_BASENAME}${uri}`)
    .withCredentials() 
    .promise()
  return response.body
}

export default class ApiActions extends Actions {
  async login() {
    return apiGetRequest('/logged-in')
  }
  async logout() {
    return apiGetRequest('/logout')
  }
  async getGame(id) {
    return apiGetRequest(`/games/${id}`)
  }
  async getGames() {
    return apiGetRequest('/games/all')
  }
  async newGame(payload) {
    return apiPostRequest('/games/new', payload)
  }
  async deleteGame(id) {
    await apiDeleteRequest(`/games/${id}`)
    return id
  }
  async getEvent(id) {
    return apiGetRequest(`/events/${id}`)
  }
  async getEvents() {
    return apiGetRequest('/events/all')
  }
  async newEvent(payload) {
    return apiPostRequest('/events/new', payload)
  }
  async deleteEvent(id) {
    await apiDeleteRequest(`/events/${id}`)
    return id
  }
  async getUser(id) {
    return apiGetRequest(`/users/${id}`)
  }
  async getUsers() {
    return apiGetRequest('/users/all')
  }
  async newUser(payload) {
    return apiPostRequest('/users/new', payload)
  }
  async deleteUser(id) {
    await apiDeleteRequest(`/users/${id}`)
    return id
  }
  async getChallenge(id) {
    return apiGetRequest(`/challenges/${id}`)
  }
  async getChallenges() {
    return apiGetRequest('/challenges/all')
  }
  async newChallenge(payload) {
    return apiPostRequest('/challenges/new', payload)
  }
  async deleteChallenge(id) {
    await apiDeleteRequest(`/challenges/${id}`)
    return id
  }
}