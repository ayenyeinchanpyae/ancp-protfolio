import React from "react";
import cocktail from "../assets/portfolio/cocktail.png";
import githubfinder from "../assets/portfolio/githubfinder.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import portfolio from "../assets/portfolio/portfolio.png";
import cocktailMobile from "../assets/portfolio/mobile/cocktailMobile.png";
import githubFinderMobile from "../assets/portfolio/mobile/githubFinderMobile.png";
import emartMobile from "../assets/portfolio/mobile/emartMobile.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cocktail,
      mobileSrc: cocktailMobile,
      name: "Cocktail Finder using ReactJS, TailwindCSS, Context API",
      link: "https://cocktail-finder-six.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/cocktail-finder",
    },
    {
      id: 2,
      src: githubfinder,
      mobileSrc: githubFinderMobile,
      name: "Github Profile Finder  ReactJS, TailwindCSS, Context API",
      link: "https://github-finder-pearl-omega.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/github-finder",
    },
    {
      id: 3,
      src: ecommerce,
      mobileSrc: emartMobile,
      name: "Ecommerce application using ReactJS, BoootStrap, Firebase",
      link: "https://e-mart-eight.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/E-mart",
    },
    {
      id: 4,
      src: portfolio,
      name: "Portfolio using ReactJS, TailwindCSS",
      link: "https://ancp.vercel.app/",
      repo: "https://github.com/ayenyeinchanpyae/ancp",
    },
  ];

  return (
    <div name="portfolio" className="w-full h-full py-[80px]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row gap-16 justify-center">
          {portfolios.map(({ id, src, link, repo, name, mobileSrc }) => (
            <div
              key={id}
              className="shadow-sm shadow-gray-400 md:w-[500px] lg:w-[450px] "
            >
              <img
                src={src}
                alt=""
                className="hidden md:block duration-200 h-[250px] w-full"
              />
              <img
                src={mobileSrc}
                alt=""
                className="md:hidden duration-200 h-[250px] w-full"
              />
              <div className="flex flex-col  space-y-4 p-3">
                <p>{name}</p>

                <a href={link} target="_blank">
                  <button className="  duration-200 ">Live Demo</button>
                </a>
                <a href={repo} target="_blank">
                  <button className="  duration-200 ">View on Github</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
