
export interface Local{
  title: string;
  email: string;
  name: string;
  team: Person[];
}

export interface Person{
  name: string;
  role: string;
  desription: string;
  url: string;
  red: string
}