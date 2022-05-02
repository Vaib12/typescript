function phone(function(p:string):string{
	if(p==null){
		return ("-1");
	}
	else{
	var re=/-/gi;
	var s= p.replace(re,"")
	
	if (s.length==10){
		return "valid";
	}
	else{
		return ("0");
	}
	}
}
phone("9027-46300-7");