export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The entire team made a difficult experience feel much easier. Everyone was professional, kind, and genuinely caring.",
    name: "Michael Anderson",
    role: "Cardiology Patient",
  },
  {
    id: "2",
    quote:
      "From scheduling to follow-up, CarePoint handled everything with efficiency and warmth. I felt heard and respected throughout my treatment.",
    name: "Rebecca Thompson",
    role: "Orthopedics Patient",
  },
  {
    id: "3",
    quote:
      "As a parent, finding a pediatrician you trust is everything. Dr. Okafor and his team have been wonderful with both of my children.",
    name: "David Kim",
    role: "Parent & Patient",
  },
];