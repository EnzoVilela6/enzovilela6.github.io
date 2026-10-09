(function(){
var els=document.querySelectorAll('.rv');
function fill(r){r.querySelectorAll('[data-w]').forEach(function(i){i.style.width=i.dataset.w+'%'})}
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('on');fill(e)});document.querySelectorAll('[data-w]').forEach(function(i){i.style.width=i.dataset.w+'%'});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');fill(e.target);io.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(e){io.observe(e)});
var b=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){fill(e.target);b.unobserve(e.target)}})},{threshold:.2});
document.querySelectorAll('.cols>.rv').forEach(function(e){b.observe(e)});
})();
