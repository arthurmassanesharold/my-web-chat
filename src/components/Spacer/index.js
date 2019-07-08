// @flow
import React from 'react';

type Props = {|
  size:?number,
|}

const Spacer = (props: Props) => {
  const { size } = props;
  return (
    <div
      style={{
        height: size,
      }}
    >
      <br />
    </div>
  );
};

export default Spacer;
