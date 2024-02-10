import styles from './Calculator.module.css';
import { NUMS } from './data';
import { useState } from 'react';
import { calculate } from './utils';

export const Calculator = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [text, setText] = useState('0');
	const [isResult, setIsResult] = useState(false);

	const onClick = (smb) => {
		setIsResult(false);
		switch (smb) {
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				if (
					(operand1 === '0' && smb === '0') ||
					(operand2 === '0' && smb === '0')
				) {
					return;
				}

				if (!operator && operand1.length < 5) {
					operand1.replace(/^0+(?!\.|$)/, '');
					setOperand1((updatedValue) => updatedValue + smb);
					setText(operand1 + smb);
				} else if (operator && operand2.length < 5) {
					operand2.replace(/^0+(?!\.|$)/, '');
					setOperand2((updatedValue) => updatedValue + smb);
					setText(operand2 + smb);
				}
				break;
			case '+':
				setIsResult(false);
				setOperator((updatedOperator) => updatedOperator + smb);
				setText(smb);
				break;
			case '-':
				setIsResult(false);
				setOperator((updatedOperator) => updatedOperator + smb);
				setText(smb);
				break;
			case '=':
				if (operand1 && operator && operand2) {
					setIsResult(true);
					const calc = calculate(Number(operand1), operator, Number(operand2));
					setText(`${calc}`);
					setOperand1(calc + '');
					setOperand2('');
					setOperator('');
				} else {
					if (!operand1) {
						alert('Заполните первое число!');
					} else if (!operator) {
						alert('Выберите тип операции!');
					} else {
						alert('Заполните второе число!');
					}
				}
				break;
			case 'C':
				setIsResult(false);
				setText('0');
				setOperand1('');
				setOperator('');
				setOperand2('');
		}
	};

	return (
		<>
			<div className={styles.calculator}>
				<div
					className={
						isResult ? styles.display + ' ' + styles.light : styles.display
					}
				>
					<p>{text}</p>
				</div>
				<div className={styles.buttons}>
					{NUMS.map(({ cls, smb }) => (
						<div
							key={cls}
							className={`${cls
								.split(' ')
								.map((c) => styles[c])
								.join(' ')}`}
							onClick={() => onClick(smb)}
						>
							{smb}
						</div>
					))}
				</div>
			</div>
		</>
	);
};
