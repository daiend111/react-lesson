import * as React from 'react';

import { DeepReadonly } from '../../types';

import styled from 'styled-components';

type Props = DeepReadonly<{
  checked: boolean;
  onClick: () => void;
}>

export const Checkbox: React.FC<Props> = (props) => {
  return (
    <Styled checked={props.checked}>
      <input
        type='checkbox'
        checked={props.checked}
        onChange={props.onClick}
      />
    </Styled>
  );
};

const Styled = styled.label<{checked: boolean}>`
  input {
    display: none;
  }

  position: relative;
  display: inline-flex;
  line-height: 1.5;
  margin-right: 1em;
  cursor: pointer;
  
  &::before {
    width: 1.5em;
    height: 1.5em;
    content: "";
    border: 1px solid #98A6B5;
    border-radius: 5px;
  }

  ${({ checked }) => checked && `
    &::after {
      position: absolute;
      top: 0.25em;
      left: 0.2em;
      content: "";
      width: 1em;
      height: .5em;
      border-left: .3rem solid #004BB1;
      border-bottom: .3rem solid #004BB1;
      transform: rotate(-45deg);
    }
  `}
`