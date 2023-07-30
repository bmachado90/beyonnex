import { HomePage } from "../page-objects/home-page";
import { ProductsPage } from "../page-objects/products-page";
import { CheckoutPage } from "../page-objects/checkout-page";
import { ConfirmationPage } from "../page-objects/confirmation-page";
import '../support/commands/commands'

describe('Weather shopper purchase', () => {

    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const checkoutPage = new CheckoutPage();
    const confirmationPage = new ConfirmationPage();
    let creditCard: any;

    beforeEach(() => {
        cy.fixture('creditCard.json').then( data => {
            creditCard = data;
        });
    })


    it('Check temperature ', () => {
        cy.visit(Cypress.env('shopper_url'));

        homePage.getCurrentTemperature().then(temperature => {
            const productName: string = homePage.evaluateProductToBuy(temperature);
            
        if (productName.includes('moisturizers')) {
            homePage.getBuyProductByName(productName).click();
            cy.url().should('contain', '/moisturizer')

            productsPage.getLowerPriceByIngredient('Aloe').then(lowerPrice => {
                productsPage.addProductToCartByPrice(lowerPrice).click();
            });

            productsPage.getLowerPriceByIngredient('Almond').then(lowerPrice => {
                productsPage.addProductToCartByPrice(lowerPrice).click();
            });

            productsPage.getCart().contains('2 item(s)').click();

            checkoutPage.evaluateNumberOfItemsInTheCart(2);

            cy.url().should('contain', '/cart')

            checkoutPage.getPayWithCardBtn().click();

            cy.wait(500);

            checkoutPage.getStripeEmail().type(creditCard.test_card.email);

            checkoutPage.getStripeCardNumber().type(creditCard.test_card.number);

            checkoutPage.getStripeExpireDate().type(creditCard.test_card.date);

            checkoutPage.getStripeCVV().type(creditCard.test_card.cvv);

            checkoutPage.getStripeBillingZip().type(creditCard.test_card.zip);

            checkoutPage.getStripeSubmitButton().click();

            cy.url().should('contain', '/confirmation');

            confirmationPage.getPaymentHeader().contains('PAYMENT SUCCESS');

            confirmationPage.getPaymentDescription().contains('Your payment was successful. You should receive a follow-up call from our sales team.');

        }if (productName.includes('sunscreen')) {
            homePage.getBuyProductByName(productName).click();
            cy.url().should('contain', '/sunscreen')

        productsPage.getLowerPriceByIngredient('SPF-50').then(lowerPrice => {
            productsPage.addProductToCartByPrice(lowerPrice).click();
        });

        productsPage.getLowerPriceByIngredient('SPF-30').then(lowerPrice => {
            productsPage.addProductToCartByPrice(lowerPrice).click();
        });

        productsPage.getCart().contains('2 item(s)').click();

        checkoutPage.evaluateNumberOfItemsInTheCart(2);

        cy.url().should('contain', '/cart')

        checkoutPage.getPayWithCardBtn().click();

        cy.wait(500);

        checkoutPage.getStripeEmail().type(creditCard.test_card.email);

        checkoutPage.getStripeCardNumber().type(creditCard.test_card.number);

        checkoutPage.getStripeExpireDate().type(creditCard.test_card.date);

        checkoutPage.getStripeCVV().type(creditCard.test_card.cvv);

        checkoutPage.getStripeBillingZip().type(creditCard.test_card.zip);

        checkoutPage.getStripeSubmitButton().click();

        cy.url().should('contain', '/confirmation')

        confirmationPage.getPaymentHeader().contains('PAYMENT SUCCESS');

        confirmationPage.getPaymentDescription().contains('Your payment was successful. You should receive a follow-up call from our sales team.');
        
        }else {

        }

    }); 
    })


    
})

 