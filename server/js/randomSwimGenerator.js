module.exports.randomSwimGenerator = () => {
  const options = ['up', 'down', 'left', 'right'];
  let random = Math.floor(Math.random() * 4);
  return options[random];
}

