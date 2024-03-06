# countdown-shopify-app-extension

Countdown Timer Theme App Extension

# Steps To Install

1. Download or clone the repo with all the required file for your extension

2. Create a folder in your laravel application or anywhere you want to keep your app extension
   Example - Create a new folder called <b>app_extension</b>

3. Copy the <b>package.json</b> file of the downloaded repository and paste it in the root of the created folder of Step 2.

4. After that go to the folder (app_extension) and run the below command

   - npm install

5. Now please run the app generate extension by below command.

   - npm run scaffold

   It will prompt you to choose whether you want to create new app or Not, Commect to an existing app. Please choose n (No)

   After that, it will show you a list of your existing apps connected to your shopify account. Choose your preferred app.

   After that, it will show the list of types of extensions. Please choose Theme app extension and press enter

6. Give a name of your extension
   - Example: Countdown Timer

7. Finally run the extension by the below command

   - npm run dev

   If the toggle develoment store preview shows <b>off</b> please on it by pressing <b>d</b>

   If everything goes well it will create the full theme app extension folder structure where we need to put 3 files we have clone from the repository.

8. Copy 3 files and paste them in below folder

   - copy <b>scripts.js</b>, <b>style.css</b> file in assets folder
   - copy/replace <b>star_rating.liquid</b> file in blocks folder

9. After that go to the theme app extension editor which you can find in console build message

10. In the Theme page, Click on Add Seciton + icon where you want to add the count-down timer and it will show the counter you created with a default date of 2024/03/31

11. From right menu, change the date in ISO format you will find the countdown timer is changing based on your given input. Save it and it will reflect on the product page.
