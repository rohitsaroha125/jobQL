import { companies } from "@/lib/fake-data";
import { getCompany } from "@/lib/graphql/queries";

interface CompanyInterface {
  company: {
    name: string;
    description: string;
  };
}

export default async function Company({ params }: { params: any }) {
  const company = await getCompany(params.id);

  return (
    <div>
      {company && (
        <>
          <h1 className="title">{company.name}</h1>
          <div className="box">{company.description}</div>
          <h6>Jobs Posted by Company: {company.jobs.length} </h6>
        </>
      )}
    </div>
  );
}
