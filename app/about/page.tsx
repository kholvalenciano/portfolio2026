import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">A bit about my background, passion, and technical skillset.</p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold">My Story</h3>
          <p className="text-muted-foreground">
            I am Nico Ivan Tamao Valenciano, a computer science and technology student at Naga College Foundation in Naga City, Philippines. I specialize in backend development and database schema design, recently building full REST APIs using NestJS, MySQL, and Render. 
          </p>
          <p className="text-muted-foreground">
            Currently, I am expanding my full-stack capabilities by integrating modern frontend frameworks like Next.js, Tailwind CSS, and Shadcn UI. When I'm not coding, I enjoy tuning IEM audio gear, swimming, and exploring local spots in Naga.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {["JavaScript / TypeScript", "React & Next.js", "Tailwind CSS", "Node.js & Express", "NestJS", "MySQL & PHP", "Git & GitHub", "Shadcn UI"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}