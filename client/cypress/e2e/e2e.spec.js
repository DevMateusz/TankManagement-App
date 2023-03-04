/// <reference types="cypress" />

import Chance from 'chance';
const chance = new Chance()

describe('Firestarter', () => {

  const email = chance.email();
  const fullName = 'test test';
  const pass = 'test123@';
  const country = 'Poland'
  beforeEach(() => {
    cy.visit('http://192.168.1.150:5173')
  })

  it('has a title', () => {
    cy.contains("Sign in to president's account")
    expect(2).to.equal(2)
  })

  it('sings up a new user', () => {
    cy.visit('http://192.168.1.150:5173/register')
    cy.url().should('include', 'register');
    cy.get(':nth-child(1) > .credential-item__input').type(fullName);
    cy.get(':nth-child(2) > .credential-item__input').type(email);
    cy.get('.sing-up__credential-item-country--list').select(country)
    cy.get(':nth-child(4) > .credential-item__input').type(pass);
    cy.get(':nth-child(5) > .credential-item__input').type(pass);
    cy.get('#atomic-state').click();
    cy.get('.sign-up__action-button').click();
    cy.get('.user--name').contains(fullName);
    cy.get('.user--email').contains(email);
    cy.get('.nav__user--logout').click();
    cy.get('.notification__item--message').contains('You have been correctly logged out')
  })

  it('allows the user to create a tank', () => {

    cy.login(email, pass)
    cy.get('.add-button').click()
    cy.url().should('include', 'tank');
    cy.get('#flank-number').type("Test flank number111")
    cy.get('#producent').type("Test poducent")
    cy.get('#model').type("Test model")
    cy.get('#actual-modification').type("Test modification")
    cy.get('#vintage').clear().type("1999")
    cy.get('#entry-date').type("2012-07-23")
    cy.get('#mileage').type("55555")
    cy.get('#ammunition').type("123")
    cy.get('#armor-thickness-front').type("10")
    cy.get('#armor-thickness-flank').type("200")
    cy.get('#armor-thickness-back').type("3000")
    cy.get('.save-button').click()
    cy.get('.notification__item--message').contains('Tank has been successfully created')
    cy.get('.nav__button').click()

  })

  it('allows the user to update a tank', () => {

    cy.login(email, pass)
    cy.get('.edit-button').click()
    cy.url().should('include', 'tank');
    cy.get('#flank-number').clear().type("Update flank number 33")
    cy.get('#producent').clear().type("Update poducent")
    cy.get('#model').clear().type("Update model")
    cy.get('#actual-modification').clear().type("Update modification")
    cy.get('#vintage').clear().type("2015")
    cy.get('#entry-date').clear().type("2018-11-13")
    cy.get('#mileage').clear().type("6002")
    cy.get('#ammunition').clear().type("300")
    cy.get('#armor-thickness-front').clear().type("1000")
    cy.get('#armor-thickness-flank').clear().type("500")
    cy.get('#armor-thickness-back').clear().type("200")
    cy.get('.save-button').click()
    cy.get('.notification__item--message').contains('Tank has been successfully updated')
    cy.get('.nav__button')

  })

  it('allows the user to delete a tank', () => {

    cy.login(email, pass)
    cy.get('.delete-button').click()
    cy.get('.notification__item--message').contains('Tank has been successfully removed')

  })






});