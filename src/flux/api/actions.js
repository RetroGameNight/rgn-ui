/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Actions } from 'flummox'
import request from 'superagent-bluebird-promise'
import config from '../../config'
import flux from '../flux'

const { scheme, host, port } = config.api.location

const API_BASENAME = `${scheme}://${host}:${port}`

async function apiGetRequest(uri) {
  const response = await request
    .get(`${API_BASENAME}${uri}`)
    .withCredentials()
    .promise()
  return response.body
}

async function apiPostRequest(uri, payload) {
  const response = await request
    .post(`${API_BASENAME}${uri}`)
    .send(payload)
    .withCredentials()
    .promise()
  return response.body
}

async function apiPutRequest(uri, payload) {
  const response = await request
    .put(`${API_BASENAME}${uri}`)
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
  async deleteActiveUser() {
    const store = flux.getStore('api')
    await apiDeleteRequest(`/users/${store.state.activeUser.id}`)
    return null
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
  async updateGame(id, payload) {
    return apiPutRequest(`/games/${id}`, payload)
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
  async updateEvent(id, payload) {
    return apiPutRequest(`/events/${id}`, payload)
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
  async updateUser(id, payload) {
    return apiPutRequest(`/users/${id}`, payload)
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
  async updateChallenge(id, payload) {
    return apiPutRequest(`/challenges/${id}`, payload)
  }
  async getTrial(id) {
    return apiGetRequest(`/trials/${id}`)
  }
  async getTrials() {
    return apiGetRequest('/trials/all')
  }
  async newTrial(payload) {
    return apiPostRequest('/trials/new', payload)
  }
  async deleteTrial(id) {
    await apiDeleteRequest(`/trials/${id}`)
    return id
  }
  async updateChallenge(id, payload) {
    return apiPutRequest(`/challenges/${id}`, payload)
  }
}
