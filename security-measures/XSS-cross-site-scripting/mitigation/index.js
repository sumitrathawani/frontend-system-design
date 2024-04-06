const express = require("express");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    // setting default-src  and script-src to 'self' will block everything except the same origin
    // setting script-src to 'nonce-randomKey' will allow scripts with the same nonce value here the value is 'randomKey'
    "default-src 'self';" +
    "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"
  );
  next();
})

/* example- escaping the user input

const validationRules = [
  body('username').isLength({ min: 3 }).trim().escape(),
  body('email').isEmail().normalizeEmail(),
];

*/


app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server started at http://locolhost:${PORT}`);
});