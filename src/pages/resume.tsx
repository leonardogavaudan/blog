const Resume = () => {
    // Email parts to prevent easy scraping
    const emailUser = 'leonardogavaudan';
    const emailDomain = 'gmail.com';

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = `mailto:${emailUser}@${emailDomain}`;
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Leonardo Gavaudan</h1>
                <div className="text-gray-300 space-y-1">
                    <p>
                        <a
                            href="#"
                            onClick={handleEmailClick}
                            className="hover:text-blue-300"
                            aria-label="Email address"
                        >
                            {emailUser} [at] {emailDomain}
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://linkedin.com/in/leonardogavaudan"
                            className="text-blue-400 hover:text-blue-300 mr-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/leonardogavaudan
                        </a>
                        <a
                            href="https://github.com/leonardogavaudan"
                            className="text-blue-400 hover:text-blue-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/leonardogavaudan
                        </a>
                    </p>
                </div>
            </header>

            {/* Experience Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                    Experience
                </h2>

                {/* Modjo */}
                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-medium">
                            Software Engineer - Modjo
                        </h3>
                        <span className="text-gray-400">
                            Mar 2022 - Jun 2024
                        </span>
                    </div>
                    <p className="text-gray-400 mb-3">Paris, France</p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-medium text-gray-300 mb-2">
                                System Architecture & Data Modeling
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
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
                            <h4 className="text-lg font-medium text-gray-300 mb-2">
                                Deployment & Release Management
                            </h4>
                            <ul className="list-disc list-inside text-gray-300">
                                <li>
                                    Spearheaded an automated deployment solution
                                    that eliminated release bottlenecks,
                                    allowing teams to independently deploy
                                    services.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-gray-300 mb-2">
                                Monitoring & Logging
                            </h4>
                            <ul className="list-disc list-inside text-gray-300">
                                <li>
                                    Developed a custom AWS Lambda dashboard
                                    tracking critical metrics (requests, message
                                    errors, timeouts) to diagnose rate-limit and
                                    concurrency issues in distributed systems.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-gray-300 mb-2">
                                Database Optimization & Race Condition
                                Management
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
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
                            <h4 className="text-lg font-medium text-gray-300 mb-2">
                                Type System
                            </h4>
                            <ul className="list-disc list-inside text-gray-300">
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

                {/* NukkAI */}
                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-medium">
                            Software Engineer - NukkAI
                        </h3>
                        <span className="text-gray-400">
                            Jan 2021 - Dec 2021
                        </span>
                    </div>
                    <p className="text-gray-400 mb-3">Paris, France</p>
                    <div className="text-gray-300">
                        <p className="mb-2">
                            Worked on a cybersecurity and AI project, building a
                            system that automated:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
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
                                className="text-blue-400 hover:text-blue-300"
                            >
                                a white paper on cyber range automation
                            </a>
                            , presented at the 2021 C&ESAR cybersecurity
                            conference, a key event of the European Cyber Week.
                        </p>
                    </div>
                </div>

                {/* Blackstone */}
                <div className="mb-8">
                    <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-medium">
                            Data Scientist - The Blackstone Group
                        </h3>
                        <span className="text-gray-400">
                            Jun 2019 - Jul 2019
                        </span>
                    </div>
                    <p className="text-gray-400 mb-3">New York, USA</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
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

            {/* Education Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                    Education
                </h2>

                <div className="mb-6">
                    <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-medium">
                            Columbia University
                        </h3>
                        <span className="text-gray-400">May 2020</span>
                    </div>
                    <p className="text-gray-300">
                        The Fu Foundation School of Engineering & Applied
                        Science
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        <li>Majored in Computer Science</li>
                        <li>AI / Intelligent Systems track</li>
                        <li>Member of Columbia Taekwondo team</li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-medium">
                            Lycée Français Charles de Gaulle
                        </h3>
                        <span className="text-gray-400">Jun 2016</span>
                    </div>
                    <p className="text-gray-300">London, UK</p>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        <li>Math, Physics and Science Major</li>
                        <li>High Honors</li>
                        <li>Class representative (2013-2014) & (2014-2015)</li>
                    </ul>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                    Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-medium mb-2 text-gray-300">
                            Languages:
                        </h3>
                        <p className="text-gray-400">
                            Javascript, Typescript, Python, SQL
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2 text-gray-300">
                            Frontend:
                        </h3>
                        <p className="text-gray-400">
                            HTML, CSS, Tailwind, React
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2 text-gray-300">
                            Backend:
                        </h3>
                        <p className="text-gray-400">Node.js, PostgreSQL</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2 text-gray-300">
                            Other:
                        </h3>
                        <p className="text-gray-400">
                            Terraform, Ansible, AWS, Docker, Elasticsearch,
                            Kibana, Logstash, Git
                        </p>
                    </div>
                </div>
            </section>

            {/* Publications Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Publications</h2>
                <ul className="space-y-4">
                    <li>
                        <a
                            href="https://ceur-ws.org/Vol-3056/paper-10.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            &ldquo;Cyber range automation, a bedrock for AI
                            applications&rdquo;
                        </a>
                        <p className="text-gray-400">
                            Computer & Electronics Security Applications
                            Rendez-vous (C&ESAR), 2021
                        </p>
                    </li>
                </ul>
            </section>

            {/* Languages, Sports and Interests Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                    Languages, Sports and Interests
                </h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium mb-2 text-gray-300">
                            Languages:
                        </h3>
                        <p className="text-gray-400">
                            French: native speaker, Italian: mother tongue
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2 text-gray-300">
                            Taekwondo:
                        </h3>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>Black belt</li>
                            <li>
                                Two times British National Champion (2014 &
                                2015): Gold medal in the under 68 kg cadet
                                category
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2 text-gray-300">
                            Interests:
                        </h3>
                        <p className="text-gray-400">
                            Chess, Running, Computer architecture, Computer
                            history
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;
