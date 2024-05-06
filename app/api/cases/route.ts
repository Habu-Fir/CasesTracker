import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createCaseSchema = z.object({
  title: z.string().min(1).max(250),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createCaseSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newCase = await prisma.case.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newCase, { status: 201 });
}
