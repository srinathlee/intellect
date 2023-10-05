

let popular_cards_container=document.getElementById("popular-cards-container")


let service_cards_container=document.getElementById("contact-service-cards-container")

let popularcardsData=[{name:"Executive Room",path:"./assets/images/popularcardimg1.jpeg"},
{name:"Premium Room",path:"./assets/images/popularcardimg2.jpeg"},
{name:"Basic Room ",path:"./assets/images/popularcardimg3.jpeg"}]


function CreateAppendPopularCards(item){
    const {name,path}=item
     console.log(name)
    //creating elements_____________________________________
    let CardContainer=document.createElement("div");
    let CardImage=document.createElement("img");
    let TextContainer=document.createElement("div");
    let TextHeading=document.createElement("h1");
    let DetailContainer=document.createElement("div");
    let Amount=document.createElement("p");
    let StarsRatingContiner=document.createElement("div");
    let StartContainer=document.createElement("div");
    let Star=document.createElement("img");
    let Rating=document.createElement("p");

    

    //adding content to elements_____________________________

    CardImage.src=path;
    TextHeading.textContent=name;
    Amount.textContent="$200 Par Night";
    Star.src="./assets/images/fourstarsedit.png"
    Rating.textContent="4.8";
    


    // appending elements ___________________________________

    CardContainer.appendChild(CardImage);
    CardContainer.appendChild(TextContainer)
    TextContainer.appendChild(TextHeading)
    TextContainer.appendChild(DetailContainer)
    DetailContainer.appendChild(Amount)
    DetailContainer.appendChild(StarsRatingContiner)
    StarsRatingContiner.appendChild(StartContainer)
    StartContainer.appendChild(Star)

    StarsRatingContiner.append(Rating)
  
    popular_cards_container.appendChild(CardContainer)
    
//    console.log(Star)
    // styling elements _______________________________________
    CardContainer.style.cssText = `
    background:white;
    border-radius:10px;
    overflow:hidden;
    width:fit-content
  `;
  Star.style.cssText=`
  width:100px;
  margin-right:10px;
  `
//   StartContainer.style.cssText=`
//   padding:10px
//   display:flex;
// width:30px;
// background:gray;`
  
    CardImage.style.cssText=`
    width:400px;
    `
    TextHeading.style.cssText=`
    color: #222;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight:600;
    line-height:30px;
    margin-bottom:25px;
    `
    TextContainer.style.cssText=`
    padding:15px;
    `
    StarsRatingContiner.style.cssText=`
    display:flex;
    justify-content:center;
  font-family:open sans;
    `
    DetailContainer.style.cssText=`
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
        `

        Amount.style.cssText=`
        color: #222;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    
    `
    }

    // calling popular cards_____________________________________
    for(let item of popularcardsData){
        CreateAppendPopularCards(item)
    }




    // _____________________________________contact-service cards container______________________________________


    const serviceCardsData=[{name:"Private Workspace",image:"./assets/icons/computer.svg"},
    {name:"Parking Areaa",image:"./assets/icons/p-letter.svg"},
    {name:"BrakFast",image:"./assets/icons/teacup.svg"},
    {name:"FreeWifi",image:"./assets/icons/wifi.svg"},
    {name:"Free Electricity",image:"./assets/icons/thunder.svg"},
    {name:"Swimming Pool",image:"./assets/icons/swimming.svg"},
    {name:"Workout Space",image:"./assets/icons/dumbell.svg"},
    {name:"Other Services",image:"./assets/icons/threedots.svg"}]

    function CreateAppendServiceCard(item){
        const {image,name}=item
        //creating elements_____________________________________
        let CardContainer=document.createElement("div");
        let CardImage=document.createElement("img");
        let TextHeading=document.createElement("h1");

        // adding content______________________________________________

        CardImage.src=image
        TextHeading.textContent=name
        

        // appending elements_____________________________________

        CardContainer.appendChild(CardImage)
        CardContainer.appendChild(TextHeading)
        service_cards_container.appendChild(CardContainer)

        // styling_____________________________________________
        CardContainer.style.cssText=`
        background:white;
        padding:50px 30px;
        width:200px;
        border-radius:10px;
        // width:fit-content;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:30px;`

        TextHeading.style.cssText=`
        font-family:open sans;
        color:#222;
        font-size:16px;
        font-weight:none;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;`

        CardImage.style.cssText=`
        height:30px;
        width:30px;
        `

    }


    // calling service card_____________________________________________
    for(let item of serviceCardsData){
        CreateAppendServiceCard(item)
    }
