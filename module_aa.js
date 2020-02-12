function show(){
    document.write('show');
}

// show()함수를 다른 js문서에서도 사용할 수 잇도록 추출
export default show;

export function show2(){
    document.write('show2');
}
//export default show2;   //error: default는 1개의 문서에 1개만 사용가능

export const num = 100;
export let age = "변수입니다.";