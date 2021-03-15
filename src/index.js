module.exports = function toReadable (number) {
  let num = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
    if(number <11 && number >= 0)
        return num[number];

    let ten = ['eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  if(number < 21 && number > 10)
      return ten[number-11];

  let des = ['ten','twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if( number < 100 && number > 20)
    {

        let n = number % 10;
        let tens = Math.floor( number/ 10);
        if(number % 10 == 0)
            return des[tens-1];
        return des[tens-1]+" "+num[n];
    }
  if(number > 99 && number <1000)
  {
      let hundred = Math.floor( number/ 100);
      let n = number % 100;
      let syper = (Math.floor(n/10) -1);
      if(number % 100 ==0)
          return num[hundred] +" hundred";
      if(n % 10 == 0)
          return num[hundred] +" hundred " + des[syper];
      if( (number > 100 && number <111) || (number > 200 && number <211)|| (number > 300 && number <311)|| (number > 400 && number <411),
      (number > 500 && number <511) || (number >600 && number <611) || (number > 700 && number <711) || (number > 800 && number <811),
      (number > 900 && number <911))
      {
          return num[hundred] +" hundred " + num[n];
      }
      if( ((number > 110 && number <121)) || ((number > 210 && number <221)) || ((number > 310 && number <321)) ||
          ((number > 410 && number <421)) || ((number > 510 && number <521)) || ((number > 610 && number <621)) ||
          ((number > 710 && number <721)) || ((number > 810 && number <821)) || ((number > 910 && number <921)) )
      {
          return num[hundred] +" hundred " + ten[Math.floor(n % 10)-1];
      }
      else
      {
          return num[hundred] +" hundred " + des[syper] +" "+ num[n % 10];
      }
  }

}
