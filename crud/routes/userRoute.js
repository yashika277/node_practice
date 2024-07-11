import express from "express"
import { fetch , create } from "../controller/userController.js"

const route=express.Router();


route.get("/create",create)
route.get("/fetch",fetch);



export default route;