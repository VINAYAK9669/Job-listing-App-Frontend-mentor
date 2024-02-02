/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useReducer } from 'react';

const BASE_URL = 'https://vinayak9669.github.io/job-listing-mock-api/data.json';
const JoblistContext = createContext();

const initialState = {
  jobList: [], // Contains the API data
  keyWords: [], // Contain the list of categories selected.
  filteredList: [], // Contain the filtered API data selected on the basis of categories selected
  isLoading: true, // Checks whether data stil loading or not
  error: '', // It holds the error data if any error occurs during the data fecthing
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'job/list':
      return { ...state, isLoading: false, jobList: action.payload };
    case 'job/FilteredList':
      return { ...state, filteredList: action.payload };
    case 'job/addKeyWord':
      return {
        ...state,
        keyWords: [...state.keyWords, action.payload],
      };
    case 'job/addNewKeyWord':
      return {
        ...state,
        keyWords: action.payload,
      };
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error('Unknown action type');
  }
}

function ListProvider({ children }) {
  const [{ jobList, isLoading, error, keyWords, filteredList }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    async function getJobList() {
      try {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();

        dispatch({ type: 'job/list', payload: data });
        dispatch({ type: 'job/FilteredList', payload: data });
      } catch {
        dispatch({
          type: 'rejected',
          payload: 'There was an error loading Joblist...',
        });
      }
    }
    getJobList();
  }, []);

  // Add Keys to the array called `keyWords`
  function addFilterKeyWords(keyword) {
    if (!keyWords.includes(keyword)) {
      dispatch({
        type: 'job/addKeyWord',
        payload: keyword,
      });
    }
  }
  // Filter the `joblist` using keywords arrays `keyWords`

  function filterJobsByLanguages() {
    // If the length of the keyWords is less than zero than no need to filter instead we pass the API data
    if (keyWords.length > 0) {
      const newData = jobList.filter((currData) => {
        return keyWords.every((key) => {
          return (
            currData.languages.includes(key) ||
            currData.role === key ||
            currData.level === key ||
            currData.tools.includes(key)
          );
        });
      });

      dispatch({ type: 'job/FilteredList', payload: newData });
    } else {
      // Pass the API data to the filter array if there are no categories selected
      dispatch({ type: 'job/FilteredList', payload: jobList });
    }
  }

  function deleteKeyword(keyword) {
    const newKeyWords = keyWords.filter((key) => key != keyword);

    dispatch({
      type: 'job/addNewKeyWord',
      payload: newKeyWords,
    });
  }
  function clearKeywords() {
    dispatch({
      type: 'job/addNewKeyWord',
      payload: [],
    });
  }

  return (
    <JoblistContext.Provider
      value={{
        jobList,
        keyWords,
        filteredList,
        isLoading,
        error,
        filterJobsByLanguages,
        deleteKeyword,
        addFilterKeyWords,
        clearKeywords,
      }}
    >
      {children}
    </JoblistContext.Provider>
  );
}

function useJobList() {
  const context = useContext(JoblistContext);
  if (context === undefined)
    throw new Error('Context was used outside the ListProvider');
  return context;
}
export { ListProvider, useJobList };
