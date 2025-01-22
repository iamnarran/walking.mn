export type Route = {
  id: string;
  name: string;
  description: string;
  length: number;
  difficulty: number;
  status: 'pending' | 'ongoing' | 'finished' | 'postponed';
  image_url: string;
};
