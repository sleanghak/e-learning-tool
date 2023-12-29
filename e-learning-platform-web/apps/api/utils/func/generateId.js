const db = require("../../models");
/**
 *
 * @param {*} role :student, coach, admin
 * @param {*} num : trail id 00001 like s202200001
 * @returns
 */
const idFormat = (role, num) => {
  const d = new Date();
  let label = "s"; // default for student;
  let newDigits = "";
  if (role == "coach") {
    label = "c";
  } else if (role == "admin") {
    label = "a";
  }
  if (num.toString().length <= 5) {
    for (let i = 0; i < 5 - num.toString().length; i++) {
      newDigits += "0";
    }
    // console.log(label + d.getFullYear() + newDigits + num);
    return label + d.getFullYear() + newDigits + num;
  } else {
    console.log("Invalid! It's not <=5 digits.");
  }
};

const getNextSequenceId = async (sequenceId) => {
  console.log(sequenceId);
  // role as sequenceId
  const sequence = await db.sequenceId.findOneAndUpdate(
    {
      _id: sequenceId,
    },
    { $inc: { currentValue: 1 } },
    { new: true }
  );
  console.log(sequence);
  if (!sequence) {
    console.log("Sequence Id is not founded.");
  }
  return idFormat(sequenceId, sequence.currentValue);
};

module.exports = getNextSequenceId;
