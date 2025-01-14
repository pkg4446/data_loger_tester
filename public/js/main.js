list_device();
////------------------------------------////
async function list_device() {
    const list = await (await fetchData("data/list",{})).json();
    
    let html_code = '<h2 class="device-title">리스트 - 데이터</h2><ul class="device-list">';
    for (let index = 0; index < list.length; index++) {
        html_code += `<li onclick="list_file('${list[index]}')">${list[index]}</li>`;
    }
    html_code += '</ul>';
    document.getElementById("view_frame").innerHTML=html_code;
}
////------------------------------------////
async function list_file(device) {
    const list = await (await fetchData("data/list",{"dvc":device})).json();
    
    let html_code = '<h2 class="device-title">리스트 - 로그</h2><ul class="device-list"><li onclick="list_device()">🔙 '+device+'</li>';
    for (let index = 0; index < list.length; index++) {
        html_code += `<li onclick="list_log('${device}','${list[index]}')">${list[index]}</li>`;
    }
    html_code += '</ul>';
    document.getElementById("view_frame").innerHTML=html_code;
}
////------------------------------------////
async function list_log(device,file) {
    const list = await (await fetchData("data/log",{"dvc":device,"file":file})).json();
    
    let html_code = `<h2 class="device-title">${device}</h2><ul class="device-list"><li onclick="list_file('${device}')">🔙 ${file} - ${list.length}개</li>`;
    for (let index = 0; index < list.length; index++) {
        html_code += `<li style="cursor:default;">${JSON.stringify(list[index])}</li>`;
    }
    html_code += '</ul>';
    document.getElementById("view_frame").innerHTML=html_code;
}