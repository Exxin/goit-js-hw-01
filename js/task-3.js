function getElementWidth(content, padding, border) {
  var contentWidth = parseFloat(content);
  var paddingWidth = parseFloat(padding);
  var borderWidth = parseFloat(border);

  var totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
