const blogList = {
    "Building A Successful Tech Career: Getting Started — Part 1": "./blog/gettingstartedpart1.html",
    "Building A Successful Tech Career: Gaining Traction — Part 2": "./blog/gaining-traction-part2.html",
    "A Year at Irembo: Reflections on Enterprise Product Management": "./blog/a-year-at-irembo.html",
}
  
  const blogMap = new Map(Object.entries(blogList));
  for (const title of blogMap.keys()) {
    const list = document.getElementById("blogList")
    let a = document.createElement("a");
    let linkText = document.createTextNode(title);
    a.appendChild(linkText);
    a.title = title;
    a.href = blogList[title];
    list.appendChild(a);
  }
  