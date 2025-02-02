import styled from 'styled-components';

export const theme = {
	grey: '#d6cbd3',
	red: '#eca1a6',
	green: '#bdcebe',
	brown: '#ada397'
};

export const Button = styled.button`
	background-color: ${theme.red};
	color: white;
	border: none;
	padding: 15px 32px;
	font-size: 16px;
	text-decoration: none;
	border-radius: 2px;
	margin: 10px;
	cursor: pointer;

	&:hover {
		background-color: ${theme.brown};
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`;

export const SmallButton = styled(Button)`
	padding: 10px 20px;
`;

export const Background = styled.div`
	background-color: ${(props) => props.theme.brown};
	width: 100%;
`;

export const Input = styled.input`
	width: 100%;
	padding: 8px 15px;
	box-sizing: border-box;
	margin: 8px 0;
	border-radius: 3px;
`;
