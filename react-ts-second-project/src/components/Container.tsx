import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  children,
  as,
  ...props
}: Props<C>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}
export default Container;
