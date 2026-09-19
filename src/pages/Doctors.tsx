import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import DoctorCard from "../components/doctors/DoctorCard";
import DoctorFilters from "../components/doctors/DoctorFilters";
import Button from "../components/common/Button";
import { doctors } from "../data/doctors";
import { useDocumentTitle } from "../utils/useDocumentTitle";

export default function Doctors() {
  useDocumentTitle(
    "Our Doctors | CarePoint Medical",
    "Meet our board-certified physicians across cardiology, neurology, orthopedics, and more."
  );

  const [params] = useSearchParams();
  const initialDept = params.get("department") ?? "";

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState(initialDept);
  const [specialty, setSpecialty] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return doctors.filter((d) => {
      if (q && !`${d.name} ${d.specialty} ${d.department}`.toLowerCase().includes(q))
        return false;
      if (department && d.department !== department) return false;
      if (specialty && d.specialty !== specialty) return false;
      return true;
    });
  }, [search, department, specialty]);

  return (
    <div>
      <section className="bg-white border-b border-line">
        <div className="container-content py-14 lg:py-20">
          <span className="label-eyebrow">Our Physicians</span>
          <h1 className="mt-3 font-manrope font-extrabold text-4xl sm:text-5xl text-navy leading-tight max-w-3xl">
            Meet the people behind your care.
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl leading-relaxed">
            Browse our team of board-certified specialists. Filter by
            department or specialty to find the right physician for you.
          </p>
        </div>
      </section>

      <section className="bg-warm">
        <div className="container-content py-12 lg:py-16">
          <DoctorFilters
            search={search}
            onSearch={setSearch}
            department={department}
            onDepartment={setDepartment}
            specialty={specialty}
            onSpecialty={setSpecialty}
            resultCount={filtered.length}
          />

          {filtered.length === 0 ? (
            <div className="card-base bg-white p-10 text-center max-w-xl mx-auto">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-aqua text-teal inline-flex items-center justify-center">
                <Search className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="mt-5 font-manrope font-bold text-xl text-navy">
                No doctors match your filters
              </h2>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                Try adjusting your search terms or clearing the filters to see
                all physicians.
              </p>
              <div className="mt-5">
                <Button
                  onClick={() => {
                    setSearch("");
                    setDepartment("");
                    setSpecialty("");
                  }}
                  variant="secondary"
                >
                  Clear all filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((d) => (
                <DoctorCard key={d.id} doctor={d} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}