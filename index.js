function takeANumber(line, custName) {
    var n = line.length;
    line[n] = custName;
    return `Welcome, ${line[n]}. You are number ${n + 1} in line.`;
  }

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    }
    else {
      let current = katzDeliLine.shift();
      return `Currently serving ${current}.`
  }
}

function currentLine(line) {
  var n = line.length;
  var current_line = [];
  if (n === 0) {
    return "The line is currently empty."
  } else {
      for (n = line.length, n === 0, --n) {
      currentline.push(`${n}. ${line[n - 1]}`)
      }
      
      return `The line is currently: ${current_line}`

  }
}
