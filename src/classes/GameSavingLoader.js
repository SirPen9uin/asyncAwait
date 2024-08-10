import read from '../modules/reader';
import json from '../modules/parser';

export default class GameSavingLoader {
	static async load() {

		const data = await read();
		
		return json(data);
	}
}