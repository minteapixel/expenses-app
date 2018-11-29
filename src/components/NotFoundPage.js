import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div>
		404! Oopsies! - Return to the homepage <Link to="/">here</Link>.
	</div>
);

export default NotFoundPage;