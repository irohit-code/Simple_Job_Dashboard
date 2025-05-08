'use client';

import {
  TextInput,
  Textarea,
  Button,
  Container,
  Title,
  Stack,
  Group,
} from '@mantine/core';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  title: z.string().min(2),
  company: z.string().min(2),
  location: z.string().min(2),
  jobType: z.string().min(2),
  salaryRange: z.string().regex(/^\d+\s*-\s*\d+$/, 'Format: 50000 - 70000'),
  description: z.string().min(10),
  requirements: z.string().min(5),
  responsibilities: z.string().min(5),
  applicationDeadline: z.string().min(5),
});

export default function CreateJobPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to create job');

      alert('Job created successfully!');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <Container size="sm" py="xl">
      <Title order={2} mb="lg">
        Create a Job
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="md">
          <TextInput label="Title" {...register('title')} error={errors.title?.message} />
          <TextInput label="Company" {...register('company')} error={errors.company?.message} />
          <TextInput label="Location" {...register('location')} error={errors.location?.message} />
          <TextInput label="Job Type" {...register('jobType')} error={errors.jobType?.message} />
          <TextInput label="Salary Range (e.g. 50000 - 70000)" {...register('salaryRange')} error={errors.salaryRange?.message} />
          <Textarea label="Description" {...register('description')} error={errors.description?.message} />
          <Textarea label="Requirements" {...register('requirements')} error={errors.requirements?.message} />
          <Textarea label="Responsibilities" {...register('responsibilities')} error={errors.responsibilities?.message} />
          <TextInput label="Application Deadline (YYYY-MM-DD)" {...register('applicationDeadline')} error={errors.applicationDeadline?.message} />
          <Group justify="flex-end">
            <Button type="submit">Submit</Button>
          </Group>
        </Stack>
      </form>
    </Container>
  );
}
