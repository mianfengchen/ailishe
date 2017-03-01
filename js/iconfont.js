;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-yifu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M716.036 824.620044 317.157383 824.620044 317.157383 433.82043l-64.241117 0 0 395.894655c0 32.612769 27.619034 59.146075 61.567217 59.146075l404.227438 0c33.94716 0 61.567217-26.533306 61.567217-59.146075L780.278139 433.82043l-64.241117 0L716.037023 824.620044z"  ></path>'+
      ''+
      '<path d="M943.80861 328.752466 805.91196 160.421666c-12.127202-14.811334-30.065759-23.307845-49.211818-23.307845L602.920756 137.113821l-25.771967-0.344854-5.528923 25.251104c-1.971911 8.108678-14.440897 48.556902-66.272379 48.556902-51.02307 0-61.9704-39.433104-63.573921-46.974871l-4.246721-26.225291-180.316785 0c-19.694551 0-38.5899 9.341762-50.553373 24.996301L79.783091 328.45673c-17.805528 23.307845-15.597233 56.528458 5.140067 77.273944l111.911836 111.954815 45.435819-45.416376L133.719514 363.676883 257.519098 201.617927l129.736806 0c15.60542 33.708729 51.423183 73.200162 118.091582 73.200162 66.679655 0 103.548354-39.827077 119.92637-73.463152l131.128503 0 134.810359 164.566056-93.679589 108.010993 48.533366 42.091654 96.674806-111.470791C961.567066 382.849548 962.013227 350.97049 943.80861 328.752466z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-search" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M977.206 889.477l-198.989-198.98c47.243-66.533 75.289-147.641 75.289-235.449 0-225.081-182.472-407.528-407.528-407.528-225.094 0-407.52 182.447-407.52 407.528 0 225.068 182.426 407.528 407.52 407.528 88.181 0 169.597-28.302 236.287-75.914l198.872 198.872 96.069-96.057zM174.284 455.048c0-150.053 121.636-271.685 271.694-271.685 150.034 0 271.694 121.632 271.694 271.685 0 150.050-121.66 271.685-271.694 271.685-150.058 0.001-271.694-121.636-271.694-271.685z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
