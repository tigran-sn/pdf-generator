export interface IProvider {
  service_provider_name?: string;
  contract_name?: string;
  active_days_count?: string;
  totalDays?: number;
  man_hours?: number;
  worked_overtime?: boolean;
  service_provider_profile_url?: string | null;
  color_theme?: string;
}
