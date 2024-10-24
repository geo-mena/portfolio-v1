'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const jobPositions = [
    {
        timeline: 'JUN 2023 — PRESENT',
        currentPosition: 'Software Engineer',
        place: 'Seneca Corporation',
        previousPositions: [''],
        description:
            'Developed full-stack functionalities using PHP, Laravel, JavaScript, and Vue.js 3, implementing MVC architecture and creating dynamic interfaces, improving project efficiency by 30%. I optimized complex database queries, designing efficient indexes and using caching techniques, reducing response time by 40%. I configured and maintained a CI/CD workflow, automating tests and establishing continuous deployments to minimize errors. I designed and managed database migrations using Laravel Eloquent ORM, creating scalable models and complex relationships, enhancing data integrity and facilitating future schema updates.',
        skills: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
    },
    {
        timeline: 'DEC 2023 — PRESENT',
        currentPosition: 'IT Support Specialist',
        place: 'Redeban',
        previousPositions: [''],
        description:
            'As a Technical Support Specialist at Redeban, I efficiently diagnose and resolve software, network, and OS issues while managing and monitoring technological infrastructure performance. I implement computer security measures to protect systems and data, and collaborate with other technical teams to resolve incidents and enhance processes. I stay updated with the latest IT trends and technologies to offer innovative solutions, providing high-quality assistance to internal users and contributing to the optimization of our technological operations.',
        skills: ['Base 24', 'SQL', 'Linux', 'Windows', 'Networking'],
    },
    {
        timeline: 'DEC 2022 — DEC 2023',
        currentPosition: 'Front End Engineer',
        place: 'Acatha',
        previousPositions: ['Designer and Front-end Developer'],
        description:
            'Optimized client accounting and tax management by developing an intuitive dashboard with ReactJS and TypeScript, centralizing key information and increasing efficiency by 45%. I automated accounting processes using custom JavaScript algorithms, enabling automatic journal entries and reducing processing time by 60%. I migrated components to the latest Core UI Pro version, refactoring code and applying modern design patterns to improve maintainability and performance. I developed custom services using React hooks and Context API for business logic and backend interactions, creating a more modular architecture.',
        skills: [
            'ReactJS',
            'TypeScript',
            'PostgreSQL',
            'Core UI Pro',
            'Design Patterns',
        ],
    },
    {
        timeline: 'MAY 2022 — JAN 2023',
        currentPosition: 'Front End Developer',
        place: 'FractalSoft',
        previousPositions: [''],
        description:
            'Implemented a responsive design using Bootstrap and Sass, increasing mobile accessibility by 70%. I automated a data pipeline on AWS EC2 with Flask and Python, reducing data processing time by 65%. I developed real-time visualizations with Plotly for energy and oil data analysis. I redesigned fintech application interfaces for the oil and energy sector, applying modern UX/UI principles. These efforts enhanced user experience and data processing efficiency across multiple platforms.',
        skills: ['Odoo', 'Python', 'Plotly', 'JQuery', 'AWS EC2'],
    },
    {
        timeline: 'JAN 2022 — MAY 2022',
        currentPosition: 'Full Stack Developer Intern',
        place: 'Academlo',
        // previousPositions: [
        //     'Quality Assurance Engineer',
        //     'QA/QC Administrative Support',
        // ],
        description:
            'I created and optimized SQL and NoSQL databases, improving query performance by 50%. I developed RESTful APIs using Node.js and Express, implementing JWT authentication and Swagger documentation following TDD methodology. I demonstrated rapid learning ability by mastering multiple technologies quickly, actively participating in code reviews and contributing innovative ideas in sprint planning meetings. These efforts enhanced database efficiency, API robustness, and overall team productivity.',
        skills: ['ReactJS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
    },
];

export default function ExpCard() {
    return (
        <section id="experience" className="scroll-mt-16 lg:mt-16">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                    Experience
                </h2>
            </div>
            <>
                {jobPositions.map((job, index) => (
                    <Card
                        key={index}
                        className="group lg:p-3 mb-6 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:bg-slate-700/20 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:rounded-lg lg:hover:rounded-[0.4rem] cursor-pointer"
                    >
                        <CardHeader className="h-full w-full p-0 mt-1">
                            <CardTitle className="text-xs text-slate-400 whitespace-nowrap">
                                {job.timeline}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col p-0">
                            <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300">
                                {job.currentPosition} • {job.place}
                                <ArrowUpRight className="inline-block ml-1 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </h3>
                            {/* {job.previousPositions.map((position, index) => (
                                <p
                                    key={index}
                                    className="text-slate-400 text-sm font-bold"
                                >
                                    {position}
                                </p>
                            ))} */}
                            <CardDescription className="py-3 text-muted-foreground">
                                {job.description}
                            </CardDescription>
                            <CardFooter className="p-0 flex flex-wrap gap-2">
                                {job.skills.map((skill, index) => (
                                    <Badge
                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 group-hover:bg-teal-400/10"
                                        key={index}
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </CardFooter>
                        </CardContent>
                    </Card>
                ))}
            </>
            <div className="lg:px-3 mt-6">
                <a
                    href="mailto:alexander@meikopoulos.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium leading-tight text-foreground group"
                >
                    <span className="text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                        View Full Resume
                    </span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                </a>
            </div>
        </section>
    );
}
