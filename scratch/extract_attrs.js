import fs from 'fs';
import * as cheerio from 'cheerio';
const html = fs.readFileSync('../src/.documentos/Jessy Academy – Academia Certificada.html', 'utf8');
const $ = cheerio.load(html);
const imgTexts = [];
$('img').each((i, el) => {
  if ($(el).attr('alt')) imgTexts.push('ALT: ' + $(el).attr('alt'));
  if ($(el).attr('title')) imgTexts.push('TITLE: ' + $(el).attr('title'));
});
const links = [];
$('a').each((i, el) => {
  links.push('LINK: ' + $(el).text() + ' -> ' + $(el).attr('href'));
});

fs.writeFileSync('attrs.txt', imgTexts.join('\n') + '\n\n' + links.join('\n'));
console.log('Extracted ' + imgTexts.length + ' image texts and ' + links.length + ' links.');
