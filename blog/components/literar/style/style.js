//width, height, display, bg, border, margin, padding, font

export const style = {
  LayOut: {
    html: "w-[100%] h-screen bg-[#252525]",
    div: "h-[100%] shadow-red-400 shadow-2xl",
    aside:
      "fixed top-0 right-0 z-40 min-w-[13%] h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#252525] text-red-400 shadow-red-800 shadow-2xl p-4 ",
  },
  pages: {
    listPage: {
      list: {
        ol: "w-full flex flex-wrap gap-4 space-y",
        li: "h-[20%] w-[calc(25%-20px)] min-w-[150px]",
      },
      listCard: {
        div: "rounded-2xl border-red-500 border-3 m-6 h-[50%] p-2",
        h1: "font-bold text-3xl",
      },
      page: {
        div: "w-[87%] h-full flex bg-[#252525]",
      },
    },
    articlePage: {
      Post: {
        div: ""
      },
      PostHeader: {
        div: "",
      },
      page: {
        div1: "flex justify-center w-[87%] h-screen",
        div2: "bg-[#252525] h-[90%] w-[70%] rounded-3xl mt-[50px] shadow-red-800 shadow-lg"
      },
    },
  },
  components: {
    common: {
      footer: {
        div: "fixed bottom-0 flex flex-wrap",
        p1: "w-[100%]",
      },
      header: {
        div: "h-screen relative",
        footer: "fixed top-0",
      },
    },
    tagBox: {
      div: "mt-18",
    },
  },
};
