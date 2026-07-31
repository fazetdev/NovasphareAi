export interface ConfigurationScope {
  level:
    | "platform"
    | "organization"
    | "team"
    | "user";

  ownerId: string;

  parentScope?: {
    level:
      | "platform"
      | "organization"
      | "team";
    ownerId: string;
  };

  canOverride: boolean;

  canLockChildren: boolean;
}
