import React from "react";
import portrait from "./assets/portrait-santiago.png";
import "./portfolio.css";

const resumeFile = `${process.env.PUBLIC_URL}/SantiagoGonzalezVergara.pdf`;

const metrics = [
  { value: "5+ Years", label: "Across backend, cloud and full lifecycle delivery" },
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
    title: "Delivery",
    items: ["GitHub Actions", "Azure Pipelines", "Production support", "Operationally reliable delivery workflows"],
  },
];

const workflowSteps = [
  {
    title: "Design systems for scale and resilience",
    description:
      "I work from system design through implementation with emphasis on scalability, observability, reliability, performance and long-term maintainability.",
  },
  {
    title: "Own delivery across architecture, platform and product boundaries",
    description:
      "My experience covers backend services, frontend integration, cloud deployment, CI/CD automation, infrastructure concerns and production support across the full software lifecycle.",
  },
  {
    title: "Raise engineering quality through decisions and execution",
    description:
      "I enjoy contributing to technical direction, strengthening engineering standards and improving systems, processes and team outcomes over time.",
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
      "Designed and evolved .NET Core, SQL Server and RabbitMQ services in a microservices setup, while supporting integrations with university APIs, CyberSource, InterPayments, HubSpot and Salesforce.",
      "Strengthened operational delivery through scheduled processing, observability, Dockerized services, Docker Compose workflows and CI/CD pipelines with Azure Pipelines, Azure Repos and Jenkins into AWS.",
    ],
    stack: ["RabbitMQ", "Microservices", "Docker", "Docker Compose", "HubSpot", "Salesforce", "Jenkins", "AWS"],
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
      "Owned frontend and backend delivery, GitHub Actions YAML workflows, GitHub deployment pipelines and release execution, while working across Atlassian tooling, Azure Monitor and Application Insights.",
    ],
    stack: ["Node.js", "Angular", "Azure", "Azure Functions", "Chatbot", "B2B Ecommerce", "Atlassian", "GitHub Actions", "YAML Workflows", "GitHub Deployments"],
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
            <span className="brand-mark">SG</span>
            <span className="brand-copy">
              <strong>Santiago Gonzalez</strong>
              <span>Senior-level cloud, distributed systems and web engineering</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-cta" href={resumeFile} download="SantiagoGonzalezVergara.pdf">
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="section hero" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow">Senior engineering across architecture, cloud delivery and modern platforms</p>
            <h1>
              I design and deliver scalable, resilient and high-performing systems
              with a senior focus on architecture, cloud and distributed software.
            </h1>
            <p className="lead">
              I bring 5+ years across the full software lifecycle, from architecture
              and backend development to frontend integration, cloud deployment,
              CI/CD automation and production support. My strongest work spans
              distributed services, messaging, clean architecture, cloud migration,
              observability, payment and third-party integrations, and platform-oriented
              delivery using .NET, TypeScript, AWS, Azure, Docker, Kubernetes and SQL.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work
              </a>
              <a
                className="button button-secondary"
                href={resumeFile}
                download="SantiagoGonzalezVergara.pdf"
              >
                Download CV
              </a>
            </div>

            <div className="hero-signal-grid">
              <div className="signal-card">
                <span>Career scope</span>
                <strong>5+ years across consulting, product delivery and cloud modernization</strong>
              </div>
              <div className="signal-card">
                <span>Engineering lens</span>
                <strong>Distributed systems, clean architecture, observability and long-term maintainability</strong>
              </div>
              <div className="signal-card">
                <span>Open to</span>
                <strong>Senior backend, platform, systems and full-stack opportunities</strong>
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
              <h2>Senior Software Engineer | Cloud and Distributed Systems</h2>
              <p>
                Focused on building technically strong systems that stay
                maintainable, efficient and aligned with business goals as they scale.
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
            <h2>Built on 5+ years across backend systems, cloud delivery and complex integrations.</h2>
          </div>

          <div className="story-grid">
            <article className="story-card reveal">
              <p>
                I build scalable, resilient and high-performing systems across
                backend, cloud and modern web applications. My work is strongest
                in environments where architecture, integration complexity,
                performance and delivery quality matter as much as implementation speed.
              </p>
              <p>
                My background includes cloud migrations, reliable backend services,
                distributed systems, CI/CD automation, observability, payment and
                partner integrations, and frontend delivery with Angular and Vue
                when products require end-to-end ownership.
              </p>
            </article>

            <article className="story-card story-card-highlight reveal reveal-delay-1">
              <p className="story-title">What I bring</p>
              <ul className="checklist">
                <li>Senior backend engineering with broader systems and platform ownership.</li>
                <li>Experience with cloud infrastructure, containers, messaging and delivery pipelines.</li>
                <li>Practical knowledge of distributed systems, resilience, caching and performance.</li>
                <li>Focus on clean design, architecture decisions and long-term maintainability.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading reveal">
            <p className="eyebrow">Experience</p>
            <h2>Career evidence across consulting, cloud migration and distributed backend delivery.</h2>
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
              <h2>Let&apos;s talk about senior engineering, platform delivery or distributed systems.</h2>
              <p>
                If you need someone who can contribute across architecture,
                backend, cloud delivery, integration-heavy systems and modern web
                platforms, I am available to continue the conversation.
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
