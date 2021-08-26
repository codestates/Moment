import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "위의 Google Cloud Platform에서 발급받은 Client ID";

export default function GoogleLoginBtn({  }){
    const onSuccess = async(response) => {
        const { googleId, profileObj : { email, name } } = response;
        
        // await onGoogleLogin (
        //   // 구글 로그인 성공시 서버에 전달할 데이터
        // );
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}