import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation'

function RootLayout() {
	// const navigation = useNavigation()

	// navigation.state === ''

	return <React.Fragment>
		<MainNavigation />
		<main>
			{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
			<Outlet />
		</main>
	</React.Fragment>
}

export default RootLayout