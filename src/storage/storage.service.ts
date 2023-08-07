import { Note } from '../notes/entities/note.entity';

// ID cannot be 'stats'

export class StorageService {
  notes: Note[] = [
    {
      id: '1',
      name: 'Shopping List',
      date: 'Aug 2, 2023',
      category: 'Task',
      content: 'Tomatoes, bread',
      dates: '',
      archived: false,
    },
    {
      id: '2',
      name: 'The theory of evolution',
      date: 'Aug 3, 2023',
      category: 'Random Thought',
      content: 'The evoluton has a lot of theories',
      dates: '1/8/2023, 5/8/2023',
      archived: false,
    },
    {
      id: '3',
      name: 'New Feature',
      date: 'Aug 4, 2023',
      category: 'Idea',
      content: 'Implement new feature',
      dates: '',
      archived: false,
    },
    {
      id: '4',
      name: 'William Gaddis',
      date: 'Aug 5, 2023',
      category: 'Quote',
      content: `Power doesn't connection to..`,
      dates: '',
      archived: false,
    },
    {
      id: '5',
      name: 'Books',
      date: 'Aug 5, 2023',
      category: 'Task',
      content: 'The Lean Startup',
      dates: '',
      archived: false,
    },
    {
      id: '6',
      name: 'William ',
      date: 'Aug 2, 2023',
      category: 'Quote',
      content: 'Bread, milk',
      dates: '',
      archived: true,
    },
    {
      id: '7',
      name: 'Old Shopping List',
      date: 'Aug 3, 2023',
      category: 'Task',
      content: 'Bread, milk, meat',
      dates: '',
      archived: true,
    },
  ];
}
