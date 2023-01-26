export type NavButtonType = "confirm" | "next" | "back";

export type PlanType = "arcade" | "advanced" | "pro";

export type BillingFrequencyType = "monthly" | "yearly";

export type IAddOnMetadata = {
    [k in BillingFrequencyType]: number;
} & {
    heading: string;
    desc: string;
};
