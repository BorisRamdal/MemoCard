import { toMatchImageSnapshot } from "jest-image-snapshot";
expect.extend({ toMatchImageSnapshot });
import puppeteer from 'puppeteer';

describe("check renders", () => {
    it('index first card screenshot test', async () => {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto(`http://localhost:3000`); 
        const cart = await page.$('section .card:first-child');
        const image = await cart.screenshot();
        expect(image).toMatchImageSnapshot();
        await browser.close();
    });

    it('index first card clicked card', async () => {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto(`http://localhost:3000`); 
        const cart = await page.$('section .card:first-child');
        await page.click('section .card:first-child .trans-box span');
        const image = await cart.screenshot();
        expect(image).toMatchImageSnapshot();
        await browser.close();
    });

    it('index first card get title text', async () => {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto(`http://localhost:3000`); 
        const element = await page.waitForSelector('section .card:first-child .title');
        const value = await element.evaluate(el => el.textContent);
        expect(value).toBe('the');
        await browser.close();
    });
});