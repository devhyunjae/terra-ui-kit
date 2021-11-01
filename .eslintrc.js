module.exports = {
  extends: [
    '@ssen',
  ],
  rules: {
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }]
  },
};
