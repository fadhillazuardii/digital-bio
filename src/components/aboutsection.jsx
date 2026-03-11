import React from "react";
import { User, Cpu, Shield } from "lucide-react";

const highlights = [
  { icon: <Cpu size={16} />, label: "Telecommunication" },
  { icon: <User size={16} />, label: "Frontend Dev" },
  { icon: <Shield size={16} />, label: "QA Testing" },
];

export default function AboutSection() {
  return (
    <section id="about-detail" className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-card rounded-2xl p-8">
          <h2 className="section-title">About Me</h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                I'm a professional with a background in{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                  telecommunications engineering
                </span>{" "}
                who is passionate about building meaningful digital experiences.
                With expertise in front-end development and quality assurance, I
                combine technical precision with design creativity to create
                products that are not only functional but also aesthetically
                pleasing.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                I believe that the best technology{" "}
                <span className="text-slate-900 dark:text-white font-medium">
                  solves real problems
                </span>{" "}
                in elegant and intuitive ways. When I'm not coding, I actively
                explore the latest trends in web development and contribute to
                meaningful projects.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-row md:flex-col gap-3 flex-shrink-0">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-cyan-400/5 border border-cyan-400/20 rounded-xl px-4 py-3 text-sm"
                >
                  <span className="text-cyan-600 dark:text-cyan-400">
                    {item.icon}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
