import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

export type FormHandle = {
  clear: () => void;
};

type Props = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, Props>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log('Clearing!');
          form.current?.reset();
        },
      };
    });

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
      // form.current?.reset();
    };

    return (
      <form onSubmit={submitHandler} {...otherProps} ref={form}>
        {children}
      </form>
    );
  }
);
export default Form;
