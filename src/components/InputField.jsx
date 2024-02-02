/* eslint-disable no-unused-vars */

import { useJobList } from '../Context/JobListContext';

function InputField() {
  const { keyWords, deleteKeyword, clearKeywords } = useJobList();
  // Deletes a category from the keyword array
  function deleteCategory(category) {
    deleteKeyword(category);
  }
  // This will clear the categories from the keyWords array
  function clear() {
    clearKeywords();
  }

  return keyWords.length > 0 ? (
    <div className=" flex  items-center justify-between gap-x-5 rounded-sm bg-white p-2 px-6">
      <div className="flex flex-wrap items-center gap-x-10">
        {keyWords.map((key, index) => (
          <p
            className="mb-2 cursor-pointer bg-neutral-background py-1 pl-2 font-bold text-primary"
            key={index}
          >
            <span>{key}</span>
            {'  '}
            <span
              className="ml-2 bg-primary px-2 py-1  font-bold text-white hover:bg-neutral-veryDarkGrayishCyan"
              onClick={() => deleteCategory(key)}
            >
              X
            </span>
          </p>
        ))}
      </div>
      <div>
        <a
          href="#"
          className="font-medium text-neutral-veryDarkGrayishCyan hover:underline"
          onClick={() => clear()}
        >
          Clear
        </a>
      </div>
    </div>
  ) : (
    ''
  );
}

export default InputField;
