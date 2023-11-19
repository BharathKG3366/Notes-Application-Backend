const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { authenticator }=require("../middlewares/authenticator");
const usermodel = require('../models/usermodel');
const { notemodel } = require("../models/notemodel");

const noteRouter = express.Router();
noteRouter.use(authenticator);

noteRouter.get("/", (req, res) => {
try{

}catch(error){
    
}

    res.send({
        message: "All the notes",
        status: 1
    })

})

noteRouter.post("/create", async (req, res) => {

    try{
        let note=new notemodel(req.body)
        await note.save()
        res.send({
            message:"Note Created",
            status:1
        })
    }
    catch (error){
        res.send({
            message:error.message,
            status:1
        })
    }

})

module.exports = {
    noteRouter
};