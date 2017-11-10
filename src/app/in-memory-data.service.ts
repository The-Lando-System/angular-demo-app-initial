import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
 
	createDb() {
		const notes = [
			{ 
				id: 'a1',
				title: 'Note 1',
				content: 'My very first note! Yay'
			},
			{ 
				id: 'b2',
				title: 'Do something cool...',
				content: 'Cool!'
			},
			{ 
				id: 'c3',
				title: 'Notes are fun',
				content: 'notes are meh'
			}
		];
		return {notes};
 	}
}