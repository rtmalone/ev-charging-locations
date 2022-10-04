import './Button.css';
import { CHARGING} from '../utils';

const Button = ({label, onClick}) => {
    let computedClass = 'button';
    let disabled = false
    if (label === CHARGING) {
        disabled = true
        computedClass += ' button-charging'
    }

    return (
        <button className={computedClass} onClick={onClick} disabled={disabled}>{label}</button>
    )
};

export default Button;