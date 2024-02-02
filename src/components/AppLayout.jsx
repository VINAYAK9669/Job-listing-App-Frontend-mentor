/* eslint-disable no-unused-vars */

import { useJobList } from '../Context/JobListContext';
import InfoCard from './InfoCard';
import InputField from './InputField';
import Spinner from './Spinner';
function AppLayout() {
  const { isLoading, error } = useJobList();
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="relative h-[18vh] w-[100dvw]   bg-primary bg-header_mobile bg-cover bg-center bg-no-repeat sm:bg-header_desktop">
          <div className="absolute left-[50%] top-[80%] w-[95dvw] translate-x-[-50%] rounded-sm px-5 py-2  sm:px-8 sm:py-4 md:max-w-[1440px]">
            <div>
              <InputField />
              {isLoading ? (
                <Spinner />
              ) : (
                <div className="mt-[3rem] ">
                  <InfoCard />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppLayout;
