export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  experience: number;
  image: string;
  bio: string;
  education: string[];
  certifications: string[];
  languages: string[];
  availability: string;
  consultationHours: string;
}