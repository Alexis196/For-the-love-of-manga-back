import User from "../User.js";
import 'dotenv/config.js'
import '../../config/database.js'

let users = [
    {   
        name: "Alexis",
        email: "aa@gh.com",
        password: "1234",
        confirmPassword: "1234",
    }
]

User.insertMany(users)