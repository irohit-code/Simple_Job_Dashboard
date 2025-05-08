'use client';

import { Container, Group, Button, Text, Image } from '@mantine/core';
import Link from 'next/link';
import { modals } from '@mantine/modals';
import CreateJobForm from '@/components/CreateJobForm';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Find Jobs', href: '/jobs' },
    { label: 'Find Talents', href: '/talents' },
    { label: 'About us', href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
];

export default function Header() {
    const openCreateJobModal = () => {
        modals.open({
            title: 'Create Job',
            children: <CreateJobForm />,
        });
    };

    return (
        <header
            style={{
                width: '50%',
                margin: '0 auto',
                marginTop: '20px',
                borderColor: 'transparent',
                borderRadius: '70px',
                boxShadow: '0 8px 16px rgba(159, 158, 158, 0.3)', // Increased shadow intensity
                padding: '10px 20px',
                backgroundColor: '#fff', // Ensure the header has a background color for contrast
            }}
        >
            <Container size="xl">
                <Group justify="space-between" align="center">
                    {/* Logo */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Image src="/file.svg" alt="Logo" height={32} />
                    </Link>

                    {/* Navigation Links */}
                    <Group gap="lg" visibleFrom="sm">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{ textDecoration: 'none', color: '#444', fontWeight: 500 }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Group>

                    {/* Create Jobs Button */}
                    <Button
                        radius="xl"
                        size="md"
                        onClick={openCreateJobModal}
                        variant="gradient"
                        gradient={{ from: 'violet', to: 'grape', deg: 90 }}
                    >
                        Create Jobs
                    </Button>
                </Group>
            </Container>
        </header>
    );
}