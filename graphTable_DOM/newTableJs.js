
	 

 
//------------------------------------------------------------------------------
var theTable = document.getElementsByClassName("uomTable");

function calcNumOfRows(){
    return  document.getElementsByTagName("tbody")[0].childElementCount;
    
}

function calcNumOfCol(){
    
    return document.getElementById("headers").childElementCount;
}




//------------------SET CLASS FOR HEADER ROW------------------------------------
document.getElementsByTagName("tr")[0].setAttribute("ID", "headers"); 




//------------------TURN TITLES INTO BUTTONS------------------------------------
var titles = document.getElementById("headers").children;

for(i=0; i<(calcNumOfCol());i++){
var valueT = titles[i].innerHTML;
var val = titles[i];

var btn = document.createElement("BUTTON");        // Create a <button> element
var te = document.createTextNode(valueT);          // Create a text node
titles[i].innerHTML="";
btn.appendChild(te);                               // Append the text to <button>
//btn.setAttribute("onclick", "myFunction()");
titles[i].appendChild(btn);    

}


//-------------SET ID's TO ROWS(tr) --------------------rowX--------------------

function getAllRows(){
    return document.getElementsByTagName("tbody")[0].children;
}  


function setIdsToRows(){
for(i=0;i<(calcNumOfRows());i++){
     var nameR = "row" +(i+1);
   getAllRows()[i].setAttribute("ID", nameR);
}

}

    setIdsToRows();
    
//------------SET CLASSES TO COLUMNS--------------------columnX-----------------

function setClassesToCol(){
    for (i=0; i<(calcNumOfRows()); i++){
     for (y=0; y<(calcNumOfCol()); y++){
       var nameC = "column"+(y+1);
         getAllRows()[i].childNodes[y].setAttribute("class", nameC); 
     }
    }
}

setClassesToCol();

//INPUT BUTTONS

for (i=0; i<(calcNumOfRows()); i++){
     for (y=0; y<(calcNumOfCol()); y++){
         
        var val = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[y];
        var textV = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[y].innerHTML;
        
        var inp = document.createElement("INPUT");        // Create a <button> element
        inp.setAttribute("type", "number");
        inp.setAttribute("value", textV);
        document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[y].innerHTML="";
                                       // Append the text to <button>
        val.appendChild(inp); 
     }
}

   
 
 
 // CREATE DEL - CLONE BUTTONS
 function createDelDupButtons(){
      
     var ind=[]
     for(var i=0;i<(calcNumOfRows());i++ ){
       
        ind[i]= i;
        var value = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i];
        var btn = document.createElement("BUTTON"); 
        var icon = document.createTextNode("delete");
        btn.appendChild(icon);                                // Append the text to <button>
        value.appendChild(btn); 
        
        var btn2 = document.createElement("BUTTON");
        var icon2 = document.createTextNode("duplicate");
        btn2.appendChild(icon2);                                // Append the text to <button>
        value.appendChild (btn2); 
    
    
        btn.setAttribute("class","deleteButton" );
        btn2.setAttribute("class","duplicateButton" );

    
        
     }
 
}

   createDelDupButtons();

        
      
        


 
// FOOT SELECTOR LISTS
 
    var footTr = document.createElement("TR"); //CREATE TR FOR TFOOT
    footTr.setAttribute("id", "footRow");
    document.getElementsByTagName("tfoot")[0].appendChild(footTr);

    for(i=0;i<(calcNumOfCol());i++){
        
        
        var nameC = "column"+(i+1);
        var nameS = "selector"+(i+1);
        

        var footTd = document.createElement("td");
        footTd.setAttribute("class", nameC);
        
        var sel = document.createElement("SELECT");
        sel.setAttribute("id", nameS);
            
        footTd.appendChild(sel);
      
        
        document.getElementById("footRow").appendChild(footTd);
       
        var op1 = document.createElement("option");
        op1.setAttribute("value", "MAX");
        var t1 = document.createTextNode("MAX");
        op1.appendChild(t1);
       

        
        var op2 = document.createElement("option");
        op2.setAttribute("value", "MIN");
        var t2 = document.createTextNode("MIN");
        op2.appendChild(t2);
        
        var op3 = document.createElement("option");
        op3.setAttribute("value", "MODE");
        var t3 = document.createTextNode("MODE");
        op3.appendChild(t3);
        
        var op4 = document.createElement("option");
        op4.setAttribute("value", "MEAN");
        var t4 = document.createTextNode("MEAN");
        op4.appendChild(t4);
        
        var op5 = document.createElement("option");
        op5.setAttribute("value", "RANGE");
        var t5 = document.createTextNode("RANGE");
        op5.appendChild(t5);
         
        var op6 = document.createElement("option");
        op6.setAttribute("value", "MEDIAN");
        var t6 = document.createTextNode("MEDIAN");
        op6.appendChild(t6);
        
        var op7 = document.createElement("option");
        op7.setAttribute("value", "VARIANCE");
        var t7 = document.createTextNode("VARIANCE");
        op7.appendChild(t7);
        
        var op8 = document.createElement("option");
        op8.setAttribute("value", "STDDEV");
        var t8 = document.createTextNode("STDDEV");
        op8.appendChild(t8);
        
        
        
        
        document.getElementById(nameS).appendChild(op1);
        document.getElementById(nameS).appendChild(op2);
        document.getElementById(nameS).appendChild(op3);
        document.getElementById(nameS).appendChild(op4);
        document.getElementById(nameS).appendChild(op5);
        document.getElementById(nameS).appendChild(op6);
        document.getElementById(nameS).appendChild(op7);
        document.getElementById(nameS).appendChild(op8);
    }





//--------------SORTING-------------------------------------------------------

document.getElementsByTagName("button")[0].setAttribute("onclick", "sortByHeight()");
document.getElementsByTagName("button")[1].setAttribute("onclick", "sortByScore()");
document.getElementsByTagName("button")[2].setAttribute("onclick", "sortByIncome()");
document.getElementsByTagName("button")[3].setAttribute("onclick", "sortByAge()");




function sortByHeight(){
    
    sortTable(0);
    var els = document.querySelectorAll("td> button");
for (var i=0; i < (calcNumOfCol()); i++) {
    els[i].style.color = "black";
}

 document.getElementsByTagName("button")[0].style.color = "blue";
  
}   
    

function sortByScore(){
 
    sortTable(1);
    var els = document.querySelectorAll("td> button");
for (var i=0; i < (calcNumOfCol()); i++) {
    els[i].style.color = "black";
}

 document.getElementsByTagName("button")[1].style.color = "blue";
    
}   
    

function sortByIncome(){
    
    sortTable(2);
    var els = document.querySelectorAll("td> button");
for (var i=0; i < (calcNumOfCol()); i++) {
    els[i].style.color = "black";
}
 document.getElementsByTagName("button")[2].style.color = "blue";
    
}   
    

function sortByAge(){
    
    sortTable(3);
    var els = document.querySelectorAll("td> button");
for (var i=0; i < (calcNumOfCol()); i++) {
    els[i].style.color = "black";
}
 document.getElementsByTagName("button")[3].style.color = "blue";
    
}   
    
 
//----CALCULATE VALUES----------------------------------------------------------   

 //collect the data of each column 
 
    var ColData1 = document.querySelectorAll(" .column1 > INPUT ");
    var ColData2 = document.querySelectorAll(" .column2 > INPUT ");
    var ColData3 = document.querySelectorAll(" .column3 > INPUT ");
    var ColData4 = document.querySelectorAll(" .column4 > INPUT ");


document.getElementById("selector1").setAttribute("onchange", "calculator(ColData1, 1)"); 
document.getElementById("selector2").setAttribute("onchange", "calculator(ColData2, 2)"); 
document.getElementById("selector3").setAttribute("onchange", "calculator(ColData3, 3)"); 
document.getElementById("selector4").setAttribute("onchange", "calculator(ColData4, 4)"); 
      


function findMax(ColDatax){
    var maxv = ColDatax[0].value;
    for(var i=1;i<calcNumOfRows();i++){
        if (ColDatax[i].value> maxv)
                maxv = ColDatax[i].value;
         }
        return maxv;
}

function findMin(ColDatax){
    var minv = ColDatax[0].value;
    for(var i=1;i<calcNumOfRows();i++){
        if (ColDatax[i].value< minv)
                minv = ColDatax[i].value;
    }
    return minv;
}

function findMode(ColDatax){
    var maxValue=0;
    var maxCount=0;
    for (var g = 0; g < calcNumOfRows(); g++) {
        var count = 0;
        for (var j = 0; j < calcNumOfRows(); j++) {
            if (ColDatax[j].value === ColDatax[g].value) 
                count++;
        }
        if (count > maxCount) {
            maxCount = count;
            maxValue = ColDatax[g].value;
        }
      }
      return maxValue;
}

function findMean(ColDatax){

    var meanV =Number(ColDatax[0].value) ;
    for(var i=1;i<calcNumOfRows();i++)
        meanV += Number(ColDatax[i].value);

    return meanV /=  calcNumOfRows();      
}

function findRange(ColDatax){
   return findMax(ColDatax)-findMin(ColDatax);
}

function findMedian(ColDatax){
  
    var arr=[];
    for(var i=0;i<calcNumOfRows();i++)
        arr[i]= ColDatax[i].value;
    arr.sort();  
    return arr[2];
}           

function findVariance(ColDatax){
    var arr=[];          
    for(var i=0;i<calcNumOfRows();i++){
        arr[i]=findMean(ColDatax)- Number(ColDatax[i].value);
        arr[i] *= arr[i];
    }
     var sum= 0;
     for(var i=0; i<calcNumOfRows();i++)
        sum+= Number(arr[i]);
        
    return  sum/calcNumOfRows();
    
}

function finsStddev(ColDatax){
    
    return Math.pow(findVariance(ColDatax), 2);
}


//----CALCULATOR----------------------------------------------------------------

function calculator(ColDatax, x){
    
 

var selectorX = "selector"+x;
var resultX = "result"+x;


 if (document.getElementById(selectorX).value=== "MAX"){
        
                document.getElementById(resultX).innerHTML=  findMax(ColDatax);
        
            
         }else if (document.getElementById(selectorX).value=== "MIN"){
        
                document.getElementById(resultX).innerHTML=  findMin(ColDatax);
                    
                    
         }else if(document.getElementById(selectorX).value=== "MODE"){
        
                document.getElementById(resultX).innerHTML=   findMode(ColDatax);
                
        
          }else if(document.getElementById(selectorX).value=== "MEAN"){
                  
                document.getElementById(resultX).innerHTML= findMean(ColDatax) ;
                
                   
          }else if(document.getElementById(selectorX).value=== "RANGE"){
        
            document.getElementById(resultX).innerHTML=  findRange(ColDatax);
            
                
        }else  if(document.getElementById(selectorX).value===  "MEDIAN"){
        
             document.getElementById(resultX).innerHTML = findMedian(ColDatax);
                     
                     
         }else if(document.getElementById(selectorX).value=== "VARIANCE"){
        
            document.getElementById(resultX).innerHTML = findVariance(ColDatax);
            
             
         }else if(document.getElementById(selectorX).value===  "STDDEV"){
        
            document.getElementById(resultX).innerHTML = finsStddev(ColDatax);
             
         }
    
 }


  
//---------CREATE RESULTS' ROW--------------------------------------------------

    var footTr2 = document.createElement("TR"); //CREATE TR FOR TFOOT
    footTr2.setAttribute("id", "resultsRow");
    document.getElementsByTagName("tfoot")[0].appendChild(footTr2);

    for(i=0;i<(calcNumOfCol());i++){
        
        var nameC = "column"+(i+1);
        var nameR = "result"+(i+1);
        
        var footTd = document.createElement("td");
        footTd.setAttribute("class", nameC);
      footTd.setAttribute("id", nameR);
      
         footTd.textContent = "---";
        
        document.getElementById("resultsRow").appendChild(footTd);

    }

//---------INITIAL RESULTS------------------------------------------------------   
            var footTd = document.querySelectorAll("tfoot > tr ")
            footTd[1].getElementsByTagName("td")[0].textContent = findMax(ColData1);
            footTd[1].getElementsByTagName("td")[1].textContent = findMax(ColData2);
            footTd[1].getElementsByTagName("td")[2].textContent = findMax(ColData3);
            footTd[1].getElementsByTagName("td")[3].textContent = findMax(ColData4);
   
//-------------SORT FUNCTION----------------------------------------------------



 function sortTable(n) {  // n: index of column
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  
  while (switching) {
    switching = false;
    rows = document.querySelectorAll("tbody> tr");
   
    for (i = 0; i < (calcNumOfRows()-1); i++) {  
      shouldSwitch = false;
      //Get the two elements you want to compare
      x = rows[i].getElementsByTagName("TD")[n].getElementsByTagName("INPUT")[0];
      y = rows[i + 1].getElementsByTagName("TD")[n].getElementsByTagName("INPUT")[0];
     
      if (dir == "asc") {
        if (x.value > y.value) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.value< y.value) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      //if shouldSwitch, swap them
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

//----------DELETE FUNCTION-----------------------------------------------------

 function deleteRow(n){
    if((calcNumOfRows())> 1){
        var row = document.getElementsByTagName("tbody")[0].deleteRow(n);
		setIdsToRows();
	}else if((calcNumOfRows())=1){
        alert("You cannot delete the last row!");}

}



//------------ADD FUNCTION FOR EACH DUPLICATE BUTTON-------------------------------

    var elems= document.querySelectorAll(".duplicateButton");
    
    elems.forEach(function(elem) {
        elem.addEventListener("click", function() {
            var ind= (this.parentElement.rowIndex)-1;
            duplicateRow(ind);
        }); 
        
    });



//---------DUPLICATE FUNCTION---------------------------------------------------

 function duplicateRow(n){
     var rowToDup;
     if(calcNumOfRows()<12){
         var rowParent = document.getElementsByTagName("tbody")[0];
         rowToDup = rowParent.getElementsByTagName("tr")[n];
         
         var clone = rowToDup.cloneNode(true);
         
         rowParent.appendChild(clone);
         rowToDup.parentNode.insertBefore( clone,rowToDup.nextSibling);
         
          setIdsToRows();
          setEventToDelBtn();
          
    }else 
        alert("You are not allowed to duplicate more rows!");
 
    var newBtn= document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[n+1].getElementsByTagName("button")[1];
    newBtn.addEventListener("click", function() {
    
              var ind= (newBtn.parentElement.rowIndex)-1;
            duplicateRow(rowToDup.rowIndex); 
            
               
        }); 
      


}
//------------ADD FUNCTION FOR EACH DELETE BUTTON-------------------------------

function setEventToDelBtn(){
    var elems= document.querySelectorAll(".deleteButton");

    elems.forEach(function(elem) {
        elem.addEventListener("click", function() {
            var ind= (this.parentElement.rowIndex)-1;
            deleteRow(ind);
        }); 
    
    });
}
 setEventToDelBtn();


//------DELEGATION FOR AUTOMATIC UPDATE-----------------------------------------

function updateValues(){
	setClassesToCol();

    var ColData1 = document.querySelectorAll(" .column1 > INPUT ");
    var ColData2 = document.querySelectorAll(" .column2 > INPUT ");
    var ColData3 = document.querySelectorAll(" .column3 > INPUT ");
    var ColData4 = document.querySelectorAll(" .column4 > INPUT ");
    
    calculator(ColData1, 1);
    calculator(ColData2, 2); 
    calculator(ColData3, 3);
    calculator(ColData4, 4);
	
	myChart();
	
}
document.getElementsByTagName("tbody")[0].addEventListener("click", updateValues) ;


//--------CSS-------------------------------------------------------------------


var btnSt = document.querySelectorAll(" tr>td>button");
btnSt.forEach(function(btnSt){
  btnSt.setAttribute("style", "width:100px");
  
})

var inpSt= document.querySelectorAll("INPUT");
inpSt.forEach(function(inpSt){
   inpSt.setAttribute("style", "width:100px");
   
  
})

var delbtn = document.querySelectorAll("tbody>tr> .deleteButton");
delbtn.forEach(function(delbtn){
  delbtn.setAttribute("style", "width:50px");
   delbtn.setAttribute("style", "color: red");
    
})

var dupb = document.querySelectorAll("tbody>tr> .duplicateButton");
dupb.forEach(function(dupb){
  dupb.setAttribute("style", "width:63");
   dupb.setAttribute("style", "color: green");
    
})

//----dom storage------------------------------------------------------------------------------



function getScoreByHeight(){
var curId = document.getElementById("row1").id;

return 0;
}



	//==============================WEB STORAGE===============================================================================================
	
	//	UPDATE LIST OF PAIR HEIGHT-SCORE
		function updateList1(storage) {
			var key;
			var str = '';
			var storageObj = window[storage];
			Object.keys(storageObj).forEach(function (key) {
			   str += '<li data-key="'+key+'">	HEIGHT: &quot;'+key+'&quot; , SCORE: &quot;';
				str += storageObj.getItem(key)+'&quot; <button>Remove</button></li>';
			}); 
			document.getElementById(storage).innerHTML = str;
		}
		
		
	// STORE PAIRS HEIGHT-SCORE 	
		function storeHS(){
			
			localStorage.clear();				
			for (i=0;i<calcNumOfRows();i++){
				var curRN = "row"+(i+1);
				var key = document.getElementById(curRN).children[0].childNodes[0].value;
				var value = document.getElementById(curRN).children[1].childNodes[0].value;
				localStorage.setItem(key, value);
			
				updateList1('localStorage');	
			}
		}
		
		//document.getElementById('localStore1').addEventListener('click', storeHS) ;
		
//-------------------------------------------------------------------------------------------------
		//	UPDATE LIST OF PAIRS INCOME-AGE
		function updateList2(storage) {
			var key;
			var str = '';
			var storageObj = window[storage];
			Object.keys(storageObj).forEach(function (key) {
			  str += '<li data-key="'+key+'">INCOME: &quot;'+key+'&quot; , AGE: &quot;';
			  str += storageObj.getItem(key)+'&quot; <button>Remove</button></li>';
			}); 
			document.getElementById(storage).innerHTML = str;
		}
		
		// STORE PAIRS INCOME-AGE
		
		function storeIA(){
			localStorage.clear();				
			for (i=0;i<calcNumOfRows();i++){
				var curRN = "row"+(i+1);
				var key = document.getElementById(curRN).children[2].childNodes[0].value;
				var value = document.getElementById(curRN).children[3].childNodes[0].value;
				localStorage.setItem(key, value);
			
				updateList2('localStorage');	
			
			}
			
		}
		//document.getElementById('localStore2').addEventListener('click', storeIA);
//-------------------------------------------------------------------------------------------------
		
	//	UPDATE LIST OF PAIR HEIGHT-INCOME
		function updateList3(storage) {
			var key;
			var str = '';
			var storageObj = window[storage];
			Object.keys(storageObj).forEach(function (key) {
			   str += '<li data-key="'+key+'">	HEIGHT: &quot;'+key+'&quot; , INCOME: &quot;';
				str += storageObj.getItem(key)+'&quot; <button>Remove</button></li>';
			}); 
			document.getElementById(storage).innerHTML = str;
		}
		
	// STORE PAIR HEIGHT-INCOME	
		function storeHI(){
			
			localStorage.clear();				
			for (i=0;i<calcNumOfRows();i++){
				var curRN = "row"+(i+1);
				var key = document.getElementById(curRN).children[0].childNodes[0].value;
				var value = document.getElementById(curRN).children[2].childNodes[0].value;
				localStorage.setItem(key, value);
			
				updateList3('localStorage');	
			}
		}
	
		//document.getElementById('localStore3').addEventListener('click', storeHI) ;
//-------------------------------------------------------------------------------------------------
	
	//	UPDATE LIST OF PAIR HEIGHT-AGE
		function updateList4(storage) {
			var key;
			var str = '';
			var storageObj = window[storage];
			Object.keys(storageObj).forEach(function (key) {
			   str += '<li data-key="'+key+'">	HEIGHT: &quot;'+key+'&quot; , AGE: &quot;';
				str += storageObj.getItem(key)+'&quot; <button>Remove</button></li>';
			}); 
			document.getElementById(storage).innerHTML = str;
		}
		
	// STORE PAIR HEIGHT-AGE	
		function storeHA(){
			
			localStorage.clear();				
			for (i=0;i<calcNumOfRows();i++){
				var curRN = "row"+(i+1);
				var key = document.getElementById(curRN).children[0].childNodes[0].value;
				var value = document.getElementById(curRN).children[3].childNodes[0].value;
				localStorage.setItem(key, value);
			
				updateList4('localStorage');	
			}
		}
	
		//document.getElementById('localStore4').addEventListener('click', storeHA) ;
	
//-------------------------------------------------------------------------------------------------
	
	//	UPDATE LIST OF PAIR SCORE-INCOME
		function updateList5(storage) {
			var key;
			var str = '';
			var storageObj = window[storage];
			Object.keys(storageObj).forEach(function (key) {
			   str += '<li data-key="'+key+'">	SCORE: &quot;'+key+'&quot; , INCOME: &quot;';
				str += storageObj.getItem(key)+'&quot; <button>Remove</button></li>';
			}); 
			document.getElementById(storage).innerHTML = str;
		}
		
	// STORE PAIR SCORE-INCOME
		function storeSI(){
			
			localStorage.clear();				
			for (i=0;i<calcNumOfRows();i++){
				var curRN = "row"+(i+1);
				var key = document.getElementById(curRN).children[1].childNodes[0].value;
				var value = document.getElementById(curRN).children[2].childNodes[0].value;
				localStorage.setItem(key, value);
			
				updateList5('localStorage');	
			}
				
		}
	
	//	document.getElementById('localStore5').addEventListener('click', storeSI) ;
//-------------------------------------------------------------------------------------------------
	
	//	UPDATE LIST OF PAIR SCORE-AGE
		function updateList6(storage) {
			var key;
			var str = '';
			var storageObj = window[storage];
			Object.keys(storageObj).forEach(function (key) {
			   str += '<li data-key="'+key+'">	SCORE: &quot;'+key+'&quot; , AGE: &quot;';
				str += storageObj.getItem(key)+'&quot; <button>Remove</button></li>';
			}); 
			document.getElementById(storage).innerHTML = str;
		}
		
	// STORE PAIR SCORE-AGE	
		function storeSA(){
			
			localStorage.clear();				
			for (i=0;i<calcNumOfRows();i++){
				var curRN = "row"+(i+1);
				var key = document.getElementById(curRN).children[1].childNodes[0].value;
				var value = document.getElementById(curRN).children[3].childNodes[0].value;
				localStorage.setItem(key, value);
			
				updateList6('localStorage');	
			}
		}
	
	//	document.getElementById('localStore6').addEventListener('click', storeSA) ;
	
	
	// retrieve ALL values from storage	
	function allStorageValues() {
		var values = [],
			keys = Object.keys(localStorage),
			i = keys.length;
		while ( i-- ) {
			values.push( localStorage.getItem(keys[i]) );
		}

		return values;
	}
	
	//retrieve ALL keys from storage
	function allStorageKeys() {
		var values = [],
			keys = Object.keys(localStorage),
			i = keys.length;
		while ( i-- ) {
			values.push( localStorage.key(i));
		}

		return values.sort();
	}
	
	//store data from localStorage to sessionStorage
	document.getElementById('storeSS').addEventListener('click', function(){
		
		const grValues = allStorageValues();
		const grKeys = allStorageKeys();
	
			for(var i=0;i<grKeys.length; i++){
				sessionStorage.setItem(grKeys[i], localStorage.getItem(grKeys[i]));	
			
			}
					
	}) ;
	
	// CLEAR LOCAL STORE
	  document.getElementById('lClear').addEventListener('click', function () {
                localStorage.clear();
                updateList1('localStorage');
				 updateList2('localStorage');
            });
	
	// CLEAR SESSION STORE
	  document.getElementById('sClear').addEventListener('click', function () {
                sessionStorage.clear();
            });
//-------------------------------------GRAPHS-------------------------------------------------------------------------
	
	//CREATE GRAPH HEIGHT-SCORE
	function createHSGraph(graphType){
		storeHS();
		
		const grValues = allStorageValues();
		const grKeys = allStorageKeys();
		
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		  type: graphType,
		  data: {
			labels: grKeys,
			datasets: [{
			  label: 'HEIGHT-SCORE',
			  data: grValues,
			  backgroundColor: "rgba(153,255,51,0.4)"
			}]
		 }
		});
		
	}
	

	
	//CREATE GRAPH INCOME-AGE
	function createIAGraph(graphType){
		storeIA();
		
		const grValues = allStorageValues();
		const grKeys = allStorageKeys();
		
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		  type: graphType,
		  data: {
			labels: grValues,
			datasets: [{
			  label: 'AGE-INCOME',
			  data: grKeys,
			  backgroundColor: "rgba(153,255,51,0.4)"
			}]
		 }
		});
		
	}
	
	//CREATE GRAPH HEIGHT-INCOME
	function createHIGraph(graphType){
		storeHI();
		
		const grValues = allStorageValues();
		const grKeys = allStorageKeys();
		
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		  type: graphType,
		  data: {
			labels: grValues,
			datasets: [{
			  label: 'HEIGHT-INCOME',
			  data: grKeys,
			  backgroundColor: "rgba(153,255,51,0.4)"
			}]
		 }
		});
		
	}
	
	
	//CREATE GRAPH HEIGHT-AGE
	function createHAGraph(graphType){
		storeHA();
		
		const grValues = allStorageValues();
		const grKeys = allStorageKeys();
		
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		  type: graphType,
		  data: {
			labels: grValues,
			datasets: [{
			  label: 'HEIGHT-AGE',
			  data: grKeys,
			  backgroundColor: "rgba(153,255,51,0.4)"
			}]
		 }
		});
		
	}
	
	//CREATE GRAPH SCORE-INCOME
	function createSIGraph(graphType){
		storeSI();
		
		const grValues = allStorageValues();
		const grKeys = allStorageKeys();
		
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		  type: graphType,
		  data: {
			labels: grValues,
			datasets: [{
			  label: 'SCORE-INCOME',
			  data: grKeys,
			  backgroundColor: "rgba(153,255,51,0.4)"
			}]
		 }
		});
		
	}
	
	
	//CREATE GRAPH SCORE-AGE
	function createSAGraph(graphType){
		storeSA();
		
		const grValues = allStorageValues();
		const grKeys = allStorageKeys();
		
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		  type: graphType,
		  data: {
			labels: grValues,
			datasets: [{
			  label: 'SCORE-AGE',
			  data: grKeys,
			  backgroundColor: "rgba(153,255,51,0.4)"
			}]
		 }
		});
		
	}
	
	
	
	
	function myChart(){
		var counter = 0;
	  var checkBox1 = document.getElementById("myCheck1");
	  var checkBox2 = document.getElementById("myCheck2");
	  var checkBox3 = document.getElementById("myCheck3");
	  var checkBox4 = document.getElementById("myCheck4");
	  var factors = [];
	  
	  if (checkBox1.checked == true){
		counter++;
	  } 
		
	  if (checkBox2.checked == true){
		counter++;
	  }
		
	  if (checkBox3.checked == true){
		counter++;
	  }
	  
	  if (checkBox4.checked == true){
		counter++;
	  }

		  if (counter === 3){
		alert('Pick ONLY TWO Please')
		document; return false;
		}else if (counter===2){
					if (checkBox1.checked==true && checkBox2.checked==true){
							if(document.getElementById("radioB1").checked)
								createHSGraph("line");
							else 
								createHSGraph("bar");
				}else if (checkBox1.checked==true && checkBox3.checked==true){
					if(document.getElementById("radioB1").checked)
						createHIGraph("line");
					else
						createHIGraph("bar");
					}else if (checkBox1.checked==true && checkBox4.checked==true){
						if(document.getElementById("radioB1").checked)
							createHAGraph("line");
						else
							createHAGraph("bar");
				}	else if (checkBox2.checked==true && checkBox3.checked==true){
						if(document.getElementById("radioB1").checked)
							createSIGraph("line");
						else
							createSIGraph("bar");
				}	else if (checkBox2.checked==true && checkBox4.checked==true){
						if(document.getElementById("radioB1").checked)
							createSAGraph("line");
						else
							createSAGraph("bar");
				}	else if (checkBox3.checked==true && checkBox4.checked==true){	
						if(document.getElementById("radioB1").checked)
							createIAGraph("line");
						else
							createIAGraph("bar");
				}	
	
		}
		
	}





	
