import data from './imagelist.json' assert { type: 'json' };;

(function(){
    
    var pContainer = document.querySelector('.portfolio-container');

    data.forEach(element =>{
        var outerDIV = document.createElement("DIV");
        outerDIV.className = "col-lg-4 col-md-6 portfolio-item "+element.filter_class;
        
        var wrapDIV = document.createElement("DIV");
        wrapDIV.className = "portfolio-wrap";

        var imgElement = document.createElement("IMG");
        imgElement.className = "img-fluid";
        imgElement.setAttribute("src", element.img_src);
        imgElement.setAttribute("alt", "");

        var pinfoDIV = document.createElement("DIV");
        pinfoDIV.className = "portfolio-info";

        var titleElement = document.createElement("H4");
        titleElement.innerHTML = element.title;
        
        var contentElement = document.createElement("P");
        contentElement.innerHTML = element.content;
        
        var pLinksDIV = document.createElement("DIV");
        pLinksDIV.className = "portfolio-links";

        var galleryLinkElement = document.createElement("A");
        galleryLinkElement.className = "portfolio-lightbox";
        galleryLinkElement.setAttribute("title", element.title);
        galleryLinkElement.setAttribute("href", element.img_src);
        galleryLinkElement.setAttribute("data-gallery", "portfolioGallery");
        
        var galleryLinkIconElement = document.createElement("I");
        galleryLinkIconElement.className = "bx bx-plus";

        galleryLinkElement.appendChild(galleryLinkIconElement);

        var moreLinkElement = document.createElement("A");
        moreLinkElement.setAttribute("title", "More details");
        moreLinkElement.setAttribute("href", element.url);
        
        var moreLinkIconElement = document.createElement("I");
        moreLinkIconElement.className = "bx bx-link";

        moreLinkElement.appendChild(moreLinkIconElement);

        pLinksDIV.appendChild(galleryLinkElement);
        pLinksDIV.appendChild(moreLinkElement);

        pinfoDIV.appendChild(titleElement);
        pinfoDIV.appendChild(contentElement);
        pinfoDIV.appendChild(pLinksDIV);

        //ASSEMBLE DIVS
        wrapDIV.appendChild(imgElement);
        wrapDIV.appendChild(pinfoDIV);        
        outerDIV.appendChild(wrapDIV);
        
        pContainer.appendChild(outerDIV);
    });

    let portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });

})()


