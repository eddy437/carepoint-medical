import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { departments } from "../../data/departments";
import ImageWithFallback from "../common/ImageWithFallback";

export default function DepartmentsSection() {
  const featured = departments.slice(0, 6);

  return (
    <section className="bg-warm border-y border-line">
      <div className="container-content py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Our Specialties"
            title="Expert care across every stage of life."
            description="Explore our medical departments staffed by experienced specialists and supported by modern diagnostic technology."
          />
          <Link
            to="/departments"
            className="inline-flex items-center gap-1.5 font-manrope font-semibold text-sm text-teal hover:text-teal-dark transition-colors self-start lg:self-end shrink-0"
          >
            View all departments
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((dept) => (
            <Link
              key={dept.id}
              to={`/departments/${dept.id}`}
              className="card-hover group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-teal flex flex-col"
            >
              <ImageWithFallback
                src={dept.image}
                alt={`${dept.name} department at CarePoint Medical`}
                className="aspect-[16/10]"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-manrope font-bold text-lg text-navy group-hover:text-teal transition-colors">
                  {dept.name}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed flex-1">
                  {dept.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-manrope font-semibold text-sm text-teal">
                  Explore Department
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}