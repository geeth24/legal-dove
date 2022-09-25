// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, Db, Collection, WithId } from "mongodb"
import type { NextApiRequest, NextApiResponse } from "next"
import Data from "../../models/data"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    //@ts-ignore
    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()

    const db: Db = client.db("App")
    const collection: Collection = db.collection("Providers")

    const data = (await collection.find({}).toArray()) as Data[]

    await client.close()

    res.status(200).send(data)
}
