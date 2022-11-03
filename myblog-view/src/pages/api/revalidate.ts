import {NextApiRequest, NextApiResponse} from 'next'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.query.secret !== "aaaaa"){
    return res.status(401).json({
      message: "invalid token"
    })
  }

  try {
    await res.revalidate(`/posts/${req.query.postId}`)
    return res.json({revalidated: true})
  } catch (error) {
    return res.status(500).send("error revalidate")
  }
}