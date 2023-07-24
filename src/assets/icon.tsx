import { SVGProps } from 'react';
import { ReactComponent as SearchSvg } from './search.svg';

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  'aria-hidden': true,
  role: 'img',
  preserveAspectRatio: 'xMidYMid meet',
};

export function SeachIcon(props: SVGProps<SVGSVGElement>) {
  return <SearchSvg {...svgProps} viewBox='0 0 21 21' {...props} />;
}
