function AppName() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mb-8 text-left">
      <h1 className="text-[28px] font-semibold text-[#1a202c] mb-1.5 tracking-tight">
        My Tasks
      </h1>
      <p className="text-slate-500 text-[15px] font-medium">{formattedDate}</p>
    </div>
  );
}

export default AppName;
