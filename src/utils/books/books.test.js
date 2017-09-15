import uuid from 'uuid'
import { retrieve, search, insert, amend, retire, reactivate, addPermission } from './books'
import Book from '../../books/Book/book'
import * as api from '../../exports/api'
import * as network from '../network'

network.retrieveData = jest.fn()
network.insertData = jest.fn()
network.patchData = jest.fn()
network.putData = jest.fn()
network.searchData = jest.fn()
network.deleteData = jest.fn()

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

const mockBook = {
  bookId: 'bookId',
  description: "RRN4WVXI1F3YA1IGMKZF",
  bookType: "Trading",
  businessUnit: null,
  partyId: "A1UNKOYGGR",
  closeTime: "18:00:00",
  timezone: "Asia/Tokyo",
  assetManagerId: 1,
  ownerId: "50SJMSPK7A",
  baseCurrency: "USD",
}

const mockBookPermission = {
  assetManagerId: 88,
  userAssetManagerId: 99,
  bookId: 'TEST',
  permissionStatus: 'Active',
  permission: 'write'
}

describe('utils/books', () => {
  describe('retrieve', () => {
    beforeAll(() => {
      network.retrieveData.mockImplementation(() => Promise.resolve(mockBook))
    })
    test('with callback', callback => {
      retrieve({AMId: 1}, (error, books) => {
        expect(books).toEqual(new Book(mockBook))
        callback()
      })
    })
    test('with promise', () => {
      let promise = retrieve({AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('should call network.retrieveData with correct params', done => {
      retrieve({ AMId: 1 }, (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({ AMaaSClass: 'book', AMId: 1 })
        done()
      })
    })
  })

  describe('insert', () => {
    beforeAll(() => {
      network.insertData.mockImplementation(() => Promise.resolve(mockBook))
    })
    test('with promise', () => {
      let promise = insert({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls insertData with correct params', done => {
      insert({ AMId: 1, book: mockBook }, (error, result) => {
        expect(network.insertData).toHaveBeenCalledWith({ AMaaSClass: 'book', AMId: 1, data: mockBook })
        done()
      })
    })
  })

  describe('search', () => {
    beforeAll(() => {
      network.searchData.mockImplementation(() => Promise.resolve(mockBook))
    })
    test('with promise', () => {
      let promise = search({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls searchData with correct params', done => {
      search({ AMId: 1, query: { queryKey: ['queryValues'] } }, (error, result) => {
        expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'book', AMId: 1, query: { queryKey: ['queryValues'] } })
        done()
      })
    })
  })

  describe('amend', () => {
    beforeAll(() => {
      network.putData.mockImplementation(() => Promise.resolve(mockBook))
    })
    test('with promise', () => {
      let promise = amend({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('should call putdata with correct params', done => {
      amend({ AMId: 1, book: mockBook, resourceId: 'testID' }, (error, result) => {
        expect(network.putData).toHaveBeenCalledWith({ AMaaSClass: 'book', AMId: 1, resourceId: 'testID', data: JSON.parse(JSON.stringify(mockBook)) })
        done()
      })
    })
  })

  describe('retire', () => {
    beforeAll(() => {
      network.patchData.mockImplementation(() => Promise.resolve(mockBook))
    })
    test('with promise', () => {
      let promise = retire({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls patchData with correct params', done => {
      retire({ AMId: 1, resourceId: 'testID' }, (error, result) => {
        expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'book', AMId: 1, resourceId: 'testID', data: { bookStatus: 'Retired' } })
        done()
      })
    })
  })

  describe('reactivate', () => {
    beforeAll(() => {
      network.patchData.mockImplementation(() => Promise.resolve(mockBook))
    })
    test('with promise', () => {
      let promise = reactivate({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls patchData with correct params', done => {
      reactivate({ AMId: 1, resourceId: 'testId' })
      expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'book', AMId: 1, resourceId: 'testId', data: { bookStatus: 'Active' } })
      done()
    })
  })

  describe('addPermission', () => {
    beforeAll(() => {
      network.insertData.mockImplementation(() => Promise.resolve(mockBookPermission))
    })
    test('with promise', () => {
      let promise = addPermission({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls isnertData with the correct params', () => {
      addPermission({ AMId: 88, bookPermission: mockBookPermission })
      expect(network.insertData).toHaveBeenCalledWith({ AMaaSClass: 'bookPermissions', AMId: 88, resourceId: 'TEST', data: mockBookPermission })
    })
  })
})
