import React from "react";
import { userInfo } from "../../interface";
import {
    RemixHeaderProfileImage,
    RemixHeaderUserInfoContent,
    RemixHeaderUserInfoWrap,
    RemixtaHeaderContentWrap,
    RemixtaHeaderNameWrap,
    RemixtaHeaderWrap,
} from "../../styles";

const ContentHeaderComponent = (props: {userInfo: userInfo}) => {
    return (
        <RemixtaHeaderWrap>
            <RemixtaHeaderContentWrap>
                <RemixHeaderProfileImage src={props.userInfo.userimage} />
                <RemixtaHeaderNameWrap>
                    {props.userInfo.username}
                </RemixtaHeaderNameWrap>
            </RemixtaHeaderContentWrap>
            <RemixHeaderUserInfoWrap>
                <RemixHeaderUserInfoContent>
                    <div>게시글</div>
                    <div>{props.userInfo.post}</div>
                </RemixHeaderUserInfoContent>
                <RemixHeaderUserInfoContent>
                    <div>팔로워</div>
                    <div>{props.userInfo.fallower}</div>
                </RemixHeaderUserInfoContent>
                <RemixHeaderUserInfoContent>
                    <div>게시글</div>
                    <div>{props.userInfo.fallowing}</div>
                </RemixHeaderUserInfoContent>
            </RemixHeaderUserInfoWrap>
        </RemixtaHeaderWrap>
    );
};

export default ContentHeaderComponent;
