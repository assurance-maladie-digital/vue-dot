import * as fs from 'fs';

export default function writePlainFile(content: any, file: string) {
	const stream = fs.createWriteStream(file);

	stream.once('open', () => {
		stream.write(content);
		stream.end();
	});
}
