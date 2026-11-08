import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center p-8">
      <h1 className="text-4xl font-bold tracking-tight">Hi, I&apos;m Nico Ivan Tamao Valenciano</h1>
      <p className="text-xl text-muted-foreground">
        Computer Science & Technology Student at Naga College Foundation.
      </p>
      <Card className="mt-8">
        <CardContent className="p-6">
          <p>Welcome to my personal portfolio.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Use the URL bar to navigate to /about, /education, /hobbies, or /contact.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}