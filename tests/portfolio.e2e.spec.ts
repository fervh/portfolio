import { expect, test } from "@playwright/test";

test.describe("Portfolio experience", () => {
  test("home loads with key sections and cv link", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: "CV" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Selected Projects" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Technical Skills" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Achievements" })).toBeVisible();
  });

  test("cv page renders and has download button", async ({ page }) => {
    await page.goto("/cv");

    await expect(page.getByRole("heading", { name: "Fernando Vela Hidalgo" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Professional Experience" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Download CV as PDF" })).toBeVisible();
  });

  test("navigation from home to cv works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Open CV" }).click();
    await expect(page).toHaveURL(/\/cv\/?$/);
  });

  test("mobile menu opens and navigates to cv", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.includes("mobile"), "Mobile-only flow");

    await page.goto("/");
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await page.getByRole("menuitem", { name: "CV" }).click();
    await expect(page).toHaveURL(/\/cv\/?$/);
  });
});
