import { memo } from 'react';

function Empty() {
  return <div style={{ marginBottom: '2000px' }}></div>;
}

export default memo(Empty);
