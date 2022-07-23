import * as fs from 'fs'
import { colors } from './colors'

const AMOUNT = 5
const IMAGE_URI = 'ipfs://URI/'
const IMAGE_EXTENSION = '.png'
const METADATA_DIRECTORY = 'metadata'

// const json = {
// 	name: '#',
// 	image: IMAGE_URI + '#' + IMAGE_EXTENSION,
// }

// fs.writeFileSync(METADATA_DIRECTORY + '/#.json', JSON.stringify(json))

if (!fs.existsSync(METADATA_DIRECTORY))
	fs.mkdirSync(METADATA_DIRECTORY)

for (let i = 1; i <= AMOUNT; i++) {
	const json = {
		name: 'Bordão é Gay #' + i,
		image: IMAGE_URI + i + IMAGE_EXTENSION,
		color: colors[0],
	}

	fs.writeFileSync(METADATA_DIRECTORY + '/' + i + '.json', JSON.stringify(json))
}
