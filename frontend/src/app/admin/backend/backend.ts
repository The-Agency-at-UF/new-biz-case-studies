
export const fetchOverview = async () => {
  const res = await fetch("http://localhost:8080/api/overview");
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
  companyID: string,
  caseStudyID: string
) => {
  return fetch(
    `http://localhost:8080/api/casestudy/${companyID}/${caseStudyID}`,
    {
      method: "DELETE",
    }
  );
};