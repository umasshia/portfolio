import { about } from "./about";
import { experience, Job } from "./experience";
import { personal } from "./personal";

export function formatAboutAsJava(): string {
  const a = about;
  const quote = (items: string[]) => items.map((i) => `"${i}"`).join(", ");
  return `
    // hi, I'm ${personal.name.split(" ")[0]}, a software developer
    class AboutMe() {
        const Name = "${personal.name}";
        const Date_of_Birth = "${a.dateOfBirth}";
        const University = "${a.university}";
        const Degree = "${a.degree}";
        const Major = "${a.major}";
        const Graduation_Month = "${a.graduationMonth}";
        var Languages = {${quote(a.languages)}};
        var Frameworks = {${quote(a.frameworks)}}
        var Databases = {${quote(a.databases)}}
        var Cloud_Services = {${quote(a.cloudServices)}}
        var Other = {${quote(a.other)}}
    }`;
}

function formatJobAsCpp(job: Job, className: string, classLabel: string): string {
  let result = `    class ${className}::Job {\n`;
  result += `        public:\n`;
  result += `            string title = "${job.title}";\n`;
  result += `            string company = "${job.company}";\n`;
  result += `            string dates = "${job.startDate} - ${job.endDate}";\n`;

  if (job.activities.length > 1) {
    result += `            map<int,string> activities = {\n`;
    job.activities.forEach((act, i) => {
      const comma = i < job.activities.length - 1 ? "," : "";
      result += `                { ${i + 1} : "${act}" }${comma}\n`;
    });
    result += `            };\n`;
  } else if (job.activities.length === 1) {
    result += `            string activity = "${job.activities[0]}";\n`;
  }

  if (job.courses) {
    result += `            string[] courses_taught = [${job.courses.map((c) => `"${c}"`).join(", ")}];\n`;
  }
  if (job.languages) {
    result += `            string[] languages_taught = [${job.languages.map((l) => `"${l}"`).join(", ")}] ;\n`;
  }

  result += `    }`;
  return result;
}

export function formatExperienceAsCpp(): string {
  const classNames = ["CurrentJob", "PastJobOne", "PastJobTwo", "PastJobThree", "PastJobFour"];
  const labels = ["Current Job", "Past Job 1", "Past Job 2", "Past Job 3", "Past Job 4"];

  let result = `
    //job history

    #include "Job.h"
    #include <map>

    using namespace std;

`;
  experience.forEach((job, i) => {
    result += formatJobAsCpp(job, classNames[i] || `Job${i}`, labels[i] || `Job ${i}`) + "\n\n";
  });

  return result.trimEnd();
}

export function formatContactAsJson(): string {
  const p = personal;
  const contactObj = {
    contact_details: {
      name: p.name,
      address: p.address,
      reach_at: {
        mail: p.email,
      },
      links: {
        linkedin: p.linkedin.replace("https://", ""),
        github: p.github.replace("https://", ""),
        portfolio: p.portfolio.replace("https://", ""),
      },
    },
  };
  return "\n    " + JSON.stringify(contactObj, null, 4)
    .split("\n")
    .map((line, i) => (i === 0 ? line : "    " + line))
    .join("\n");
}
