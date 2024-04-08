"use client";
import { useRef } from "react";
import { createCompany } from "@/lib/graphql/queries";
import { noCachePage } from "@/lib/actions";

export default function CreateJob() {
  const titleRef = useRef<any>();
  const descRef = useRef<any>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descRef.current.value;

    const data: any = await createCompany(
      title,
      description,
      localStorage.getItem("token")
    );

    if (data.createJob) {
      await noCachePage();
      return;
    }
  };

  return (
    <div>
      <h1 className="title">New Job</h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" ref={titleRef} />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea" rows={10} ref={descRef} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
