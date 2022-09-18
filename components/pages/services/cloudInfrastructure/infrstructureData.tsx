import Devops from "./devops";
import InfrastructureManagement from "./InfrastructureManagement";

export const InfrastructureData = [
  {
    title: "DevOps",
    href: "devops",
    renderBlock: () => <Devops />,
  },
  {
    title: "Database Management",
    href: "databasemanagement",
    renderBlock: () => <Devops />,
  },
  {
    title: "Infrastructure Management",
    href: "infrastructuremanagement",
    renderBlock: () => <InfrastructureManagement />,
  },
  {
    title: "Virtualization",
    href: "virtualization",
    renderBlock: () => <Devops />,
  },
  {
    title: "Storage",
    href: "storage",
    renderBlock: () => <Devops />,
  },
  {
    title: "Security",
    href: "security",
    renderBlock: () => <Devops />,
  },
  {
    title: "Monitoring",
    href: "monitoring",
    renderBlock: () => <Devops />,
  },
];
