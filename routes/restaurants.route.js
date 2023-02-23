const { Router } = require('express')
const {
  createRestaurant,
  findAllRestaurants,
  findRestaurant,
  updateRestaurant,
  deleteRestaurant,
  newReview,
  updateReview,
  deleteReview,
} = require('../controllers/restaurants.controllers')
const { protect, protectAccountOwer } = require('../middlewares/auth.middleware')
const { createRestaurantValidation, createReviewValidation, updateReviewValidation, updateRestaurantValidation } = require('../middlewares/validation.middleware')

const router = Router()

router.get('/', findAllRestaurants)

router.get('/:id', findRestaurant)

router.use(protect)

router.post('/', createRestaurant, createRestaurantValidation)

router.post('/reviews/:id', createReviewValidation, newReview)

router.patch('/reviews/:restaurantId/:id', updateReviewValidation, updateReview)

router.patch('/:id', updateRestaurantValidation, updateRestaurant )

router.delete('/:id', deleteRestaurant)

router.delete('/reviews/:restaurantId/:id', deleteReview )


module.exports = { restaurantsRouter: router }