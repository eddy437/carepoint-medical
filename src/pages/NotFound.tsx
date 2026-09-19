import { Link } from "react-router-dom";
import { Home, SearchX } from "lucide-react";
import { useDocumentTitle } from "../utils/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page Not Found | CarePoint Medical");

  return (
    <div className="container-content py-20 lg:py-28">
      <div className="card-base bg-white p-10 text-center max-w-lg mx-auto">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-aqua text-teal inline-flex items-center justify-center">
          <SearchX className="w-8 h-8" aria-hidden="true" />
        </div>
        <p className="mt-6 font-manrope font-extrabold text-5xl text-navy">
          404
        </p>
        <h1 className="mt-3 font-manrope font-extrabold text-2xl text-navy">
          Page not found
        </h1>
        <p className="mt-3 text-muted text-sm leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center">
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}