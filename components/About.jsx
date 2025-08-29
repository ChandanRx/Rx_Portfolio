import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const InfoData = [
  { icon: <User2 size={20} />, text: "Chandan Pargi" },
  { icon: <PhoneCall size={20} />, text: "+91 9773283615" },
  { icon: <MailIcon size={20} />, text: "Chandan.rxn@gmail.com" },
  { icon: <Calendar size={20} />, text: "Born on 22nd Nov, 1997" },
  { icon: <GraduationCap size={20} />, text: "Software Developer" },
  { icon: <HomeIcon size={20} />, text: "Ahmedabad, Gujarat" },
];

const QualificationData = [
  {
    title: "education",
    data: [{ university: "GEC, Gandhinagar", qualification: "Bachelor of Engineering", year: "2022" }],
  },
  {
    title: "experience",
    data: [
      { company: "Unnati Informatics LLP.", position: "MERN Stack Project Intern", year: "JAN-APR (2022)" },
      { company: "Unnati Informatics LLP.", position: "Front-end Intern", year: "AUG-DEC (2024)" },
      { company: "Felix ITs System", position: "Fullstack Stack Trainee", year: "FEB-JUL (2025)" },
    ],
  },
];

const SkillData = [
  {
    title: "skills",
    data: [
      { name: "HTML, CSS" },
      { name: "Front-end Development" },
      { name: "JavaScript, React Native" },
      { name: "Back-end Development" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/figma.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/wordpress.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => arr.find((item) => item.title === title);

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-[image:url('/dots-light.svg')] dark:before:bg-[image:url('/dots-dark.svg')] before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px] mb-10 md:mb-14 text-center mx-auto">
          About Me
        </h2>

        <div className="flex flex-col xl:flex-row gap-y-12">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-[url('/about/shape-yl.svg')] dark:bg-[url('/about/shape-dark.svg')] w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/hero.png"
            />
          </div>

          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] border dark:border-none">
                <TabsTrigger className="w-full" value="personal">Personal Info</TabsTrigger>
                <TabsTrigger className="w-full" value="qualification">Qualification</TabsTrigger>
                <TabsTrigger className="w-full" value="skills">Skills</TabsTrigger>
              </TabsList>

              <div className="text-base md:text-lg mt-8 md:mt-12">
                {/* Personal Info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 px-4">Creating eye-catching UI for 3+ years</h3>
                    <p className="text-muted-foreground text-base md:text-lg mb-8 font-light max-w-xl px-4 xl:px-0">
                      I specialize in building modern web and mobile interfaces using the latest technologies and design principles.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-10 px-4 xl:px-0">
                      {InfoData.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-4">
                          <div className="text-primary">{item.icon}</div>
                          <div className="text-sm md:text-base">{item.text}</div>
                        </div>
                      ))}
                    </div>

                    <div className="px-4 xl:px-0">
                      <div className="text-primary font-medium">Language Skills</div>
                      <div className="border-b border-border my-2"></div>
                      <div className="text-sm md:text-base">Gujarati, Hindi, English</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 px-4">My Professional Journey</h3>
                    <div className="grid md:grid-cols-2 gap-y-10">
                      {["experience", "education"].map((key) => {
                        const section = getData(QualificationData, key);
                        return (
                          <div className="flex flex-col gap-y-6 px-4" key={key}>
                            <div className="flex items-center gap-x-2 text-primary text-lg">
                              <Briefcase />
                              <span className="capitalize font-semibold">{section.title}</span>
                            </div>
                            <div className="flex flex-col gap-y-8">
                              {section.data.map((item, index) => (
                                <div className="flex gap-x-6 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative">
                                    <div className="w-[10px] h-[10px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="text-base font-semibold">{item.company || item.university}</div>
                                    <div className="text-muted-foreground text-sm mb-2">{item.position || item.qualification}</div>
                                    <div className="text-sm">{item.year}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left px-4">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6">Tech & Tools I Use</h3>
                    <div className="mb-12">
                      <h4 className="text-lg font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="grid grid-cols-2 gap-y-4 md:grid-cols-2 text-sm md:text-base">
                        {getData(SkillData, "skills").data.map((item, index) => (
                          <div key={index} className="text-left">{item.name}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-6 justify-center xl:justify-start">
                        {getData(SkillData, "tools").data.map((item, index) => (
                          <Image
                            key={index}
                            src={item.imgPath}
                            width={40}
                            height={40}
                            alt="tool"
                            priority
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
