
export default function layout ({ children }) {
  return <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">사이드바가 올 자리{ children }</aside>
};