import Headers from "@/components/common/Headers";
export default function layout({ children }) {
  return (
    <div className="h-[100%] shadow-violet-600 shadow-2xl">
      {children}
      <aside className="fixed top-0 right-0 z-40 w-[13%] h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#252525] text-red-400 shadow-violet-600 shadow-2xl p-4 ">
        <Headers />
      </aside>
    </div>
  );
}
