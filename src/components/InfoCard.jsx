/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect } from 'react';
import { useJobList } from '../Context/JobListContext';

function InfoCard() {
  const { keyWords, filteredList, filterJobsByLanguages, addFilterKeyWords } =
    useJobList();
  function handleFilterCategories(category) {
    addFilterKeyWords(category);
  }
  // `filterJobsByLanguages' need to call whenever there is change in the `keyWords`
  useEffect(() => {
    filterJobsByLanguages();
  }, [keyWords]);

  const skillStyle =
    'bg-darkGra rounded-md bg-neutral-background px-3 py-1 text-[0.8rem] sm:text-[1rem] font-bold uppercase text-primary mb-1 mt-3 capitalize hover:bg-primary hover:text-white cursor-pointer';
  const descriptionStyle =
    'font-medium text-neutral-darkGrayishCyan flex gap-x-2 items-center inline-block';
  return (
    <>
      {filteredList.map((list) => (
        <div
          key={list.id}
          className="relative mb-[2rem] flex flex-col justify-between gap-x-[3rem]  rounded-md bg-white p-7 sm:flex-row "
        >
          {list.featured ? (
            <span className="absolute left-0 top-0 h-full w-2  rounded-l-lg bg-primary"></span>
          ) : (
            ''
          )}
          <div className=" flex flex-row  gap-5 sm:items-center">
            <div className="absolute  top-0 w-[55px] translate-y-[-50%] sm:static sm:translate-y-[0%]">
              <img src={list.logo}></img>
            </div>
            <div className="mt-3 flex flex-col">
              <div className="flex items-center gap-3">
                <p className="font-bold text-primary">{list.company}</p>
                {list.new ? (
                  <p className="rounded-full bg-primary px-3 py-0 text-[0.8rem] font-bold uppercase text-white">
                    New!
                  </p>
                ) : (
                  ''
                )}
                {list.featured ? (
                  <p className="rounded-full bg-neutral-veryDarkGrayishCyan px-3 py-0 text-[0.8rem] font-bold uppercase text-white">
                    Featured
                  </p>
                ) : (
                  ''
                )}
              </div>
              <div>
                <h2 className="mb-2  mt-2 text-[1.2rem] font-bold text-neutral-veryDarkGrayishCyan hover:text-primary">
                  {list.position}
                </h2>
                <div className="  flex flex-wrap gap-2 border-b-[2px] pb-3 sm:border-b-0">
                  <p className={descriptionStyle}>{list.postedAt}</p>
                  <p className={descriptionStyle}>
                    <span className="h-[0.4rem] w-[0.4rem] rounded-full bg-neutral-darkGrayishCyan"></span>
                    {list.contract}
                  </p>
                  <p className={descriptionStyle}>
                    <span className="h-[0.4rem] w-[0.4rem] rounded-full bg-neutral-darkGrayishCyan"></span>
                    {list.location}
                  </p>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-wrap items-center gap-x-4 pt-3">
            <p
              className={skillStyle}
              onClick={() => handleFilterCategories(list.role)}
            >
              {list.role}
            </p>
            <p
              className={skillStyle}
              onClick={() => handleFilterCategories(list.level)}
            >
              {list.level}
            </p>
            {list.languages.map((lang, index) => (
              <p
                className={skillStyle}
                key={index}
                onClick={() => handleFilterCategories(lang)}
              >
                {lang}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default InfoCard;
