import { useEffect, RefObject } from 'react';
import SplitType from 'split-type';

interface UseSplitTypeOptions {
  types?: string;
  tagName?: string;
  wrap?: boolean;
}

export const useSplitType = (
  ref: RefObject<HTMLElement>,
  options: UseSplitTypeOptions = {}
) => {
  const { types = 'lines, words, chars', tagName = 'span', wrap = false } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const splitText = new SplitType(element, {
      types: types.split(', ') as any,
      tagName,
      wrap,
    });

    return () => {
      splitText.revert();
    };
  }, [ref, types, tagName, wrap]);
};
