export type { Service, ServiceCategory, ServiceFAQ, ServiceProcessStep } from "./types";

export {
  newHomeConstruction,
  commercialConstruction,
  industrialConstruction,
} from "./core-construction";

export {
  rccStructure,
  foundationWork,
  retainingWalls,
} from "./concrete-structural";

export {
  homeRenovation,
  interiorFinishing,
  kitchenRenovation,
  bathroomRenovation,
} from "./renovation-interior";

export {
  projectManagement,
  sitePreparation,
  demolition,
} from "./site-management";

export {
  structuralRepair,
  waterproofing,
  roofRepair,
} from "./repair-maintenance";

import { newHomeConstruction, commercialConstruction, industrialConstruction } from "./core-construction";
import { rccStructure, foundationWork, retainingWalls } from "./concrete-structural";
import { homeRenovation, interiorFinishing, kitchenRenovation, bathroomRenovation } from "./renovation-interior";
import { projectManagement, sitePreparation, demolition } from "./site-management";
import { structuralRepair, waterproofing, roofRepair } from "./repair-maintenance";
import type { Service, ServiceCategory } from "./types";

export const allServices: Service[] = [
  newHomeConstruction,
  commercialConstruction,
  industrialConstruction,
  rccStructure,
  foundationWork,
  retainingWalls,
  homeRenovation,
  interiorFinishing,
  kitchenRenovation,
  bathroomRenovation,
  projectManagement,
  sitePreparation,
  demolition,
  structuralRepair,
  waterproofing,
  roofRepair,
];

export const servicesByCategory: Record<ServiceCategory, Service[]> = {
  "Core Construction": [newHomeConstruction, commercialConstruction, industrialConstruction],
  "Concrete & Structural": [rccStructure, foundationWork, retainingWalls],
  "Renovation & Interior": [homeRenovation, interiorFinishing, kitchenRenovation, bathroomRenovation],
  "Site & Management": [projectManagement, sitePreparation, demolition],
  "Repair & Maintenance": [structuralRepair, waterproofing, roofRepair],
};

export const serviceCategories: ServiceCategory[] = [
  "Core Construction",
  "Concrete & Structural",
  "Renovation & Interior",
  "Site & Management",
  "Repair & Maintenance",
];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return servicesByCategory[category] ?? [];
}
