import React from "react";
import {
  ExternalLink,
  Github,
  CheckCircle,
  Clock,
  Hourglass,
} from "lucide-react";

const statusConfig = {
  Live: {
    icon: <CheckCircle size={12} />,
    classes:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  },
  "In Progress": {
    icon: <Clock size={12} />,
    classes:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  },
  "Coming Soon": {
    icon: <Hourglass size={12} />,
    classes:
      "bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-400/20",
  },
};

const ProjectCard = ({ project }) => {
  const status = statusConfig[project.status];

  return (
    <div className="project-card group bg-white/5 dark:bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-xl h-full flex flex-col justify-between">
      {/* Header: Icon & Title */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {project.letter}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-800 dark:text-white font-bold text-base leading-tight mb-1 truncate group-hover:text-cyan-400 transition-colors">
            {project.name}
          </h3>
          <span
            className={`inline-flex items-center gap-1 border rounded-full px-2 py-0.5 text-[10px] font-mono font-semibold ${status.classes}`}
          >
            {status.icon}
            {project.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4 min-h-[40px]">
        {project.description}
      </p>

      {/* Tech Stack Chips */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md border border-transparent hover:border-white/10 transition-all"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-white rounded-xl py-2.5 transition-all duration-300"
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}

        {project.links.code && (
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl px-4 py-2.5 transition-all duration-300"
          >
            <Github size={14} /> Code
          </a>
        )}

        {!project.links.demo && !project.links.code && (
          <div className="w-full text-center py-2 text-[10px] text-slate-400 font-mono italic bg-slate-50 dark:bg-white/5 rounded-lg border border-dashed border-slate-300 dark:border-white/10">
            Internal Project / Coming soon
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
