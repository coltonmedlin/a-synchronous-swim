const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  let mess = messages.shift();
  return mess;
};