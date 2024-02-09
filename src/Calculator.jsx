import styles from './Calculator.module.css';
import { NUMS } from './data';
import { useState } from 'react';

export const Calculator = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	return (
		<>
			<div className={styles.calculator}>
				<div className={styles.display}>
					<p>0</p>
				</div>
				<div className={styles.buttons}>
					<div className={styles.btn + ' ' + styles.orange + ' ' + styles.plus}>
						+
					</div>
					<div
						className={styles.btn + ' ' + styles.orange + ' ' + styles.minus}
					>
						-
					</div>
					<div
						className={styles.btn + ' ' + styles.orange + ' ' + styles.equal}
					>
						=
					</div>

					{NUMS.map(({ cls, smb }) => (
						<div key={smb} className={styles.btn + ' ' + `${styles[cls]}`}>
							{smb}
						</div>
					))}

					<div className={styles.btn + ' ' + styles.clear}>C</div>
				</div>
			</div>
		</>
	);
};
