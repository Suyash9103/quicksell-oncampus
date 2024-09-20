import React, { useEffect } from 'react'
import './App.css';
import NavBar from './components/TopNavBar';
// import Card from './components/Card/Card';
import DashBoard from './components/TicketsContainer';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './store/Actions/DataAction';
import CustomerSpinnerLoader from './components/Spinner';
import AllTickets from './components/TicketsContainer';

const App = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return loading ?
    <CustomerSpinnerLoader /> : (
      <div style={{ paddingTop: "10px" }} >
        <NavBar />
        <hr style={{ marginTop: "10px" }} />
        <AllTickets />
      </div>
    )
}
export default App