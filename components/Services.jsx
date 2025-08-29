import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ServiceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Crafting visually appealing, user-friendly designs that enhance user experience and brand identity.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Building responsive and scalable websites using modern technologies for smooth performance and functionality.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Creating fast, reliable, and engaging mobile or web applications tailored to your business needs.",
  },
];


const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-[url('/dots-light.svg')] dark:before:bg-[url('/dots-dark.svg')] before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px] mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {ServiceData.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-[424px] bg-white dark:bg-background dark:shadow-sm h-[300px] flex flex-col justify-center items-center relative text-center " 
            >
              {/* Slightly lower header icon */}
              <CardHeader className="absolute left-1/2 -translate-x-1/2 -top-[48px] text-primary">
                <div className="w-[96px] h-[96px] rounded-full bg-white dark:bg-background flex justify-center items-center shadow-md">
                  {item.icon}
                </div>
              </CardHeader>

              <CardContent className="flex flex-col items-center  justify-center text-center px-4 flex-grow">
                <CardTitle className="mb-2 text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
