import React from 'react';

function Button({ name, style, onClick, ...props }: any) {
  return (
    <button {...props} style={style ? {
      height: '54px',
      borderRadius: 4,
      ...style,
    } : {}} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
