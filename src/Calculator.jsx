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
		if (
			(operand1 === '0' && smb === '0') ||
			(operand2 === '0' && smb === '0') ||
			(operand1.length === 0 && smb === '0') ||
			(operand2.length === 0 && smb === '0')
		) {
			return;
		}

		if (!operator && operand1.length < 5) {
			setOperand1((updatedValue) => updatedValue + smb);
			setText(operand1 + smb);
		} else if (operator && operand2.length < 5) {
			setOperand2((updatedValue) => updatedValue + smb);
			setText(operand2 + smb);
		}
	};

	const onClickClear = () => {
		setIsResult(false);
		setText('0');
		setOperand1('');
		setOperator('');
		setOperand2('');
	};

	const onClickPlus = (smb) => {
		setIsResult(false);
		setOperator((updatedOperator) => updatedOperator + smb);
		setText(smb);
	};

	const onClickMinus = (smb) => {
		setIsResult(false);
		setOperator((updatedOperator) => updatedOperator + smb);
		setText(smb);
	};

	const onClickEqual = () => {
		if (operand1 && operator && operand2) {
			setIsResult(true);
			const calc = calculate(Number(operand1), operator, Number(operand2));
			setText(`${calc}`);
			setOperand1(`${calc}`);
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
					<div
						className={styles.btn + ' ' + styles.orange + ' ' + styles.plus}
						onClick={() => onClickPlus('+')}
					>
						+
					</div>
					<div
						className={styles.btn + ' ' + styles.orange + ' ' + styles.minus}
						onClick={() => onClickMinus('-')}
					>
						-
					</div>
					<div
						className={styles.btn + ' ' + styles.orange + ' ' + styles.equal}
						onClick={onClickEqual}
					>
						=
					</div>

					{NUMS.map(({ cls, smb }) => (
						<div
							key={cls}
							className={styles.btn + ' ' + `${styles[cls]}`}
							onClick={() => onClick(smb)}
						>
							{smb}
						</div>
					))}
					<div
						className={styles.btn + ' ' + styles.clear}
						onClick={onClickClear}
					>
						C
					</div>
				</div>
			</div>
		</>
	);
};
