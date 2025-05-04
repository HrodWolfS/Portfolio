import { expect, test } from "@playwright/test";

test.describe("Formulaire de contact", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("Le formulaire est présent et visible", async ({ page }) => {
    const contactForm = page.locator("form");
    await expect(contactForm).toBeVisible();
  });

  test("Les champs requis sont présents", async ({ page }) => {
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageInput = page.locator('textarea[name="message"]');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageInput).toBeVisible();
  });

  test("La validation des champs fonctionne", async ({ page }) => {
    const submitButton = page.locator('button[type="submit"]');

    // Test avec un formulaire vide
    await submitButton.click();

    // Vérifier les messages d'erreur
    await expect(page.locator("text=Le nom est requis")).toBeVisible();
    await expect(page.locator("text=L'email est requis")).toBeVisible();
    await expect(page.locator("text=Le message est requis")).toBeVisible();

    // Test avec un email invalide
    await page.fill('input[name="email"]', "invalid-email");
    await submitButton.click();
    await expect(page.locator("text=Email invalide")).toBeVisible();
  });

  test("Le bouton d'envoi est désactivé pendant la soumission", async ({
    page,
  }) => {
    // Remplir le formulaire avec des données valides
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('textarea[name="message"]', "Test message");

    const submitButton = page.locator('[data-testid="submit-button"]');

    // Vérifier que le bouton est actif avant la soumission
    await expect(submitButton).toBeEnabled();

    // Soumettre le formulaire
    await submitButton.click();

    // Vérifier que le bouton est désactivé pendant la soumission
    // Augmenter le timeout pour s'assurer que l'état a le temps de changer
    await expect(submitButton).toBeDisabled({ timeout: 10000 });
  });

  test("Le bouton de copie d'email affiche un toast de succès", async ({
    page,
  }) => {
    // Cliquer sur le bouton de copie
    await page.click('button:has-text("stempfel.rodolphe@gmail.com")');

    // Vérifier que le toast de succès apparaît
    await expect(page.locator("text=Email copié!")).toBeVisible();
  });

  test("Les liens des réseaux sociaux sont corrects", async ({ page }) => {
    // Vérifier le lien LinkedIn
    const linkedinLink = page.locator('a:has-text("LinkedIn")');
    await expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rodolphe-s-ba6a7a232"
    );
    await expect(linkedinLink).toHaveAttribute("target", "_blank");
    await expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    // Vérifier le lien GitHub
    const githubLink = page.locator('a:has-text("GitHub")');
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/HrodWolfS"
    );
    await expect(githubLink).toHaveAttribute("target", "_blank");
    await expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
