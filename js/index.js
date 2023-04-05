var prodName = document.getElementById('prodName');
var prodprice = document.getElementById('prodprice');
var prodcategory = document.getElementById('prodcategory');
var updateprod = document.getElementById('updateprod');
var addprod = document.getElementById('addprod');
var prodnum = document.getElementById('prodnum');
var kopry ;
var prodcontainer =[]

var kopry;
if(localStorage.getItem('prod')!= null)
{
    prodcontainer= JSON.parse(localStorage.getItem('prod')) 
    displayprod(prodcontainer)
}
function addprodu()
{
if(document.getElementById('addprod').innerHTML=='addprod')
{

    var prodinfo =
    {
        name:prodName.value,
        price:prodprice.value,
        category:prodcategory.value,
        disc:proddisc.value,
        numb:prodnum.value
    }
    prodcontainer.push(prodinfo)
    localStorage.setItem('prod',JSON.stringify(prodcontainer))
    clear()
    displayprod(prodcontainer)
    console.log(prodcontainer)


}
else
{
    var produpdate =
    {
        name:prodName.value,
        price:prodprice.value,
        category:prodcategory.value,
        disc:proddisc.value,
        numb:prodnum.value
    }
    prodcontainer.splice(kopry , 1 , produpdate)
    displayprod(prodcontainer)
    document.getElementById('addprod').innerHTML='addprod'
    localStorage.setItem('prod',JSON.stringify(prodcontainer))
    clear()
}
}
function displayprod(arr)
{
    cartonna =``
    for( i=0 ; i<arr.length ; i++ )
    {
        cartonna+=`
        <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].category}</td>
        <td>${arr[i].disc}</td>
        <td>${arr[i].numb}</td>
        <td><button onclick="deleteprod(${i})" class="btn btn-danger">Delete</button></td>
        <td><button  onclick="updateproduct(${i})"  class="btn btn-info">update</button></td>
        <td><i onclick="prodNumberminus(${i})" class="fa-solid fa-circle-minus icon "></i></td>
        <td><i onclick="prodNumberPlus(${i})" class="fa-solid fa-circle-plus icon"></i></td>
        

    </tr>
        
        `
       }
     document.getElementById('demo').innerHTML=cartonna
}
function deleteprod(index)
{
    prodcontainer.splice(index,1)
    localStorage.setItem('prod',JSON.stringify(prodcontainer))
    displayprod(prodcontainer)
}
function searchprod(term)
{
    
    var searchproducts =[]
   
    for( var i=0 ; i<prodcontainer.length ; i++ )
    {
        
        if(prodcontainer[i].name.toLowerCase().includes(term.toLowerCase())==true)
        {
            searchproducts.push(prodcontainer[i])
            
        }
        
    }
    displayprod(searchproducts)
    console.log(searchproducts)
}
function clear()
{
    prodName.value=''
    prodprice.value=''
    prodcategory.value=''
    proddisc.value=''   
}
function updateproduct(i)
{

    kopry=i
    prodName.value=prodcontainer[i].name
    prodprice.value=prodcontainer[i].price
    prodcategory.value=prodcontainer[i].category
    proddisc.value=prodcontainer[i].disc
    prodnum.value=prodcontainer[i].numb
    document.getElementById('addprod').innerHTML='Edit'
    console.log(i)
}

function prodNumberminus(i)
{
prodcontainer[i].numb--
displayprod(prodcontainer)
localStorage.setItem('prod',JSON.stringify(prodcontainer))
}
function prodNumberPlus(i)
{
prodcontainer[i].numb++
displayprod(prodcontainer)
localStorage.setItem('prod',JSON.stringify(prodcontainer))
}

