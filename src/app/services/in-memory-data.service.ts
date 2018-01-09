import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
 
	createDb() {
		const notes = [
			{ 
				id: 'a1',
				title: 'To do...',
				content: 'Finish notes app'
			},
			{ 
				id: 'b2',
				title: 'Reminder!',
				content: 'Learn more Angular'
			},
			{ 
				id: 'c3',
				title: 'Important:',
				content: 'The password is ********'
			}
		];
		return {notes};
 	}
}