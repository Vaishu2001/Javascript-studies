const product_list ={
    
    product:[
        {title :'Carpet',
        imgurl:"C:\\Users\\ASUS\\Desktop\\edu2.jpg",
        price:250,
        description:"Buy this if you like it"

    },
    {
        title :'Umbrella',
        imgurl:"C:\\Users\\ASUS\\Downloads\\safari.jpg",
        price:450,
        description:"Buy this if you like it"

    }
],
render:function()
{
    const renderHook=document.getElementById('app');
    
    const prodList = document.createElement('ul');
    renderHook.append(prodList);
    prodList.className='prod_list';
    for(const prod of this.product)
    {
        const prodEl=document.createElement('li');
        prodEl.className='prod_item';
        prodEl.innerHTML =`
        <div>
        <img src= "${prod.imgurl}" alt="Not worked">
        <div class='prod_details'>
        <h1>${prod.price}</h1>
        <h2>${prod.description}</h2>
        <button>Add to Cart</button>
        </div>
        </div>
        `
        prodList.append(prodEl);
        
        
    }
}
}
product_list.render();