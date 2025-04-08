import Headers from "@/components/common/Headers";
import { style } from "@/components/literar/style/style";

export default function layout({ children }) {
  const layoutStyle = style.LayOut
  return (
    <div className={layoutStyle.div}>
      {children}
      <aside className={layoutStyle.aside}>
        <Headers />
      </aside>
    </div>
  );
}
