import puppeteer from 'puppeteer';
import { toMatchImageSnapshot } from "jest-image-snapshot";
expect.extend({ toMatchImageSnapshot });

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(`http://localhost:5000`); 
});

afterAll(async () => {
    await browser.close();
});

describe("check renders", () => {
    it('index first card', async () => {
        const cart = await page.$('section .card:first-child');
        const image = await cart.screenshot();
        expect(image).toMatchImageSnapshot();
    });

    it('index first card clicked', async () => {
        const cart = await page.$('section .card:first-child');
        await page.click('section .card:first-child .trans-box span');
        const image = await cart.screenshot();
        expect(image).toMatchImageSnapshot();
    });

    it('index first card get title text', async () => {
        const element = await page.waitForSelector('section .card:first-child .title');
        const value = await element.evaluate(el => el.textContent);
        expect(value).toBe('the');
    });
});