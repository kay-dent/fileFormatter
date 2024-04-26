const data = "Publication Date,Title,Authors\n29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien\n01/08/1996,A Game of Thrones,George Raymond Martin\n05/07/2022,Tomorrow and Tomorrow and Tomorrow,Gabrielle Zevin";
const columnWidths = [12, 31, 23];

const format = (data) => {
    let lines = data.split('\n');
    lines[0] = formatHeader(lines[0].split(','));
    for (let i = 0; i < lines.length; i++) {
        lines[i] = addColumns(lines[i])
    }
    lines = addHeaderBase(lines);
    return lines;
}

const addColumns = (line) => {
  let sections = line.split(',')
  
  for (let i = 0; i < sections.length; i++) {
    sections[i] = " | " + sections[i];
    if (i === 2) { sections[i] += ' |' }
  }
  return sections.join('');

}

const formatHeader = (header) => {
    header[0] = "Pub Date"
    console.log(`header is now ${header}`);
    return header.join(',');
}

const addHeaderBase = (data) => {
    const header = data[0]
    data.shift();
    data.unshift("|=====================================================================|");
    data.unshift(header);
    return data;
}

console.log(format(data));

module.exports = format;

/* 
Column 1: 13
Column 2: 31
Column 3: 23
*/