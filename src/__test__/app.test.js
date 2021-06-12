/*
run     npm run serve
run     npm run test:jest-image-snapshot
*/

import { toMatchImageSnapshot } from "jest-image-snapshot";
expect.extend({ toMatchImageSnapshot });
import puppeteer from 'puppeteer';

it('index page screenshot test', async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000`); 
    const cart = await page.$('section .card:first-child');
    const image = await cart.screenshot();
    expect(image).toMatchImageSnapshot();
    await browser.close();
});

it('index page clicked card', async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000`); 
    const cart = await page.$('section .card:first-child');
    await page.click('section .card:first-child .trans-box span');
    const image = await cart.screenshot();
    expect(image).toMatchImageSnapshot();
    await browser.close();
});