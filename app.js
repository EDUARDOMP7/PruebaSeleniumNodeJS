const { Builder, By, until } = require("selenium-webdriver");

(async function MagicLog() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Navega a la página principal
    await driver.get("https://www.demoblaze.com/index.html");

    // Espera hasta que el enlace del producto "Nokia Lumia 1520" esté presente
    let product = await driver.wait(
      until.elementLocated(By.xpath("//a[text()='Nokia lumia 1520']")),
      10000
    );

    // Haz clic en el producto una vez que esté visible
    await driver.wait(until.elementIsVisible(product), 10000);
    await product.click();

    // Espera a que se cargue el botón "Add to Cart" y haz clic en él
    let addToCartButton = await driver.wait(
      until.elementLocated(By.xpath("//a[text()='Add to cart']")),
      10000
    );
    await addToCartButton.click();

    // Espera y valida que aparezca el mensaje "Product added"
    await driver.wait(until.alertIsPresent(), 50000);
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    // await driver.quit();
  }
})();
