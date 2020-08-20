function pairElement(str) {
  str = str.split('');
  let paired = [];
  str.forEach(x => {
    switch(x){
    case 'C': 
      paired.push(['C','G']);
      break;
    case 'G': 
      paired.push(['G','C']);
      break;
    case 'A': 
      paired.push(['A','T']);
      break;
    case 'T': 
      paired.push(['T','A']);
      break;
    }
  });
  console.log(paired);
  return paired;
}

pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");

// output
// [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
// [ [ 'A', 'T' ],
//   [ 'T', 'A' ],
//   [ 'C', 'G' ],
//   [ 'G', 'C' ],
//   [ 'A', 'T' ] ]
// [ [ 'T', 'A' ],
//   [ 'T', 'A' ],
//   [ 'G', 'C' ],
//   [ 'A', 'T' ],
//   [ 'G', 'C' ] ]
// [ [ 'C', 'G' ],
//   [ 'T', 'A' ],
//   [ 'C', 'G' ],
//   [ 'T', 'A' ],
//   [ 'A', 'T' ] ]
