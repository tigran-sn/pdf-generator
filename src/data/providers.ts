import { IProvider } from "../interfaces/provider.interface";

export const PROVIDERS_LIST: IProvider[] = [
  {
    service_provider_name: "Name 1",
    service_provider_profile_url: "https://picsum.photos/200",
    contract_name: "Contract Name 1",
    man_hours: 119,
    worked_overtime: false,
    active_days_count: "5",
    color_theme: "neutral",
  },
  {
    service_provider_name: "Name 2",
    service_provider_profile_url: null,
    contract_name: "Contract Name 2",
    man_hours: 0,
    worked_overtime: false,
    active_days_count: "3",
    color_theme: "neutral",
  },
  {
    service_provider_name: "Name 3",
    service_provider_profile_url: "https://picsum.photos/200",
    contract_name: "Contract Name 3",
    active_days_count: "0",
    man_hours: 119,
    worked_overtime: true,
    color_theme: "critical",
  },
];
