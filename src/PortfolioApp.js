import React from "react";
import portrait from "./assets/portrait-santiago.png";
import "./portfolio.css";

const resumeDownloadName = "Santiago Gonzalez CV.pdf";
const resumeFile = `${process.env.PUBLIC_URL}/${encodeURIComponent(resumeDownloadName)}`;

const metrics = [
  { value: "5+ Years", label: "Across backend, cloud integrations and production ownership" },
  { value: "30-60%", label: "Faster SQL retrieval in heavy operational workflows" },
  { value: "15-30%", label: "Less deployment friction and fewer manual ops steps" },
  { value: "20-40%", label: "Lower integration risk and stronger production stability" },
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
    items: [".NET", "C#", "TypeScript", "API design and service integration"],
  },
  {
    title: "Cloud and Platform",
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Architecture",
    items: ["Distributed systems", "Microservices", "BFF patterns", "Resilient and scalable services"],
  },
  {
    title: "AI & Automation",
    items: ["LLM API integration", "OpenAI/Claude APIs", "AI-assisted development", "Prompt engineering", "Agentic workflows"],
  },
  {
    title: "Delivery",
    items: ["GitHub Actions", "Azure Pipelines", "Production support", "Operationally reliable delivery workflows"],
  },
];

const workflowSteps = [
  {
    title: "Design systems for scale, reliability and business fit",
    description:
      "I work from system design through implementation with emphasis on scalability, observability, reliability, performance and stakeholder alignment.",
  },
  {
    title: "Investigate root causes across technical and product boundaries",
    description:
      "My experience covers backend services, integrations, cloud deployment and production support, with a focus on tracing failures to durable fixes instead of surface-level changes.",
  },
  {
    title: "Reduce operational friction with practical automation",
    description:
      "I use CI/CD, observability and AI-assisted engineering practices to improve debugging, documentation, tests and delivery workflows without losing senior engineering judgment.",
  },
];

const experienceHistory = [
  {
    period: "Jan 2023 - Present",
    role: "Senior Software Engineer",
    company: "Softtek",
    context: "Clients: Kaplan and Bisk",
    impact: "~15-30% less deployment friction and manual operational effort",
    highlights: [
      "Owned backend delivery for academic and ecommerce platforms with high-availability enrollment and student workflows.",
      "Investigated production issues end to end across university APIs, CRM, payment and enrollment workflows, identifying root causes and delivering sustainable fixes beyond field-level changes.",
      "Designed and evolved .NET Core, SQL Server and RabbitMQ services in a microservices setup, while supporting integrations with CyberSource, InterPayments, HubSpot and Salesforce.",
      "Strengthened operational delivery through scheduled processing, observability, Docker, Jenkins, Azure Pipelines, Azure Repos and AWS deployments, reducing manual effort and deployment friction.",
    ],
    stack: ["RabbitMQ", "Microservices", "Root Cause Analysis", "Docker", "HubSpot", "Salesforce", "Jenkins", "AWS"],
  },
  {
    period: "Aug 2022 - Jan 2023",
    role: "Senior Software Engineer",
    company: "CI&T",
    context: "Clients: Caret Legal and Coca-Cola",
    impact: "~20-40% less config risk with stronger observability and cloud reliability",
    highlights: [
      "Delivered engineering across legal-practice systems and B2B ecommerce products spanning monolithic and microservice architectures with .NET Core, Node.js, Angular, Azure and Clean or Hexagonal approaches.",
      "Led migration of key modules to Azure using Key Vault, Redis, Blob Storage and Azure Functions, while supporting chatbot and shopping-cart flows tied to backend services and third-party integrations.",
      "Applied AI-assisted workflows with Claude, GPT, Codex and Cursor to accelerate debugging, legacy-code analysis, documentation, test generation and internal automation while keeping production-quality review standards.",
      "Owned frontend and backend delivery, GitHub Actions YAML workflows, GitHub deployment pipelines and release execution across Atlassian tooling, Azure Monitor and Application Insights.",
    ],
    stack: ["Node.js", "Angular", "Azure", "Azure Functions", "AI-Assisted Development", "Chatbot", "B2B Ecommerce", "GitHub Actions", "YAML Workflows"],
  },
  {
    period: "Jan 2022 - Aug 2022",
    role: "Semi Senior Software Engineer",
    company: "Yuxi Global",
    context: "Cloud migration and modernization",
    impact: "~10-25% faster affected flows through caching and cleaner integrations",
    highlights: [
      "Led migration and refactoring work for legacy applications moving into Azure, improving scalability and reducing operational risk.",
      "Introduced Redis caching and Azure Key Vault to reduce repeated database access, centralize secrets and strengthen reliability.",
      "Delivered Angular frontend integrations over REST APIs while improving consistency, rework reduction and maintainability.",
    ],
    stack: ["Azure", "Redis", "Key Vault", "Angular", "REST APIs"],
  },
  {
    period: "May 2021 - Jan 2022",
    role: "Software Developer",
    company: "MVM Ingenieria de Software",
    context: "Backend and data-access delivery",
    impact: "~10-30% better performance across key workflows and data reliability",
    highlights: [
      "Built backend logic and data-access components with ASP.NET, Entity Framework and Oracle SQL for workflow-heavy systems.",
      "Worked in layered MVC architectures with stronger separation of concerns, improving maintainability and data reliability in key flows.",
    ],
    stack: ["ASP.NET MVC", "Entity Framework", "Oracle SQL", "Azure DevOps"],
  },
  {
    period: "Jan 2021 - May 2021",
    role: "Software Developer",
    company: "IDL SAS",
    context: "Automotive operations platform",
    impact: "~30-60% faster inventory retrieval with fewer intermittent failures",
    highlights: [
      "Shipped features for a spare-parts management system supporting automotive operations such as Chevrolet and KIA workflows.",
      "Optimized SQL Server queries, procedures, functions and bulk operations, cutting response times and reducing intermittent failures in inventory retrieval.",
    ],
    stack: ["SQL Server", "ASP.NET Razor", "C#", "jQuery"],
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
              <span>Senior backend, cloud integrations and AI-assisted engineering</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
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
            <p className="eyebrow">Senior backend, cloud integrations and AI-assisted engineering</p>
            <h1>
              I design backend and cloud integration systems with AI-assisted
              engineering practices.
            </h1>
            <p className="lead">
              I bring 5+ years across the full software lifecycle, from architecture
              and backend development to cloud deployment, CI/CD automation,
              production support and stakeholder-facing root-cause analysis. My
              strongest work spans distributed services, messaging, clean
              architecture, cloud migration, observability, payment and CRM
              integrations, with AI-assisted engineering used to improve debugging,
              documentation, tests and internal automation.
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
                <strong>Architecture, integrations, production reliability and delivery ownership</strong>
              </div>
              <div className="signal-card">
                <span>AI-assisted engineering</span>
                <strong>Claude, GPT, Codex and Cursor for debugging, docs, tests and automation</strong>
              </div>
              <div className="signal-card">
                <span>Open to</span>
                <strong>Senior backend, cloud/platform, integrations and AI automation-adjacent roles</strong>
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
                Focused on business-critical backend systems, production
                reliability, integration-heavy workflows and pragmatic automation
                that keeps engineering work aligned with business goals.
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
            <h2>Built on 5+ years across backend systems, cloud integrations and production problem solving.</h2>
          </div>

          <div className="story-grid">
            <article className="story-card reveal">
              <p>
                I build scalable, resilient and high-performing systems across backend,
                cloud and integration-heavy environments. My work is strongest when
                architecture, stakeholder alignment, root-cause investigation,
                performance and delivery quality matter as much as implementation speed.
              </p>
              <p>
                My background includes cloud migrations, reliable backend services,
                distributed systems, CI/CD automation, observability, payment and
                CRM integrations, and AI-assisted engineering practices that reduce
                debugging time, documentation gaps, test friction and operational overhead.
              </p>
            </article>

            <article className="story-card story-card-highlight reveal reveal-delay-1">
              <p className="story-title">What I bring</p>
              <ul className="checklist">
                <li>Senior backend engineering with broader systems and platform ownership.</li>
                <li>Experience with cloud infrastructure, containers, messaging and delivery pipelines.</li>
                <li>Root-cause analysis across APIs, CRM, payment, enrollment and production workflows.</li>
                <li>AI-assisted engineering for legacy analysis, debugging, documentation, tests and automation.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading reveal">
            <p className="eyebrow">Experience</p>
            <h2>Career evidence across backend delivery, cloud modernization, integrations and root-cause ownership.</h2>
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

        <section className="section contact-section" id="contact">
          <div className="contact-banner reveal">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s talk about senior backend, cloud integrations, production reliability or AI-assisted automation.</h2>
              <p>
                If you need someone who can contribute across architecture,
                backend, cloud delivery, integration-heavy systems, root-cause
                analysis and pragmatic AI automation, I am available to continue
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
