const CommentForm = () => {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col justify-center items-start gap-5">
        <label
          htmlFor="score"
          className="text-text-primary text-[1.6rem] font-normal"
        >
          امتیاز
        </label>
        <select
          id="score"
          className="w-full h-14 rounded-xl px-5 outline-none border-slate-200 border-2 text-[1.6rem] font-normal"
        >
          <option disabled value="">
            انتخاب امتیاز
          </option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </div>
      <div className="flex flex-col justify-center items-start gap-5">
        <label
          htmlFor="comment-area"
          className="text-text-primary text-[1.6rem] font-normal"
        >
          نظر
        </label>
        <textarea
          id="comment-area"
          className="w-full h-52 rounded-xl p-5 outline-none border-slate-200 border-2 text-[1.6rem] font-normal"
          placeholder="نظر خود را وارد نمایید"
        ></textarea>
      </div>
    </form>
  );
};

export default CommentForm;
