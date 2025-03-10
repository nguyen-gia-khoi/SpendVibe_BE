// src/controller/User.controller.js
const {db} = require("../config/firebase.config");

const createUser = async (user) => {
  const {uid, email, displayName} = user;

  try {
    await db.collection("users").doc(uid).set({
      email,
      displayName: displayName || "Anonymous",
      createdAt: new Date().toISOString(),
    });
    console.log("User document created successfully.");
  } catch (error) {
    console.error("Error creating user document:", error);
  }
};

module.exports = {createUser};
