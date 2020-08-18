
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

export interface ProInd{
  cod: string;
  url: string;
  titulo: string;
  categoria: string;
}

export interface Product{
  producto: string;
  categoria: string;
  subtitulo1: string;
  desc1: string;
  subtitulo2: string;
  desc2: string;
  resumen: string;
}