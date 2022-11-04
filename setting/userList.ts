const userList: userListType = {
    users: ["oss@2ld7nn.onmicrosoft.com", "ossd@2ld7nn.onmicrosoft.com"],
    nickname: {
        "oss@2ld7nn.onmicrosoft.com": '🤝 分享功能测试',
        "ossd@2ld7nn.onmicrosoft.com": '🌟 ☁OneSS † 开发测试用 †',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

