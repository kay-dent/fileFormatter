const data = "Publication Date,Title,Authors\n29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien\n01/08/1996,A Game of Thrones,George Raymond Martin\n05/07/2022,Tomorrow and Tomorrow and Tomorrow,Gabrielle Zevin";
const columnWidths = [12, 31, 23];

const format = (data) => {
    let lines = data.split('\n');
    lines[0] = formatHeader(lines[0].split(','));
    for (let i = 0; i < lines.length; i++) {
        lines[i] = addColumnsBetween(lines[i])
        lines[i] = addWhiteSpace(lines[i])
        
    }
    lines = addHeaderBase(lines);
    return lines;
}

const addColumnsBetween = (line) => {
  let sections = line.split(',')
  return sections.join(' | ');

}

const formatHeader = (header) => {
    header[0] = "Pub Date"
    return header.join(',');
}

const addHeaderBase = (data) => {
    const header = data.shift();
    data.unshift("|=====================================================================|");
    data.unshift(header);
    return data;
}

const addWhiteSpace = (line) => {
    let columns = line.split('|');
    for (let i = 0; i < columns.length; i++) {
        columns[i] =columns[i].padStart(columnWidths[i])
    }
    return columns.join('|');
}

console.log(format(data));

module.exports = format;

/* 
Column 1: 13
Column 2: 31
Column 3: 23
*/