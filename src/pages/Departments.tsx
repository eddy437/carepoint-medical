import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { departments } from "../data/departments";
import ImageWithFallback from "../components/common/ImageWithFallback";
import { useDocumentTitle } from "../utils/useDocumentTitle";

export default function Departments() {
  useDocumentTitle(
    "Departments | CarePoint Medical",
    "Explore our medical departments including Cardiology, Neurology, Orthopedics, Pediatrics, and more."
  );

  return (
    <div>
      <section className="bg-white border-b border-line">
        <div className="container-content py-14 lg:py-20">
          <span className="label-eyebrow">Our Specialties</span>
          <h1 className="mt-3 font-manrope font-extrabold text-4xl sm:text-5xl text-navy leading-tight max-w-3xl">
            Expert care across every specialty.
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl leading-relaxed">
            Each department is led by experienced specialists and supported by
            modern diagnostic technology.
          </p>
        </div>
      </section>

      <section className="bg-warm">
        <div className="container-content py-12 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <Link
                key={dept.id}
                to={`/departments/${dept.id}`}
                className="card-hover overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal flex flex-col"
              >
                <ImageWithFallback
                  src={dept.image}
                  alt={`${dept.name} at CarePoint Medical`}
                  className="aspect-[16/10]"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                  icon={<Building2 className="w-6 h-6" aria-hidden="true" />}
                />
                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="font-manrope font-bold text-lg text-navy group-hover:text-teal transition-colors">
                    {dept.name}
                  </h2>
                  <p className="mt-2 text-muted text-sm leading-relaxed flex-1">
                    {dept.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-manrope font-semibold text-sm text-teal">
                    View Department
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-content py-16 lg:py-20 text-center">
          <SectionHeading
            title="Not sure which department you need?"
            description="Our team can help you find the right specialist."
            align="center"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/doctors" className="btn-outline">
              Browse Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}