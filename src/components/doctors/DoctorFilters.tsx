import { Search, X } from "lucide-react";
import { departmentsList, specialtiesList } from "../../data/doctors";

interface Props {
  search: string;
  onSearch: (v: string) => void;
  department: string;
  onDepartment: (v: string) => void;
  specialty: string;
  onSpecialty: (v: string) => void;
  resultCount: number;
}

export default function DoctorFilters({
  search,
  onSearch,
  department,
  onDepartment,
  specialty,
  onSpecialty,
  resultCount,
}: Props) {
  const hasFilters = search || department || specialty;

  return (
    <div className="card-base bg-white p-4 sm:p-5 mb-8">
      <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
        <div className="relative">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search by name or specialty"
            aria-label="Search doctors"
            className="input-base !pl-10"
          />
        </div>

        <label className="sr-only" htmlFor="department-filter">
          Filter by department
        </label>
        <select
          id="department-filter"
          value={department}
          onChange={(e) => onDepartment(e.target.value)}
          className="input-base appearance-none bg-white"
        >
          <option value="">All departments</option>
          {departmentsList.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <label className="sr-only" htmlFor="specialty-filter">
          Filter by specialty
        </label>
        <select
          id="specialty-filter"
          value={specialty}
          onChange={(e) => onSpecialty(e.target.value)}
          className="input-base appearance-none bg-white"
        >
          <option value="">All specialties</option>
          {specialtiesList.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-3">
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                onSearch("");
                onDepartment("");
                onSpecialty("");
              }}
              className="btn-outline !py-3 !px-4 !text-sm"
            >
              <X className="w-4 h-4" aria-hidden="true" />
              Clear
            </button>
          )}
        </div>
      </div>

      <p className="mt-3 text-muted text-sm" role="status" aria-live="polite">
        Showing <span className="font-semibold text-navy">{resultCount}</span>{" "}
        {resultCount === 1 ? "doctor" : "doctors"}
      </p>
    </div>
  );
}