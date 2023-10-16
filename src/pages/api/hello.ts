// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/db/database'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  await db.insertInto('User').values({ id: Math.floor(Math.random() * 100 + 10), name: "something" }).execute()

  res.status(200).json({ name: 'John Doe' })
}
