export const automationSettingsMockService = {
  async getSettings() {
    return {
      workspaceName: "Automation Workspace",

      environment: "Production",

      permissions: [],

      executionPolicy: {
        maxRetries: 3,
        timeoutSeconds: 300,
        continueOnFailure: true,
      },

      notifications: {
        failedExecutions: true,
        completedExecutions: true,
        delayedExecutions: false,
      },

      audit: {
        activityTracking: true,
        permissionTracking: true,
        permanentHistory: false,
      },
    }
  },

  async updateSettings(
    settings: Record<string, unknown>,
  ) {
    return settings
  },
}
