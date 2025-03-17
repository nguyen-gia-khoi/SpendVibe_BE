// src/controller/User.controller.js
const {db} = require("../config/firebase.config");

const saveUser = async (req, res) => {
  try {
    const {uid, email, displayName} = req.body;

    if (!uid || !email) {
      return res.status(400).json({error: "Thiếu thông tin người dùng"});
    }

    // Kiểm tra nếu user đã tồn tại
    const userRef = db.collection("users").doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      await userRef.set({
        uid,
        email,
        displayName: displayName || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    return res.status(200).json({message: "User saved successfully",
      uid, email});
  } catch (error) {
    console.error("Error saving user:", error);
    return res.status(500).json({error: "Internal Server Error"});
  }
};


const testFirestore = async (req, res) => {
  try {
    // Chọn một document ngẫu nhiên để kiểm tra kết nối
    const testDoc = await db.collection("users").doc("alovelace").get();

    if (!testDoc.exists) {
      return res.status(404).json({message: "Test document not found"});
    }
    res.status(200).json({message: "Firestore is connected!",
      data: testDoc.data()});
  } catch (error) {
    console.error("Error connecting to Firestore:", error);
    res.status(500).json({error: "Failed to connect to Firestore"});
  }
};
module.exports = {saveUser, testFirestore};

