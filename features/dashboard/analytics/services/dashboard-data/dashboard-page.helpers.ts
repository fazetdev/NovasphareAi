import {
  dashboardCompositions,
} from "./dashboard-compositions.mock";

import type {
  DashboardComposition,
} from "./dashboard-composer";

import type {
  DashboardAudience,
} from "../../types/analytics.types";

export function getDashboardByAudience(
  audience: DashboardAudience,
): DashboardComposition | undefined {
  return dashboardCompositions.find(
    ({ dashboard }) =>
      dashboard.audience === audience,
  );
}
