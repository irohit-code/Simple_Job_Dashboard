'use client';

import {
  Button,
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Stack,
  Group,
} from '@mantine/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { modals } from '@mantine/modals';

export default function CreateJobForm({ onSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3000/jobs', data);
      reset();
      modals.closeAll(); // Close modal on success
      if (onSuccess) onSuccess(); // Refresh job list
    } catch (err) {
      console.error('Failed to create job:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          label="Job Title"
          placeholder="Enter job title"
          {...register('title', { required: true })}
          error={errors.title && 'Title is required'}
        />
        <TextInput
          label="Company"
          placeholder="Enter company name"
          {...register('company', { required: true })}
          error={errors.company && 'Company is required'}
        />
        <TextInput
          label="Location"
          placeholder="Enter location"
          {...register('location', { required: true })}
          error={errors.location && 'Location is required'}
        />
        <NumberInput
          label="Minimum Salary"
          placeholder="e.g. 30000"
          {...register('salary_min', { required: true, valueAsNumber: true })}
        />
        <NumberInput
          label="Maximum Salary"
          placeholder="e.g. 80000"
          {...register('salary_max', { required: true, valueAsNumber: true })}
        />
        <Select
          label="Job Type"
          placeholder="Select job type"
          data={['Full-time', 'Part-time', 'Contract']}
          {...register('job_type', { required: true })}
        />
        <Textarea
          label="Description"
          placeholder="Job description"
          {...register('description', { required: true })}
        />
        <Group position="right" mt="md">
          <Button type="submit" color="violet">Submit</Button>
        </Group>
      </Stack>
    </form>
  );
}
