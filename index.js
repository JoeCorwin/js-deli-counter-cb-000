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
