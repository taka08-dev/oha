jQuery(" #js-drawer-icon").on("click" , function(e){
    e.preventDefault();
    jQuery(" #js-drawer-icon").toggleClass("is-checked");
    jQuery(" #js-drawer-content").toggleClass("is-checked");
});


jQuery(".js-accordion").on("click" , function(e){
    e.preventDefault();
    if(jQuery(this).parent().hasClass("is-open")){
        jQuery(this).parent().removeClass("is-open")
        jQuery(this).next().slideUp();
    }else{
        jQuery(this).parent().addClass("is-open")
        jQuery(this).next().slideDown();
    }
});

const swiper = new Swiper('#js-gallery-swiper', {

    spaceBetween:70,
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '#js-gallery-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#js-gallery-next',
      prevEl: '#js-gallery-prev',
    },
  });

  jQuery(".js-modal-open").on("click",function(e){
    e.preventDefault();
    jQuery('#js-about-modal')[0].showModal();
  });
  jQuery(".js-modal-close").on("click",function(e){
    e.preventDefault();
    jQuery('#js-about-modal')[0].close();
  });

  jQuery('#js-drawer-content a[href^="#"]').on("click" , function(){
    jQuery(" #js-drawer-icon").removeClass("is-checked");
    jQuery(" #js-drawer-content").removeClass("is-checked");
  });

  jQuery('a[href^="#"]').on("click", function(){
    const id = jQuery(this).attr("href");
    const target = jQuery("#" == id ? "html" : id);
    const position = jQuery(target).offset().top;
    const speed = 300
    jQuery("html , body").animate(
      {
      scrollTop:position,
    },
      speed,
      "swing"
  )

  });

  jQuery(window).on("scroll",function(){
    if(100 < jQuery(window).scrollTop()){
      jQuery("#js-pagetop").addClass("is-show");
    }else{
      jQuery("#js-pagetop").removeClass("is-show");
    }
  });
  
  const intersectionObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("is-in-view");
      }else{
        entry.target.classList.remove("is-in-view");
      }
    })
  })

  const inViewItems = document.querySelectorAll(".js-in-view");
  inViewItems.forEach(function(inViewItem){
    intersectionObserver.observe(inViewItem)
  })