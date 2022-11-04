const userList: userListType = {
    users: ["oss@2ld7nn.onmicrosoft.com"],
    nickname: {
        "oss@2ld7nn.onmicrosoft.com": '🤝 好事',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

