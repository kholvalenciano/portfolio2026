
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Waves, Radio, Gamepad2, BookOpen } from "lucide-react";

const hobbies = [
  {
    title: "IEM Audio Tuning",
    icon: Headphones,
    description: "Configuring and testing in-ear monitors like Tangzu, Moondrop, and Final E eartips.",
  },
  {
    title: "Swimming",
    icon: Waves,
    description: "Practicing front strokes and flutter kicks in the 25-meter pool.",
  },
  {
    title: "Local Radio",
    icon: Radio,
    description: "Tuning in and listening to local Naga FM radio broadcasts.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Playing block-building simulation games.",
  },
  {
    title: "Reading & Lore",
    icon: BookOpen,
    description: "Reading fiction and diving into the lore of The Hunger Games.",
  }
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}