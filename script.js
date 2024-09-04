function run() {   
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("javascript-code").value;
    let output = document.getElementById("output");

    let content = `
        <style>${csscode}</style>
        ${htmlcode}
        <script>${jscode}<\/script>
    `;

    output.contentDocument.body.innerHTML = content;
}
