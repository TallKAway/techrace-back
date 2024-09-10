"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var EnvVarType;
(function (EnvVarType) {
    EnvVarType["STRING"] = "STRING";
    EnvVarType["NUMBER"] = "NUMBER";
    EnvVarType["BOOLEAN"] = "BOOLEAN";
})(EnvVarType || (EnvVarType = {}));
// Define a map with validation functions for each type
const typeValidators = {
    [EnvVarType.NUMBER]: (value) => {
        const parsed = parseInt(value, 10);
        if (isNaN(parsed))
            throw new Error(`Expected a number, but got "${value}"`);
        return parsed;
    },
    [EnvVarType.STRING]: (value) => value,
    [EnvVarType.BOOLEAN]: (value) => {
        if (value.toLowerCase() === "true" || value === "1")
            return true;
        if (value.toLowerCase() === "false" || value === "0")
            return false;
        throw new Error(`Expected a boolean, but got "${value}"`);
    },
};
// Environment variables specification with runtime "type" validation
const envSpecs = {
    port: EnvVarType.NUMBER,
    node_env: EnvVarType.STRING,
    timeout: EnvVarType.NUMBER,
    database_url: EnvVarType.STRING,
    api_key: EnvVarType.STRING,
};
function loadConfig() {
    const config = {};
    for (const [key, type] of Object.entries(envSpecs)) {
        const envValue = process.env[key.toUpperCase()];
        if (!envValue)
            throw new Error(`Environment variable ${key.toUpperCase()} is missing`);
        const validator = typeValidators[type];
        if (!validator)
            throw new Error(`No validator for type "${type}"`);
        config[key] = validator(envValue);
    }
    return config;
}
const config = loadConfig();
exports.default = config;
