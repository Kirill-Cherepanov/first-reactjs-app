import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export default function SignUpButton({
  children,
  type,
  clickHandler,
  buttonStyle,
  buttonSize
}) {
  const finalButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const finalButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up">
      <button
        className={`btn ${finalButtonStyle} ${finalButtonSize}`}
        onClick={clickHandler}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}
