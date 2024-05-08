'use client';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import { Button, Callout, TextField } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
interface CaseForm {
  title: string;
  description: string;
}

const NewCasePage = () => {
  const { register, control, handleSubmit } = useForm<CaseForm>();
  const router = useRouter();
  const [error, setError] = useState('');

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text></Callout.Text>
          {error}
        </Callout.Root>
      )}
      <form
        className=" space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/cases', data);
            router.push('/cases');
          } catch (error) {
            setError('Un Expected error occur!');
          }
        })}
      >
        <TextField.Root
          // color="indigo"
          variant="soft"
          placeholder="Title of the case"
          {...register('title')}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default NewCasePage;
