import { useIntersection } from 'next/dist/client/use-intersection';
import { memo, useLayoutEffect, useEffect, useRef } from 'react';

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

function Image(props) {
  const [setIntersection, isIntersected] = useIntersection({
    rootRef: null,
    rootMargin: '200px',
    disabled: false,
  });

  const ref = useRef(null);
  useIsomorphicLayoutEffect(() => {
    setIntersection(ref.current);
  }, [setIntersection]);

  return (
    <img {...props} ref={ref} src={isIntersected ? props.src : undefined} />
  );
}

export default memo(Image);
