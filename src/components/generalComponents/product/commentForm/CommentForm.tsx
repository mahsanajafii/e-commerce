import Button from "../../../common/button/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <Button className="bg-primary-main text-text-button flex justify-center items-center px-[1.2rem] py-[0.8rem] rounded-[0.8rem] text-[1.4rem] font-normal w-[7.3rem] h-[4rem]">
        ثبت نظر
      </Button>
    </form>
  );
};

export default CommentForm;
