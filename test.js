const webdriver = require('selenium-webdriver');
const firefox    = require('selenium-webdriver/firefox');
const { By } = require('selenium-webdriver');

const test = async () => {
	const driver = new webdriver.Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless()).build();
	console.log('Loading Webpage');
	await driver.get(`http://localhost:3000`);
    
    console.log("1) Testing if app is loaded and main page is displaying");
        const title = await driver.getTitle()
        console.log(title == "Blog Application");
  
    console.log('2) by clicking on add user user add page is opened')
        await driver.findElement(By.css(".adduser")).click();    
        const isFormPage = await driver.findElement(By.css(".addnameheading")).isDisplayed();
        console.log(isFormPage);

    console.log('2) clicking on Ad buttton user is saved')
        await driver.findElement(By.css("#userName")).sendKeys("noorulaim");
        await driver.findElement(By.css("#userEmail")).sendKeys("noor@mail.com");
        await driver.findElement(By.css("#AddUser")).click();
        const alertText = await driver.switchTo().alert().getText();
        console.log(alertText == "User saved sucessfulyy");
        await driver.switchTo().alert().accept();
    console.log('3) Back to userlist page')
        await driver.findElement(By.css(".back")).click();
        const listUsers = await driver.findElements(By.css(".Allusers"))
        console.log(listUsers.length > 0);

    console.log('4) latest user is added')
        const listUserNames = await driver.findElements(By.css(".UserName"))
        console.log(await listUserNames[listUserNames.length -1].getText() == "noorulain");

    console.log('5) click Delete button to delete  any User')
        const deleteBtns = await driver.findElements(By.css(".deleteBtn"))
        await deleteBtns[deleteBtns.length -1].click()
        const detekeAlertText = await driver.switchTo().alert().getText();
        console.log(detekeAlertText == "Are u sure you want to delete this user");
        await driver.switchTo().alert().accept();

        driver.quit();

}
test();