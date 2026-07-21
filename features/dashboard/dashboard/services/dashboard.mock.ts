import {
  ActivityItem,
  ConversationItem,
  DashboardStat,
  QuickAction,
  SystemHealth,
  UsageAnalyticsPoint,
} from "../types/dashboard.types";

export const dashboardStats: DashboardStat[] = [
  {
    id: "conversations",
    title: "Total Conversations",
    value: 248,
    description: "Across all AI assistants",
    trend: "up",
    change: "+12.4%",
  },
  {
    id: "agents",
    title: "AI Agents",
    value: 6,
    description: "Currently configured",
    trend: "up",
    change: "+2",
  },
  {
    id: "documents",
    title: "Knowledge Documents",
    value: 132,
    description: "Indexed successfully",
    trend: "up",
    change: "+18",
  },
  {
    id: "requests",
    title: "Today's Requests",
    value: 824,
    description: "Processed today",
    trend: "down",
    change: "-3.1%",
  },
];

export const quickActions: QuickAction[] = [
  {
    id: "new-chat",
    title: "New Conversation",
    description: "Start a new AI chat session.",
    icon: "message",
    href: "/dashboard/chats",
  },
  {
    id: "upload",
    title: "Upload Knowledge",
    description: "Add documents to the knowledge base.",
    icon: "upload",
    href: "/dashboard/knowledge-base",
  },
  {
    id: "agent",
    title: "Create AI Agent",
    description: "Configure a new business assistant.",
    icon: "bot",
    href: "/dashboard/agents",
  },
  {
    id: "analytics",
    title: "View Analytics",
    description: "Review AI usage and performance.",
    icon: "chart",
    href: "/dashboard",
  },
];

export const recentActivities: ActivityItem[] = [
  {
    id: "1",
    title: "Knowledge document uploaded",
    description: "Employee Handbook.pdf was indexed.",
    timestamp: "10 minutes ago",
    status: "success",
  },
  {
    id: "2",
    title: "Sales Assistant created",
    description: "New AI agent configured.",
    timestamp: "1 hour ago",
    status: "success",
  },
  {
    id: "3",
    title: "Conversation completed",
    description: "Customer Support AI answered a request.",
    timestamp: "2 hours ago",
    status: "info",
  },
];

export const systemHealth: SystemHealth[] = [
  {
    id: "ai",
    service: "AI Service",
    status: "healthy",
    lastChecked: "Just now",
  },
  {
    id: "kb",
    service: "Knowledge Base",
    status: "healthy",
    lastChecked: "Just now",
  },
  {
    id: "storage",
    service: "Storage",
    status: "healthy",
    lastChecked: "Just now",
  },
];

export const recentConversations: ConversationItem[] = [
  {
    id: "1",
    agent: "Customer Support AI",
    preview: "How can I reset my account password?",
    user: "Ahmed",
    timestamp: "5 minutes ago",
  },
  {
    id: "2",
    agent: "HR Assistant",
    preview: "What is the annual leave policy?",
    user: "Fatima",
    timestamp: "20 minutes ago",
  },
  {
    id: "3",
    agent: "Sales Assistant",
    preview: "Give me product pricing details.",
    user: "Mohammed",
    timestamp: "1 hour ago",
  },
];

export const usageAnalytics: UsageAnalyticsPoint[] = [
  { label: "Mon", value: 35 },
  { label: "Tue", value: 58 },
  { label: "Wed", value: 72 },
  { label: "Thu", value: 48 },
  { label: "Fri", value: 83 },
  { label: "Sat", value: 60 },
  { label: "Sun", value: 44 },
];
