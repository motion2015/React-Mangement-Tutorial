import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = [
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
]
function App() {
  return (
    <div>
      {
        customer.map(c=> {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        })
      }
    </div>
  );
}

export default App;
