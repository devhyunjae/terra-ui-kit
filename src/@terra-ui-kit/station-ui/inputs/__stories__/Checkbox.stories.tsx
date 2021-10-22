import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';

export default {
  title: 'station-ui/Checkbox',
};

export const Basic = () => {
  const [checked, setChecked] = useState(false);
  const [anotherChecked, setAnotherChecked] = useState(false);
  return (
    <>
      Only checkbox
      <div>
        <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
      </div>
      {`checked state: ${checked}`}
      <div
        style={{
          marginTop: 20,
          width: 330,
        }}
      >
        Checkbox with label
        <Checkbox
          checked={anotherChecked}
          onClick={() => setAnotherChecked(!anotherChecked)}
          label="I have securely WRITTEN DOWN MY SEED. I understand that lost seeds cannot be recovered."
        />
      </div>
    </>
  );
};
