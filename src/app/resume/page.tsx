'use client';

export default function Resume() {
    const emailUser = 'leonardogavaudan';
    const emailDomain = 'gmail.com';

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = `mailto:${emailUser}@${emailDomain}`;
    };

    return (
        <div className="animate-fade-in-up">
            <header className="mb-12 text-center">
                <h1
                    className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Leonardo Gavaudan
                </h1>
                <div className="space-y-1">
                    <p>
                        <a
                            href="#"
                            onClick={handleEmailClick}
                            className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                            style={{ color: 'var(--text-secondary)' }}
                            aria-label="Email address"
                        >
                            {emailUser} [at] {emailDomain}
                        </a>
                    </p>
                    <p className="flex items-center justify-center gap-4 text-sm">
                        <a
                            href="https://linkedin.com/in/leonardogavaudan"
                            className="transition-colors duration-200 hover:text-[var(--accent)]"
                            style={{ color: 'var(--accent)' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/leonardogavaudan"
                            className="transition-colors duration-200 hover:text-[var(--accent)]"
                            style={{ color: 'var(--accent)' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </header>

            <section className="mb-12">
                <h2
                    className="font-serif text-xl font-medium mb-6 pb-2 border-b"
                    style={{
                        color: 'var(--text-primary)',
                        borderColor: 'var(--accent)',
                        borderBottomWidth: '2px',
                    }}
                >
                    Experience
                </h2>

                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                        <h3
                            className="text-lg font-medium"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Software Engineer - Algolia
                        </h3>
                        <span
                            className="text-sm"
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            May 2025 - Present
                        </span>
                    </div>
                    <p
                        className="text-sm mb-3"
                        style={{ color: 'var(--text-tertiary)' }}
                    >
                        Paris, France
                    </p>
                </div>

                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                        <h3
                            className="text-lg font-medium"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Software Engineer - Modjo
                        </h3>
                        <span
                            className="text-sm"
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            Mar 2022 - Jun 2024
                        </span>
                    </div>
                    <p
                        className="text-sm mb-3"
                        style={{ color: 'var(--text-tertiary)' }}
                    >
                        Paris, France
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h4
                                className="text-sm font-semibold uppercase tracking-wide mb-2"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                System Architecture &amp; Data Modeling
                            </h4>
                            <ul
                                className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                <li>
                                    Contributed to the re-architecture of core
                                    services, introducing message batching and
                                    dataloading, which became the company
                                    standard, enhancing system reliability and
                                    scalability.
                                </li>
                                <li>
                                    Contributed to the redesign of the data
                                    model, introducing a central table that
                                    unlocked key business features and scaled
                                    with increased system load.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4
                                className="text-sm font-semibold uppercase tracking-wide mb-2"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Deployment &amp; Release Management
                            </h4>
                            <ul
                                className="list-disc list-outside ml-5 text-sm leading-relaxed"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                <li>
                                    Spearheaded an automated deployment solution
                                    that eliminated release bottlenecks,
                                    allowing teams to independently deploy
                                    services.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4
                                className="text-sm font-semibold uppercase tracking-wide mb-2"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Monitoring &amp; Logging
                            </h4>
                            <ul
                                className="list-disc list-outside ml-5 text-sm leading-relaxed"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                <li>
                                    Developed a custom AWS Lambda dashboard
                                    tracking critical metrics (requests, message
                                    errors, timeouts) to diagnose rate-limit and
                                    concurrency issues in distributed systems.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4
                                className="text-sm font-semibold uppercase tracking-wide mb-2"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Database Optimization &amp; Race Condition
                                Management
                            </h4>
                            <ul
                                className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                <li>
                                    Resolved database locking issues by
                                    implementing optimistic locking with row
                                    versioning.
                                </li>
                                <li>
                                    Resolved resource duplication caused by data
                                    races using compensating transaction
                                    patterns.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4
                                className="text-sm font-semibold uppercase tracking-wide mb-2"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Type System
                            </h4>
                            <ul
                                className="list-disc list-outside ml-5 text-sm leading-relaxed"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                <li>
                                    Led the migration to a stricter and richer
                                    type system, creating utility types that
                                    enhanced correctness, debugging, and
                                    developer productivity across teams.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                        <h3
                            className="text-lg font-medium"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Software Engineer - NukkAI
                        </h3>
                        <span
                            className="text-sm"
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            Jan 2021 - Dec 2021
                        </span>
                    </div>
                    <p
                        className="text-sm mb-3"
                        style={{ color: 'var(--text-tertiary)' }}
                    >
                        Paris, France
                    </p>
                    <div
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <p className="mb-2">
                            Worked on a cybersecurity and AI project, building a
                            system that automated:
                        </p>
                        <ul className="list-disc list-outside ml-5 space-y-2">
                            <li>
                                Deployment and configuration of a cyber range
                                infrastructure to the cloud with Terraform and
                                Ansible.
                            </li>
                            <li>
                                Setup of CALDERA, a cybersecurity framework for
                                autonomous adversarial attack simulations.
                            </li>
                            <li>
                                Construction of a data pipeline with Apache
                                Spark and Logstash to process and store data
                                from attack simulations.
                            </li>
                            <li>
                                Setup of a querying and visualisation platform
                                with Elasticsearch and Kibana.
                            </li>
                        </ul>
                        <p className="mt-4">
                            Co-authored{' '}
                            <a
                                href="https://ceur-ws.org/Vol-3056/paper-10.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-[var(--accent-hover)] underline underline-offset-3"
                                style={{ color: 'var(--accent)' }}
                            >
                                a white paper on cyber range automation
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                            </a>
                            , presented at the 2021 C&amp;ESAR cybersecurity
                            conference, a key event of the European Cyber Week.
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                        <h3
                            className="text-lg font-medium"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Data Scientist - The Blackstone Group
                        </h3>
                        <span
                            className="text-sm"
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            Jun 2019 - Jul 2019
                        </span>
                    </div>
                    <p
                        className="text-sm mb-3"
                        style={{ color: 'var(--text-tertiary)' }}
                    >
                        New York, USA
                    </p>
                    <ul
                        className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <li>
                            Interned at the technology team of the Blackstone
                            Alternative Asset Management division, programming
                            in Python.
                        </li>
                        <li>
                            Developed data pipelines to clean, preprocess, and
                            transform financial datasets for analysis.
                        </li>
                        <li>
                            Improved linear regression models to enhance the
                            assessment of equity capital market deals.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mb-12">
                <h2
                    className="font-serif text-xl font-medium mb-6 pb-2 border-b"
                    style={{
                        color: 'var(--text-primary)',
                        borderColor: 'var(--accent)',
                        borderBottomWidth: '2px',
                    }}
                >
                    Education
                </h2>
                <div className="mb-6">
                    <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                        <h3
                            className="text-lg font-medium"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Columbia University
                        </h3>
                        <span
                            className="text-sm"
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            May 2020
                        </span>
                    </div>
                    <p
                        className="text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        The Fu Foundation School of Engineering &amp; Applied
                        Science
                    </p>
                    <ul
                        className="list-disc list-outside ml-5 mt-2 text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <li>Majored in Computer Science</li>
                        <li>AI / Intelligent Systems track</li>
                        <li>Member of Columbia Taekwondo team</li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                        <h3
                            className="text-lg font-medium"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Lyc&eacute;e Fran&ccedil;ais Charles de Gaulle
                        </h3>
                        <span
                            className="text-sm"
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            Jun 2016
                        </span>
                    </div>
                    <p
                        className="text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        London, UK
                    </p>
                    <ul
                        className="list-disc list-outside ml-5 mt-2 text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <li>Math, Physics and Science Major</li>
                        <li>High Honors</li>
                        <li>
                            Class representative (2013-2014) &amp; (2014-2015)
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mb-12">
                <h2
                    className="font-serif text-xl font-medium mb-6 pb-2 border-b"
                    style={{
                        color: 'var(--text-primary)',
                        borderColor: 'var(--accent)',
                        borderBottomWidth: '2px',
                    }}
                >
                    Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3
                            className="text-sm font-semibold uppercase tracking-wide mb-1"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Languages
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Javascript, Typescript, Python, SQL
                        </p>
                    </div>
                    <div>
                        <h3
                            className="text-sm font-semibold uppercase tracking-wide mb-1"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Frontend
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            HTML, CSS, Tailwind, React
                        </p>
                    </div>
                    <div>
                        <h3
                            className="text-sm font-semibold uppercase tracking-wide mb-1"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Backend
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Node.js, PostgreSQL
                        </p>
                    </div>
                    <div>
                        <h3
                            className="text-sm font-semibold uppercase tracking-wide mb-1"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Other
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Terraform, Ansible, AWS, Docker, Elasticsearch,
                            Kibana, Logstash, Git
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2
                    className="font-serif text-xl font-medium mb-6 pb-2 border-b"
                    style={{
                        color: 'var(--text-primary)',
                        borderColor: 'var(--accent)',
                        borderBottomWidth: '2px',
                    }}
                >
                    Publications
                </h2>
                <ul className="space-y-4">
                    <li>
                        <a
                            href="https://ceur-ws.org/Vol-3056/paper-10.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200 hover:text-[var(--accent-hover)]"
                            style={{ color: 'var(--accent)' }}
                        >
                            Cyber range automation, a bedrock for AI
                            applications
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                        </a>
                        <p
                            className="text-sm mt-1"
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            Computer &amp; Electronics Security Applications
                            Rendez-vous (C&amp;ESAR), 2021
                        </p>
                    </li>
                </ul>
            </section>

            <section>
                <h2
                    className="font-serif text-xl font-medium mb-6 pb-2 border-b"
                    style={{
                        color: 'var(--text-primary)',
                        borderColor: 'var(--accent)',
                        borderBottomWidth: '2px',
                    }}
                >
                    Languages, Sports &amp; Interests
                </h2>
                <div className="space-y-4">
                    <div>
                        <h3
                            className="text-sm font-semibold uppercase tracking-wide mb-1"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Languages
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            French: native speaker, Italian: mother tongue
                        </p>
                    </div>
                    <div>
                        <h3
                            className="text-sm font-semibold uppercase tracking-wide mb-1"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Taekwondo
                        </h3>
                        <ul
                            className="list-disc list-outside ml-5 text-sm leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            <li>Black belt</li>
                            <li>
                                Two times British National Champion (2014 &amp;
                                2015): Gold medal in the under 68 kg cadet
                                category
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3
                            className="text-sm font-semibold uppercase tracking-wide mb-1"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Interests
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Chess, Running, Computer architecture, Computer
                            history
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
