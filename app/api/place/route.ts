import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { NextResponse } from 'next/server';

type Data = {
  message: string;
  data?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { category, lat, lng, radius } = req.query;

    const url = `${process.env.BASE_URI}/textsearch/json?query=${category}&location=${lat},${lng}&radius=${radius}&key=${process.env.GOOGLE_API_KEY}`;

    // Make the request with axios
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return NextResponse.json(response.data)
    // res.status(200).json({ message: 'Success', data: response.data });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: 'Error fetching data' });
  }
}