'use client';

export default function Footer() {
    return (
        <section>
            <div className="flex flex-col gap-4 lg:px-6 mt-16">
                <p className="text-sm text-start text-muted-foreground">
                    Loosely designed in{' '}
                    <a className="text-foreground text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer">
                        Figma
                    </a>{' '}
                    and coded in{' '}
                    <a
                        className="text-foreground text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer"
                        href="https://code.visualstudio.com/"
                    >
                        Visual Studio Code.
                    </a>{' '}
                    Built with{' '}
                    <a
                        className="text-foreground text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer"
                        href="https://nextjs.org/"
                    >
                        Next.js
                    </a>
                    ,{' '}
                    <a
                        className="text-foreground text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer"
                        href="https://tailwindcss.com/"
                    >
                        Tailwind CSS
                    </a>{' '}
                    and{' '}
                    <a
                        className="text-foreground text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer"
                        href="https://ui.shadcn.com/"
                    >
                        Shadcn/ui
                    </a>
                    , deployed with{' '}
                    <a
                        className="text-foreground text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer"
                        href="https://vercel.com/"
                    >
                        Vercel
                    </a>
                    . All text is set in the Inter typeface.
                </p>
            </div>
        </section>
    );
}
