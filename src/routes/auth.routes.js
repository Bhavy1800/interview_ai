// const express = require("express")
const {Router} = require("express")
const authController = require("../controllers/auth.controller")

const authRouter =  Router()

/** js docs
 * @route POST /api/auth/register
 *  @description Register a new user
 * @access public
 */
authRouter.post("/register",authController.registerUserController)

/**
 * @route POST /api/auth/login
 *  @description login user with email and password
 * @access public 
 */
authRouter.post("/login",authController.loginUserControlleter)

module.exports = authRouter