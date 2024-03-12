import * as fs from 'fs';

// Function to read the JSON file and parse it
const readJSONFile = <T>(filename: string): T => {
	const rawData = fs.readFileSync(filename, 'utf-8');
	return JSON.parse(rawData);
};
