const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  

// for each
  companies.forEach(function(company){
    console.log(company);
  }); 

  //filter

  const canDrink1= ages.filter(function(age){
    if(age >= 21) {
        return true;
    }
  });

  const canDrink2 = ages.filter(age => age >= 21);


  //Filter retail companies

  const reatailCompanies = companies.filter(function(company) {
    if(company.retail == 'Retail') {
        return true;
    }
  });
  const reatailCompanies2 = companies.filter((company) => company.category == 'Retail');
 

  //map
  //Create Array of companies names
  const companyNames = companies.map(function(company){
    return company.name;
  });

  const testMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
  });


  const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  console.log("testMap2: "+testMap2);

  const agesSquare = ages.map(age => Math.sqrt(age));

console.log(agesSquare);

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age=> age *2);
  console.log(ageMap);

  const sortedCompanies = commpanies.sort(function(c1,c2){
    if (c1.start > c2.start) {
        return 1;
    } else {
       return -1;
    }
    
  });


  const sortedCompanies2 = companies.sort((a,b)  => a.start > b.start ? 1 : -1 );

  console.log(sortedCompanies2);


