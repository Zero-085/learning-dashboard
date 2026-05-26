import { getCourses } from "@/lib/supabase/queries";
import { CourseCard } from "./CourseCard";
import { AlertCircle } from "lucide-react";
import { Course } from "@/types";

export async function CourseGrid() {
  let courses: Course[] = [];
  let error: string | null = null;

  try {
    courses = await getCourses();
  } catch (e) {
    error = e instanceof Error ? e.message : "Unknown error";
    courses = [];
  }

  if (error) {
    return (
      <section className="col-span-full">
        <div className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-red-400">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">Failed to load courses</p>
            <p className="mt-0.5 text-xs text-red-400/70">{error}</p>
            <p className="mt-1 text-xs text-zinc-500">
              Make sure your Supabase environment variables are configured
              correctly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!courses.length) {
    return (
      <section className="col-span-full rounded-2xl border border-bg-border bg-bg-surface p-8 text-center text-zinc-500">
        <p className="text-sm">
          No courses found. Add some data to your Supabase table.
        </p>
      </section>
    );
  }

  return (
    <>
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </>
  );
}
