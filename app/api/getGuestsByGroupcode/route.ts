import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const { groupcode } = req.query; // Extract groupcode from query params

  if (!groupcode || typeof groupcode !== "string") {
    return res
      .status(400)
      .json({ error: "groupcode is required and must be a string" });
  }

  try {
    const users = await prisma.user.findMany({
      where: { groupcode },
    });

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
}
