import React from 'react';
import { IButtonProps } from './types';

export const Button = (props: IButtonProps) => {
  return (
    <>
      <button
        className={`${props.mobile ? 'block lg:hidden' : 'block'} w-full rounded p-3 mt-2 text-white font-normal ${props.background ?? 'bg-teal-500'} disabled:opacity-50 disabled:bg-zinc-600`}
        onClick={props.onClick}
        disabled={props.isDisabled}
      >
        {props.label}
      </button>
    </>
  );
};
