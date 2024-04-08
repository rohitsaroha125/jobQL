"use client";
import { deleteJob } from "@/lib/graphql/queries";
import { noCachePage } from "@/lib/actions";

function ActionButton({ id }: { id: any }) {
  const handleDelete = async (id: any) => {
    const data: any = await deleteJob(id);
    if (data.deleteJob.count) {
      await noCachePage();
      return;
    }
  };

  const handleEdit = (id: any) => {};

  return (
    <>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleEdit(id)}>Edit</button>
    </>
  );
}

export default ActionButton;
