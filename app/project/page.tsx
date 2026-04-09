import ProjectTabs from "@/components/project-tabs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <section className="mt-10 min-h-screen space-y-6">
      <div className="space-y-5 px-5">
        <h1 className="mt-8 text-3xl font-bold">Projects</h1>
        <p>Here are some of my recent projects that I&apos;ve worked on:</p>
      </div>

      <ProjectTabs />

      <div className="my-10 flex w-full justify-center px-6">
        <button
          type="button"
          className="bg-muted border-muted-foreground/50 rounded-2xl border px-4 py-3 text-lg leading-5 shadow-xs focus:ring-4"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft size={15} className="animate-arrow transition-all" />{" "}
            Back to Home
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ProjectPage;
