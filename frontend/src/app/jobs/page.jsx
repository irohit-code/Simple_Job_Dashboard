'use client';

import {
  Button,
  TextInput,
  Select,
  Container,
  SimpleGrid,
  Card,
  Text,
  Badge,
  Group,
  Box,
  Title,
  Flex,
  Slider,
  Divider
} from '@mantine/core';
import Header from '@/components/Header';
import { IconSearch, IconMapPin, IconBriefcase } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { fetchJobs } from '../../utils/api';
import { modals } from '@mantine/modals';
import CreateJobForm from '@/components/CreateJobForm';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [salaryRange, setSalaryRange] = useState([50000, 80000]);
  const [hasMounted, setHasMounted] = useState(false); // hydration fix

  useEffect(() => {
    setHasMounted(true);
    fetchJobs().then(setJobs).catch(console.error);
  }, []);

  const openCreateJobModal = () => {
    modals.open({
      title: 'Create Job',
      children: <CreateJobForm onSuccess={() => fetchJobs().then(setJobs)} />,
    });
  };

  if (!hasMounted) return null;

  return (
    <>
      <Header />
      <Container size="xl" py="xl">



        <Flex gap="md" wrap="wrap" align="center" mb="xl">
          <TextInput
            icon={<IconSearch size={16} />}
            placeholder="Search By Job Title, Role"
            style={{ flex: 1, minWidth: 200 }}
          />
          <Divider orientation="vertical" />
          <Select
            icon={<IconMapPin size={16} />}
            placeholder="Preferred Location"
            data={['Remote', 'Onsite']}
            style={{ minWidth: 180 }}
          />
          <Divider orientation="vertical" />
          <Select
            icon={<IconBriefcase size={16} />}
            placeholder="Job Type"
            data={['Full-time', 'Part-time', 'Contract']}
            style={{ minWidth: 180 }}
          />
          <Divider orientation="vertical" />
          <Box style={{ minWidth: 200 }}>
            <Text size="sm" mb={4}>
              <strong>Salary Per Month</strong>
            </Text>
            <Slider
              min={10000}
              max={100000}
              step={1000}
              value={salaryRange}
              onChange={setSalaryRange}
              marks={[
                { value: 50000, label: <strong>'₹50k'</strong>, color: 'black' },
                { value: 80000, label: <strong>'₹80k'</strong> },
              ]}
            />
          </Box>
        </Flex>

        {/* Job Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="sm">
          {jobs.map((job) => (
            <Card
              key={job.id}
              shadow="xl"

              padding="lg"
              radius="xl"
              withBorder
              style={{ transition: '0.3s', minHeight: 250, minWidth: 300 }}
            >
              <Group justify="space-between" mb="xs">
                <Text size="lg" fw={700} color="black" mb={6}>
                  {job.company}
                </Text>
              </Group>

              <Text fw={700} size="sm" mb={4}>
                {job.title}
              </Text>
              <Text size="sm" mb={4}>
                👤 {job.experience || '1-3 year Experience'} {/* Experience */}
              </Text>
              <Text size="sm" mb={4}>
                📍 {job.location} {/* Location */}
              </Text>
              <Text size="sm" mb={4}>
                💼 {job.job_type} {/* Job type */}
              </Text>
              <Text size="sm" mb={4}>💰 ₹{job.salary_min} - ₹{job.salary_max}</Text>
              <Text size="sm" lineClamp={2} mb="sm">{job.description}</Text>
              <Button color="blue" radius="md" fullWidth>
                Apply Now
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
