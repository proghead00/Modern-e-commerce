import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders.js';
const promise = loadStripe(
	'pk_test_51HRfUNGznEN3TwfQs50I8SdvSHwVCJ1btIg47wWQcxJtv1QYWvxCNS1lc3EZsv9KgI7L000oGkWPW0NnqqyuDIsz00ggiA66Xg'
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log('USER IS', authUser);

			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>

					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					{/* homepage route */}
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
