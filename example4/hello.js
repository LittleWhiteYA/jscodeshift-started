module.exports = {
  input: /hello/,
  actions: [
    {
      method: 'sendText',
      args: ['hello world'],
    },
    {
      method: 'sendMessage',
      args: ['yo world'],
    },
  ],
};
