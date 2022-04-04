import { memo } from 'react';

import Image from '../component/Image';
import Link from 'next/link';
import Empty from '../component/Empty';

export default function About() {
  const array = new Array(100).fill(1);
  return (
    <>
      <Empty />
      <Image
        src="https://images.unsplash.com/photo-1646857704344-06262e564768?fit=crop&w=500"
        height={664}
        width={500}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const id = context?.params?.id ?? '1646857704344-06262e564768';
  return {
    props: {
      imgUrl: `https://images.unsplash.com/photo-${id}?fit=crop&w=500`,
    }, // will be passed to the page component as props
  };
}
