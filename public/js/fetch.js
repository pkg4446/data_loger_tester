// fetch 함수 정의
async function fetchData(api,send_data) {
    try {
        const response = await fetch(window.location.protocol+"//"+window.location.host+"/"+api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(send_data)
        });
        return response; // JSON 대신 텍스트로 응답을 읽습니다.
    } catch (error) {
        console.error('Error:', error);
        return {error:ture}
    }
}