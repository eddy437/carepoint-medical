import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  MessageCircle,
  CalendarCheck,
  Building2,
  Stethoscope,
} from "lucide-react";
import { departments } from "../data/departments";
import { doctors } from "../data/doctors";
import ImageWithFallback from "../components/common/ImageWithFallback";
import DoctorCard from "../components/doctors/DoctorCard";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { useDocumentTitle } from "../utils/useDocumentTitle";

export default function DepartmentDetails() {
  const { id } = useParams<{ id: string }>();
  const department = departments.find((d) => d.id === id);

  useDocumentTitle(
    department
      ? `${department.name} | CarePoint Medical`
      : "Department Not Found | CarePoint Medical"
  );

  if (!department) {
    return (
      <div className="container-content py-20 lg:py-28">
        <div className="card-base bg-white p-10 text-center max-w-lg mx-auto">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-aqua text-teal inline-flex items-center justify-center">
            <Building2 className="w-6 h-6" aria-hidden="true" />
          </div>
          <h1 className="mt-5 font-manrope font-extrabold text-2xl text-navy">
            Department Not Found
          </h1>
          <p className="mt-3 text-muted text-sm leading-relaxed">
            We couldn't find the department you're looking for.
          </p>
          <div className="mt-6 flex justify-center">
            <Link to="/departments" className="btn-primary">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Departments
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const departmentDoctors = doctors.filter((d) =>
    department.specialists.includes(d.name)
  );

  const whatsappUrl = getWhatsAppUrl(
    WHATSAPP_MESSAGES.department(department.name)
  );

  return (
    <div className="bg-white">
      <div className="container-content py-10 lg:py-14">
        <Link
          to="/departments"
          className="inline-flex items-center gap-1.5 font-manrope font-semibold text-sm text-muted hover:text-teal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          All Departments
        </Link>

        <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="label-eyebrow">Department</span>
            <h1 className="mt-3 font-manrope font-extrabold text-4xl sm:text-5xl text-navy leading-tight">
              {department.name}
            </h1>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              {department.description}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/appointments" className="btn-primary">
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                Book an Appointment
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-3"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Ask About This Department
              </a>
            </div>
          </div>
          <ImageWithFallback
            src={department.image}
            alt={`${department.name} department`}
            className="aspect-[4/3] rounded-3xl shadow-soft"
            icon={<Building2 className="w-8 h-8" aria-hidden="true" />}
          />
        </div>
      </div>

      <section className="bg-warm border-y border-line">
        <div className="container-content py-14 lg:py-20 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-manrope font-extrabold text-2xl text-navy">
              Services offered
            </h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {department.services.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2.5 text-sm text-ink"
                >
                  <Check
                    className="w-4 h-4 text-teal shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-manrope font-extrabold text-2xl text-navy">
              Conditions treated
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {department.conditions.map((c) => (
                <li
                  key={c}
                  className="px-3 py-1.5 rounded-full bg-white border border-line text-navy text-xs font-manrope font-semibold"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-content py-14 lg:py-20">
          <div className="flex items-center gap-2 mb-6">
            <Stethoscope className="w-5 h-5 text-teal" aria-hidden="true" />
            <h2 className="font-manrope font-extrabold text-2xl text-navy">
              Technology & Equipment
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {department.equipment.map((e) => (
              <div key={e} className="card-base p-5">
                <div className="w-8 h-8 rounded-lg bg-aqua text-teal inline-flex items-center justify-center">
                  <Check className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className="mt-3 font-manrope font-semibold text-sm text-navy leading-snug">
                  {e}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {departmentDoctors.length > 0 && (
        <section className="bg-warm border-t border-line">
          <div className="container-content py-14 lg:py-20">
            <h2 className="font-manrope font-extrabold text-2xl text-navy mb-8">
              Specialists in {department.name}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {departmentDoctors.map((d) => (
                <DoctorCard key={d.id} doctor={d} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}