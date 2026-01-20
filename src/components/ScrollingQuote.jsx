import React from 'react';

const ScrollingQuote = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black border-y border-white/5 py-12">
            <div className="relative">
                <blockquote className="text-center px-6">
                    <p className="text-4xl md:text-6xl lg:text-7xl font-thin text-white relative inline-block">
                        <span className="relative bg-gradient-to-r from-zinc-600 via-white to-zinc-600 bg-clip-text text-transparent animate-shine bg-[length:200%_100%]">
                            "Code is like humor. When you have to explain it, it's bad."
                        </span>
                    </p>
                    <footer className="mt-8 text-zinc-500 font-light text-sm tracking-widest uppercase">
                        — Cory House
                    </footer>
                </blockquote>
            </div>
        </section>
    );
};

export default ScrollingQuote;
