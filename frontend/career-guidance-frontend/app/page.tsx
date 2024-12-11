"use client";
import React, { useState, FormEvent } from "react";
interface CareerGuidanceResponse {
  recommended_career: string;
}

const CareerGuidance = () => {
  const [skills, setSkills] = useState<string>("");
  const [recommendedCareer, setRecommendedCareer] = useState<string | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);
    setRecommendedCareer(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/users/career-guidance/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ skills }),
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong!");
      }

      const data: CareerGuidanceResponse = await response.json();
      setRecommendedCareer(data.recommended_career);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Career Guidance
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="skills"
              className="block text-lg font-medium text-gray-700"
            >
              Enter your skills
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Use a comma-separated format (e.g., programming, problem-solving,
              teamwork).
            </p>
            <input
              type="text"
              id="skills"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., programming, problem-solving, teamwork"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded-lg text-white font-semibold shadow-md ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Get Career Guidance"}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-lg shadow">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {recommendedCareer && (
          <div className="mt-6 p-6 bg-green-100 text-green-800 rounded-lg shadow text-center">
            <p className="text-lg font-semibold">Recommended Career Path:</p>
            <p className="text-xl font-bold mt-2">{recommendedCareer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerGuidance;
