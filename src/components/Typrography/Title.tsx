import { ParamHTMLAttributes } from 'react';

type TitleProps = ParamHTMLAttributes<
  HTMLParagraphElement | HTMLHeadElement
> & {
  value?: string;
  heading?: boolean;
  size?: string | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
};
export default function Title({
  value,
  size = 'md',
  heading = true,
  ...props
}: TitleProps) {
  if (heading) {
    return (
      <h1 {...props} className={`${props.className} text-${size} head-text`}>
        {value}
      </h1>
    );
  } else {
    return (
      <p {...props} className={`text-${size} head-text`}>
        {value}
      </p>
    );
  }
}
