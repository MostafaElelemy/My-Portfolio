import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Todo App (LocalStorage)',
    description: 'Lightweight tasks with optimistic toggle & delete.',
    tech: ['React', 'TypeScript'],
    category: 'Web App',
    demoUrl: '/?demo=todo',
    repoUrl: 'https://github.com/MostafaElelemy',
    image: '/src/assets/todo.png'
  },
  {
    id: 'p2',
    title: 'Gradient Generator',
    description: 'Design fluid backgrounds with angle & colors.',
    tech: ['React', 'TypeScript'],
    category: 'Tool',
    demoUrl: '/?demo=gradient',
    repoUrl: 'https://github.com/MostafaElelemy',
    image: '/src/assets/gradient.png'
  },
  {
    id: 'p3',
    title: 'Pomodoro Timer',
    description: 'Accessible start/pause/reset productivity timer.',
    tech: ['React', 'TypeScript'],
    category: 'Tool',
    demoUrl: '/?demo=pomodoro',
    repoUrl: 'https://github.com/MostafaElelemy',
    image: '/src/assets/pomodoro.png'
  },
  {
    id: 'p4',
    title: 'Palette Generator',
    description: 'Random HSL palettes, click to copy.',
    tech: ['React', 'TypeScript'],
    category: 'Tool',
    demoUrl: '/?demo=palette',
    repoUrl: 'https://github.com/MostafaElelemy',
    image: '/src/assets/palette.png'
  },
  {
    id: 'p5',
    title: 'Markdown Editor',
    description: 'Live preview markdown with a tiny parser.',
    tech: ['React', 'TypeScript'],
    category: 'Tool',
    demoUrl: '/?demo=markdown',
    repoUrl: 'https://github.com/MostafaElelemy',
    image: '/src/assets/markdown.png'
  },
  {
    id: 'p6',
    title: 'Drag & Drop Uploader',
    description: 'A11y-friendly drag-and-drop file picker.',
    tech: ['React', 'TypeScript'],
    category: 'Component',
    demoUrl: '/?demo=uploader',
    repoUrl: 'https://github.com/MostafaElelemy',
    image: '/src/assets/uploader.png'
  },
  {
    id: 'p7',
    title: 'Realtime Chat Dashboard',
    description: 'Presence, rooms, and optimistic updates.',
    tech: ['React', 'WS'],
    category: 'Web App',
        repoUrl: 'https://github.com/MostafaElelemy',
    image: '/src/assets/realtime-chat.png'
  },
  {
    id: 'p8',
    title: 'E‑Commerce Gallery',
    description: 'Facet filters + prefetching for fast UX.',
    tech: ['React'],
    category: 'Web App',
        repoUrl: 'https://github.com/MostafaElelemy',
    image: '/src/assets/ecommerce-gallery.png'
  },
]
