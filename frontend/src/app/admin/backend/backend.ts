
export const fetchOverview = async () => {
  const res = await fetch("http://localhost:8080/api/overview");
  return res.json();
};

export const fetchCaseStudies = async () => {
  const res = await fetch("http://localhost:8080/api/casestudies");
  return res.json();
};

export const checkWhitelist = async (email: string) => {
  const res = await fetch("http://localhost:8080/api/check-whitelist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return res.json();
};

export const deleteCompany = async (companyID: string) => {
  return fetch(`http://localhost:8080/api/company/${companyID}`, {
    method: "DELETE",
  });
};

export const deleteCaseStudy = async (
  caseStudyID: string
) => {
  return fetch(
    `http://localhost:8080/api/casestudy/${caseStudyID}`,
    {
      method: "DELETE",
    }
  );
};

export const insertCompany = async (company: { CompanyID: string; Name: string; Industry: string; CaseStudies: string[] }) => {
  return fetch("http://localhost:8080/api/company", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(company),
  });
};

export const insertCaseStudy = async (caseStudy: { CaseStudyID: string; Name: string; Tags: string[] }) => {
  return fetch("http://localhost:8080/api/casestudy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(caseStudy),
  });
};

export const updateCompany = async (companyID: string, data: { Name: string; Industry: string; CaseStudies: string[] }) => {
  return fetch(`http://localhost:8080/api/company/${companyID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateCaseStudy = async (caseStudyID: string, data: { Name: string; Tags: string[] }) => {
  return fetch(`http://localhost:8080/api/casestudy/${caseStudyID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateCaseStudyTags = async (caseStudyID: string, tags: string[]) => {
  return fetch(`http://localhost:8080/api/casestudy/${caseStudyID}/tags`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Tags: tags }),
  });
};