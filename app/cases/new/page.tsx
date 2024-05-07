'use client';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { Button, TextField } from '@radix-ui/themes';

const NewCasePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root
        // color="indigo"
        variant="soft"
        placeholder="Title of the case"
      />
      <SimpleMDE placeholder="Description of the case" />
      <Button>Submit</Button>
    </div>
  );
};

export default NewCasePage;
