import * as fs from 'fs'
import { prideFlagColors } from './prideFlagColors'

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
		color: prideFlagColors.red,
	}

	fs.writeFileSync(METADATA_DIRECTORY + '/' + i + '.json', JSON.stringify(json))
}
