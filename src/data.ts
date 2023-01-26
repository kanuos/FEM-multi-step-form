import arcade from "./assets/icon-arcade.svg";
import advanced from "./assets/icon-advanced.svg";
import pro from "./assets/icon-pro.svg";

import type { BillingFrequencyType, PlanType } from "./ts-support"

export const steps: string[] = [
    "your info",
    "select plan",
    "add ons",
    "summary"
]

export const formMetadata: { heading: string, desc: string }[] = [
    {
        heading: "Personal info",
        desc: "Please provide your name,email address and phone number."
    },
    {
        heading: "Select your plan",
        desc: "You have the option of monthly or yearly billing"
    },
    {
        heading: "Pick add-ons",
        desc: "Add-ons help enhance your gaming experience."
    },
    {
        heading: "Finishing up",
        desc: "Double-check everything looks OK before confirming."
    }
]

export class MyPlan {
    #plan: PlanType;
    constructor(plan: PlanType) {
        this.#plan = plan;
    }

    get monthly(): number {
        switch (this.#plan) {
            case "arcade": return 9;
            case "advanced": return 12;
            case "pro": return 15;
        }
    }

    get yearly(): number {
        return this.monthly * 10;
    }

    get image(): string {
        switch (this.#plan) {
            case "arcade": return arcade;
            case "advanced": return advanced;
            case "pro": return pro;
        }
    }

    get plan(): PlanType {
        return this.#plan
    }

    getPlanDetail(): { monthly: number, yearly: number, image: string, plan: PlanType } {
        return {
            monthly: this.monthly,
            yearly: this.yearly,
            image: this.image,
            plan: this.plan
        }
    }

    getBillingFactor(billFrequency: BillingFrequencyType): { factor: number, short: string } {
        return billFrequency === "monthly" ? {
            factor: 1,
            short: "mo"
        } : {
            factor: 10,
            short: "yr"
        }
    }

}

