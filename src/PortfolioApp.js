import React from "react";
import portrait from "./assets/portrait-santiago.png";
import "./portfolio.css";

const resumeDownloadName = "Santiago Gonzalez CV.pdf";
const resumeFile = `${process.env.PUBLIC_URL}/${encodeURIComponent(resumeDownloadName)}`;

const metrics = [
  { value: "5+ Years", label: "Designing, modernizing and supporting business-critical backend systems" },
  { value: "~25%", label: "Fewer recurring integration incidents across CRM, payment and university APIs" },
  { value: "4 Clients", label: "Kaplan, Bisk, Coca-Cola and Caret Legal, delivered through Softtek and CI&T" },
  { value: "AI", label: "In production: a .NET enrollment chatbot on the Claude API and agentic workflows with Claude Code" },
];

const projects = [
  {
    title: "GloboTicket-BrokersQueMessageCommunication",
    description:
      "Multi-service ecosystem with web and mobile BFF layers, message-based communication, payment integration, RabbitMQ and Azure Service Bus support. This is the strongest public example of large-scope distributed architecture in my GitHub profile.",
    stack: ["Microservices", "RabbitMQ", "Azure Service Bus", "BFF", "Polly", ".NET"],
    url: "https://github.com/sgonnzalezv3/GloboTicket-BrokersQueMessageCommunication",
  },
  {
    title: "CleanArchitectureProject",
    description:
      "Layered solution built around API, Application, Domain, Data, Identity and Unit Tests, using MediatR, FluentValidation, AutoMapper, JWT and SendGrid. It reflects a more mature approach to separation of concerns and maintainability.",
    stack: ["Clean Architecture", "MediatR", "FluentValidation", "JWT", "SendGrid", "Tests"],
    url: "https://github.com/sgonnzalezv3/CleanArchitectureProject",
  },
  {
    title: "MicroservicesRabbitMQ",
    description:
      "Event-driven microservices example with separate banking and transfer domains, an event bus abstraction, RabbitMQ messaging, MediatR and persistence layers. Compact in size, but strong in architectural intent.",
    stack: ["Event Bus", "RabbitMQ", "MediatR", "EF Core", "Microservices"],
    url: "https://github.com/sgonnzalezv3/MicroservicesRabbitMQ",
  },
  {
    title: "ApiPeliculas",
    description:
      "API-oriented project that combines JWT authentication, layered repository structure, SQL Server persistence and Azure Blob Storage integration. Good example of backend delivery with real external-service integration.",
    stack: ["API Design", "Azure Blob Storage", "JWT", "SQL Server", ".NET"],
    url: "https://github.com/sgonnzalezv3/ApiPeliculas",
  },
];

const stackGroups = [
  {
    title: "Backend",
    items: [".NET Core", "C#", "Node.js", "TypeScript", "SQL Server", "REST APIs"],
  },
  {
    title: "Architecture",
    items: ["Clean Architecture", "Microservices", "Distributed systems", "SOLID"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Azure Pipelines", "Jenkins"],
  },
  {
    title: "Integrations",
    items: ["RabbitMQ", "Salesforce", "HubSpot", "WhatsApp API", "CyberSource", "Redis"],
  },
  {
    title: "AI & Automation",
    items: ["LLM API integration", "OpenAI/Claude APIs", "AI-assisted development", "Prompt engineering", "Agentic workflows"],
  },
  {
    title: "Testing",
    items: ["Unit tests", "Integration tests", "E2E tests", "CI/CD"],
  },
  {
    title: "Frontend exposure",
    items: ["Angular", "Vue.js", "JavaScript"],
  },
];

const workflowSteps = [
  {
    title: "Connect technical execution with business impact",
    description:
      "I partner with business, QA, DevOps and product stakeholders so architecture, integrations and delivery decisions stay aligned with what the business needs.",
  },
  {
    title: "Investigate root causes end to end",
    description:
      "I trace production issues across university APIs, CRM, payment and enrollment workflows to identify root causes and deliver sustainable fixes beyond field-level changes.",
  },
  {
    title: "Reduce operational friction with applied AI and automation",
    description:
      "I use LLM APIs, agentic workflows with Claude and Claude Code, CI/CD and structured logging to make critical workflows more scalable and maintainable, with strict grounding, explicit fallbacks and production-quality review.",
  },
];

const experienceHistory = [
  {
    period: "Jan 2023 - Present",
    role: "Senior Software Engineer",
    company: "Softtek",
    context: "Clients: Kaplan and Bisk | Remote, Colombia",
    impact: "~25% fewer recurring integration incidents",
    highlights: [
      "Led integrations across university APIs, Salesforce CRM, HubSpot, CyberSource, and InterPayments, reducing recurring integration incidents by ~25%.",
      "Built an in-app AI chatbot in .NET with Anthropic's Claude API that guides students through enrollment, grounding each response in live data retrieved from the application database and CRM.",
      "Partnered with business, QA, DevOps, and product stakeholders to trace production issues end-to-end, identify root causes, and deliver sustainable fixes beyond field-level changes.",
      "Built agentic AI workflows with Claude and Claude Code (skills, subagents, CLAUDE.md), applying role-based system prompts, strict grounding to prevent hallucinations, explicit fallbacks, and temperature tuning.",
      "Improved release operations with scheduled jobs, retry processing, structured logging, Docker, Jenkins, Azure Pipelines, Azure Repos, and AWS deployments.",
      "Supported Azure migration and cloud modernization using Azure Blob Storage, Redis, Key Vault, cloud resources, and secure configuration patterns.",
    ],
    stack: ["Claude API", "Agentic AI", ".NET", "Salesforce", "HubSpot", "CyberSource", "Docker", "Jenkins", "Azure", "AWS"],
  },
  {
    period: "Aug 2022 - Jan 2023",
    role: "Senior Software Engineer",
    company: "CI&T",
    context: "Clients: Coca-Cola and Caret Legal | Remote, Colombia",
    impact: "Azure modernization and WhatsApp commerce integrations in production",
    highlights: [
      "Owned backend and full-stack delivery across legal-tech and B2B ecommerce platforms using .NET Core, Node.js, TypeScript, SQL Server, Azure, Angular, Vue.js, and Clean/Hexagonal Architecture.",
      "Led Azure modernization with Azure Functions, Key Vault, Redis Cache, Blob Storage, Azure Monitor, Application Insights, and automated tests.",
      "Designed WhatsApp commerce integrations connecting Infobip, chatbot workflows, shopping-cart experiences, and external bottler providers.",
      "Managed production releases and containerized workflows with GitHub Actions, Bitbucket Pipelines, Docker, Kubernetes, YAML, Azure Boards, and unit/integration/E2E tests.",
    ],
    stack: ["Node.js", "TypeScript", "Angular", "Vue.js", "Azure Functions", "WhatsApp API", "Infobip", "GitHub Actions", "Kubernetes"],
  },
  {
    period: "Jan 2022 - Aug 2022",
    role: "Semi Senior Software Engineer",
    company: "Yuxi Global",
    context: "Azure modernization | Remote, Colombia",
    impact: "Legacy apps modernized for Azure with stronger reliability",
    highlights: [
      "Supported Azure modernization and refactoring of legacy applications, improving scalability, cloud readiness, and operational risk posture.",
      "Improved backend reliability by implementing Redis caching and centralizing secrets/configuration with Azure Key Vault.",
      "Delivered REST API integrations and supported Azure DevOps automation under Scrum, improving maintainability and reducing manual delivery effort.",
    ],
    stack: ["Azure", "Redis", "Key Vault", "REST APIs", "Azure DevOps", "Scrum"],
  },
  {
    period: "May 2021 - Jan 2022",
    role: "Software Developer",
    company: "MVM Ingenieria de Software",
    context: "Backend and data-access delivery | Remote, Colombia",
    impact: "Better performance and data reliability in key workflows",
    highlights: [
      "Developed backend and data-access components with ASP.NET, Entity Framework, and Oracle SQL, improving performance and data reliability in key workflows.",
      "Applied layered MVC architecture and design patterns to improve maintainability and reduce rework.",
    ],
    stack: ["ASP.NET", "Entity Framework", "Oracle SQL", "MVC", "Design patterns"],
  },
  {
    period: "Jan 2021 - May 2021",
    role: "Software Developer",
    company: "Ingenieria de desarrollo IDL SAS",
    context: "Automotive spare-parts platform | Bogota",
    impact: "Faster inventory retrieval with fewer intermittent failures",
    highlights: [
      "Built and shipped features for a spare-parts management system supporting automotive operations for brands such as Chevrolet and KIA.",
      "Optimized SQL Server queries, stored procedures, functions, bulk operations, and linked-server inventory retrieval, improving response times and reducing intermittent failures.",
    ],
    stack: ["SQL Server", "C#", "Stored procedures", "Bulk operations", "Linked servers"],
  },
];

const education = [
  {
    title: "Education and courses",
    items: [
      "Systems Engineer, Universidad Central, Bogota. Expected graduation: 2027.",
      "AWS Academy Cloud Foundations, Amazon Web Services (AWS). Oct 2024.",
      "AWS Academy Introduction to Cloud, Amazon Web Services (AWS). Oct 2024.",
      "Scrum Project Management Fundamentals, CertiProf. Mar 2021 - Apr 2021.",
    ],
  },
  {
    title: "Languages and soft skills",
    items: [
      "Spanish: native.",
      "English: B2, professional working proficiency.",
      "Communication, ownership and problem solving.",
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "sgonzalezv3@ucentral.edu.co",
    href: "mailto:sgonzalezv3@ucentral.edu.co",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sgonzalezv3",
    href: "https://www.linkedin.com/in/sgonzalezv3",
  },
  {
    label: "GitHub",
    value: "github.com/sgonnzalezv3",
    href: "https://github.com/sgonnzalezv3",
  },
];

export const PortfolioApp = () => {
  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <nav className="site-nav">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              <img src={`${process.env.PUBLIC_URL}/favicon.ico.png`} alt="" />
            </span>
            <span className="brand-copy">
              <strong>Santiago Gonzalez</strong>
              <span>Backend, cloud, integrations and AI automation</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-cta" href={resumeFile} download={resumeDownloadName}>
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="section hero" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow">Backend, cloud, integrations and AI automation</p>
            <h1>
              I design, modernize and support business-critical backend systems
              with applied AI automation.
            </h1>
            <p className="lead">
              Senior Software Engineer with 5+ years of experience designing,
              modernizing and supporting business-critical backend systems across
              B2B ecommerce, academic platforms, payment workflows, CRM
              integrations and cloud environments. I focus on backend
              architecture, enterprise integrations, production reliability,
              cloud modernization and applied AI automation through LLM APIs,
              agentic workflows and AI-assisted engineering practices.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work
              </a>
              <a
                className="button button-secondary"
                href={resumeFile}
                download={resumeDownloadName}
              >
                Download CV
              </a>
            </div>

            <div className="hero-signal-grid">
              <div className="signal-card">
                <span>Backend and cloud systems</span>
                <strong>Backend architecture, enterprise integrations, production reliability and cloud modernization</strong>
              </div>
              <div className="signal-card">
                <span>Applied AI automation</span>
                <strong>LLM APIs, an enrollment chatbot on the Claude API and agentic workflows with Claude Code</strong>
              </div>
              <div className="signal-card">
                <span>Open to</span>
                <strong>Senior backend, cloud, integrations and AI automation roles</strong>
              </div>
            </div>
          </div>

          <aside className="hero-panel reveal reveal-delay-1">
            <div className="portrait-shell">
              <div className="portrait-ring" aria-hidden="true" />
              <img src={portrait} alt="Portrait of Santiago Gonzalez" />
            </div>

            <div className="hero-panel-copy">
              <p className="panel-kicker">Professional profile</p>
              <h2>Senior Software Engineer | Backend, Cloud, Integrations & AI Automation</h2>
              <p>
                Known for connecting technical execution with business impact:
                partnering with stakeholders, investigating root causes, reducing
                operational friction and making critical workflows more scalable
                and maintainable.
              </p>
            </div>

            <div className="contact-stack">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  className="contact-chip"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </aside>
        </section>

        <section className="section section-tight">
          <div className="metrics-grid">
            {metrics.map((item, index) => (
              <article
                key={item.label}
                className={`metric-card reveal reveal-delay-${(index % 3) + 1}`}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <h2>Built on 5+ years designing, modernizing and supporting business-critical backend systems.</h2>
          </div>

          <div className="story-grid">
            <article className="story-card reveal">
              <p>
                I design, modernize and support business-critical backend systems
                across B2B ecommerce, academic platforms, payment workflows, CRM
                integrations and cloud environments, with a focus on backend
                architecture, enterprise integrations, production reliability and
                cloud modernization.
              </p>
              <p>
                I connect technical execution with business impact by partnering
                with stakeholders, investigating root causes and reducing
                operational friction, and I apply AI automation through LLM APIs,
                agentic workflows and AI-assisted engineering practices to make
                critical workflows more scalable and maintainable.
              </p>
            </article>

            <article className="story-card story-card-highlight reveal reveal-delay-1">
              <p className="story-title">What I bring</p>
              <ul className="checklist">
                <li>Senior backend engineering with .NET Core, C#, Node.js, TypeScript and SQL Server, built on Clean Architecture, microservices and distributed systems.</li>
                <li>Cloud modernization and delivery on Azure and AWS with Docker, Kubernetes, GitHub Actions, Azure Pipelines and Jenkins.</li>
                <li>Enterprise integrations across Salesforce, HubSpot, CyberSource, RabbitMQ and WhatsApp API, backed by end-to-end root-cause analysis.</li>
                <li>Applied AI automation: LLM APIs, a production enrollment chatbot on the Claude API and agentic workflows with Claude and Claude Code.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading reveal">
            <p className="eyebrow">Experience</p>
            <h2>Career evidence across backend delivery, cloud modernization, enterprise integrations and applied AI automation.</h2>
          </div>

          <div className="experience-list">
            {experienceHistory.map((item, index) => (
              <article
                key={`${item.company}-${item.period}`}
                className={`experience-card reveal reveal-delay-${(index % 3) + 1}`}
              >
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <p>{item.context}</p>
                </div>

                <div className="experience-copy">
                  <div className="experience-header">
                    <div>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                    </div>
                    <div className="experience-impact">
                      <span>Impact</span>
                      <strong>{item.impact}</strong>
                    </div>
                  </div>

                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="tag-row">
                    {item.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected work</p>
            <h2>Public repos that best reinforce the architecture and delivery work above.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
              >
                <div className="project-topline">
                  <p>GitHub project</p>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Open repository
                  </a>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dual" id="stack">
          <div>
            <div className="section-heading reveal">
              <p className="eyebrow">Stack and practice</p>
              <h2>The areas where I create the most leverage.</h2>
            </div>

            <div className="stack-grid">
              {stackGroups.map((group, index) => (
                <article
                  key={group.title}
                  className={`stack-card reveal reveal-delay-${(index % 3) + 1}`}
                >
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="process-panel reveal reveal-delay-1">
            <p className="eyebrow">Approach</p>
            <h2>How I operate in complex engineering environments.</h2>

            <div className="process-list">
              {workflowSteps.map((item, index) => (
                <article key={item.title} className="process-card">
                  <span>{`0${index + 1}`}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading reveal">
            <p className="eyebrow">Education</p>
            <h2>Formal training, cloud coursework and languages behind the work.</h2>
          </div>

          <div className="stack-grid">
            {education.map((group, index) => (
              <article
                key={group.title}
                className={`stack-card reveal reveal-delay-${(index % 3) + 1}`}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-banner reveal">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s talk about senior backend, cloud modernization, enterprise integrations, production reliability or applied AI automation.</h2>
              <p>
                If you need someone who can contribute across architecture,
                backend, cloud delivery, integration-heavy systems, root-cause
                analysis and applied AI automation, I am available to continue
                the conversation.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href="mailto:sgonzalezv3@ucentral.edu.co">
                Email me
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/sgonzalezv3"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
