import EngineeringBlock from "./engineeringBlock";

export const EngineeringData = [
  {
    title: "Web Development",
    href: "webdevelopment",
    renderBlock: (data) => (
      <EngineeringBlock
        title="Web Development"
        description={() => {
          return (
            <>
              <p>
                Our company partners with startups and larger organizations to
                develop web apps from scratch and improve existing products. Our
                professional web development approach allows us to move in the
                right direction and reduce risks. With our strong expertise in
                design, development and product management we create apps
                customers love.
              </p>
              <p>
                Leverage our expertise in enterprise software development, API
                integration, modernising legacy systems, and consolidating app
                portfolios
              </p>
            </>
          );
        }}
        weCanHelpWithList={[
          "Analysis and Consulting",
          "UI/UX",
          "Custom Web Solution Development",
          "MVP Development",
          "SaaS Application Development",
          "Cloud Native Applications Development",
        ]}
        technologyList={[
          {
            technologyName: "php",
            technologyImg: "/technologies/web1.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web2.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web3.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web4.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web5.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web6.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web7.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web8.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web9.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web10.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web11.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web12.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/web13.svg",
          },
        ]}
      />
    ),
  },
  {
    title: "Mobile Development",
    href: "mobiledevelopment",
    renderBlock: (data) => (
      <EngineeringBlock
        title="Web Development"
        description={() => {
          return (
            <>
              <p>
                Our company partners with startups and larger organizations to
                develop mobile apps from scratch and improve existing products.
                Our professional mobile development approach allows us to move
                in the right direction and reduce risks. With our strong
                expertise in design, development and product management we
                create apps customers love.
              </p>
              <p>
                Leverage our expertise in enterprise software development, API
                integration, modernising legacy systems, and consolidating app
                portfolios
              </p>
            </>
          );
        }}
        weCanHelpWithList={[
          "Analysis and Consulting",
          "UI/UX",
          "Native Mobile App Development",
          "Cross-Platform Mobile App Development",
          "Backend for Mobile App Development",
        ]}
        technologyList={[
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile1.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile2.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile3.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile4.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile5.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile6.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile7.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile8.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile9.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile10.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile11.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/mobile12.svg",
          },
        ]}
      />
    ),
  },
  {
    title: "Software Testing and QA",
    href: "SoftwareTestingAndQA",
    renderBlock: (data) => (
      <EngineeringBlock
        title="Software Testing and QA"
        description={() => {
          return (
            <>
              <p>
                Our full-cycle quality assurance services start right from the
                initial analysis of the requirement to the development,
                execution, and successful maintenance of solutions. In the
                entire procedure, proper care is taken to apply only the right
                type of testing, either automated or manual, which could further
                match the specific parameters defined for a specific stage of
                the software development lifecycle
              </p>
            </>
          );
        }}
        weCanHelpWithList={[
          "Analysis and Consulting",
          "Unit Testing",
          "Integration Testing",
          "Acceptance Testing",
          "Functional Testing",
          "Performance Testing",
          "Continuios Testing",
        ]}
        technologyList={[
          {
            technologyName: "php",
            technologyImg: "/technologies/qa1.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/qa2.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/qa3.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/qa4.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/qa5.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/qa6.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/qa7.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/qa8.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/qa9.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/qa10.svg",
          },
        ]}
      />
    ),
  },

  {
    title: "CRM Solution",
    href: "CRMSolution",
    renderBlock: (data) => (
      <EngineeringBlock
        title="CRM Solution"
        description={() => {
          return (
            <>
              <p>
                Efficient CRM system can provide you with a clear overview of
                your customers, helping to find new ones, and keeping the
                loyalty of old ones. Synectics Professionals will improve the
                engagement between you and your customers, partners and
                employees by building engaging applications regarding your
                business needs and company's budget.
              </p>
            </>
          );
        }}
        weCanHelpWithList={[
          "Analysis and Consulting",
          "Custom CRM Development",
          "Platform Confugiration and Its Customization",
          "Extension and Redesing of Previous CRM Solutions",
          "Maintenance and Support",
        ]}
        technologyList={[
          {
            technologyName: "php",
            technologyImg: "/technologies/crm1.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/crm2.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/crm3.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/crm4.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/crm5.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/crm6.svg",
          },
        ]}
      />
    ),
  },

  {
    title: "BigData and Data Analytics",
    href: "BigDataandDataAnalytics",
    renderBlock: (data) => (
      <EngineeringBlock
        title="BigData and Data Analytics"
        description={() => {
          return (
            <>
              <p>
                Data in itself isn’t a new invention. People are generating it
                everyday in huge amounts. Though Big Data is changing the way
                people used to live and run business. Big Data is what companies
                do with the data that matters. The amount of it is going to
                increase, while analytics technology will become more advanced.
                For businesses, the ability to leverage Big Data is becoming
                increasingly critical. Those companies that view data as a
                strategic asset are the ones that are going to win and scale- up
              </p>
            </>
          );
        }}
        weCanHelpWithList={[
          "Data mining",
          "Data Visualization",
          "Data Analytics",
          "Data Architecture and design",
          "Platform implementation and configuration",
          "Data integration",
          "Enterprise data warehousing",
        ]}
        technologyList={[
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata1.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata2.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata3.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata4.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata5.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata6.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata7.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata8.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata9.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata10.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata11.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata12.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata13.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bdata14.svg",
          },
        ]}
      />
    ),
  },
  {
    title: "blockchain",
    href: "blockchain",
    renderBlock: (data) => (
      <EngineeringBlock
        title="blockchain"
        description={() => {
          return (
            <>
              <p>
                Build a strong core for your next application with Synectics, a
                blockchain services provider recognized for cross-industry
                expertise and a drive for continuous improvement. We’ll help you
                shape your vision and ideas into viable use cases and suggest
                the optimal technology stack, team composition, and product
                design as part of our initial blockchain consulting services —
                all before digging into development.
              </p>
            </>
          );
        }}
        weCanHelpWithList={[
          "Enterprise Blockchain",
          "Decentralized Apps (dApps)",
          "Whitepaper Development",
          "Smart Contract Development",
          "Smart Contract Audit",
          "Blockchain-based Marketplaces",
          "Business Blockchain Platforms",
        ]}
        technologyList={[
          {
            technologyName: "php",
            technologyImg: "/technologies/bch1.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch2.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch3.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch4.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch5.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch6.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch7.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch8.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch9.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch10.svg",
          },
          {
            technologyName: "php",
            technologyImg: "/technologies/bch11.svg",
          },
        ]}
      />
    ),
  },
  {
    title: "Software Development Assessment",
    href: "SoftwareDevelopmentAssessment",
    renderBlock: (data) => (
      <EngineeringBlock
        title="Software Development Assessment"
        description={() => {
          return (
            <>
              <p>
                The first step towards modernising your technology stack is
                understanding its current state. Whether you are looking to
                identify areas of weakness inside your solution, unlock hidden
                growth potential, prepare for a new round of investment, or step
                up security, an audit will lay the foundation for achieving your
                business objectives. <br />
                The Software Development experts at Synectics analyze the pain
                points of your software development processes, develop a road
                map, and suggest the solution and tools to improve SDLC in your
                company.
              </p>
            </>
          );
        }}
        weCanHelpWithList={[
          "Identify The Assessment Scope",
          "Develop The Assessment Plan",
          "Prepare And Train The Assessment Team",
          "Present The Final Findings",
          "Conduct an Executive Session",
          "Wrap up The Assessment",
        ]}
        technologyList={[
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
          {
            technologyName: "php",
            technologyImg: "php.svg",
          },
        ]}
      />
    ),
  },
];
