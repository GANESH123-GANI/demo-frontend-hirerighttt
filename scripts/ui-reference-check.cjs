const { chromium } = require('C:/Users/ADMIN/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');
fs.mkdirSync('test-results/reference-ui',{recursive:true});
(async()=>{
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1096,height:900}});
const errors=[]; page.on('pageerror',e=>errors.push(e.message));
await page.addInitScript(()=>{localStorage.setItem('hireright.session','demo@hireright.com');sessionStorage.setItem('hireright.candidateName','Arjun');});
await page.goto('http://127.0.0.1:5174/onboarding');
await page.getByRole('heading',{name:"Let's Build Your Profile",exact:false}).waitFor();
await page.waitForTimeout(2800); await page.screenshot({path:'test-results/reference-ui/reference-check-profile.png',fullPage:true});
await page.getByRole('button',{name:'Save & Continue',exact:true}).click();
await page.getByRole('heading',{name:"Let's Add Your Skills",exact:false}).waitFor();
await page.getByRole('button',{name:'Save & Continue',exact:true}).click();
await page.getByRole('heading',{name:"Let's Highlight",exact:false}).waitFor();
await page.getByRole('button',{name:'Save & Continue',exact:true}).click();
await page.getByRole('heading',{name:'4. Select Your 15-Minute Interview Slot',exact:false}).waitFor();
await page.waitForTimeout(2800); await page.screenshot({path:'test-results/reference-ui/reference-check-availability.png',fullPage:true});
await page.getByRole('button',{name:'02:00 PM',exact:false}).click();
await page.getByRole('button',{name:'Confirm & Continue',exact:true}).click();
await page.getByRole('heading',{name:'Your Interview Details',exact:true}).waitFor();
await page.waitForTimeout(2800); await page.screenshot({path:'test-results/reference-ui/reference-check-confirmation.png',fullPage:true});
if(!await page.getByText('02:00 PM (IST)',{exact:false}).count()) throw new Error('Selected appointment missing');
const downloadPromise=page.waitForEvent('download'); await page.getByRole('button',{name:'Add to Calendar'}).click(); const download=await downloadPromise; await download.saveAs('test-results/reference-ui/interview.ics');
if(!fs.readFileSync('test-results/reference-ui/interview.ics','utf8').includes('T083000Z')) throw new Error('Calendar timezone mismatch');
await page.getByRole('button',{name:'View Interview Guide',exact:false}).click(); await page.getByRole('heading',{name:'Your interview checklist'}).waitFor(); await page.getByRole('button',{name:'View Interview Guide',exact:false}).click();
console.log('Selected appointment, IST calendar export, and interview guide passed');
for(const width of [390,768,1440]) {await page.setViewportSize({width,height:900}); await page.waitForTimeout(2800); await page.screenshot({path:`test-results/reference-ui/reference-check-confirmation-${width}.png`,fullPage:true}); console.log('overflow',width,await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth));}
for(const route of ['/','/solutions','/pricing','/login','/dashboard','/jobs']) { await page.goto('http://127.0.0.1:5174'+route); await page.locator('h1').first().waitFor(); console.log('route rendered',route); }
console.log('page errors',errors);if(errors.length) throw new Error('Browser errors');
await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

