import { Service } from "../types";

export const rccStructure: Service = {
  slug: "rcc-structure",
  title: "RCC Structure",
  category: "Concrete & Structural",
  shortDescription:
    "Engineer-certified reinforced concrete construction for residential and commercial projects in Lahore — precise mix ratios, correct steel placement, and cube-tested concrete quality.",
  fullDescription:
    "The RCC (Reinforced Cement Concrete) frame is the skeleton of any building, and AH Construction treats it with the rigour it demands. Our structural team works from PEC-certified engineer drawings specifying exact column sizes, beam depths, slab thickness, and rebar schedules. We use calibrated concrete mixers on-site and conduct mandatory cube tests for every concrete pour to verify 28-day compressive strength. Proper curing — at least 21 days of water curing for slabs and columns — is strictly enforced on all AH Construction sites. We do not allow premature loading or formwork stripping that could compromise the structural frame. This approach is especially important in Lahore where expansive clay soils and seismic zone considerations demand precise engineering.",
  benefits: [
    "Concrete cube testing at certified labs for every structural pour",
    "PEC-registered structural engineer drawings as standard",
    "Correct rebar cover maintained using plastic spacers — no improvisation",
    "Minimum 21-day water curing strictly enforced",
    "Vibration of concrete using needle vibrators to eliminate voids",
    "Seismic zone 2B compliance for Lahore's building code requirements",
    "Formwork stripping only after minimum strength verification",
  ],
  processSteps: [
    {
      step: 1,
      title: "Structural Drawing Review",
      description:
        "Before any concrete is poured, our site engineer reviews the structural drawings and Bar Bending Schedule (BBS) to ensure steel quantities and placement are correct.",
    },
    {
      step: 2,
      title: "Formwork & Shuttering",
      description:
        "Steel or timber formwork is erected and checked for alignment, level, and rigidity. Proper propping ensures formwork does not deflect under wet concrete loads.",
    },
    {
      step: 3,
      title: "Rebar Fabrication & Placement",
      description:
        "Steel bars are cut and bent per BBS, placed with correct spacing and cover using plastic spacers. An inspection is carried out before concrete is ordered.",
    },
    {
      step: 4,
      title: "Concrete Mix & Pouring",
      description:
        "Concrete is mixed on-site or ordered from a batching plant at the specified design mix (typically M20–M25 for residential, M30+ for commercial). Cube samples are taken and sent to an independent lab.",
    },
    {
      step: 5,
      title: "Vibration & Finishing",
      description:
        "Needle vibrators are used throughout the pour to eliminate air pockets. Slab surfaces are screeded and levelled to the specified finished floor level.",
    },
    {
      step: 6,
      title: "Curing",
      description:
        "Water curing begins within 24 hours of pour and continues for a minimum of 21 days using wet hessian or ponding methods. Formwork is stripped only after achieving minimum design strength.",
    },
  ],
  faqs: [
    {
      question: "Why is concrete cube testing important in Lahore construction?",
      answer:
        "Lahore's construction market has widespread use of substandard cement and incorrect mix ratios. Cube testing at an independent lab confirms your concrete has achieved the specified compressive strength, protecting your structural investment.",
    },
    {
      question: "What concrete grade do you use for residential buildings?",
      answer:
        "We typically use M20 (1:1.5:3) for residential slabs and M25 for columns. Commercial and industrial projects use M25–M35 based on the structural engineer's specification.",
    },
    {
      question: "How many floors can an RCC frame support in Lahore?",
      answer:
        "This is entirely determined by the structural engineer's design. A properly designed RCC frame can support G+4 or more floors. We always build per the engineer's specification, never by guesswork.",
    },
    {
      question: "Do you use a batching plant or site mixing?",
      answer:
        "For large commercial pours we strongly recommend batching plant concrete for consistency. For residential projects, on-site mixing with a weigh batcher is acceptable for smaller pours.",
    },
    {
      question: "What is the minimum curing time before a slab can be loaded?",
      answer:
        "Formwork should not be removed before 14 days for slabs and 7 days for columns and beams under normal Lahore temperatures. Full design strength is achieved at 28 days.",
    },
  ],
  seoTitle: "RCC Structure Construction in Lahore | AH Construction",
  seoDescription:
    "Reinforced concrete RCC structure construction in Lahore with cube-tested concrete, certified engineer drawings, and 21-day curing. Residential and commercial. AH Construction.",
};
