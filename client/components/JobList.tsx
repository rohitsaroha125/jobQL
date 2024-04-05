import Link from "next/link";

interface JobItemInterface {
  id: string;
  title: string;
  company: {
    id: string;
    name: string;
    description: string;
  };
  date: string;
  description: string;
}

interface JobItemPropsInterface {
  job: JobItemInterface;
}

interface JobListInterface {
  jobs: JobItemInterface[];
}

function JobList({ jobs }: JobListInterface) {
  return (
    <ul className="box">
      {jobs.map((job: JobItemInterface) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

function JobItem({ job }: JobItemPropsInterface) {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
  return (
    <li className="media">
      {/* <div className="media-left has-text-grey">{formatDate(job.date)}</div> */}
      <div className="media-content">
        <Link href={`/job/${job.id}`}>{title}</Link>
      </div>
    </li>
  );
}

export default JobList;
