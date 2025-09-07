import { Card, CardContent } from "@/components/ui/card";

export default function Forecast() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {days.map((day) => (
        <Card key={day}>
          <CardContent className="flex flex-col items-center p-4">
            <p className="font-semibold">{day}</p>
            <div className="text-3xl">🌤️</div>
            <p>20°C / 14°C</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
