import { ReactNode, type ComponentPropsWithoutRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type Props = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  Props & {
    to?: never;
  };

type LinkProps = LinkProps &
  Props & {
    to: string;
  };

const isLinkProps = (props: ButtonProps | LinkProps): props is LinkProps => {
  return 'to' in props;
};

const Button = (props: ButtonProps | LinkProps) => {
  if (isLinkProps(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        to={props.to}
        className={`button ${textOnly ? 'button--text-only' : ''}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? 'button--text-only' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
