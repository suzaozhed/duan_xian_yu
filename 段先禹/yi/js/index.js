function ajax(){
    var xhr =new XMLHttpRequest();
    
    xhr.open('get','xhr.json',true);
    xhr.send(null);
    xhr.onreadystatechange=function(){
        if(this.readyState === 4){
            var json = xhr.responseText;
        
            json = JSON.parse(json);
            console.log(json)
             
        
            // return json;
        for(var i=0; i<json.length;i++){
        var tr = document.createElement('tr')
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        var inp = document.createElement('input');
            inp.type = "button";
            inp.value = '删除';

        var td11 = document.createTextNode(json[i].name)
        var td21 = document.createTextNode(json[i].money)

        //删除按钮
        // var td31 = document.createTextNode(inp)
                            
        tr.appendChild(td1)                  //将td放入tr中
        tr.appendChild(td2) 
        tr.appendChild(td3) 


        td1.appendChild(td11)           //内容放在td中
        td2.appendChild(td21)
        // td3.appendChild(td31)
        td3.appendChild(inp)
        

        $ddd.appendChild(tr)            //tr放在table中

        var $tr1 = document.querySelectorAll("input");
        var ccs;
    //     for(var i=0;i<$tr1.length;i++){
    //          ccs[i] = $tr1[i].parentNode.parentNode;
        
    //     $tr[i].onclick = function (){
    //         ccs[i] = null;
    //     }
    // }

        } 
        }
    }  
}



// $tab1
// parentNode;
        