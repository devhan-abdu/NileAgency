// app/PortfolioWrapper.jsx
import Portfolio from "./Portfolio";
import { fetchProjects } from "@/lib/sanity";
import { getProjectsQuery } from "@/lib/queries";

export default async function PortfolioWrapper() {
  const projects = await fetchProjects(getProjectsQuery);
  return <Portfolio projects={projects} />;
}
