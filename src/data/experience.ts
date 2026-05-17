export interface Job {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  activities: string[];
  courses?: string[];
  languages?: string[];
}

export const experience: Job[] = [
  {
    title: "Chief Technology Officer",
    company: "Democracy at Work",
    startDate: "September 2024",
    endDate: "Present",
    activities: [
      "Developed a Flask Python app that makes content creation more accessible for company members by leveraging OpenAI for captioning and text generation.",
      "Organize and coordinate efforts of volunteers, ensuring efficient operations and maximizing productivity.",
      "Develop and implement technical strategies aligned with organizational goals to drive continuous improvement.",
    ],
  },
  {
    title: "Creative Technology Specialist",
    company: "Democracy at Work",
    startDate: "May 2023",
    endDate: "September 2024",
    activities: [
      "Maintain and remodel the company website using Nationbuilder, ensuring accurate and up-to-date content using HTML, CSS, and JavaScript.",
      "Design and customize a new company website using the Django framework, MySQL database, and AWS for email blasts.",
      "Provide technical support and effectively troubleshoot website issues to ensure seamless functionality.",
      "Collaborate with the supervisor to address daily technology challenges and implement solutions.",
    ],
  },
  {
    title: "Tutor",
    company: "Manhattan College",
    startDate: "August 2022",
    endDate: "May 2023",
    activities: [
      "Guided training in courses including Object-oriented Design in Java, Web Programming, Systems Programming, Calculus, and Computational Linear Algebra for Computer Scientists.",
      "Trained students in languages such as C++, Java, HTML, CSS, PHP.",
    ],
  },
  {
    title: "Research Scholar",
    company: "Manhattan College",
    startDate: "June 2022",
    endDate: "October 2022",
    activities: [
      "Employed shell scripting in a Linux environment for virtualization.",
      "Tested hardware performance and monitored system calls on virtual machines.",
      "Developed an AWK script for predicting application types based on system call patterns.",
    ],
  },
];
