$(document).ready(function() {
    // 初期スコアを設定
    let yourscore = 0;
    let cpuscore = 0;

$('#btn1').on('click', function(){
    const cpunum = Math.ceil(Math.random() * 3);
    const yournum = 1
    const score = cpunum - yournum
    if(cpunum == 3){
        $('#cpute').html('パー');
    }else if(cpunum == 2){
        $('#cpute').html('チョキ');
    }else{
        $('#cpute').html('グー');
    };
    if(score == 2){
        $('#result').html('   あなたの負け');
        cpuscore += 5;
        $('#cpuscore').text(cpuscore);
    }else if(score == 1){
        $('#result').html('   あなたの勝ち');
    }else if(score == 0){
        $('#result').html('   あいこ');
    }else if(score == -1){
        $('#result').html('   あなたの負け');
        cpuscore += 5;
        $('#cpuscore').text(cpuscore);
    }else{
        $('#result').html('   あなたの勝ち');
    }
});

$('#btn2').on('click', function(){
    const cpunum = Math.ceil(Math.random() * 3);
    const yournum = 2
    const score = cpunum - yournum
    const point = 2
    if(cpunum == 3){
        $('#cpute').html('パー');
    }else if(cpunum == 2){
        $('#cpute').html('チョキ');
    }else{
        $('#cpute').html('グー');
    };
    if(score == 2){
        $('#result').html('   あなたの負け');        
    }else if(score == 1){
        $('#result').html('   あなたの勝ち');
        yourscore += 2;
        $('#yourscore').text(yourscore);
    }else if(score == 0){
        $('#result').html('   あいこ');
    }else if(score == -1){
        $('#result').html('   あなたの負け');
    }else{
        $('#result').html('   あなたの勝ち');
        yourscore += 2;
        $('#yourscore').text(yourscore);
    }

});

$('#btn3').on('click', function(){
    const cpunum = Math.ceil(Math.random() * 3);
    const yournum = 3
    const score = cpunum - yournum
    if(cpunum == 3){
        $('#cpute').html('パー');
    }else if(cpunum == 2){
        $('#cpute').html('チョキ');
    }else{
        $('#cpute').html('グー');
    };
    if(score == 2){
        $('#result').html('   あなたの負け');
        cpuscore += 2;
        $('#cpuscore').text(cpuscore);
    }else if(score == 1){
        $('#result').html('   あなたの勝ち');
        yourscore += 5;
        $('#yourscore').text(yourscore);
    }else if(score == 0){
        $('#result').html('   あいこ');
    }else if(score == -1){
        $('#result').html('   あなたの負け');
        cpuscore += 2;
        $('#cpuscore').text(cpuscore);
    }else{
        $('#result').html('   あなたの勝ち');
        yourscore += 5;
        $('#yourscore').text(yourscore);
    }
});

});