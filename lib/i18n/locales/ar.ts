const ar = {
  common: {
    appName: "منصة نوفاكور للذكاء الاصطناعي",
    loading: "جاري التحميل...",
    cancel: "إلغاء",
    save: "حفظ",
    close: "إغلاق",
    search: "بحث",
    back: "رجوع",
    next: "التالي",
    emptyTitle: "لا توجد نتائج",
    emptyDescription: "لا توجد بيانات متاحة.",
  },

  navigation: {
    features: "المميزات",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا",
    ai: "الذكاء الاصطناعي",
    chats: "المحادثات",
    knowledgeBase: "قاعدة المعرفة",
    automation: "الأتمتة",
    analytics: "التحليلات",
    branding: "الهوية",
    settings: "الإعدادات",
    account: "الحساب",
  },

  chat: {
    newChat: "محادثة جديدة",
    title: "محادثة",
    renameConversation: "إعادة تسمية المحادثة",
    renameConversationDescription:
      "أدخل اسماً جديداً للمحادثة.",
    conversationTitle: "عنوان المحادثة",
    deleteConversation: "حذف المحادثة؟",
    deleteConversationDescription:
      "هل أنت متأكد من حذف هذه المحادثة؟ لا يمكن التراجع عن هذا الإجراء.",
  },

  automation: {
    analyticsTitle: "تحليلات الأتمتة",
    analyticsDescription:
      "راقب أداء سير العمل وحالة التنفيذ.",
    settingsTitle: "إعدادات الأتمتة",
    settingsDescription:
      "إدارة إعدادات سير العمل وعناصر التحكم المؤسسية.",
    workflows: "سير العمل",
    executions: "عمليات التنفيذ",
    settingsLoaded: "تم تحميل الإعدادات بنجاح.",

    failedExecutions: "عمليات التنفيذ الفاشلة",
    noIssuesDetected: "لم يتم اكتشاف مشاكل",
    workflowHealth: "حالة سير العمل",
    healthy: "سليم",
    executionDelays: "تأخيرات التنفيذ",
    noDelays: "لا توجد تأخيرات",
    monitoringStatus: "حالة المراقبة",

    workflowPermissions: "صلاحيات سير العمل",
    workflowPermissionsDescription:
      "التحكم في الوصول إلى عمليات الأتمتة.",

    executionPolicies: "سياسات التنفيذ",
    executionPoliciesDescription:
      "إدارة قواعد تنفيذ سير العمل.",

    notifications: "الإشعارات",
    notificationsDescription:
      "إعداد تنبيهات الأتمتة.",

    allowAutomaticRetries:
      "السماح بإعادة المحاولة التلقائية",

    leadFollowUp:
      "متابعة العملاء المحتملين",
    sales:
      "المبيعات",

    supportTicketRouting:
      "توجيه تذاكر الدعم",
    support:
      "الدعم",

    employeeOnboarding:
      "تهيئة الموظفين الجدد",
    hr:
      "الموارد البشرية",

    auditLogSettings: "إعدادات سجل التدقيق",
    logWorkflowExecutions: "تسجيل عمليات تنفيذ سير العمل",
    logConfigurationChanges: "تسجيل تغييرات الإعدادات",
    retainAuditLogs: "الاحتفاظ بسجلات التدقيق",

    workspaceConfiguration: "إعدادات مساحة العمل",
    workspaceName: "اسم مساحة العمل",
    workspaceNamePlaceholder:
      "أدخل اسم مساحة العمل",
    workspaceDescription: "وصف مساحة العمل",
    workspaceDescriptionPlaceholder:
      "أدخل وصف مساحة العمل",

    notifyWorkflowFailures:
      "إشعار بفشل سير العمل",
    notifyExecutionSuccess:
      "إشعار بنجاح التنفيذ",
    dailySummaryReports:
      "التقارير اليومية",

    admin: "مسؤول",
    adminAccess: "صلاحيات كاملة",
    editor: "محرر",
    editorAccess: "يمكنه إنشاء وتعديل سير العمل",
    viewer: "مشاهد",
    viewerAccess: "عرض نشاط سير العمل فقط",

    maxConcurrentExecutions:
      "الحد الأقصى للتنفيذات المتزامنة",
    executionTimeout:
      "مهلة التنفيذ",
    retryPolicy:
      "سياسة إعادة المحاولة",

    templateLibrary:
      "مكتبة القوالب",
    noTemplates:
      "لا توجد قوالب متاحة",
  },

  settings: {
    title: "حوكمة نوفاكور",
    description:
      "مركز إدارة المؤسسة والسياسات.",

    organization: "المؤسسة",
    security: "الأمان",
    users: "المستخدمون",
    policies: "السياسات",
    workspace: "مساحة العمل",

    unableToLoad: "تعذر تحميل الإعدادات",
    unableToLoadDescription:
      "تعذر تحميل سياسات الإعدادات.",

    unavailable: "الإعدادات غير متوفرة",
    unavailableDescription:
      "اختر قسماً من الإعدادات.",

    organizationProfile: "ملف المؤسسة",
    organizationName: "اسم المؤسسة",
    defaultLanguage: "اللغة الافتراضية",
    timezone: "المنطقة الزمنية",

    organizationLoadError:
      "تعذر تحميل المؤسسة",
    organizationLoadErrorDescription:
      "تعذر تحميل إعدادات المؤسسة.",

    saving: "جارٍ الحفظ...",
    saveChanges: "حفظ التغييرات",

    securityPolicy: "سياسة الأمان",
    passwordPolicyEnabled:
      "تفعيل سياسة كلمة المرور",
    requireMfa:
      "طلب المصادقة متعددة العوامل",
    sessionTimeoutMinutes:
      "مهلة الجلسة (بالدقائق)",
    allowTrustedDevices:
      "السماح بالأجهزة الموثوقة",

    multiFactorAuthentication:
      "المصادقة متعددة العوامل",
    status: "الحالة",
    enabled: "مفعّل",
    disabled: "معطّل",
    providers: "المزوّدون",
    trustedDevices: "الأجهزة الموثوقة",
    allowed: "مسموح",

    activeSessions: "الجلسات النشطة",
    revokeAll: "إلغاء الكل",
    noActiveSessions:
      "لا توجد جلسات نشطة.",
    revoke: "إلغاء",

    userManagement: "إدارة المستخدمين",
    inviteUser: "دعوة مستخدم",
    invitationSent:
      "تم إرسال الدعوة.",
    sendInvitation:
      "إرسال الدعوة",
    sending:
      "جارٍ الإرسال...",
    noUsers:
      "لا يوجد مستخدمون",
    noUsersDescription:
      "لا يوجد مستخدمون في مساحة العمل.",
    inviteUsersDescription:
      "دعوة المستخدمين للتعاون.",
    approve:
      "موافقة",
    suspend:
      "تعليق",

    workspaceSettings:
      "إعدادات مساحة العمل",
    name:
      "الاسم",
    language:
      "اللغة",
    policyLock:
      "قفل السياسات",

    emailPlaceholder:
      "أدخل بريد المستخدم",

    unableToLoadUsers:
      "تعذر تحميل المستخدمين",

    unableToLoadUsersDescription:
      "تعذر تحميل بيانات المستخدمين.",
  },
};

export default ar;
