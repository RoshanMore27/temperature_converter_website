function getData(){
    var temp=document.getElementById('temperature').value;
    const temperatureType = document.getElementById('temp-type');
    var selectedValue="";

     selectedValue = temperatureType.value;

     const celToFar = (cel) =>{
        const t = Math.round(((cel/5)*9) + 32);
        return t;
    }
    const farToCel = (far) =>{
        const t = Math.round(((far-32)/9)*5);
        return t;
    }

    let result;
    if(selectedValue=='celsius'){
        result = celToFar(temp);
        document.getElementById('result').innerHTML = `= ${result}° Fahrenheit`
        console.log(result);
  
    }else{
        result = farToCel(temp);
        document.getElementById('result').innerHTML = `= ${result}° Celsius`
    }
}