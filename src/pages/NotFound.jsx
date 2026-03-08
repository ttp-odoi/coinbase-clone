import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      {/* 404 graphic */}
      <div className="relative mb-8">
        <p className="text-[120px] sm:text-[160px] font-extrabold text-gray-100 leading-none select-none">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-cb-blue flex items-center justify-center shadow-xl">
            <div className="w-10 h-10 rounded-full bg-white" />
          </div>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-cb-dark mb-3">
        Page not found
      </h1>
      <p className="text-cb-gray max-w-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="primary" size="lg" onClick={() => navigate("/")}>
          Go to Home
        </Button>
        <Button variant="outline" size="lg" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    </div>
  );
}
