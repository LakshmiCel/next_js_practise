// pages/api/cookie.js

export default async function handler(req, res) {
    // Set a cookie named 'username' with the value 'lee'
    res.setHeader('Set-Cookie', 'username=lee; Path=/; HttpOnly');
    console.log("printng in server the cookie details ")
    console.log(req.cookies.username)
    res.status(200).send('Cookie has been set.');
  }
  
