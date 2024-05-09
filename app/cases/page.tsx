import { Button, Table } from '@radix-ui/themes';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import prisma from '@/prisma/client';
import CaseStatusBadge from '../componenet/IssuesStatusBadge';

const page = async () => {
  const cases = await prisma.case.findMany();

  return (
    <div className="space-y-4">
      <div className="justify-end">
        <Button>
          <Link href={'/cases/new'}>New Case</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Cases</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cases.map((cas) => (
            <Table.Row key={cas.id}>
              <Table.RowHeaderCell>{cas.title}</Table.RowHeaderCell>

              <Table.Cell>
                <CaseStatusBadge status={cas.status} />
              </Table.Cell>
              <Table.Cell>{cas.createdAt.toISOString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default page;
