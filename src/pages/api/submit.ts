import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const newSubmission = req.body;

        try {
            // Process the submission data and save it to the data directory
            const currentTime = new Date().toLocaleString();
            const csvRow = `${currentTime},${Object.values(newSubmission).join(',')}\n`;
            const dataFilePath = path.join(process.cwd(), 'data', 'submission.csv');
            fs.appendFileSync(dataFilePath, csvRow, 'utf-8');

            res.status(200).json({ message: 'Submission received successfully.' });
        } catch (error) {
            console.error('Error processing submission:', error);
            res.status(500).json({ error: 'Error processing submission.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
    }
}