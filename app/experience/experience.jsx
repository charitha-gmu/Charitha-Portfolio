/* eslint-disable @next/next/no-img-element */
const experience = [
  {
    companyName: "George Mason University",
    title: "Graduate Teaching Assistant",
    duration: "May 2023 – Present",
    location: "Fairfax, Virginia",
    description: [
      "Demonstrate proficiency in SDLC methodologies, documenting system requirements, designing UML and DFDs, applying basic UX design principles.",
      "Led and assisted 100+ students in grasping feasibility analysis, process modeling, use-case scenarios etc.",
      "Evaluate student assignments, quizzes, and exams, providing constructive feedback to help students improve their understanding of course concepts.",
      "Utilize various software tools and applications relevant to System Analysis and Design to enhance learning experience, including using modeling and design software.",
    ],
    logo: "/assets/images/GmuLogo.jpeg",
  },
  {
    companyName: "Westagile Labs",
    title: "Software Development Engineer",
    duration: "Jan 2020 – Dec 2022",
    location: "Hyderabad, Telangana",
    description: [
      "Designed and developed 6+ web and mobile applications, including those for automating laundry business, social media platforms, and a booking application using React, React Native, and Node.js, Integrating responsive design with HTML5 and CSS3.",
      "Implemented server-side logic using NodeJS and the Express framework, integrating middleware to manage REST API’s.",
      "Refactored legacy code to ES6 features and new features like hooks, redux, context API, and functional components. Established test suites for API’s and UI functionality using Mocha and Chai, Jest and Enzyme respectively to ensure performance, quality.",
      "Reduced applications loading time by 30% through optimization techniques like code splitting, lazy loading, memoization, reduced re-renders, dependency optimizations, debounce and throttling.",
      "Collaborated closely with Product and Design teams to gain understanding of their functional needs and design specifications and worked collaboratively with the Architecture and Development teams to propose tailored solutions.",
      "Led a 10-member team as Squad Lead, overseeing sprint brainstorming, sprint planning, user story grooming session, task breakdown and distribution among developers to optimize project workflows and ensure timely delivery.",
      "Mentored a team of 3+ junior developers, solidifying my knowledge, honing collaborative problem solving approach, fostering clear communication and impactful presentations.",
      "Streamlined project workflows with agile practices, utilizing Git, JIRA, and Confluence for management and documentation.",
      "Utilized Jenkins for CI/CD processes for automating testing and deployment workflows. Deployed applications on AWS, ensuring high availability across web and mobile platforms.",
    ],
    logo: "/assets/images/westagileLogo.png",
  },
  {
    companyName: "Engineer’s Hub, Mivo Solutions",
    title: "Application Development Intern",
    duration: "Jun 2019 – Dec 2019",
    location: "Hyderabad, Telangana",
    description: [
      "Developed responsive UI for customer facing web and mobile applications using React and React Native with smooth flow.",
      "Utilized advanced JavaScript (ES5/ES6) concepts including closures, hoisting, block scoping, prototypes, object-oriented programming principles, promises, and rest/spread operators to enhance application functionality and performance.",
      "Leveraged Android Studio and Xcode development environments for cross-platform application visualization and testing, ensuring compatibility and optimized performance across both Android and iOS platforms.",
    ],
    logo: "/assets/images/engineershubLogo.jpeg",
  },
];

function ExperienceComponent() {
  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Experience
      </h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        {experience.map((experience, index) => {
          return (
            <div
              key={index}
              className="mt-8 flex shadow-2xl rounded-xl p-8 w-100 sm:flex-col dark:shadow-white"
            >
              <div className=" sm:flex-row sm:w-full sm:border-0 sm:mb-4 dark:border-white">
                <div className="flex items-center sm:flex-col sm:justify-center">
                  <img
                    src={experience.logo}
                    alt={experience.companyName}
                    className="w-auto h-16 object-cover shadow-xl ring-1 ring-gray-400/10 sm:flex-1 sm:mb-0 dark:ring-white sm:object-none sm:h-auto"
                    width={100}
                    height={100}
                  />
                  {/* <p className="ml-8 text-2xl font-bold mt-1  sm:text-xl">
                    {experience.title}
                  </p> */}
                  <div className="ml-8 sm:ml-0 sm:mt-4 sm:items-center">
                    <p className="text-lg font-semibold sm:text-m">
                      {experience.companyName} -{" "}
                      <span className="font-medium text-base">
                        {experience.location}
                      </span>
                    </p>
                    <p className="italic sm:text-sm ">{experience.duration}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold mt-1  sm:text-xl">
                    {experience.title}
                  </p>
                  {/* <p className="text-lg font-semibold sm:text-m">
                    {experience.companyName} -{" "}
                    <span className="font-medium text-base">
                      {experience.location}
                    </span>
                  </p>
                  <p className="italic sm:text-sm">{experience.duration}</p> */}
                </div>
                <div className="pt-4">
                  <ul className="list-disc">
                    {experience.description.map((desc, index) => {
                      return (
                        <li key={index} className="sm:text-m">
                          {desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ExperienceComponent;
