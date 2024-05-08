'use client';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createCaseSchema } from '@/app/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ErrorMessage from '@/app/componenet/ErrorMessage';
import Spinner from '@/app/componenet/Spinner';

type CaseForm = z.infer<typeof createCaseSchema>;

const NewCasePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CaseForm>({
    resolver: zodResolver(createCaseSchema),
  });
  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmitting(true);
            await axios.post('/api/cases', data);
            router.push('/cases');
          } catch (error) {
            setSubmitting(false);
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
        <ErrorMessage>
          <Text color="red" as="p">
            {errors.title?.message}
          </Text>
        </ErrorMessage>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>
          <Text color="red" as="p">
            {errors.description?.message}
          </Text>
        </ErrorMessage>

        <Button disabled={isSubmitting}>
          Submit {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewCasePage;
