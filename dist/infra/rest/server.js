"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = require("mongoose");
const app_1 = require("./app");
(async () => {
    try {
        await (0, mongoose_1.connect)(process.env.MONGO_URI);
        console.log('Database connected');
        app_1.app.listen(process.env.PORT || 3000);
        console.log('server running');
    }
    catch (error) {
        console.error(error);
    }
})();
