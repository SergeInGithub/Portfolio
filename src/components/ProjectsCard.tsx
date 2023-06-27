import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgArrowsExpandUpRight } from 'react-icons/cg';

type ProjectsCardProps = {
  companyLogo: string;
  companyName: string;
  projectType: string;
  projectDescription: string;
  to: string;
};
export default function ProjectsCard({
  companyLogo,
  companyName,
  projectType,
  projectDescription,
  to,
}: ProjectsCardProps) {
  return (
    <div className="grid relative grid-cols-2 rounded-3xl bg-light_gray w-[800px] h-auto dark:bg-dark2">
      <div className="py-10 pl-7">
        <div className="grid content-center w-12 h-8 text-center rounded-3xl bg-logo">
          <span className="text-lg text-white">{companyLogo}</span>
        </div>
        <div className="mt-4 dark:text-darkWhite">
          <h2 className="mb-2 text-2xl font-bold">{companyName}</h2>
          <span className="text-xs">{projectType}</span>
          <div className="mt-5 mb-8 w-[350px]">
            <p className="text-base">{projectDescription}</p>
          </div>
          <NavLink to={to}>
            <div className="flex w-48 py-3 space-x-4 rounded-md dark:text-black drop-shadow-xl bg-light_gray2 dark:bg-gray1">
              <span className="pl-5 text-xl">See live site</span>
              <CgArrowsExpandUpRight className="w-7 h-7" />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="absolute grid h-64 dark:bg-logo rounded-tl-3xl rounded-br-3xl place-self-end bg-gray1 w-80"></div>
    </div>
  );
}

ProjectsCard.defaultProps = {
  companyLogo: 'Më',
  companyName: "Melo's Event",
  projectType: 'SIDE PROJECT',
  projectDescription:
    'Easily host world class events, This is a website i made for the company',
  to: '/',
};
