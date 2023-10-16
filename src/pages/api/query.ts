// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/db/database'
import { sql } from 'kysely'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const ress = await sql.raw("select * from \"User\";").execute(db)
    console.log(ress)


    let data = await db.selectFrom('User').select(['name', 'id']).execute()

    res.status(200).json({ data })
}
