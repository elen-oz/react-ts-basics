import { useRef } from 'react';

import Button from './components/Button';
// import Container from './components/Container';
import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';

function App() {
  // const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  const saveHandler = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <main>
      {/* <Input id='name' label='Your name' type='text' ref={input} /> */}
      {/* <Input id='age' label='Your age' type='number' /> */}

      {/* <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>Link</Button>
      </p> */}

      {/* <Container as={Button}>Click me</Container> */}
      <Form onSave={saveHandler} ref={customForm}>
        <Input id='name' label='Your name' type='text' />
        <Input id='age' label='Your age' type='number' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
