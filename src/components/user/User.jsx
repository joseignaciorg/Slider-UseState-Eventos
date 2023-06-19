import { useState } from 'react';
import { USERS } from '../../constants/users';
import Button from '../button/Button';

const User = () => {
	const [position, setPosition] = useState(0);
	const previus = (position, setPosition) => {
		if (position > 0) setPosition(position - 1);
	};
	const next = (position, setPosition) => {
		if (position < USERS.length - 1) setPosition(position + 1);
	};
	return (
		<div>
			<img src={USERS[position].profileImage} alt={USERS[position].name} />
			<h1>Name: {USERS[position].name}</h1>
			<p>Username: {USERS[position].username}</p>
			<p>Email: {USERS[position].email}</p>
			<Button
				text='Previous'
				handleclick={() => previus(position, setPosition)}
				disabled={position <= 0}
			></Button>
			<Button
				text='Next'
				handleclick={() => next(position, setPosition)}
				disabled={position >= USERS.length - 1}
			></Button>
		</div>
	);
};

export default User;
