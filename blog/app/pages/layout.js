import Headers from "@/components/common/Headers";
export default function layout({ children }) {
  return (
    <div>
      {children}
      <aside className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-black text-red-400">
        <Headers />
      </aside>
    </div>
  );
}
