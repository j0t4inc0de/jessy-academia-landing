const fs = require('fs');

const html = fs.readFileSync('./src/.documentos/Jessy Academy – Academia Certificada.html', 'utf8');

// A basic regex to remove scripts and styles
let cleanHtml = html.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, '');

const matches = cleanHtml.match(/>([^<]+)</g);

const texts = [];
if (matches) {
  for (const match of matches) {
    const text = match.replace(/[><]/g, '').trim();
    if (text && text.length > 2) {
      texts.push(text);
    }
  }
}

// remove dupes
const unique = [...new Set(texts)];
fs.writeFileSync('./scratch/extracted2.txt', unique.join('\n'));
console.log('Extracted ' + unique.length + ' text segments.');
