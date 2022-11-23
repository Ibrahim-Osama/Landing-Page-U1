// Count li in navbar
let li =  document.getElementById('navbar__list')
console.log(li.children.length);
// create menu link 
let lis = `  <li><a href="#section1">Section1</a></li>
<li><a href="#section2">Section2</a></li>
<li><a href="#section3">Section3</a></li>
<li><a href="#section4">Section4</a></li>`
li.innerHTML+=lis

//add scrollBehavior 
document.getElementById('s').style.scrollBehavior = 'smooth'
console.log(main);

// create li when click to navbar
btn.addEventListener('click',()=>
{
   let linode =  document.createElement('li')
   let anode = document.createElement('a')
   let textnode = document.createTextNode(`Section${li.children.length+1}`)
   linode.appendChild(anode)
   anode.appendChild(textnode)
   anode.setAttribute("href", `#section${li.children.length+1}`);

   console.log(linode);

   // add li to navbar
   li.appendChild(linode)

    // add in body
   let section =  document.createElement('section')
   section.setAttribute("id", `section${li.children.length}`);
   section.setAttribute("data-nav", `Section ${li.children.length}`);
   
   let div = document.createElement('div')
   div.setAttribute("class", `landing__container`);
   


   let h2 = document.createElement('h2')
    let h2p = document.createTextNode(`Section ${li.children.length}`)
   h2.appendChild(h2p)
   
   let p = document.createElement('p')
   let pp = document.createElement('p')
   let text = document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`)
   let SecondText = document.createTextNode(`Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`)

   p.appendChild(text)
   pp.appendChild(SecondText)
   div.appendChild(h2)
   div.appendChild(p)
   div.appendChild(pp)
   
   section.appendChild(div)

   console.log(section);
   
   main.appendChild(section)
})


window.addEventListener('scroll',(e)=>
{
  
   let sections = document.querySelectorAll('section')
let nali = document.querySelectorAll('nav ul li a')
   let now = ''
   sections.forEach((section) =>
      {
         
         let sectionup = section.offsetTop
         if(scrollY >= sectionup)
         {
            now = section.getAttribute('id')
            
         }
      })
  try
  {
   nali.forEach((li)=>
   {
      li.classList.remove('active')
     lihref= document.querySelector('nav ul li a[href*= '+ now +']')
     if(lihref)
     {
      lihref.classList.add('active')
      
     }
   })
  }
  catch
  {
   

  }

  
})