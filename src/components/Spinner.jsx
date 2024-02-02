function Spinner() {
  return (
    <div className=" absolute  inset-0 flex items-center justify-center bg-slate-200/15 backdrop-blur-sm">
      <div className="loader h-14"></div>
    </div>
  );
}

export default Spinner;
