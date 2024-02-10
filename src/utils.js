export const calculate = (operand1, operator, operand2) => {
	switch (operator) {
		case '+':
			return operand1 + operand2;
		case '-':
			return operand1 - operand2;
	}
};
