import { Actions } from 'flummox';
//import request from 'superagent'
import request from 'superagent-bluebird-promise'

const API_BASENAME = "http://localhost:3000"

async function apiGetRequest(uri) {
  let response = await request
    .get(`${API_BASENAME}${uri}`)
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
  async newGame() {
    return apiGetRequest('/games/new')
  }
  async getEvent(id) {
    return apiGetRequest(`/events/${id}`)
  }
  async getEvents() {
    return apiGetRequest('/events/all')
  }
  async newEvent() {
    return apiGetRequest('/events/new')
  }
  async getUser(id) {
    return apiGetRequest(`/users/${id}`)
  }
  async getUsers() {
    return apiGetRequest('/users/all')
  }
  async newUser() {
    return apiGetRequest('/users/new')
  }
  async getChallenge(id) {
    return apiGetRequest(`/challenges/${id}`)
  }
  async getChallenges() {
    return apiGetRequest('/challenges/all')
  }
  async newChallenge() {
    return apiGetRequest('/challenges/new')
  }
}