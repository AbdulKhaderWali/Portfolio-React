import React from "react";
import projects from "./projects";
import { BiLinkExternal } from "react-icons/bi";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiGithub,
  SiNetlify,
} from "react-icons/si";
function ProjectComp() {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="m-5 rounded-lg shadow-[-5px_-5px_9px_rgba(255,255,255,0.45),5px_5px_9px_rgba(94,104,121,0.3)] dark:text-white dark:shadow-none dark:bg-slate-800 text-center lg:flex"
          >
            <div className="basis-7/12 flex items-center justify-center">
              <img
                src={project.image}
                className="w-[80%] h-[80%] rounded-lg m-5 dark: border-4"
                alt={project.project_name}
              />
            </div>
            <div className=" lg:basis-5/12 p-5">
              <h3 className="mb-4 ">{project.project_name}</h3>
              <p className="leading-7 p-4 ">{project.project_description}</p>
              <div className="flex items-center justify-center gap-4 mb-5">
                {project.tech_stack.map((tech) => {
                  switch (tech) {
                    case "html":
                      return <SiHtml5 className="text-orange-600 text-2xl" />;
                      break;
                    case "css":
                      return <SiCss3 className="text-blue-400 text-2xl" />;
                    case "js":
                      return (
                        <SiJavascript className="text-yellow-300 text-2xl" />
                      );
                    case "react":
                      return <SiReact className="text-blue-400 text-2xl" />;
                    default:
                      break;
                  }
                })}
              </div>
              <ul className="flex justify-center gap-4 mb-5">
                <li className="flex justify-center items-center gap-2">
                  <SiGithub className="text-black text-3xl" />
                  <span className="bg-yellow-300 rounded-xl hover:bg-yellow-400 cursor-pointer p-1">
                    Code
                  </span>
                </li>
                <li className="flex justify-center items-center gap-2">
                  <SiNetlify className="text-blue-400 text-3xl" />
                  <span className="bg-yellow-300 rounded-xl hover:bg-yellow-400 cursor-pointer p-1">
                    Live
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectComp;
