/* eslint-disable max-len */
const {db} = require("../config/firebase.config");
const newTransaction = async (req, res) => {
  // eslint-disable-next-line no-empty
  try {
    const {uid, type, amount, date, category, note} = req.body;

    // Kiểm tra các trường bắt buộc
    if (!uid || !type || !amount || !date) {
      return res.status(400).json({error: "Vui lòng nhập đủ loại, số tiền, ngày"});
    }

    const transactionRef = db.collection("transactions").doc();
    await transactionRef.set({
      uid,
      type,
      amount: parseFloat(amount), // Chuyển đổi số tiền thành số
      date, // Chuyển ngày về định dạng Firestore
      category: category || "Khác",
      note: note || "",
      createdAt: new Date().toISOString(), // Thêm thời gian tạo giao dịch
    });

    return res.status(201).json({message: "Giao dịch đã được lưu", id: uid});
  } catch (error) {
    console.error("Error saving transaction:", error);
    return res.status(500).json({error: "Internal Server Error"});
  }
};
module.exports = {newTransaction};
