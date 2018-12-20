const fs = require("fs");

const express = require("express");
const hbs = require("hbs");

const app = express();
hbs.registerPartials(__dirname+"/views/partials");
app.set("view engine", "hbs");

hbs.registerHelper("currentYear",()=>{
    return (new Date()).getFullYear();
})

hbs.registerHelper("toUpper", (text)=>{
    return text.toUpperCase();
})

app.use((req,res,next)=>{
    res.render("maintanance.hbs");
    next();
})

app.get("/",(req,res)=>{
    res.render("home.hbs", {
        pageTitle:"Home Page",
        welcomeMessage: "Welcome to Home page"
    })
})

app.get("/about",(req,res)=>{
    const aboutPageMessage = "About Page";
    res.render("about.hbs", {
        pageTitle:aboutPageMessage,
        welcomeMessage: `Welcome to ${aboutPageMessage}`
    })
})

app.get("/help",(req,res)=>{
    const helpPageMessage = "Help Page";
    res.render("about.hbs", {
        pageTitle:helpPageMessage,
        welcomeMessage: `Welcome to ${helpPageMessage}`
    })
})


app.listen(process.env.port);