"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
};
exports.errorHandler = errorHandler;
