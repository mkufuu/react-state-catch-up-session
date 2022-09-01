import Icon from "./Icon";
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Button = () => {
    const {toggleTheme} = useContext(ThemeContext);

    return <button style={{ width: 32,padding: 4, height: 32, border: 'none', outline: 'none', background: 'transparent'}}
             onClick={toggleTheme}>
        <Icon />
    </button>;
}

export default Button;