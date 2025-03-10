/* eslint-disable no-unused-vars */
// functions/config/firebase.config.js

const {initializeApp, cert} = require("firebase-admin/app");
const admin = require("firebase-admin");
const {getFirestore} = require("firebase-admin/firestore");
const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");
// eslint-disable-next-line max-len
const serviceAccount = require("../../spendvibe-8a403-firebase-adminsdk-fbsvc-151cd0a770.json");
// Load environment variables from .env file
dotenv.config();

initializeApp({
  credential: cert(serviceAccount),
});

// Get Firestore instance
const db = getFirestore();


// Export the modules if needed elsewhere
module.exports = {db, admin};
