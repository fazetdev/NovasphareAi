export const automationEnterpriseMockService = {
  async getEnterpriseFeatures() {
    return {
      templates: [],
      versions: [],
      approvals: [],
      collaborators: [],
      governance: {
        complianceEnabled: true,
        securityReviewRequired: true,
      },
    }
  },

  async refreshEnterpriseFeatures() {
    return this.getEnterpriseFeatures()
  },
}
