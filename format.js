const columnWidths = [11, 29, 21];
const monthKey = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
}

const format = (data) => {
    let lines = data.split("\n");
    lines[0] = formatHeader(lines[0].split(','));
    for (let i = 1; i < lines.length; i++) {
        lines[i] = addColumnsBetween(lines[i])
        lines[i] = formatLine(lines[i]);
    }
    lines = addHeaderBase(lines);
    return lines;
}

const addColumnsBetween = (line) => {
  let sections = line.split(',')
  return sections.join('|');
}

const formatHeader = (header) => {
    header[0] = "Pub Date"
    header[0] = header[0].padEnd(columnWidths[0]);
    header[1] = header[1].padStart(columnWidths[1]);
    header[2] = header[2].padEnd(columnWidths[2]);
    return assembleLine(header);
}

const addHeaderBase = (data) => {
    const header = data.shift();
    data.unshift("|=====================================================================|");
    data.unshift(header);
    return data;
}

const formatLine = (line) => {
    console.log(line)
    let columns = line.split('|');
    columns[0] = formatDate(columns[0]);
    for (let i = 0; i < columns.length; i++) {
        columns[i] = columns[i].trim();
        if (columns[i].length > columnWidths[i]) {
        columns[i] = columns[i].substring(0, columnWidths[i] - 4);
          columns[i] += (" ...");
        }
        columns[i] = columns[i].padStart(columnWidths[i])
    }
    return assembleLine(columns);
}

const assembleLine = (columns) => {
    const line = columns.join(' | ');
    return `| ${line} |`
}

const formatDate = (date) => {
    date = date.split('/')
    date[1] = monthKey[date[1]];
    return date.join(' ')
}

module.exports = format;
