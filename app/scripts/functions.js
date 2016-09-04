/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

function activeMenu(id) {
    $("#menu li").removeClass("active");
    $("#" + id).addClass("active");
    return;
}


