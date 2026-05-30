const fs = require('fs');

const html = fs.readFileSync('./src/.documentos/Jessy Academy – Academia Certificada.html', 'utf8');

// A basic regex to remove scripts and styles
let cleanHtml = html.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, '');

// A regex to extract text blocks
const textMatches = cleanHtml.match(/<[^>]+>([^<]+)<\/[^>]+>/g);

const texts = [];
if (textMatches) {
  for (const match of textMatches) {
    const text = match.replace(/<[^>]+>/g, '').trim();
    if (text && text.length > 3) {
      texts.push(text);
    }
  }
}

// Alternatively, let's use a simpler approach: strip all tags, and just split by newlines, trim and filter.
let pureText = cleanHtml.replace(/<[^>]+>/g, '\n');
const lines = pureText.split('\n').map(l => l.trim()).filter(l => l.length > 5);

// Remove duplicates consecutively
const uniqueLines = [];
let prev = '';
for (const line of lines) {
  if (line !== prev) {
    uniqueLines.push(line);
    prev = line;
  }
}

fs.writeFileSync('./scratch/extracted.txt', uniqueLines.join('\n'));
console.log('Extracted ' + uniqueLines.length + ' lines.');
