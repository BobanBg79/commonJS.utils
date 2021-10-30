function triangleAreaCalc(a,b,c){
      var p = (a + b + c) / 2;
      var calc = p * (p - a) * (p - b) * (p - c);
      var area = Math.pow(calc, 0.5);
      return area;
}
