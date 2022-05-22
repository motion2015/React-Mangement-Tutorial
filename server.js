const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const {createProxyMiddleware} = require('http-proxy-middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '홍길동',
      'birthday': '961222',
      'gender': '남자',
      'job': '대학생',
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '홍길민',
      'birthday': '961222',
      'gender': '남자',
      'job': '대학생',
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '배현정',
      'birthday': '961222',
      'gender': '여자',
      'job': '동료',
    },
    {
      'id': 4,
      'image': 'https://placeimg.com/64/64/4',
      'name': '박민숙',
      'birthday': '961222',
      'gender': '여자',
      'job': '나',
    },
    {
      'id': 5,
      'image': 'https://placeimg.com/64/64/5',
      'name': '제나영',
      'birthday': '961222',
      'gender': '여자',
      'job': '친구',
    }
  ]);
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));