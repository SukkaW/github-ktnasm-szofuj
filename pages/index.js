import { memo } from 'react';

import Image from '../component/Image';
import Link from 'next/link';
import Empty from '../component/Empty';

import React from 'react';

function Home() {
  return (
    <>
      <Empty />
      <Image
        src="https://images.unsplash.com/photo-1562634185-94581bf444ae?fit=crop&w=500"
        height={664}
        width={500}
      />
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  );
}

export default memo(Home);
