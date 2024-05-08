'use client';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface CaseForm {
  title: string;
  description: string;
}

const NewCasePage = () => {
  const { register, control, handleSubmit } = useForm<CaseForm>();
  const router = useRouter();
  return (
    <form
      className="max-w-xl space-y-4"
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/cases', data);
        router.push('/cases');
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
  );
};

export default NewCasePage;
