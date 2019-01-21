function takeANumber(line, custName) {
    var n = line.length;
    line[n] = custName;
    return `Welcome, ${line[n]}. You are number ${n + 1} in line.`;
  }

function nowServing(katzDeliLine) {
   var n = katzDeliLine.length;
    if (n === 0) {
      return "There is nobody waiting to be served!"
    }
    else {
      return `Curently serving ${katzDeliLine[0]}.`
    }

}
