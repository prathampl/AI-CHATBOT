"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processMessage = void 0;
const nlpService_1 = require("../services/nlpService");
const processMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = req.body;
    try {
        const intent = yield (0, nlpService_1.classifyIntent)(message);
        const entities = (0, nlpService_1.extractEntities)(message);
        const response = `Intent: ${intent}, Entities: ${JSON.stringify(entities)}`;
        res.status(200).json({ response });
    }
    catch (error) {
        console.error("Error processing message:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.processMessage = processMessage;
