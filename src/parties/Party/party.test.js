import Party from './party.js'
import { Address, Email, PhoneNumber } from '../Children'
import { Comment, Reference } from '../../children'
import PartyLink from '../../children/Link/PartyLink'

describe('Party', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new Party({ partyId: 'test' })
      expect(JSON.parse(JSON.stringify(test)).partyId).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).partyId).toEqual('test')
    })
  })
  describe('constructor', () => {

    it('should set url', () => {
      const party = new Party({url: 'testURL'})
      expect(party.url).toEqual('testURL')
    })

    it('should set displayName', () => {
      const party = new Party({displayName: 'testDisplayName'})
      expect(party.displayName).toEqual('testDisplayName')
    })

    it('should set legalName', () => {
      const party = new Party({legalName: 'testLegalName'})
      expect(party.legalName).toEqual('testLegalName')
    })

    it('should throw if attempting to set invalid partyStatus', () => {
      let party
      function construct() {
        party = new Party({ partyStatus: 'notAType' })
      }
      expect(construct).toThrowError(new Error('Invalid Party Status: notAType'))
    })

    it('should set addresses to empty object if class is instantiated without contacts', () => {
      const testParty = new Party({})
      expect(testParty.addresses).toEqual({})
    })

    it('should set references correctly', () => {
      const party = new Party({})
      party.references = {
        INT: { referenceValue: 'Internal1' },
        EXT: new Reference({ referenceValue: 'External1' })
      }
      expect(party.references.INT).toBeDefined()
      expect(party.references.INT).toBeInstanceOf(Reference)
      expect(party.references.INT.referenceValue).toEqual('Internal1')
      expect(party.references.EXT).toBeDefined()
      expect(party.references.EXT.referenceValue).toEqual('External1')
    })

    it('should set comments correctly', () => {
      const party = new Party({})
      party.comments = {
        TRADER: { commentValue: 'Strategy1' },
        BACKOFFICE: new Comment({ commentValue: 'Reconciled' })
      }
      expect(party.comments.TRADER).toBeDefined()
      expect(party.comments.TRADER).toBeInstanceOf(Comment)
      expect(party.comments.TRADER.commentValue).toEqual('Strategy1')
      expect(party.comments.BACKOFFICE).toBeDefined()
      expect(party.comments.BACKOFFICE.commentValue).toEqual('Reconciled')
    })

    it('should set links correctly', () => {
      const party = new Party({})
      party.links = {
        SINGLE1: [{ linkedPartyId: 'ID-S1-1' }],
        SINGLE2: [new PartyLink({ linkedPartyId: 'ID-S2-1' })],
        MULTI1: [
          { linkedPartyId: 'ID-M1-1' },
          new PartyLink({ linkedPartyId: 'ID-M1-2' })
        ]
      }
      expect(party.links.SINGLE1[0]).toBeDefined()
      expect(party.links.SINGLE1[0].linkedPartyId).toEqual('ID-S1-1')
      expect(party.links.SINGLE2[0]).toBeDefined()
      expect(party.links.SINGLE2[0].linkedPartyId).toEqual('ID-S2-1')
      expect(party.links.MULTI1[0]).toBeDefined()
      expect(party.links.MULTI1[0].linkedPartyId).toEqual('ID-M1-1')
      expect(party.links.MULTI1[1]).toBeDefined()
      expect(party.links.MULTI1[1].linkedPartyId).toEqual('ID-M1-2')
    })

  })
  describe('addresses', () => {
    it('should set addressPrimary of existing addresses to false when supplying new primary address', () => {
      const primaryOne = new Address({ addressPrimary: true })
      const primaryTwo = new Address({ addressPrimary: true })
      const primaryThree = new Address({ addressPrimary: true })
      const testParty = new Party({ addresses: { add1: primaryOne, add2: primaryTwo } })
      testParty.upsertAddress('add3', primaryThree)
      expect(testParty.addresses.add1.addressPrimary).toBeFalsy()
      expect(testParty.addresses.add2.addressPrimary).toBeFalsy()
    })
    it('should throw if attempting to add primary address without primary address', () => {
      // const primaryOne = new Address({ addressPrimary: true })
      const primaryTwo = new Address({ addressPrimary: false })
      const testParty = new Party({})
      function tester() {
        testParty.upsertAddress('new', primaryTwo)
      }
      expect(tester).toThrowError('At least 1 primary address must be supplied')
    })
    it('should add address and preserve existing ones on upsert', () => {
      const primaryOne = new Address({ addressPrimary: true, lineOne: 'testRoad' })
      const primaryTwo = new Address({ addressPrimary: false, lineOne: 'testStreet' })
      const testParty = new Party({ addresses: { primaryOne } })
      testParty.upsertAddress('primaryTwo', primaryTwo)
      expect(testParty.addresses).toEqual({ primaryOne, primaryTwo })
    })
  })

  describe('emails', () => {
    it('should set emails to empty object if class is instantiated without emails', () => {
      const testParty = new Party({})
      expect(testParty.emails).toEqual({})
    })
    it('should throw if Email contains invalid email', () => {
      const testParty = new Party({})
      const testEmails = new Email({ email: 'not an email' })
      function tester() {
        testParty.upsertEmail('test', testEmails)
      }
      expect(tester).toThrowError('Not a valid email')
    })
    it('should set emailPrimary of existing emails to false when supplying new primary email', () => {
      const primaryOne = new Email({ emailPrimary: true, email: 'test@test.com' })
      const primaryTwo = new Email({ emailPrimary: true, email: 'test@test.com' })
      const primaryThree = new Email({ emailPrimary: true, email: 'test@test.com' })
      const testParty = new Party({ emails: { e1: primaryOne, e2: primaryTwo } })
      testParty.upsertEmail('e3', primaryThree)
      expect(testParty.emails.e1.emailPrimary).toBeFalsy()
      expect(testParty.emails.e2.emailPrimary).toBeFalsy()
    })
    it('should throw if attempting to add primary email without primary email', () => {
      const primaryTwo = new Email({ emailPrimary: false, email: 'test@test.com' })
      const testParty = new Party({})
      function tester() {
        testParty.upsertEmail('new', primaryTwo)
      }
      expect(tester).toThrowError('At least 1 primary email must be supplied')
    })
    it('should add email and preserve existing ones on upsert', () => {
      const primaryOne = new Email({ emailPrimary: true, email: 'test@test.com' })
      const primaryTwo = new Email({ emailPrimary: false, email: 'test@test.com' })
      const testParty = new Party({ emails: { primaryOne } })
      testParty.upsertEmail('primaryTwo', primaryTwo)
      expect(testParty.emails).toEqual({ primaryOne, primaryTwo })
    })
  })
  
  describe('phoneNumbers', () => {
    it('should set phoneNumbers to empty object if class is instantiated without phoneNumbers', () => {
      const testParty = new Party({})
      expect(testParty.phoneNumbers).toEqual({})
    })
    it('should throw if phoneNumber contains invalid phoneNumber', () => {
      const testParty = new Party({})
      const testPhoneNumbers = new PhoneNumber({
        phoneNumberPrimary: true,
        phoneNumber: '123 456 7890'
      })
      function tester() {
        testParty.upsertPhoneNumber('test', testPhoneNumbers)
      }
      expect(tester).toThrowError('Not a valid PhoneNumber')
    })
    it('should set phoneNumberPrimary of existing phoneNumbers to false when supplying new primary phoneNumber', () => {
      const primaryOne = new PhoneNumber({
        phoneNumberPrimary: true,
        phoneNumber: '1234567890'
      })
      const primaryTwo = new PhoneNumber({
        phoneNumberPrimary: true,
        phoneNumber: '1234567890'
      })
      const primaryThree = new PhoneNumber({
        phoneNumberPrimary: true,
        phoneNumber: '1234567890'
      })
      const testParty = new Party({
        phoneNumbers: { p1: primaryOne, p2: primaryTwo }
      })
      testParty.upsertPhoneNumber('p3', primaryThree)
      expect(testParty.phoneNumbers.p1.phoneNumberPrimary).toBeFalsy()
      expect(testParty.phoneNumbers.p2.phoneNumberPrimary).toBeFalsy()
    })
    it('should throw if attempting to add primary phoneNumber without primary phoneNumber', () => {
      const primaryTwo = new PhoneNumber({
        phoneNumberPrimary: false,
        phoneNumber: '1234567890'
      })
      const testParty = new Party({})
      function tester() {
        testParty.upsertPhoneNumber('new', primaryTwo)
      }
      expect(tester).toThrowError(
        'At least 1 primary phoneNumber must be supplied'
      )
    })
    it('should add phoneNumber and preserve existing ones on upsert', () => {
      const primaryOne = new PhoneNumber({
        phoneNumberPrimary: true,
        phoneNumber: '1234567890'
      })
      const primaryTwo = new PhoneNumber({
        phoneNumberPrimary: false,
        phoneNumber: '1234567890'
      })
      const testParty = new Party({ phoneNumbers: { primaryOne } })
      testParty.upsertPhoneNumber('primaryTwo', primaryTwo)
      expect(testParty.phoneNumbers).toEqual({ primaryOne, primaryTwo })
    })
  })
})
