import * as network from './'
import * as utils from './utils'
import * as api from '../../exports/api'

utils.buildURL = jest.fn()
utils.makeRequest = jest.fn()

api.config({
  stage: 'staging'
})

describe('retrieveData', () => {
  beforeAll(() => {
    utils.buildURL.mockImplementation(() => 'testURL')
    utils.makeRequest.mockImplementation(() => Promise.resolve({ body: 'testBody' }))
  })
  const testParams = {
    AMaaSClass: 'book',
    AMId: 1234
  }
  it('calls buildURL with correct params', callback => {
    network.retrieveData(testParams, (error, result) => {
      expect(utils.buildURL).toHaveBeenCalledWith({ AMaaSClass: 'book', AMId: 1234 })
      callback()
    })
  })
  it('calls makeRequest with correct params', callback => {
    network.retrieveData(testParams, (error, result) => {
      expect(utils.makeRequest).toHaveBeenCalledWith({ method: 'GET', url: 'testURL', query: { camelcase: true } })
      callback()
    })
  })
  it('should return a promise if callback is not provided', () => {
    let promise = network.retrieveData(testParams)
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('insertData', () => {
  beforeAll(() => {
    utils.buildURL.mockImplementation(() => 'testURL')
    utils.makeRequest.mockImplementation(() => Promise.resolve({ body: 'testBody' }))
  })
  const testParams = {
    AMaaSClass: 'book',
    AMId: 1234,
    data: {
      price: 20
    }
  }
  it('should call buildURL with correct params', callback => {
    network.insertData(testParams, (error, result) => {
      expect(utils.buildURL).toHaveBeenCalledWith({ AMaaSClass: 'book', AMId: 1234 })
      callback()
    })
  })
  it('should call makeRequest with correct params', callback => {
    network.insertData(testParams, (error, result) => {
      expect(utils.makeRequest).toHaveBeenCalledWith({ method: 'POST', url: 'testURL', data: { price: 20 }, query: { camelcase: true } })
      callback()
    })
  })
  it('should return a promise if callback is not provided', () => {
    let promise = network.insertData(testParams)
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('searchData', () => {
  beforeAll(() => {
    utils.buildURL.mockImplementation(() => 'testURL')
    utils.makeRequest.mockImplementation(() => Promise.resolve({ body: 'testBody' }))
  })
  const query = {
    assetManagerIds: [1, 2]
  }
  it('should call buildURL with correct params', done => {
    network.searchData({ AMaaSClass: 'monitorItems', AMId: 1, query }, (error, result) => {
      expect(utils.buildURL).toHaveBeenCalledWith({ AMaaSClass: 'monitorItems', AMId: 1 })
      done()
    })
  })
  it('should call makeRequest with correct params', done => {
    network.searchData({ AMaaSClass: 'monitorItems', AMId: 1, query }, (error, result) => {
      expect(utils.makeRequest).toHaveBeenCalledWith({ method: 'SEARCH', url: 'testURL', data: { camelcase: true, assetManagerIds: '1,2' } })
      done()
    })
  })
  it('should return a promise if callback is not provided', () => {
    let promise = network.searchData({})
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('putData', () => {
  beforeAll(() => {
    utils.buildURL.mockImplementation(() => 'testURL')
    utils.makeRequest.mockImplementation(() => Promise.resolve({ body: 'testBody' }))
  })
  it('should call buildURL with correct params', done => {
    network.putData({ AMaaSClass: 'parties', AMId: 1, resourceId: 'testID', data: { test: 'testData' } }, (error, result) => {
      expect(utils.buildURL).toHaveBeenCalledWith({ AMaaSClass: 'parties', AMId: 1, resourceId: 'testID' })
      done()
    })
  })
  it('should call makeRequest with correct params', done => {
    network.putData({ AMaaSClass: 'parties', AMId: 1, resourceId: 'testID', data: { test: 'testData' } }, (error, result) => {
      expect(utils.makeRequest).toHaveBeenCalledWith({ method: 'PUT', url: 'testURL', data: { test: 'testData' } })
      done()
    })
  })
  it('should return a promise if callback is not provided', () => {
    let promise = network.putData({ AMaaSClass: 'parties', AMId: 1, resourceId: 'testID', data: { test: 'testData' } })
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('patchData', () => {
  let params
  beforeAll(() => {
    params = { AMaaSClass: 'positions', AMId: 1, resourceId: 'testID', data: { change: 'changed' } }
    utils.buildURL.mockImplementation(() => 'testURL')
    utils.makeRequest.mockImplementation(() => Promise.resolve({ body: 'testBody' }))
  })
  it('should call buildURL with the correct params', done => {
    network.patchData(params, (error, result) => {
      expect(utils.buildURL).toHaveBeenCalledWith({ AMaaSClass: 'positions', AMId: 1, resourceId: 'testID' })
      done()
    })
  })
  it('should call makeRequest with the correct params', done => {
    network.patchData(params, (error, result) => {
      expect(utils.makeRequest).toHaveBeenCalledWith({ method: 'PATCH', url: 'testURL', data: { change: 'changed' } })
      done()
    })
  })
  it('should return a promise if callback is not provided', () => {
    let promise = network.patchData(params)
    expect(promise).toBeInstanceOf(Promise)
  })
})
