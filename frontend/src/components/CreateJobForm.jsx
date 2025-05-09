'use client';

import {
  Button,
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Group,
  Box,
  Grid,
  Stack,
  Divider,
  Title,
  ActionIcon,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { modals } from '@mantine/modals';
import axios from 'axios';
import { IconArrowRight } from '@tabler/icons-react';

export default function CreateJobForm({ onSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      applicationDeadline: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3000/jobs', data);
      reset();
      modals.closeAll();
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Failed to create job:', err);
    }
  };

  return (
    <Box px="md" py="sm">

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gutter="md">
          <Grid.Col span={6}>
            <TextInput
              label="Job Title"
              placeholder="ex. Full Stack Developer"
              {...register('title', { required: true })}
              error={errors.title && 'Title is required'}
              radius="md"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Company Name"
              placeholder="ex. Amazon, Microsoft, Swiggy"
              {...register('company', { required: true })}
              error={errors.company && 'Company is required'}
              radius="md"
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <TextInput
              label="Location"
              placeholder="Choose Preferred Location"
              {...register('location', { required: true })}
              error={errors.location && 'Location is required'}
              radius="md"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Controller
              name="job_type"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  label="Job Type"
                  placeholder="FullTime"
                  data={['Full-time', 'Part-time', 'Internship']}
                  {...field}
                  radius="md"
                  error={errors.job_type && 'Job type is required'}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <Controller
              name="salary_min"
              control={control}
              rules={{ required: 'Minimum salary is required' }}
              render={({ field }) => (
                <NumberInput
                  label="Minimum Salary"
                  placeholder="₹0"
                  icon={<span>₹</span>}
                  radius="md"
                  error={errors.salary_min?.message}
                  {...field}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <Controller
              name="salary_max"
              control={control}
              rules={{ required: 'Maximum salary is required' }}
              render={({ field }) => (
                <NumberInput
                  label="Maximum Salary"
                  placeholder="₹12,00,000"
                  icon={<span>₹</span>}
                  radius="md"
                  error={errors.salary_max?.message}
                  {...field}
                />
              )}
            />
          </Grid.Col>


          <Grid.Col span={12}>
            <Textarea
              label="Job Description"
              placeholder="Please share a description to let the candidate know more about the job role"
              {...register('description', { required: true })}
              error={errors.description && 'Description is required'}
              autosize
              minRows={4}
              radius="md"
            />
          </Grid.Col>


          <Grid.Col span={6}>
            <Controller
              name="applicationDeadline"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextInput
                  type="date"
                  label="Application Deadline"
                  placeholder="Select deadline"
                  {...field}
                  error={errors.applicationDeadline && 'Deadline is required'}
                  radius="md"
                />
              )}
            />
          </Grid.Col>

        </Grid>



        <Group justify="space-between" mt="xl">
          <Button variant="default" radius="md">
            Save Draft
          </Button>
          <Button type="submit" radius="md" rightSection={<IconArrowRight size={18} />}>
            Publish
          </Button>
        </Group>
      </form>
    </Box>
  );
}
