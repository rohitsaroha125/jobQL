import { companies } from "@/lib/fake-data";

interface CompanyInterface {
  company: {
    name: string;
    description: string;
  };
}

export default function Company({ params }: { params: any }) {
  const { id } = params;

  const company = companies.find((company) => company.id === id);

  return (
    <div>
      {company && (
        <>
          <h1 className="title">{company.name}</h1>
          <div className="box">{company.description}</div>
        </>
      )}
    </div>
  );
}
