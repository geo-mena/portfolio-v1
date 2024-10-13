'use client';

import { Send } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';

/* eslint-disable */

export default function About() {
    return (
        <section id="about" className="scroll-mt-16">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                    About
                </h2>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-start  text-muted-foreground lg:px-2">
                    As a Full Stack Developer with over two years of experience,
                    I specialize in building scalable, maintainable, and
                    efficient web applications using modern technologies like{' '}
                    <a
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        // href="https://vela.exchange"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        JavaScript, React, Vue.js, PHP/Laravel, and Node.js.
                    </a>{' '}
                    My skillset covers both front-end development and back-end
                    architecture, with a strong focus on optimizing databases
                    and ensuring seamless user experiences.
                </p>
                <p className="text-start text-muted-foreground lg:px-2">
                    I thrive in agile environments, working closely with teams
                    using{' '}
                    <a
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        // href="https://vela.exchange"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        GitHub, Notion, Slack, Microsoft Teams
                    </a>{' '}
                    and other collaboration tools to maintain productivity and
                    innovation. My approach is problem-solving oriented, which
                    allows me to quickly adapt to new challenges, deliver robust
                    solutions, and continuously improve development processes.
                </p>
                <p className="text-start text-muted-foreground lg:px-2">
                    Passionate about web technologies and the developer
                    community, I actively seek out opportunities to learn, share
                    knowledge, and stay at the forefront of industry trends
                    through meetups, conferences, and workshops.
                </p>
                <p className="text-start text-muted-foreground lg:px-2">
                    If you're looking for a developer who can bring technical
                    excellence, teamwork, and an eye for process optimization,
                    I'd love to connect. You can reach me at{' '}
                    <TooltipProvider>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                                <a
                                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                                    href="mailto:geomenacontact@gmail.com"
                                    target="blank"
                                    rel="noopener noreferrer"
                                >
                                    geomenacontact@gmail.com
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span className="flex items-center gap-2">
                                    <Send className="h-4 w-4" />
                                    <span>Send me an email</span>
                                </span>
                            </TooltipContent>
                        </Tooltip>{' '}
                    </TooltipProvider>
                    to explore potential collaborations or chat about software
                    development.
                </p>
            </div>
        </section>
    );
}
