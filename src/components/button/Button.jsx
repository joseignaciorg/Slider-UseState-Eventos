const Button = ({ handleclick, text, disabled }) => {
	return (
		<button disabled={disabled} onClick={handleclick}>
			{text}
		</button>
	);
};
export default Button;
