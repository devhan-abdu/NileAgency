import { recentProject } from "@/lib/serviceDate";
import { HoverEffect } from "./HoverCard";

const RecentProject = () => {
    return (
          <HoverEffect items={recentProject}/>       
    );
};

export default RecentProject;
