import './scss/contentScript.scss';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.message);
    if (request.message === 'TabUpdated') {

        makeEditorButton();

    }
})

function getFileContent(resource) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", resource, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                resolve(xhr.responseText);
            }
        }
        xhr.send();
    })

}

function makeEditorButton() {

    const fullPath = document.location.href;
    const pathname = document.location.pathname;
    const file = fullPath.split("/").pop();
    const ext = file.split(".").pop();
    const githubusercontent = "https://raw.githubusercontent.com" + pathname.replace("/blob", "");

    // easylogic studio file 
    if (ext === 'els') {
        console.log(file);
        const parentNode = document.querySelector("#blob-path .final-path")?.parentNode;
        
        if (parentNode) {
            const editorIcon = document.createElement('span');
            editorIcon.className = "easylogic-studio-icon"
            editorIcon.textContent = "EasyLogic Studio";
            let editorInstance;

            parentNode.appendChild(editorIcon);

            const editorLayer = document.createElement("div");
            editorLayer.className = "editor-layer";

            const editorClose = document.createElement("div");
            editorClose.className = "editor-layer-close";
            editorClose.innerHTML = "&times;"

            editorLayer.appendChild(editorClose);

            const editorContainer = document.createElement("div");
            editorContainer.className = "editor-layer-container";        

            const editorTop = document.createElement("div");
            editorTop.className = "editor-layer-top";      
            editorTop.innerHTML = `<div class="title">EasyLogic Studio</div>`
            
            editorTop.appendChild(editorClose);
            

            editorLayer.appendChild(editorTop);            
            editorLayer.appendChild(editorContainer);

            document.body.appendChild(editorLayer);

            editorClose.addEventListener('click', () => {
                editorLayer.style.display = "none";

                if (editorInstance){
                    editorInstance.destroy();
                    // editorInstance = undefined;
                }
            })

            if (!editorInstance) {
                editorIcon.addEventListener('click', () => {
                    editorLayer.style.display = "block";

                    getFileContent(githubusercontent).then((text) => {
                        const json = JSON.parse(text || "{}");

                        console.log(json);


                        if (!editorInstance) {
                            // 에디터 생성 하기 
                            // 이벤트 정의 매번하지 않기 
                            editorInstance = window.editor.createDesignEditor({
                                container: editorContainer,
                                config: {
                                    "ruler.show": false,
                                    "show.left.panel": false,
                                    "show.right.panel": false
                                }
                            })

                        }

                        editorInstance.emit('load.json', json.projects || []);

                    })
    
    
                })
            }





        }

    }
}