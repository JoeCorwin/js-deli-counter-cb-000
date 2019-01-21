function takeANumber(line, custName) {
    var n = line.length;
    line[n] = custName;
    return `Welcome, ${line[n]}. You are number ${n + 1} in line.`;
  }
