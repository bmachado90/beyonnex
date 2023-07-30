# weather-shopper

## Solution

- Language/Framework: Cypress + TS
- Solution must run on Docket

### Setup

Have the nodejs https://nodejs.org/en/ installed for your os.

Once installed go to the project's root folder and type on your terminal:

`npm install`

If you want to run the test using cypress test runner you can type:

`npm run cy:open`

On the other hand, if you want to run the test using the console you can type: `npm run cy:run`

And that’s it! Test should run with those commands.

### Test case: Check the temperature and buy the according product
1. User goes to weathershopper website (https://weathershopper.pythonanywhere.com/)
2. User check current temperature
3. If current temperature is below 19 degrees user clicks on _Buy moisturizers_ button
   
  3.1. User lands in moisturizees page and check that current url contains /moisturizer
   
  3.2. User adds two moisturizers to the cart. First, selects the least expensive moisturizer that contains Aloe. Then selects the least expensive moisturizer that contains almond
  3.3. After selecting the proper moisturizers user checks that cart contains 2 items
  3.4. User clicks on _cart_ button
  3.5. User lands in checkout page and check that current url contains /cart
  3.6. User clicks on _Pay with Card_ button
  3.7. User fills the credit card details
  3.8. User lands in confirmation page and check that current url contains /confirmation
  3.9. User checks that there is a "PAYMENT SUCCESS" header and "Your payment was successful. You should receive a follow-up call from our sales team." subheader

5. If current temperature is above 34 degrees user clicks on _Buy sunscreen_ button
  4.1. User lands in sunscreen page and check that current url contains /sunscreen
  4.2. User adds two sunscreens to the cart. First, selects the least expensive sunscreen that is SPF-50.. Then selects the least expensive sunscreen that is SPF-30
  4.3. After selecting the proper sunscreens user checks that cart contains 2 items
  4.4. User clicks on _cart_ button
  4.5. User lands in checkout page and check that current url contains /cart
  4.6. User clicks on _Pay with Card_ button
  4.7. User fills the credit card details
  4.8. User lands in confirmation page and check that current url contains /confirmation
  4.9. User checks that there is a "PAYMENT SUCCESS" header and "Your payment was successful. You should receive a follow-up call from our sales team." subheader.

5.If the temperature is beetween 19 and 34 degrees the user remains in the same homepage. 
