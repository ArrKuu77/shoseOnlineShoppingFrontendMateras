const ulTag = document.querySelector("ul");
const MobileMenuTag = document.getElementsByClassName("MobileMenu")[0];
const overLayMenuTag = document.getElementsByClassName("overLayMenu")[0];
const overLayCloseTag = document.getElementsByClassName("overLayClose")[0];
const sliderTag = document.getElementsByClassName("slider")[0];
const SecondColumTag = document.getElementsByClassName("SecondColum")[0];
const MinusTag = document.getElementsByClassName("Minus")[0];
const PlusTag = document.getElementsByClassName("Plus")[0];
const CountTag = document.getElementsByClassName("Count")[0];
let CustomerBuy = document.getElementsByClassName("CustomerBuy")[0];
const ButtomTag = document.getElementsByClassName("Buttom")[0];
const CartTag = document.getElementsByClassName("Cart")[0];
const CartComeAddDivTag = document.getElementsByClassName("CartComeAddDiv")[0];
const priceTag = document.getElementsByClassName("Price")[0];
const OverLayImageDisplayTag = document.getElementsByClassName("OverLayImageDisplay")[0];
const overLayImageTag = document.getElementsByClassName("overLayImage")[0];
const OverLayImageDisplayTap = document.getElementsByClassName("OverLayImageDisplay")[0];
const overlayImgMainDivTag = document.getElementsByClassName("overlayImgMainDiv")[0];
const OverClose = document.getElementsByClassName("overClose")[0];
const MobilePreviousTag = document.getElementsByClassName("MobilePrevious")[0];
const MobileNextTag = document.getElementsByClassName("MobileNext")[0];
const LeftMainImgTag = document.getElementsByClassName("LeftMainImg")[0];

const tap = ["Collections","Men","Women","About","Contact"];

const sliderMovingFunction =(event) => {
    const clickLiTagId = event.target.id;
    sliderTag.style.display = "block"
    const clickLiTag = document.getElementById(clickLiTagId);
    const clickLiTagWidth = clickLiTag.offsetWidth;
    sliderTag.style.width = clickLiTagWidth + "px";
    const clickLiTagleft = clickLiTag.offsetLeft;
    sliderTag.style.transform = `translateX(${clickLiTagleft}px)`
}

for (let i = 0; i < tap.length; i++) {
    const liTag = document.createElement("li");
    liTag.classList.add("liTag");
    liTag.addEventListener("click",sliderMovingFunction);
    liTag.append(tap[i]);
    liTag.id = i;
    ulTag.append(liTag);
};

MobileMenuTag.addEventListener("click",() =>{
    overLayMenuTag.classList.add("ShowOverLayMenu");
    overLayMenuTag.classList.add("openOverLay");
});
overLayCloseTag.addEventListener("click",() =>{
    overLayMenuTag.classList.contains("openOverLay")
    overLayMenuTag.classList.remove("openOverLay");
    overLayMenuTag.classList.remove("ShowOverLayMenu")
})
const BigImageArray = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"]
const ImageArray = ["images/image-product-1-thumbnail.jpg","images/image-product-2-thumbnail.jpg","images/image-product-3-thumbnail.jpg","images/image-product-4-thumbnail.jpg"]
let i = 0 ;

MobileNextTag.addEventListener("click",() =>{
    i +=1;
    if (i>ImageArray.length-1) {
        i = 0;
        LeftMainImgTag.src = BigImageArray[i];
        return;
    }else{
        LeftMainImgTag.src = BigImageArray[i];
    }
})

MobilePreviousTag.addEventListener("click",() => {
    i -=1
    if (i === -1) {
        i = 3;
        LeftMainImgTag.src = BigImageArray[i];
        return;
    }else{
        LeftMainImgTag.src = BigImageArray[i];   
    }
})

SecondColumTag.addEventListener("click",() => {
    OverLayImageDisplayTap.classList.add("showOverLayImageDisplay");
    overlayImgMainDivTag.classList.add("showoverlayImgMainDiv");

    const CloseButtonDiv = document.createElement("div");
    CloseButtonDiv.classList.add("CloseButtonDiv","far","fa-times-circle");

    const closeOnlyDiv = document.createElement("div");
    closeOnlyDiv.classList.add("CloseOnlyDiv")

    const overlayImgMainSecondDiv = document.createElement("div");
    overlayImgMainSecondDiv.classList.add("overlayImgMainSecondDiv");

    const previousButton = document.createElement("i");
    previousButton.classList.add("PreviousAndNext","fas","fa-chevron-circle-left");

    previousButton.addEventListener("click",() =>{
        i -=1
        if (i === -1) {
            i = 3;
            OverImg.src = ImageArray[i];
            return;
        }else{
            OverImg.src = ImageArray[i];   
        }
    })
   

    const OverImg = document.createElement("img");
    OverImg.classList.add("OverImg");
    OverImg.src = "images/image-product-1.jpg";

    const NextButton = document.createElement("i");
    NextButton.classList.add("PreviousAndNext", "fas","fa-chevron-circle-right");

    NextButton.addEventListener("click",() => {
        i +=1;
        if (i > ImageArray.length-1) {
            i =0;
            OverImg.src = ImageArray[i];
        return;
        }else{
            OverImg.src = ImageArray[i];
        }
    })

    CloseButtonDiv.addEventListener("click",() => {
        OverLayImageDisplayTap.classList.remove("showOverLayImageDisplay");
        overlayImgMainDivTag.classList.remove("showoverlayImgMainDiv");
        overlayImgMainSecondDiv.remove();
        closeOnlyDiv.remove();
    })

    closeOnlyDiv.append(CloseButtonDiv);
    overlayImgMainSecondDiv.append(previousButton,OverImg,NextButton)
    overlayImgMainDivTag.append(closeOnlyDiv,overlayImgMainSecondDiv);

    // const overLayImgMainDiv = document.createElement("div");
    // overLayImgMainDiv.classList.add("overLayImgMinDiv");

    // const overImgMainDiv = document.createElement("div");
    // overImgMainDiv.classList.add("OverLayMainDiv");

    // const overImage = document.createElement("img");
    // overImage.classList.add("overImage");
    // overImage.src = "images/image-product-1-thumbnail.jpg";
    
    // overImgMainDiv.append(overImage,);
    // overLayImgMainDiv.append(overImgMainDiv);
    // OverLayImageDisplayTag.append(overLayImgMinDiv);

})

let countNumber = 0;

PlusTag.addEventListener("click",() => {
    countNumber += 1;
    CountTag.textContent = countNumber;
})

MinusTag.addEventListener("click",() =>{
    if (countNumber === 0) {
        return;
    }
    countNumber -= 1;
    CountTag.textContent = countNumber;
})

ButtomTag.addEventListener("click", () => {

    if (CustomerBuy.classList.contains("showCustomerBuy")) {
        CustomerBuy.innerHTML = "";
    }
    const CountText = CountTag.innerHTML;
    if (CountText === "0") {
        return;
    }
    CustomerBuy.classList.add("showCustomerBuy");
    CustomerBuy.append(CountText);
    CountTag.innerHTML = "0";
    countNumber = 0;
})

CartTag.addEventListener("click",() => {

    if (CustomerBuy.innerHTML === "") {
        if (CartComeAddDivTag.classList.contains("CartDivOpen")) {
            CartComeAddDivTag.classList.remove("CartDivOpen")
            CartComeAddDivTag.style.display = "none";
            const CartHead = document.getElementsByClassName("CartInsideMainDiv")[0];
            CartHead.remove();
        }else{
        CartComeAddDivTag.style.display = "block";
    
        const CartHead = document.createElement("div");
        CartHead.classList.add("CartInsideMainDiv");
    
        const CartText = document.createElement("h4");
        CartText.append("Cart")
    
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("EmptyDiv");
    
        const EmptyTextDiv = document.createElement("div");
        EmptyTextDiv.append("Your cart is empty.");
        EmptyTextDiv.classList.add("EmptyTextDiv");
    
        CartHead.append(CartText,emptyDiv,EmptyTextDiv)
        CartComeAddDivTag.append(CartHead);
        CartComeAddDivTag.classList.add("CartDivOpen")
        }    
    }else{

        if (CartComeAddDivTag.classList.contains("CartDivOpen")) {
            CartComeAddDivTag.classList.remove("CartDivOpen")
            CartComeAddDivTag.style.display = "none";
            const CartHead = document.getElementsByClassName("CartInsideMainDiv")[0];
            CartHead.remove();
        }else{
            CartComeAddDivTag.style.display = "block";

            const CartHead = document.createElement("div");
            CartHead.classList.add("CartInsideMainDiv");
        
            const CartText = document.createElement("h4");
            CartText.append("Cart");
    
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("EmptyDiv");
    
            const CartDataDiv = document.createElement("div");
            CartDataDiv.classList.add("CartDataDiv");
    
            const CartDataImg = document.createElement("img");
            CartDataImg.src = "images/image-product-1-thumbnail.jpg";
            CartDataImg.classList.add("CartDataImg");
    
            const CartMidText = document.createElement("div");
            CartMidText.classList.add("CartMidText");
    
            const CartMidSpan = document.createElement("div");
            CartMidSpan.append("Fall Limited Edition Sneakers");
    
            const PriceAndQuantity = document.createElement("div");
            PriceAndQuantity.classList.add("PriceAndQuantity")
            const TotleAmount = document.createElement("div");
            TotleAmount.classList.add("TotleAmount")
            const Cost = `${ 125.00 * CustomerBuy.innerHTML}.00`;
            const CostDisplay = priceTag.innerHTML+ "×"+ CustomerBuy.innerHTML; 

            TotleAmount.append("$"+Cost);

            PriceAndQuantity.append(CostDisplay,TotleAmount);
    
            const CartRemove = document.createElement("div");
            CartRemove.classList.add("far", "fa-trash-alt")

            CartRemove.addEventListener("click",() => {
                CartHead.remove();
                CartComeAddDivTag.classList.remove("CartDivOpen");
                CustomerBuy.innerHTML = "";
                CartComeAddDivTag.style.display = "none";
            })
    
            const CheckOutButtom = document.createElement("div")
            CheckOutButtom.classList.add("CheckOutButtom");
            CheckOutButtom.append("Checkout");
    
            CartMidText.append(CartMidSpan,PriceAndQuantity);
            CartDataDiv.append(CartDataImg,CartMidText,CartRemove);
    
            CartHead.append(CartText,emptyDiv,CartDataDiv,CheckOutButtom);
            CartComeAddDivTag.append(CartHead);
            CartComeAddDivTag.classList.add("CartDivOpen")
        }
    }

})