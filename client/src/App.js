import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import {makeStyles} from '@mui/styles';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '12px',
    overflowX: "auto"
  },
  table : {
    minWidth: 1080
  },
  progress: {
    margin: '8px'
  }
})
/* const customer = [
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
] */
function App() {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);
  const [progress, setProgress] = useState(0);
  useEffect(()=> {
    callApi()
    .then(res => setCustomers(res))
    .catch(err => console.log(err));

    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 20));
    }, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const callApi = async() =>{
     const response = await fetch('/api/customers');
     const body = await response.json();
     return body;
  };

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };

  return (
    <Paper className={classes.root}>
      <Table  className={classes.table}>
        <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {
        customers.length>0?  customers.map(c=> {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        }) : (<TableRow>
          <TableCell  colSpan="6" align="center">
          <CircularProgressWithLabel value={progress} />
          </TableCell>        
      </TableRow>)
      }
        </TableBody>
      </Table>
      
    </Paper>
  );
}

export default App;
