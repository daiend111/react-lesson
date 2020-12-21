import * as React from "react";

export const State: React.FC = () => {

  // hooksと呼ばれている機能
  const [isChecked, updateChecked] = React.useState(false);
  const toggleCheckbox = () => { updateChecked(!isChecked) };

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    toggleCheckbox(); console.log(isChecked);
  }

  return <>
    <label>{ isChecked ? 'clicked' : 'click me'}</label>
    <input onChange={handleChange}
           type='checkbox'
           name='some value'
           value='some value'
           checked={isChecked}
      />
  </>
};
