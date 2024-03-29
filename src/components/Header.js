import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				onClick={onAdd}
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'Close' : 'Add'}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};
// Deklairanje tipa objekta za bolje hendlovanje gresaka
Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingSytle={
//     color:'red', backgroundColor:'black'
// }

export default Header;
