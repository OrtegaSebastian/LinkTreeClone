const shareButtons =document.querySelectorAll('.tile-share-button')

async function copyText(event){
    //prevent button going to the site
    event.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert('Copied the text: '+ link)
    }    
    catch(error){
        console.error(error)
    }
}

shareButtons.forEach(shareButton=>shareButton.addEventListener('click',copyText))