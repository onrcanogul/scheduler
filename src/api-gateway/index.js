const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.disable("x-powered-by");

const services = [
    {
        route: "/user",
        target: "http://localhost:3000/api/users",
        authRequired: false
    },
    {
        route: "/appointment",
        target: "http://localhost:3010/api/appointments",
        authRequired: true,
        specificRules: {
            GET: false,
            POST: true
        }
    },
    {
        route: "/analytics",
        target: "http://localhost:3020/api/analytics",
        authRequired: true
    }
];

//todo auth middleware