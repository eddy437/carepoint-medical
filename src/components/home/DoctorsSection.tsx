import SectionHeading from "../common/SectionHeading";
import DoctorCard from "../doctors/DoctorCard";
import { doctors } from "../../data/doctors";
import Button from "../common/Button";

export default function DoctorsSection() {
  const featured = doctors.slice(0, 3);

  return (
    <section className="bg-white">
      <div className="container-content py-20 lg:py-28">
        <SectionHeading
          eyebrow="Our Physicians"
          title="Meet the people behind your care."
          description="Our physicians are board-certified specialists committed to accurate diagnosis, clear communication, and compassionate treatment."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/doctors" variant="outline">
            View all doctors
          </Button>
        </div>
      </div>
    </section>
  );
}