var index = 0;

function changeColors() {
    var colors = ["#FF69B4", "#87CEFA", "#3CB371", "#9400D3", "#FFFF66"];
    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;
}