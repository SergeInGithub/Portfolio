import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgArrowsExpandUpRight } from 'react-icons/cg';

export default function ProjectsCard() {
  return (
    <div>
      <h1 className="font-bold">Projects</h1>
      <div className="grid relative grid-cols-2 rounded-3xl bg-light_gray w-[800px] h-auto">
        <div className="py-10 pl-7">
          <div className="grid content-center w-12 h-8 text-center rounded-3xl bg-logo">
            <span className="text-lg text-white">Më</span>
          </div>
          <div className="mt-4">
            <h2 className="mb-2 text-2xl font-bold">Melo's Event</h2>
            <span className="text-xs">SIDE PROJECT</span>
            <div className="mt-5 mb-8 w-[350px]">
              <p className="text-base">
                Easily host world class events, This is a website i made for the
                company.
              </p>
            </div>
            <NavLink to="/hjbjnk">
              <div className="flex w-48 py-3 space-x-4 rounded-md drop-shadow-xl bg-light_gray2">
                <span className="pl-5 text-xl">See live site</span>
                <CgArrowsExpandUpRight className="w-7 h-7" />
              </div>
            </NavLink>
          </div>
        </div>
        <div className="absolute grid h-64 rounded-tl-3xl rounded-br-3xl place-self-end bg-gray1 w-80"></div>
      </div>
    </div>
  );
}
