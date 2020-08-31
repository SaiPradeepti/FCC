function convertHTML(str) {
  let obj = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '\"' : '&quot;',
    '\'' : '&apos;'
  }
  str.split('').forEach(x => {
    for(let y in obj){if(x.match(y)!==null){str = str.replace(y,obj[y])}}
  });
  console.log(str);
  return str;
}
convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");

// output
// Dolce &amp; Gabbana
// Hamburgers &lt; Pizza &lt; Tacos
// Sixty &gt; twelve
// Stuff in &quot;quotation marks&quot;
// Schindler&apos;s List
// &lt;&gt;
// abc
