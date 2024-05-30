function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


const reviewCount = getQueryParam('reviewCount');

document.getElementById('reviewCountMessage').innerText = `You have submitted ${reviewCount} reviews.`;