'use strict'

//*** STATE */
const state = {
  contacts: [],
  emails: {}
}

//*** SELECTORS */
const VIEW_CONTAINER = 'app'
const VIEW_HOME = 'home'
const SIGNIN = 'g-signin2'

//*** QUERIES */
const app = document.getElementById(VIEW_CONTAINER)
const home = document.getElementById(VIEW_HOME)
const signin = document.querySelector(SIGNIN)

//*** DATA STORAGE FUNCS */

//*** STATE FUNCTS */
const setContacts = (contacts) => {
  state.contacts = contacts
}

const setEmails = (contact, emails) => {
  emails[contact] = emails
}

//*** DOM MANIPULATION */
const createDomElem = (elemType, properties, text, ...children) => {
  const newElem = document.createElement(elemType)
  if (text){
    const textNode = document.createTextNode(text)
    newElem.appendChild(textNode)
  }
  if (properties){
    Object.keys(properties).forEach(prop => {
      newElem[prop] = properties[prop]
    })
  }
  if (children.length > 0){
    appendChildrenHelper(newElem, ...children)
  }
  return newElem;
}

const removeDomElem = (parent, child) => {
  parent.removeChild(child)
}

const appendChildrenHelper = (parent, ...children) => {
  for (let i = 0; i < children.length; i++){
    parent.appendChild(children[i])
  }
}

//*** ELEMENTS */
const div = (...args) => createDomElem('div', ...args)
const p = (...args) => createDomElem('p', ...args)
