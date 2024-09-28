const { Builder, By, until } = require("selenium-webdriver");

(async function MagicLog() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.demoblaze.com/index.html");

    let product = await driver.wait(
      until.elementLocated(By.xpath("//a[text()='Nokia lumia 1520']")),
      10000
    );

    await driver.wait(until.elementIsVisible(product), 10000);
    await product.click();

    let addToCartButton = await driver.wait(
      until.elementLocated(By.xpath("//a[text()='Add to cart']")),
      10000
    );
    await addToCartButton.click();

    await driver.wait(until.alertIsPresent(), 50000);
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    // await driver.quit();
  }
})();
