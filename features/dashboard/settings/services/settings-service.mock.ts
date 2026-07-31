import { SettingsConfiguration } from "../types/settings.types";

const settings: SettingsConfiguration[] = [];

export const settingsService = {
  async getSettings(): Promise<SettingsConfiguration[]> {
    return settings;
  },
};
