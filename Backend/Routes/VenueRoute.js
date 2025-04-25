
const express = require('express')
const {venueList} = require('../controllers/venueController')


const venueRouter = express.Router()

venueRouter.get('/list',venueList)

module.exports = venueRouter