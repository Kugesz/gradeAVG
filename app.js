function getAverage(marks){
  result = marks.reduce((sum, current) => sum + current, 0);
  return Math.floor(result/marks.length, 0)
}
