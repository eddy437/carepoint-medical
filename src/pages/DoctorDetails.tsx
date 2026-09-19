import { Link, useParams } from "react-router-dom";
import { ArrowLeft, UserX } from "lucide-react";
import DoctorProfile from "../components/doctors/DoctorProfile";
import { doctors } from "../data/doctors";
import { useDocumentTitle } from "../utils/useDocumentTitle";

export default function DoctorDetails() {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find((d) => d.id === id);

  useDocumentTitle(
    doctor ? `${doctor.name} | CarePoint Medical` : "Doctor Not Found | CarePoint Medical"
  );

  if (!doctor) {
    return (
      <div className="container-content py-20 lg:py-28">
        <div className="card-base bg-white p-10 text-center max-w-lg mx-auto">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-aqua text-teal inline-flex items-center justify-center">
            <UserX className="w-6 h-6" aria-hidden="true" />
          </div>
          <h1 className="mt-5 font-manrope font-extrabold text-2xl text-navy">
            Doctor Not Found
          </h1>
          <p className="mt-3 text-muted text-sm leading-relaxed">
            We couldn't find the doctor you're looking for. It may have been
            removed or the link may be incorrect.
          </p>
          <div className="mt-6 flex justify-center">
            <Link to="/doctors" className="btn-primary">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Doctors
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container-content py-12 lg:py-20">
        <div className="mb-8">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 font-manrope font-semibold text-sm text-muted hover:text-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All Doctors
          </Link>
        </div>
        <DoctorProfile doctor={doctor} />
      </div>
    </div>
  );
}