(function ($, Drupal) {


  $(document).ready(function () {
    var base = window.location.origin;
    var animationData = JSON.parse('{"v":"5.5.7","fr":25,"ip":0,"op":125,"w":325,"h":325,"nm":"Cercles 1","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"3 Blanc 1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[162.5,162.5,0],"ix":2},"a":{"a":0,"k":[140,142,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-76.187],[76.371,-0.375],[6.017,32.522]],"o":[[76.489,0],[0,76.187],[-88.791,-0.249],[0,0]],"v":[[-0.979,-138.162],[136.135,-0.412],[-0.979,138.162],[-136.135,32.232]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[139.635,141.662],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"3 Blanc 2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[191,162.5,0],"ix":2},"a":{"a":0,"k":[96,123.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.13,-65.973],[63.052,0],[15.829,10.399]],"o":[[64.605,-0.025],[-0.138,69.008],[-27.959,0],[0,0]],"v":[[-27.195,-119.967],[92.35,-0.893],[-27.193,119.992],[-92.48,100.559]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[95.98,123.467],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"1 Blanc Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[214,111,0],"ix":2},"a":{"a":0,"k":[55,55,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.019,-0.381],[0,0],[-1.922,-0.001],[0,0],[-0.06,0.003],[-0.079,1.852],[0,0.111],[0.02,0.409]],"o":[[0.02,0.382],[0,0],[0.096,1.942],[0,0],[0.06,0],[1.889,-0.093],[0,-0.115],[-0.02,-0.409],[0,0]],"v":[[-3.665,-2.435],[-3.606,-1.291],[-3.587,-0.932],[0.034,2.519],[0.037,2.519],[0.218,2.514],[3.665,-0.952],[3.664,-1.291],[3.604,-2.519]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[105.495,106.643],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[2.002,-0.098],[0.099,2.003],[0,0],[0,0]],"o":[[0,0],[0.099,2.002],[-2.003,0.1],[0,0],[0,0],[0,0]],"v":[[3.602,-2.519],[3.663,-1.291],[0.217,2.514],[-3.589,-0.932],[-3.607,-1.291],[-3.667,-2.435]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[105.497,106.643],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[-17.322,-17.421],[-0.673,-24.532],[-0.119,-2.288],[0,0],[0,0],[0,0],[0,0],[0,0],[18.698,18.579],[26.348,0.725],[2.456,0.121]],"o":[[0,0],[0,0],[0,0],[2.288,0.119],[24.532,0.674],[17.421,17.322],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.121,-2.456],[-0.726,-26.348],[-18.578,-18.697],[0,0],[0,0]],"v":[[-52.674,-50.855],[-52.674,-49.039],[-52.674,-47.222],[-52.674,-45.404],[-49.243,-45.227],[16.645,-16.645],[45.227,49.243],[45.404,52.674],[47.221,52.674],[49.04,52.674],[50.857,52.674],[52.674,52.674],[52.492,48.99],[21.785,-21.786],[-48.99,-52.492],[-52.674,-52.674]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[56.484,52.679],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.097,-1.884],[0.001,-0.046],[0,0],[-1.921,-0.1],[0,0],[-0.382,-0.02],[0,0],[0,0],[0.12,0.001]],"o":[[-0.003,0.045],[0,0],[0.027,1.895],[0,0],[0.381,0.02],[0,0],[0,0],[-0.115,0],[-1.846,0.083]],"v":[[-2.514,-0.226],[-2.519,-0.09],[-2.519,0.018],[0.924,3.588],[1.291,3.607],[2.435,3.665],[2.519,-3.603],[1.291,-3.663],[0.938,-3.665]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[2.519,3.669],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-0.104,2.002],[-2.002,-0.103],[0,0]],"o":[[0,0],[0,0],[-2.002,-0.104],[0.104,-2.002],[0,0],[0,0]],"v":[[2.435,3.667],[1.291,3.608],[0.923,3.589],[-2.514,-0.225],[1.291,-3.663],[2.519,-3.602]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[2.519,3.667],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}]},{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"3 Rouge Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[161,162,0],"ix":2},"a":{"a":0,"k":[160.5,160,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-86.226],[86.225,0.372],[-43,97]],"o":[[86.226,0],[0,86.226],[-116,-0.5],[0,0]],"v":[[15.938,-156.311],[172.063,-0.186],[15.938,155.939],[-129.062,-58.561]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.13300000359,0.13300000359,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[145.131,159.811],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"1 Blanc 3","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[164.5,161.5,0],"ix":2},"a":{"a":0,"k":[162.5,162.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[155,-73.5],[142,-53],[124.5,-23],[156,165.5],[158,-68.5]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[418.499,76.5],[409.999,77.5],[124.5,-23],[156,165.5],[432.499,77]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[370.5,329.499],[436,132.5],[124.5,-23],[156,165.5],[338.999,346]],"c":true}]},{"t":30,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[370.5,329.499],[436,132.5],[124.5,-23],[156,165.5],[18.499,357]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":325,"h":325,"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"1 Blanc 2","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[162,162,0],"ix":2},"a":{"a":0,"k":[162.5,162.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[155,-73.5],[142,-53],[124.5,-23],[156,165.5],[158,-68.5]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[435.551,111.342],[297.157,22.553],[124.5,-23],[156,165.5],[449.656,162.763]],"c":true}]},{"t":19,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[418.499,76.5],[409.999,77.5],[124.5,-23],[156,165.5],[359.498,346.5]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":325,"h":325,"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"1 Blanc 1","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[162.5,162.5,0],"ix":2},"a":{"a":0,"k":[162.5,162.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[155,-73.5],[142,-53],[124.5,-23],[156,165.5],[158,-68.5]],"c":true}]},{"t":11,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[418.499,76.5],[409.999,77.5],[124.5,-23],[156,165.5],[444.999,172.5]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":325,"h":325,"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"1 Rouge 1","refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[162.5,162.5,0],"ix":2},"a":{"a":0,"k":[162.5,162.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[155,-73.5],[142,-53],[124.5,-23],[156,165.5],[158,-68.5]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[418.499,76.5],[409.999,77.5],[124.5,-23],[156,165.5],[432.499,77]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[370.5,329.5],[440.5,76.5],[124.5,-23],[156,165.5],[338.999,346]],"c":true}]},{"t":34,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[370.5,329.5],[448,55],[124.5,-23],[156,165.5],[-72.001,330]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":325,"h":325,"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"1 Gris 1","sr":1,"ks":{"o":{"a":0,"k":44,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[162.5,162.5,0],"ix":2},"a":{"a":0,"k":[160,160,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-86.226],[86.226,0],[0,86.226],[-86.226,0]],"o":[[0,86.226],[-86.226,0],[0,-86.226],[86.226,0]],"v":[[156.125,0],[0,156.125],[-156.125,0],[0,-156.125]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.046999998654,0.046999998654,0.046999998654,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[159.625,159.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[54.082,0],[0,-54.08],[-54.082,0],[0,54.081]],"o":[[-54.082,0],[0,54.081],[54.082,0],[0,-54.08]],"v":[[0,-98.078],[-98.079,-0.001],[0,98.079],[98.079,-0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[58.09,0],[0,58.09],[-58.09,0],[0,-58.088]],"o":[[-58.09,0],[0,-58.088],[58.09,0],[0,58.09]],"v":[[0,105.348],[-105.349,-0.001],[0,-105.349],[105.349,-0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.046999998654,0.046999998654,0.046999998654,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[159.983,159.017],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":6,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[64.104,0],[0,-64.101],[-64.104,0],[0,64.103]],"o":[[-64.104,0],[0,64.103],[64.104,0],[0,-64.101]],"v":[[0,-116.253],[-116.254,-0.001],[0,116.254],[116.254,-0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[68.111,0],[0,68.111],[-68.111,0],[0,-68.11]],"o":[[-68.111,0],[0,-68.11],[68.111,0],[0,68.111]],"v":[[0,123.524],[-123.524,-0.001],[0,-123.524],[123.524,-0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.046999998654,0.046999998654,0.046999998654,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[159.983,159.017],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":6,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[74.125,0],[0,-74.125],[-74.125,0],[0,74.124]],"o":[[-74.125,0],[0,74.124],[74.125,0],[0,-74.125]],"v":[[0,-134.428],[-134.43,0],[0,134.429],[134.43,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[78.132,0],[0,78.134],[-78.132,0],[0,-78.133]],"o":[[-78.132,0],[0,-78.133],[78.132,0],[0,78.134]],"v":[[0,141.699],[-141.7,0],[0,-141.699],[141.7,0]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.046999998654,0.046999998654,0.046999998654,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[159.983,159.017],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":6,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0}],"markers":[]}');
    if (document.getElementById('lottie') != null) {
      var params_slider = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
        //path: base +'/themes/synacktiv/anims/homeslider/data.json'
      };
      var anim_partner = lottie.loadAnimation(params_slider);
    }

    $('.field--name-field-quelques-chiffres-join .field--item:first-child').each(function () {
      $(this).find('.paragraph--type--quelques-chiffres .field--name-field-number .animation-handle').text($(this).find('.paragraph--type--quelques-chiffres .field--name-field-number .animation-handle').data('count'));
    });

    $('<span>M</span>').insertAfter($('.field--name-field-quelques-chiffres .field--item:last-child').find('.field--name-field-number .count'));
    $('<span>M</span>').insertAfter($('.field--name-field-quelques-chiffres-join .field--item:last-child').find('.field--name-field-number .count'));

    /*----------------------------Counter Animation-------------------------------*/
    if ($('.number-section').length > 0) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $('.number-section').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: 0
            }).animate({
              countNum: countTo
            }, {
              duration: 5000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }
    /*-------------------------------------------------------------------*/


    $('.path-frontpage .region-content > .views-element-container.form-group').remove();

    var mySwiper = new Swiper('.employes-slider', {
      slidesPerView: 1,
     allowSlidePrev: false,
    allowSlideNext: false,
    allowTouchMove: false,
preventClicks: false,
preventClicksPropagation: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      }
    });

    var client = new Swiper('.nos-clients', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 4,
        },
      }
    });

    var home_slider = new Swiper('.home-slider', {
      effect: 'flip',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    var lab_slider = new Swiper('.lab-page-header', {
      effect: 'slide',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });


    $('.field--name-field-tab-content .field--item').click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });

    if ($('body').hasClass('page-node-type-prestations')) {
      $('.content-type-nav .views-row:first').addClass('active');
    }

    if ($('body').hasClass('page-node-type-produits')) {
      $('.content-type-nav .views-row:nth-child(2)').addClass('active');
    }

    if ($('body').hasClass('path-offres')) {
      $('.content-type-nav .views-row:last').addClass('active');
    }

    $('.faq-icon').click(function () {
      $('body').toggleClass('faq-open');
    });

    $(document).on('click', function (event) {
      if (!$(event.target).closest('.main-page-content .sidebar-content').length) {
        $('body').removeClass('faq-open');
      }
    });

    $('.view-sub-menu-items ul li').each(function () {
      var $list_title = $(this).find('.views-field-title a').text();
      var $page_title = $('h1 span').text();
      if ($list_title == $page_title) {
        $(this).addClass('active');
      }
    });

    $('.anchor-menu-items ul.menu li').click(function (e) {
      const linkHref = $(this).find('a').attr('href')
      if(linkHref.includes("#")) {
        e.preventDefault();
        const $hash_code = '#' + $(this).find('a').attr('href').split('#')[1];
        $('html, body').animate({
          scrollTop: $($hash_code).offset().top
        }, 800);
      }
    });

  });
  //rgpd
  $("#edit-submit").attr("disabled", "disabled");
  $("#edit-field-re-contact-value").click(function () {
    if ($(this).is(':checked')) {
      $("#edit-submit").removeAttr("disabled");
    } else {
      $("#edit-submit").attr("disabled", "disabled");
    }
  });



  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };



  // Click category from page publication (publication preview)
  $(document).on("click", "div.field-tag div.field--item", function (e) {
    e.preventDefault();

    var name = $(this).text().trim().toLowerCase();
    var id = $('#edit-field-tags-target-id li').filter(function (index) {
      return $(this).text().trim().toLowerCase() === name;
    }).first().find('a').attr('id');
    var lang = document.documentElement.lang;

    // backoffice
    if (!window.location.pathname.split("/").pop().endsWith('.html')) {
      if (id === undefined) {
        var href = "publications?category=" + name;
      } else {
        var href = "publications?field_tags_target_id=" + id.replace("edit-field-tags-target-id-", "").toProperCase();
      }
    } else {
      // Production
      if (id === undefined) {
        var href = "publications.html?category=" + name;
      } else {
        var href = "publications?field_tags_target_id=" + id.replace("edit-field-tags-target-id-", "").toProperCase() + ".html";
      }
      href = encodeURIComponent(encodeURIComponent(href))
    }


    if (lang === "en") {
      href = "en/" + href;
    }
    window.location = "/" + href;
  });

  // when publications page load with a category in url parameters, redirect to the category page
  window.addEventListener('load', function () {
    (function () {
      var page = window.location.pathname.split("/").pop();
      if (page === "publications.html" || page === 'publications') {
        let searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('category')) {
          window.stop();
          let name = searchParams.get('category');
          var href = $('#edit-field-tags-target-id li').filter(function (index) {
            return $(this).text().trim().toLowerCase() === name;
          }).first().find('a').attr('href');

          href = href.replace('category=' + name, '');
          window.location = href;
        }
      }
    }());
  })

  // click on category from a publication
  $(document).on("click", "div.short-info span.category, .view-last-blog-article div.field-tag div.field--item", function (e) {
    e.preventDefault();
    var name = $(this).text().trim().toLowerCase();
    var lang = document.documentElement.lang;
    if (!window.location.pathname.split("/").pop().endsWith('.html')) {
      if (lang == "en") {
        window.location = "/en/publications?category=" + name;
      } else {
        window.location = "/publications?category=" + name;
      }
    } else {
      if (lang == "en") {
        window.location = "/en/publications.html?category=" + name;
      } else {
        window.location = "/publications.html?category=" + name;
      }
    }

  });


  // click on job category
  $(document).on("click", "#edit-field-job-type-target-id div.form-item", function (e) {
    e.preventDefault();
    // uncheck
    if ($(this).find('input').prop('checked')) {
      $('div.views-row').css("display", "block");
      $(this).find('input').removeAttr('checked', 'checked');
    } else {
      //check
      // reset filter
      $('div.views-row').css("display", "block");
      $('#edit-field-job-type-target-id div.form-item input').removeAttr('checked', 'checked');
      var name = $(this).find('label').text().trim().toLowerCase();


      $(this).find('input').attr('checked', 'checked');
      // if user clicked on 'Stage' we display div.offer-type
      if (name == "stage") {
        var target = $('div.views-row div.offer-type').filter(function (index) {
          return $(this).text().trim().toLowerCase() !== "stage";
        }).closest('div.views-row').css("display", "none");
      } else {
        // otherwise display span.category
        var target = $('div.views-row span.category').filter(function (index) {
          return $(this).text().trim().toLowerCase() !== name;
        }).closest('div.views-row').css("display", "none");
      }
    }

  });

  // click on category from the page ressource
  $(document).on("click", "div.view-ressources span.category", function (e) {
    e.preventDefault();
    var lang = document.documentElement.lang;
    var name = $(this).text().trim().toLowerCase();
    var id = $('#block-formulaireexposeressourcespage-1 li').filter(function (index) {
      return $(this).text().trim().toLowerCase() === name;
    }).first().find('a').attr('id');
    if (!window.location.pathname.split("/").pop().endsWith('.html')) {
      href = "ressources?field_resources_tags_target_id=" + id.replace("edit-field-resources-tags-target-id-", "").toProperCase();
    } else {
      href = "ressources?field_resources_tags_target_id=" + id.replace("edit-field-resources-tags-target-id-", "").toProperCase() + ".html";
      href = encodeURIComponent(encodeURIComponent(href));
    }

    if (lang === "en") {
      href = "en/" + href;
    }
    window.location = "/" + href;
  });

  // rewrite the search url lin for in english language
  window.addEventListener('load', function () {
    (function () {
      var lang = document.documentElement.lang;
      if (window.location.pathname.split("/").pop().endsWith('.html')) {
        if (lang === "en") {
          $("div.search-link").find("a").attr("href", "/en/search/node.html");
        }
      }
      $("#edit-field-job-type-target-id div.form-item").find('input').attr("autocomplete", "off");
      var elements = document.querySelectorAll( '.article.full img' );
      mediumZoom(elements)
     }());
  })

}(jQuery, Drupal));
