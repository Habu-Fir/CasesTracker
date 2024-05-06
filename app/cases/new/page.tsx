'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';

const NewCasePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root
        // color="indigo"
        variant="soft"
        placeholder="Title of the case"
      />
      <TextArea placeholder="Description of the case" />
      <Button>Submit</Button>
    </div>
  );
};

export default NewCasePage;
